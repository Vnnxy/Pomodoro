import { forwardRef } from 'react'
import '../Styles/NavMenuStyles.css'

/**
 * Component for the Navigation Menu on the top of the page.
 */
const NavMenu = forwardRef(({handleSettingsOpener}, ref) =>{
    return(
    <div className="nav-container" ref={ref}>
        <div className='logo'>
            <i class="fa-solid fa-seedling fa-3x"></i>
        </div>
        <nav>
            <a href="#settings-menu" onClick={handleSettingsOpener}><i class="fa-solid fa-bars"></i></a>
        </nav>
    </div>
    )

   
})


export default NavMenu