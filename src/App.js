import './App.css';
import React, { useState, useRef, useEffect } from "react";
import SettingsMenu from './Components/SettingsMenu';
import NavMenu from './Components/NavMenu'
import useOnClickOutside from './Hooks/useOnClickOutside';
import Timer from './Components/Timer'
import ModeSelector from './Components/ModeSelector';

const App = () =>{

const [settingsOpen, toogleSettingsOpen] = useState(false);
const [workMinutes, setWorkMinutes] = useState(25); //We define the default state of the timer.
const [breakMinutes, setBreakMinutes] = useState(10); //We define the default state of the break time.
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

const handleSettingsOpener = ()  =>{
  toogleSettingsOpen(!settingsOpen);
}


const changeMode = (event) =>{
  setMode(event.target.value);
  setCurrentTime(modesData[event.target.value])
}

const settingProps = {
  settingsOpen:settingsOpen,
  workMinutes : workMinutes,
  setWorkMinutes : setWorkMinutes,
  breakMinutes : breakMinutes,
  setBreakMinutes: setBreakMinutes,
  handleSettingsOpener: handleSettingsOpener
}

useOnClickOutside(ref1, ref2, handleSettingsOpener);

useEffect(() =>{
  setCurrentTime(modesData[currentMode]) 
}, [breakMinutes, workMinutes])

return (
  <div className='body'>
      <NavMenu handleSettingsOpener= {handleSettingsOpener} ref={ref2}/>
      <SettingsMenu {...settingProps} ref={ref1}/>
      <ModeSelector changeMode={changeMode}/>
      <Timer min={currentTime} mode={currentMode}/>
  </div>
);

    
};


export default App;
