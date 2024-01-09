import {forwardRef} from 'react';
import '../Styles/SettingsMenuStyles.css'
import useOnClickOutside from '../Hooks/useOnClickOutside';

const SettingsMenu = forwardRef(({settingsOpen, workMinutes, setWorkMinutes, breakMinutes, setBreakMinutes},ref) =>{

    var focusMin = workMinutes;
    var breakMin = breakMinutes;

    function handleWorkMinChange(event){
        focusMin=(event.target.value);
        event.preventDefault()
    }
        function handleBreakMinChange(event){
        breakMin=(event.target.value);
        event.preventDefault()
    }

    

    const handleExitSettings = () =>{
        setBreakMinutes(breakMin);
        setWorkMinutes(focusMin);
    }
    useOnClickOutside(ref,ref, handleExitSettings)
    if (!settingsOpen) {
        return null; // Render nothing if settingsOpen is false
    }
    
    return(
        <div className='settings-menu' id='settings-menu' ref={ref}>
            <div>
                <h1 className='title-menu'>Settings</h1>
            </div>
            <hr/>
            <TimeMenu workMinutes={workMinutes} breakMinutes={breakMinutes} handleBreakMinChange={handleBreakMinChange} handleWorkMinChange={handleWorkMinChange}/>
        </div>
        
    )
})

//Menu containing the Time settings menu
const TimeMenu = ({workMinutes, breakMinutes, handleBreakMinChange, handleWorkMinChange}) =>{
    
    return (
        <div className='sub-menu'>
            <div>
                <h1 className='title-submenu'>Time:</h1>
            </div>
            <div className='sub-menu-section'>
                <h2>Focus Time:</h2>
                <span>
                    <input type='number'defaultValue={workMinutes} onChange={handleWorkMinChange} placeholder='Focus mode duration' className='balloon' min='1'/>
                    <label for="Minutes">Minutes</label>
                </span>
            </div>
            <div className='sub-menu-section'>
                <h2>Break Time:</h2>
                <span>
                    <input type='number'defaultValue={breakMinutes} onChange={handleBreakMinChange} placeholder='Break mode duration' className='balloon' min='1'/>
                    <label for="Minutes">Minutes</label>
                </span>
            </div>
        </div>
    )
}


export default SettingsMenu;