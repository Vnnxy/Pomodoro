import '../Styles/SoundControllerStyles.css'
/**
 * Controller for the sound.
 * @param {*} handleMute muter boolean
 * @returns 
 */
const SoundController = ({handleMute}) =>{

    return(
    <div className="sound-cont">
        <input className="sound-input" type="checkbox" id='soundToggle' onChange={handleMute}/>
        <label className="switch-sound" htmlFor="soundToggle">
        
            <div className="unmuted">
                <i class="fa-solid fa-volume-high fa-2x"></i>
            </div>
            <div className="muted">
             <i class="fa-solid fa-volume-off fa-2x"></i>
            </div>
        </label>
    </div>
    )
}

export default SoundController;