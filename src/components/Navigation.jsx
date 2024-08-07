import React, { useState } from 'react';
// import MenuButton from './Menu';
import './styles/Navigation.module.css';


export default function Navigation() {
    const [location, setLocation] = useState('No Location Found');
    // const [theme, setTheme] = useState('light');

    // const light = () => {

    // }

    const handleSubmit = (e) => {
        setLocation(e.target.value);
        e.preventDefault();
    } 

    return (
        <nav onClick={handleSubmit}>
            <div className='menu'>
            {/* <MenuButton /> */}
            <h3>Menu</h3>
            </div>

            <h1>Weather App</h1>

            <div className='themeMenu'>
                <h3>Theme</h3>
            </div>
        </nav>
    )
}