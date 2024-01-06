import './App.css';
import React, { useState, useRef, useEffect } from "react";
import SettingsMenu from './Components/SettingsMenu';
import NavMenu from './Components/NavMenu'

const App = () =>{


  const Ref = useRef();

  const [timer, setTimer] = useState("00:00");

  const [isPaused, changePaused] = useState(false);

  var timeStamp = 20000; //default time


  //Function that calculates de remaining time
  const getTimeDifference = (t) =>{
    const total = Date.parse(t)-Date.parse(new Date());
    const min= Math.floor((total / 1000 / 60) % 60);
    const seconds = Math.floor((total / 1000) % 60);
    return {
      total,
      min,
      seconds,
  };
  };

  //Sets the visible timer and updates it
  const startTimer = (t) =>{
    let {total, min, seconds} = getTimeDifference(t);
    if (total>=0){
      setTimer((min > 9? min: "0" + min) +
    ":" +
    (seconds > 9 ? seconds : "0" + seconds));
    };
  };

  //This starts the timer
  const clearTimer = (t) =>{
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
        startTimer(t);
    }, 1000);
    Ref.current = id;
  }

  const startPause = (t) =>{
    const id= setInterval(() =>{
      if(!isPaused){
        startTimer(t);
      }
    }, 1000);
    Ref.current=id;
  }

  const getDeadTime = (newTime) => {
    let deadline = new Date();

    deadline.setSeconds(deadline.getSeconds() + newTime);
    return deadline;
  }

  
  useEffect(() => {
    clearTimer(getDeadTime(1));
}, []);

const onClickReset = () => {
  clearTimer(getDeadTime(1));
};


const [minValue, setMinValue] = useState(0); // State to hold input value


//Sets the time 
const handleMinChange = (event) =>{
  setMinValue(parseInt(event.target.value))
}


const handleTimeChange = (event) =>{
  setMinValue(parseInt(event.target.value))
  console.log(minValue)
  const totalTime = (minValue*60);
  startPause(getDeadTime(totalTime))
}

const togglePause = () => {
  changePaused(!isPaused);
  console.log(isPaused)
}

const [settingsOpen, toogleSettingsOpen] = useState(false);

const [workMinutes, setWorkMinutes] = useState(25); //We define the default state of the timer.
const [breakMinutes, setBreakMinutes] = useState(10); //We define the default state of the break time.

const handleSettingsOpener = ()  =>{
  toogleSettingsOpen(!settingsOpen);
  console.log("tara")
}


const settingProps = {
  settingsOpen:settingsOpen,
  workMinutes : workMinutes,
  setWorkMinutes : setWorkMinutes,
  breakMinutes : breakMinutes,
  setBreakMinutes: setBreakMinutes,
  handleSettingsOpener: handleSettingsOpener
}




return (
  <div
      style={{ textAlign: "center", margin: "auto" }} className='body'>
        <NavMenu handleSettingsOpener= {handleSettingsOpener}/>
      <h2>{timer}</h2>
      
      <button onClick={onClickReset}>Reset</button>
      <div>
      <input type='number'value={minValue} onChange={handleMinChange} placeholder='Minutes'/>
      </div>
      <button onClick={handleTimeChange}>Set Time</button>
      <button onClick={togglePause}>Pause/Resume</button>
      <SettingsMenu {...settingProps}/>
      
  </div>
);

    
};


export default App;
