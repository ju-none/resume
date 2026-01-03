// UI from : https://codepen.io/onediv/pen/WNOdMWw

import "@styles/components/sidebar.scss";
import { Code, Grad, Tools, Work } from "../utils/icons";
import Profile from "../block/Profile";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
    const location = useLocation();
    return (
        <nav className="navbar">
            <ul className="navbar__menu">
                <li className="navbar__item">
                    <Link to={`/profile/none`} className="navbar__link" state={{ from: location }}>
                        <Profile /><span>Mon profile</span>
                    </Link>
                </li>
                <li className="navbar__item">
                    <a href="#" className="navbar__link"><Grad size={'50'}/><span>Études</span></a> 
                </li>
                <li className="navbar__item">
                    <a href="#" className="navbar__link"><Work size={'50'}/><span>Expérience</span></a>
                </li>
                <li className="navbar__item">
                    <a href="#" className="navbar__link"><Code size={'50'}/><span>Projets</span></a>
                </li>
                <li className="navbar__item">
                    <a href="#" className="navbar__link"><Tools size={'50'}/><span>Skills</span></a>
                </li>
            </ul>
        </nav>
    )
}