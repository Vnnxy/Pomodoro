import '../Styles/SettingsMainValues.css'

/**
 * Menu for the insights accesed by settings. This will give the number of pomodoros and the trends.
 */
const InsightsMenu = ({completedPomodoros}) =>{
    return(
        <div className='sub-cont'>
            <div>
                <h1 className='title-submenu'>Insights:</h1>
            </div>
            <div className='sub-menu-section'>
                <h2>Completed Pomodoros:</h2>
                <span>
                    {completedPomodoros}
                </span>
            </div>
        </div>
    )
}

export default InsightsMenu;