import {useState} from 'react';
import '../Styles/SettingsMenuStyles.css'

const SettingsMenu =() =>{
    return(
        <div className='settings-menu'>
            
            <div>
                <h1 className='title-menu'>Settings</h1>
            </div>
            <hr/>
            <TimeMenu/>
        </div>
    )
}

//Menu containing the Time settings menu
const TimeMenu = () =>{
    const [workMinutes, setWorkMinutes] = useState(25); //We define the default state of the timer.
    const [breakMinutes, setBreakMinutes] = useState(10); //We define the default state of the break time.


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