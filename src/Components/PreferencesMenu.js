import '../Styles/SettingsMainValues.css'

const PreferencesMenu = () =>{
    return(
        <div className='sub-cont'>
            <div>
                <h1 className='title-submenu'>Preferences:</h1>
            </div>
            <div className='sub-menu-section'>
                <h2>Theme:</h2>
                <span>
                    colors
                </span>
            </div>
            <div className='sub-menu-section'>
                <h2>Sounds:</h2>
                <span>
                   sound
                </span>
            </div>
        </div>
    )
}

export default PreferencesMenu;