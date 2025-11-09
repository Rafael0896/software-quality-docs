import React, { useState } from 'react';

// Header Component
const Header = () => {
    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header className="header">
            <div className="header-content">
                <div className="logo-section">
                    <div className="logo">
                        <img src="public/logo.png"/>
                    </div>
                    <h1>Instrumentos de calidad del software</h1>
                </div>
                <nav className="nav">
                    <button onClick={() => scrollToSection('inicio')}>Inicio</button>
                    <button onClick={() => scrollToSection('fundamentos')}>Fundamentos</button>
                    <button onClick={() => scrollToSection('buenas-practicas')}>Buenas prácticas</button>
                    <button onClick={() => scrollToSection('instrumentos')}>Instrumentos</button>
                </nav>
            </div>
        </header>
    );
};
export default Header;