

const ModeSelector = ({modesData, changeMode}) =>{

    return(
        <div className="mode-wrapper">
            {Object.keys(modesData).map(key=>
                <>
                <label for={`input-${key}`} id={`label-${key}`} >{key}</label>
                <input value={key}type="radio" name="choice-radio" id={`input-${key}`} onChange={changeMode}/>
                &nbsp; &nbsp;
                </>
            )
           
            }
            <div className='toggle'></div>
        </div>
    )


}

export default ModeSelector;