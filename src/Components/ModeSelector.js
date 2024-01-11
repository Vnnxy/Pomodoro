import '../Styles/ModeSelectorStyles.css'

const ModeSelector = ({changeMode}) =>{
    return(
        <div className="mode-wrapper">
            <label for="input-focus" id="label-focus">
            <input value="FOCUS" id="input-focus"type="radio" name="choice-radio" onChange={changeMode} defaultChecked="checked"/>
            <div className="focus box">
                <span>Focus</span>
            </div>
            </label>
            <label for="input-break" id="label-break">
            <input value="BREAK" id="input-break"type="radio" name="choice-radio" onChange={changeMode}/>
            <div className="break box">
                <span>Break</span>
            </div>
            </label>
            
        </div>
    )


}

export default ModeSelector;