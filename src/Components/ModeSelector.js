import '../Styles/ModeSelectorStyles.css'

/**
 * This components is in charge of changing between break mode and focus mode
 * @param {*} focusIsChecked is a boolean to check whether the user selected the break icon
 * @param {*} breakIsChecked a boolean to check whether the user selected the focus icon
 * @param {*} setBreakChecked is a setter for the breakIsChecked
 * @param {*} setFocusChecked is a setter for the focusIsChecked
 * @param {*} setMode is a setter for the currentMode
 * 
 */
const ModeSelector = ({setBreakChecked, setFocusChecked, focusIsChecked, breakIsChecked, setMode}) =>{

    const handleModeAndCheck = (event) =>{
        setMode(event.target.value)
        if(event.target.value === "FOCUS"){
            setBreakChecked(false)
            setFocusChecked(true)
        }
        else{
            setBreakChecked(true)
            setFocusChecked(false)
        }
    }

    return(
        <div className="mode-wrapper">
            <label for="input-focus" id="label-focus">
            <input value="FOCUS" id="input-focus"type="radio" name="choice-radio" onChange={handleModeAndCheck} checked={focusIsChecked}/>
            <div className="focus box">
                <span>Focus</span>
            </div>
            </label>
            <label for="input-break" id="label-break">
            <input value="BREAK" id="input-break"type="radio" name="choice-radio" onChange={handleModeAndCheck} checked={breakIsChecked}/>
            <div className="break box">
                <span>Break</span>
            </div>
            </label>
            
        </div>
    )


}

export default ModeSelector;