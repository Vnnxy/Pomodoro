import '../Styles/NavMenuStyles.css'

const NavMenu = ({handleSettingsOpener}) =>{
    return(
    <div className="nav-container">
        <nav>
            <a href="#settings-menu" onClick={handleSettingsOpener}>Settings</a>
            <a href="#">About</a>
        </nav>
    </div>
    )

   
}


export default NavMenu