import {ReactComponent as Logo} from '../assets/img/logo.svg'
import {ReactComponent as MenuIcon} from '../assets/img/hamburger-icon.svg'
import {ReactComponent as CloseIcon} from '../assets/img/close-icon.svg'
import {NavLink} from "react-router-dom";
import {useEffect} from "react";

function Navbar() {

    useEffect(() => {
        const menuClose = window.matchMedia("(min-width: 450px)");
        const menuToggle = document.getElementById('menu-toggle');
        const menuItem = document.querySelectorAll('.nav-item');

        menuClose.addEventListener("change", () => {
            menuToggle.checked = false;
        });

        menuItem.forEach(e => e.addEventListener("click", () => {
            menuToggle.checked = false;
        }))

    }, []);

    return (
        <div>
            <input id="menu-toggle" type="checkbox" className="menu-toggle"></input>
            <div className="nav-container container">
                <div className="nav-wrapper">
                    <div className="nav-logo-menu">
                        <div className="logo-bg">
                            <Logo/>
                        </div>
                        <label htmlFor="menu-toggle">
                            <MenuIcon className="menu-icon"/>
                            <CloseIcon className="close-icon" />
                        </label>
                    </div>
                    <ul className="nav-content">
                        <li className="nav-item">
                            <NavLink className="hover-underline-animation" to='/'>
                                <span>00</span>home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="hover-underline-animation" to='/destination/moon'>
                                <span>01</span>
                                destination
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <a className="hover-underline-animation" href="#">
                                <span>02</span>
                                crew
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="hover-underline-animation" href="#">
                                <span>03</span>
                                technology
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;