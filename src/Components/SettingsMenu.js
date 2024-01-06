import {useRef, useState, useEffect} from 'react';
import '../Styles/SettingsMenuStyles.css'

const SettingsMenu =({settingsOpen, workMinutes, setWorkMinutes, breakMinutes, setBreakMinutes, handleSettingsOpener}) =>{

    const ref= useRef();

    useOnClickOutside(ref, handleSettingsOpener);

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
}

// Hook
function useOnClickOutside(ref, handler) {
    useEffect(
      () => {
        const listener = (event) => {
          // Do nothing if clicking ref's element or descendent elements
          if (!ref.current || ref.current.contains(event.target)) {
            return;
          }
          handler(event);
        };
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);
        return () => {
          document.removeEventListener("mousedown", listener);
          document.removeEventListener("touchstart", listener);
        };
      },
      // Add ref and handler to effect dependencies
      // It's worth noting that because passed in handler is a new ...
      // ... function on every render that will cause this effect ...
      // ... callback/cleanup to run every render. It's not a big deal ...
      // ... but to optimize you can wrap handler in useCallback before ...
      // ... passing it into this hook.
      [ref, handler]
    );
  }

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