import {forwardRef, useState} from 'react';
import '../Styles/SettingsMenuStyles.css'
import useOnClickOutside from '../Hooks/useOnClickOutside';
import TimeMenu from './TimeMenu';
import PreferencesMenu from './PreferencesMenu';
import InsightsMenu from './InsightsMenu';

/**
 * Component for the settings menu, it receives all of the states that the sub-components require.
 */
const SettingsMenu = forwardRef(({settingsOpen, workMinutes, setWorkMinutes, breakMinutes, setBreakMinutes, completedPomodoros, handleMute},ref) =>{
    const [currentSetting, setSetting] = useState("Profile");
    var focusMin = workMinutes;
    var breakMin = breakMinutes;

    //Function that changes the focusMin
    function handleWorkMinChange(event){
        focusMin=(event.target.value);
        event.preventDefault()
    }
    //Function that changes the breakMin
        function handleBreakMinChange(event){
        breakMin=(event.target.value);
        event.preventDefault()
    }

    //Function that sets the current selected option.
    function handleOption (e){
        setSetting(e.target.value);
    }

    //Function that handles when the user exits the settings menu, this sets the timer options.
    const handleExitSettings = () =>{
        setBreakMinutes(breakMin);
        setWorkMinutes(focusMin);
    }
   //Detects whether the user clicked outside of the settings option, un rendering the settings.
    useOnClickOutside(ref,ref, handleExitSettings)
    if (!settingsOpen) {
        return null; // Render nothing if settingsOpen is false
    }

    

    //Changes the sub menus based on the user clicks.
    function renderSwitch(value){
        switch (value){
            //case "Profile": return <ProfileMenu/>
            case "Timer": return <TimeMenu id="time-men" workMinutes={workMinutes} breakMinutes={breakMinutes} handleBreakMinChange={handleBreakMinChange} handleWorkMinChange={handleWorkMinChange}/>
            case "Preferences": return <PreferencesMenu handleMute={handleMute}/>
            case "Insights": return <InsightsMenu completedPomodoros={completedPomodoros}/>
            default: return <TimeMenu id="time-men" workMinutes={workMinutes} breakMinutes={breakMinutes} handleBreakMinChange={handleBreakMinChange} handleWorkMinChange={handleWorkMinChange}/>
        }
    }
    
    return(
        <div className='settings-menu' id='settings-menu' ref={ref}>
            <div className='options'>
            
            <nav className='navbar'>
                <ul className='navbar-nav'>
                    <li className='nav-item'>
                    <label className='nav-ref'>
                            <input value="Timer" type='radio' name='menu-radio'onChange={handleOption} />
                            <div className='settingsName-menu'>
                                <i class="fa-solid fa-gear"></i>
                                <span className='text-ref'>Timer Settings</span>
                            </div>
                        </label>
                    </li>
                    <li className='nav-item'>
                    <label className='nav-ref'>
                            <input value="Insights" type='radio' name='menu-radio'onChange={handleOption} />
                            <div className='settingsName-menu'>
                                <i class="fa-solid fa-clipboard"></i>
                                <span className='text-ref'>Insights</span>
                            </div>
                        </label>
                    </li>
                    
                </ul>
            </nav>
    
            </div>
            <div className='settings-container'>
                {renderSwitch(currentSetting)}
            </div>
            
        </div>
        
    )
})



export default SettingsMenu;