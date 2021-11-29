import React from "react";
import { Link } from "react-router-dom";
import './Menu.scss'

export default class Menu extends React.Component {
    render() {
        return (
            <div className="menu">
                <ul>
                    <h1>Magic</h1>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/cards">Cards</Link>
                    </li>
                    <li>
                        <Link to="/sets">Sets</Link>
                    </li>
                    <li>
                        <Link to="/types">Type List</Link>
                    </li>
                    <li>
                        <Link to="/formats">Game Formats</Link>
                    </li>
                </ul>
            </div>
        )
    }
}