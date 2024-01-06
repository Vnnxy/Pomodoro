import { forwardRef } from 'react'
import '../Styles/NavMenuStyles.css'

const NavMenu = forwardRef(({handleSettingsOpener}, ref) =>{
    return(
    <div className="nav-container" ref={ref}>
        <nav>
            <a href="#settings-menu" onClick={handleSettingsOpener}>Settings</a>
            <a href="#">About</a>
        </nav>
    </div>
    )

   
})


export default NavMenu