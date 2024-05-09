import './App.css';
import React, { useState, useRef, useEffect } from "react";
import { Helmet } from 'react-helmet';
import SettingsMenu from './Components/SettingsMenu';
import NavMenu from './Components/NavMenu'
import useOnClickOutside from './Hooks/useOnClickOutside';
import Timer from './Components/Timer'

const App = () =>{
/**
 * Required for getting the localStorage and maintaining the same timer even when exiting.
 */
const storedFocusMin = JSON.parse(localStorage.getItem('focusTime'))
const storedBreakMin = JSON.parse(localStorage.getItem('breakTime'))
const storedPomodorosCounter = JSON.parse(localStorage.getItem('pomoCounter'))

/**
 * Default settings
 */
const [settingsOpen, toogleSettingsOpen] = useState(false);
const [workMinutes, setWorkMinutes] = useState(localStorage.getItem('focusTime') ? storedFocusMin : 25); //We define the default state of the timer.
const [breakMinutes, setBreakMinutes] = useState(localStorage.getItem('breakTime') ? storedBreakMin : 10); //We define the default state of the break time.
const[completedPomodoros, setPomodoros] = useState(localStorage.getItem('pomoCounter') ? storedPomodorosCounter : 0);
const ref1= useRef();
const ref2= useRef();
const BREAK='BREAK';
const FOCUS='FOCUS';

//The modes we currently have
const modesData ={
  BREAK : breakMinutes,
  FOCUS : workMinutes
} 
//Default values
const [currentMode, setMode] = useState(FOCUS); //default mode
const [currentTime, setCurrentTime] = useState(workMinutes);

//This adds the completed pomodoros
const addPomodoros = () =>{
  setPomodoros(completedPomodoros+1)
}
// Handles the settings being open
const handleSettingsOpener = ()  =>{
  toogleSettingsOpen(!settingsOpen);
}
//Handles the mute button.
const handleMute = () =>{
  audioButton.muted= !audioButton.muted;
  audioTimeout.muted = !audioTimeout.muted;
}
//Audio files
let audioButton = new Audio('/sounds/button.wav');
let audioTimeout = new Audio('/sounds/bell2.mp3');

//Required props
const settingProps = {
  settingsOpen:settingsOpen,
  workMinutes : workMinutes,
  setWorkMinutes : setWorkMinutes,
  breakMinutes : breakMinutes,
  setBreakMinutes: setBreakMinutes,
  handleSettingsOpener: handleSettingsOpener,
  completedPomodoros : completedPomodoros,
  handleMute:handleMute
}
//Detects the click outside a box.
useOnClickOutside(ref1, ref2, handleSettingsOpener);
//Effect hook that handles the changes between mode and time.
useEffect(() =>{
  setCurrentTime(modesData[currentMode]) 
}, [breakMinutes, workMinutes])
//Effect hook that sets the stored time
useEffect(()=>{
  localStorage.setItem('focusTime',JSON.stringify(workMinutes))
  localStorage.setItem('breakTime', JSON.stringify(breakMinutes))
},[workMinutes, breakMinutes])
//effect hook that sets the stored pomodoros
useEffect(()=>{
  localStorage.setItem('pomoCounter',JSON.stringify(completedPomodoros))
},[completedPomodoros])
//effect hook that sets the current time.
useEffect(()=>{
  setCurrentTime(modesData[currentMode])
},[currentMode])

return (
  <div className='body'>
      <Helmet><script src="https://kit.fontawesome.com/db4a58874e.js" crossorigin="anonymous"></script></Helmet>
      <NavMenu handleSettingsOpener= {handleSettingsOpener} ref={ref2}/>
      <SettingsMenu {...settingProps} ref={ref1}/>
      
      <Timer min={currentTime} mode={currentMode} setMode={setMode} addPomodoros={addPomodoros} audioButton={audioButton} audioTimeout={audioTimeout}/>
  </div>
);

    
};


export default App;
