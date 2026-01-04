// UI from : https://codepen.io/onediv/pen/WNOdMWw

import "@styles/components/sidebar.scss";
import { Code, Grad, Tools, Work } from "../utils/icons";
import Profile from "../block/Profile";
import { LanguageSwitch } from "../block/LanguageButton";

export default function Sidebar() {
    return (
        <nav className="navbar">
            <ul className="navbar__menu">
                <li className="navbar__item">
                    <a href="#profile" className="navbar__link" >
                        <Profile /><span>Mon profile</span>
                    </a>
                </li>
                <li className="navbar__item">
                    <a href="#skills" className="navbar__link"><Tools size={'50'}/><span>Skills</span></a>
                </li>
                <li className="navbar__item">
                    <a href="#projects" className="navbar__link"><Code size={'50'}/><span>Projets</span></a>
                </li>
                <li className="navbar__item">
                    <a href="#experience" className="navbar__link"><Work size={'50'}/><span>Expérience</span></a>
                </li>
                <li className="navbar__item">
                    <a href="#formation" className="navbar__link"><Grad size={'50'}/><span>Études</span></a> 
                </li>
                <li className="navbar__item"  style={{marginTop: 'auto', marginBottom: '45px'}}>
                    <a><LanguageSwitch /></a>
                </li>
            </ul>
        </nav>
    )
}