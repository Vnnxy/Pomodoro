import '../Styles/SettingsMainValues.css'
import SoundController from './SoundController';

/**
 * Component for the preferences in the settings menu.
 * @param {*} handleMute muter for the sounds 
 */
const PreferencesMenu = ({handleMute}) =>{
    return(
        <div className='sub-cont'>
            <div>
                <h1 className='title-submenu'>Preferences:</h1>
            </div>
            <div className='sub-menu-section'>
                <h2>Sounds:</h2>
                
                    <SoundController handleMute={handleMute}/>
                
            </div>
        </div>
    )
}

export default PreferencesMenu;