

const ModeSelector = ({changeMode}) =>{
    return(
        <div className="mode-wrapper">
            <label for="input-focus" id="label-focus">Focus</label>
            <input value="FOCUS" id="input-focus"type="radio" name="choice-radio" onChange={changeMode}/>
            <label for="input-break" id="label-break">Break</label>
            <input value="BREAK" id="input-break"type="radio" name="choice-radio" onChange={changeMode}/>
            <div className='toggle'></div>
        </div>
    )


}

export default ModeSelector;