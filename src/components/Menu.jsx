import React, { useState } from 'react';
import './styles/MenuButton.module.css';

const MenuButton = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <button className={`menu-button ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
            {isOpen ? 'Close Menu' : 'Open Menu'}
        </button>
    );
};

export default MenuButton;
