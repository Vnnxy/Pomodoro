import {useRef, useState } from "react";

import '../Styles/TimerStyles.css'

const Timer = ({min, mode}) =>{
    var minutes = min;

    const timeRef = useRef();
    timeRef.current= min;
    const[time, setTime] = useState(":00");
    const [hasStarted, setStart] = useState(false);
    const [isPaused, setPause] =useState(false);
    const PAUSE = 'Pause';
    const RESUME ='Resume';
    const START = 'Start';

    const [currentButtonState, setCurrentButtonState]= useState(START);

    const pauseRef = useRef();
    pauseRef.current= isPaused;

    function countdown (minutes){
        var seconds =60;
        var time;
        
        function tick(){
            var current_minutes = minutes-1;
            if(pauseRef.current=== false)
                seconds--;
            time= setTime(current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds));

                if( seconds > 0) {
                    setTimeout(tick, 1000);
            } else {
                if(minutes > 1){
                    countdown(minutes-1)             
                }
            }
        }   
        tick()
        }

    function handlePauseResume(){
        
        //This blocks the button so it can't restart the timer
        if(!hasStarted){
            countdown(min);
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