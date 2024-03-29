import '../Styles/SettingsMainValues.css'

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
            <div className='sub-menu-section'>
                <h2>Trends:</h2>
                <span>
                    1 week
                </span>
            </div>
        </div>
    )
}

export default InsightsMenu;