import { Link } from "react-router-dom";

import classes from "./mainNavigation.module.css";
// This "classes" is a JS Object and the CSS classes are properties of this Object.

function MainNavigation() {
    return <header className={classes.header}>
        <div className={classes.logo}>React Meetups</div>
        <nav>
            <ul>
                {/* cannot use <a> tag as it'll defeat the purpose of SPA */}
                <li>
                    <Link to="/">All Meetups</Link>
                </li>
                <li>
                    <Link to="/favourites">My Favourites</Link>
                </li>
                <li>
                    <Link to="/new-meetup">Add New Meetups</Link>
                </li>
            </ul>
        </nav>
    </header>
}

export default MainNavigation;