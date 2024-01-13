import '../Styles/TimeMenuStyle.css'
//Menu containing the Time settings menu
const TimeMenu = ({workMinutes, breakMinutes, handleBreakMinChange, handleWorkMinChange}) =>{
    
    return (
        <div className='sub-cont'>
            <div>
                <h1 className='title-submenu'>Timer Settings:</h1>
            </div>
            <div className='sub-menu-section'>
                <h2>Focus:</h2>
                <span>
                    <input type='number'defaultValue={workMinutes} onChange={handleWorkMinChange}  min='1'/>
                </span>
            </div>
            <div className='sub-menu-section'>
                <h2>Break:</h2>
                <span>
                    <input type='number'defaultValue={breakMinutes} onChange={handleBreakMinChange}  min='1'/>
                 
                </span>
            </div>
        </div>
    )
}

export default TimeMenu