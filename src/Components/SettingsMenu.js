import {forwardRef} from 'react';
import '../Styles/SettingsMenuStyles.css'
import useOnClickOutside from '../Hooks/useOnClickOutside';
import TimeMenu from './TimeMenu';

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
            <div className='options'>
            
            <nav className='navbar'>
                <ul className='navbar-nav'>
                    <li className='nav-item'>
                        <a className='nav-ref'>
                            <i class="fa-solid fa-user"></i>
                            <span className='text-ref'>Profile</span>
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href="#time-men"className='nav-ref'>
                            <i class="fa-solid fa-gear"></i>
                            <span className='text-ref'>Timer Settings</span>
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-ref'>
                            <i class="fa-solid fa-sliders"></i>
                            <span className='text-ref'>Preferences</span>
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-ref'>
                            <i class="fa-solid fa-clipboard"></i>
                            <span className='text-ref'>Insights</span>
                        </a>
                    </li>
                    
                </ul>
            </nav>
    
            </div>
            <div className='settings-container'>
                <TimeMenu id="time-men" workMinutes={workMinutes} breakMinutes={breakMinutes} handleBreakMinChange={handleBreakMinChange} handleWorkMinChange={handleWorkMinChange}/>
            </div>
            
        </div>
        
    )
})



export default SettingsMenu;