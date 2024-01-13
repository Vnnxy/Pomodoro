import './App.css';
import React, { useState, useRef, useEffect } from "react";
import { Helmet } from 'react-helmet';
import SettingsMenu from './Components/SettingsMenu';
import NavMenu from './Components/NavMenu'
import useOnClickOutside from './Hooks/useOnClickOutside';
import Timer from './Components/Timer'

const App = () =>{

const storedFocusMin = JSON.parse(localStorage.getItem('focusTime'))
const storedBreakMin = JSON.parse(localStorage.getItem('breakTime'))

const [settingsOpen, toogleSettingsOpen] = useState(false);
const [workMinutes, setWorkMinutes] = useState(localStorage.getItem('focusTime') ? storedFocusMin : 25); //We define the default state of the timer.
const [breakMinutes, setBreakMinutes] = useState(localStorage.getItem('breakTime') ? storedBreakMin : 10); //We define the default state of the break time.
const[completedPomodoros, setPomodoros] = useState(0);
const ref1= useRef();
const ref2= useRef();
const BREAK='BREAK';
const FOCUS='FOCUS';

const modesData ={
  BREAK : breakMinutes,
  FOCUS : workMinutes
} 

const [currentMode, setMode] = useState(FOCUS); //default mode
const [currentTime, setCurrentTime] = useState(workMinutes);

const addPomodoros = () =>{
  setPomodoros(completedPomodoros+1)
}

const handleSettingsOpener = ()  =>{
  toogleSettingsOpen(!settingsOpen);
}

const settingProps = {
  settingsOpen:settingsOpen,
  workMinutes : workMinutes,
  setWorkMinutes : setWorkMinutes,
  breakMinutes : breakMinutes,
  setBreakMinutes: setBreakMinutes,
  handleSettingsOpener: handleSettingsOpener,
  completedPomodoros : completedPomodoros
}

useOnClickOutside(ref1, ref2, handleSettingsOpener);

useEffect(() =>{
  setCurrentTime(modesData[currentMode]) 
}, [breakMinutes, workMinutes])

useEffect(()=>{
  localStorage.setItem('focusTime',JSON.stringify(workMinutes))
  localStorage.setItem('breakTime', JSON.stringify(breakMinutes))
},[workMinutes, breakMinutes])



useEffect(()=>{
  setCurrentTime(modesData[currentMode])
},[currentMode])

return (
  <div className='body'>
      <Helmet><script src="https://kit.fontawesome.com/db4a58874e.js" crossorigin="anonymous"></script></Helmet>
      <NavMenu handleSettingsOpener= {handleSettingsOpener} ref={ref2}/>
      <SettingsMenu {...settingProps} ref={ref1}/>
      
      <Timer min={currentTime} mode={currentMode} setMode={setMode}/>
  </div>
);

    
};


export default App;
