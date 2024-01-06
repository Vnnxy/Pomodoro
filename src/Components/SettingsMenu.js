import {useRef, useState, useEffect, forwardRef} from 'react';
import '../Styles/SettingsMenuStyles.css'
import useOnClickOutside from '../Hooks/useOnClickOutside';

const SettingsMenu = forwardRef(({settingsOpen, workMinutes, setWorkMinutes, breakMinutes, setBreakMinutes, handleSettingsOpener},ref) =>{
    if (!settingsOpen) {
        return null; // Render nothing if settingsOpen is false
    }
    return(
        <div className='settings-menu' id='settings-menu' ref={ref}>
            <div>
                <h1 className='title-menu'>Settings</h1>
            </div>
            <hr/>
            <TimeMenu workMinutes={workMinutes} setWorkMinutes={setWorkMinutes} breakMinutes={breakMinutes} setBreakMinutes={setBreakMinutes}/>
        </div>
        
    )
})

//Menu containing the Time settings menu
const TimeMenu = ({workMinutes, setWorkMinutes, breakMinutes, setBreakMinutes}) =>{
    
    function handleWorkMinChange(event){
    setWorkMinutes(event.target.value);
    event.preventDefault()
}
    function handleBreakMinChange(event){
    setBreakMinutes(event.target.value);
    event.preventDefault()
}

    return (
        <div className='sub-menu'>
            <div>
                <h1 className='title-submenu'>Time:</h1>
            </div>
            <div className='sub-menu-section'>
                <h2>Focus Time:</h2>
                <span>
                    <input type='number'value={workMinutes} onChange={handleWorkMinChange} placeholder='Focus mode duration' className='balloon' min='1'/>
                    <label for="Minutes">Minutes</label>
                </span>
            </div>
            <div className='sub-menu-section'>
                <h2>Break Time:</h2>
                <span>
                    <input type='number'value={breakMinutes} onChange={handleBreakMinChange} placeholder='Break mode duration' className='balloon' min='1'/>
                    <label for="Minutes">Minutes</label>
                </span>
            </div>
        </div>
    )
}


export default SettingsMenu;