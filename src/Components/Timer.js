import {useRef, useState, useEffect } from "react";
import ModeSelector from "./ModeSelector";

import '../Styles/TimerStyles.css'

const Timer = ({min, mode,setMode}) =>{
    //The minutes that will change.
    var minutes = min;
    //The time that is displayed in the Timer
    const[time, setTime] = useState(minutes+":00");
    //State for start flag
    const [hasStarted, setStart] = useState(false);
    //State for pause flag
    const [isPaused, setPause] =useState(false);
    //Button messages
    const PAUSE = 'Pause';
    const RESUME ='Resume';
    const START = 'Start';
    //State for the current button message
    const [currentButtonState, setCurrentButtonState]= useState(START);
    //References so we don't lose them on each render
    const pauseRef = useRef();
    const timerRef = useRef();
    pauseRef.current= isPaused;
    //Variable for the seconds.
    var seconds =60;

    /**
     * Reset method that clears the timeout, and sets the default states.
     */
    const reset =() =>{
        setTime(min+":"+ (seconds < 10 ? "0" : seconds ===60? "00" : seconds));
        clearTimeout(timerRef.current)
        setStart(false);
        setCurrentButtonState(START);
        setPause(false);
    }

    /**
     * Resets just the timer maintaining the current button. This is used when the uaer changes mode and it is still paused.
     */
    const resetTime = () =>{
        seconds=60;
        setTime(min+":"+ (seconds < 10 ? "0" : seconds ===60? "00" : seconds));
        setStart(false);
        setPause(false);
        setCurrentButtonState(RESUME);
    }
    
    /** 
     * Effect hook that is called whenever a mode is changed. 
    */
    useEffect(()=>{
        if(hasStarted)
            countdown(min, seconds)
        return () => {
            clearTimeout(timerRef.current)
        };
        
    },[mode])

    /**
     * Effect hook called whenever the min is changed.
     * This Starts a new countdown with the new parameter while also cleaning the previous one.
     */
    useEffect(()=>{
        setTime(min+":"+ (seconds < 10 ? "0" : seconds ===60? "00" : seconds))
        if(hasStarted && isPaused){
            resetTime();
        }
        else if(hasStarted){
            countdown(min, seconds)
        }
        return () => {
            clearTimeout(timerRef.current)
            };
    }, [min])

    /**
     * Our Timer function
     * @param {Number} minutes 
     * @param {Number} sec
     * 
     * This will create a countdown using setTimeout.  
     */
    function countdown (minutes, sec){                  
        function tick(){
            //console.log("Pause: "+isPaused +"\n ButtonState: "+ currentButtonState + "\n Started: " + hasStarted)
            var current_minutes = minutes-1;
            if(pauseRef.current=== false)
                seconds= sec--;
            
            setTime(current_minutes.toString() + ":" + (sec < 10 ? "0" : "") + String(sec));

            if( sec > 0) {
                    timerRef.current=setTimeout(tick, 1000);
            } else {
                if(minutes > 1){
                    countdown(minutes-1, sec)             
                }
                else{
                    //setFinish(true);
                    if(mode==="FOCUS"){
                        setMode("BREAK")
                        setBreakChecked(true);
                        setFocusChecked(false);
                    }
                    else{
                        setMode("FOCUS")
                        setBreakChecked(false);
                        setFocusChecked(true);
                    }
                    countdown(min, 60)
                }
            }
        }
        tick()
        }
    const [focusIsChecked, setFocusChecked] = useState(true);
    const [breakIsChecked, setBreakChecked] = useState(false);

    /**
     * Button handler for pausing, starting and resuming. 
     */
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
                <ModeSelector setFocusChecked={setFocusChecked} setBreakChecked={setBreakChecked} focusIsChecked={focusIsChecked} breakIsChecked={breakIsChecked} setMode={setMode}/>
            </div>
            <div className="timer-container">
                <div className="timestamp-cont">{time}</div>
                <button className="start-pause-button" onClick={handlePauseResume}>{currentButtonState}</button> 
                
            </div>
        </div>
    )
}






export default Timer;