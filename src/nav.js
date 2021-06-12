import React from 'react';
import ReactDOM from 'react-dom';
import {NavLink} from 'react-router-dom';
import './nav.css';



class Nav extends React.Component{
    render(){
        return(
            <div className="mynav">
                <div className = "main-category">
                    <h1>Settings</h1>
                <ul>
                    <li className="nav-items">
                        <NavLink to="/page_one" className="nav-link">General</NavLink>
                    </li>

                    <li className="nav-items">
                        <NavLink to="/login" className="nav-link">Maintenance</NavLink>
                    </li>
                    
                    <li className="nav-items">
                        <NavLink to="/login" className="nav-link">Backups</NavLink>
                    </li>
                </ul>
                </div>
                
            </div>
        )
    }
};
export default Nav;