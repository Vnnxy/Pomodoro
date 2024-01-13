import {forwardRef, useState} from 'react';
import '../Styles/SettingsMenuStyles.css'
import useOnClickOutside from '../Hooks/useOnClickOutside';
import TimeMenu from './TimeMenu';
import ProfileMenu from './ProfileMenu';
import PreferencesMenu from './PreferencesMenu';
import InsightsMenu from './InsightsMenu';

const SettingsMenu = forwardRef(({settingsOpen, workMinutes, setWorkMinutes, breakMinutes, setBreakMinutes},ref) =>{
    const [currentSetting, setSetting] = useState("Profile");
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

    function handleOption (e){
        setSetting(e.target.value);
    }

    

    const handleExitSettings = () =>{
        setBreakMinutes(breakMin);
        setWorkMinutes(focusMin);
    }
    useOnClickOutside(ref,ref, handleExitSettings)
    if (!settingsOpen) {
        return null; // Render nothing if settingsOpen is false
    }

    


    function renderSwitch(value){
        switch (value){
            case "Profile": return <ProfileMenu/>
            case "Timer": return <TimeMenu id="time-men" workMinutes={workMinutes} breakMinutes={breakMinutes} handleBreakMinChange={handleBreakMinChange} handleWorkMinChange={handleWorkMinChange}/>
            case "Preferences": return <PreferencesMenu/>
            case "Insights": return <InsightsMenu/>
            default: return <ProfileMenu/>
        }
    }
    
    return(
        <div className='settings-menu' id='settings-menu' ref={ref}>
            <div className='options'>
            
            <nav className='navbar'>
                <ul className='navbar-nav'>
                    <li className='nav-item'>
                        <label className='nav-ref'>
                            <input value="Profile" type='radio' name='menu-radio' onChange={handleOption} defaultChecked/>
                            <div className='settingsName-menu'>
                                <i class="fa-solid fa-user"></i>
                                <span className='text-ref'>Profile</span>
                            </div>
                        </label>
                    </li>
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
                            <input value="Preferences" type='radio' name='menu-radio' onChange={handleOption}/>
                            <div className='settingsName-menu'>
                                <i class="fa-solid fa-sliders"></i>
                                <span className='text-ref'>Preferences</span>
                            </div>
                        </label>
                    </li>
                    <li className='nav-item'>
                    <label className='nav-ref'>
                            <input value="Insights" type='radio' name='menu-radio' onChange={handleOption} />
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