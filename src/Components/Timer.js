import {useRef, useState, useEffect } from "react";

import '../Styles/TimerStyles.css'

const Timer = ({min, mode}) =>{
    var minutes = min;
    const[time, setTime] = useState(minutes+":00");
    const [hasStarted, setStart] = useState(false);
    const [isPaused, setPause] =useState(false);
    const PAUSE = 'Pause';
    const RESUME ='Resume';
    const START = 'Start';
    
    var timeoutId;

    const [currentButtonState, setCurrentButtonState]= useState(START);

    const pauseRef = useRef();
    pauseRef.current= isPaused;

    var seconds =60;

    useEffect(()=>{
        setTime(min+":"+ (seconds < 10 ? "0" : seconds ===60? "00" : ""))
        if(pauseRef.current===false && hasStarted){
            countdown(min, seconds)
        }
        return () => {
            clearTimeout(timeoutId)
            };
    }, [min])

    

    function countdown (minutes, sec){                  
        var reftime;
        
        function tick(){
            var current_minutes = minutes-1;
            if(pauseRef.current=== false)
                seconds= sec--;
            
            reftime= setTime(current_minutes.toString() + ":" + (sec < 10 ? "0" : "") + String(sec));

                if( sec > 0) {
                    timeoutId=setTimeout(tick, 1000);
            } else {
                if(minutes > 1){
                    countdown(minutes-1, sec)             
                }
            }
        }   
        tick()
        }

    function handlePauseResume(){
        
        //This blocks the button so it can't restart the timer
        if(!hasStarted){
            countdown(min, seconds);
            setStart(true);
            setCurrentButtonState(PAUSE);
        }
        //Handle if is pressed again, this sets pause to true/false.
        else{
            setPause(!isPaused);
            if(currentButtonState=== PAUSE)
                setCurrentButtonState(RESUME);
            else
                setCurrentButtonState(PAUSE);
        }
        
    }

    return(
        <div className="main-container">
            <div className="mode-cont">
                <h1>Mode {mode}</h1>
            </div>
            <div className="timer-container">
                <div className="timestamp-cont">{time}</div>
                <button className="start-pause-button" onClick={handlePauseResume}>{currentButtonState}</button> 
            </div>
        </div>
    )
}






export default Timer;