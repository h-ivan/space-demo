import {ReactComponent as Logo} from '../assets/img/logo.svg'
import {ReactComponent as MenuIcon} from '../assets/img/hamburger-icon.svg'
import {ReactComponent as CloseIcon} from '../assets/img/close-icon.svg'
import {NavLink} from "react-router-dom";
import {useEffect} from "react";

function Navbar() {

    useEffect(() => {
        const menuClose = window.matchMedia("(min-width: 550px)");
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
        <>
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
                            <NavLink className="hover-underline-animation" to="/technology/launch-vehicle">
                                <span>02</span>
                                technology
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="hover-underline-animation" to="/about">
                                <span>03</span>
                                about this demo
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Navbar;