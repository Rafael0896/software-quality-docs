import React, { useState } from 'react';

const HeroSection = () => {
    const scrollToFundamentos = () => {
        document.getElementById('fundamentos')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="inicio" className="hero">
            <div className="hero-content">
                <div className="hero-icon"></div>
                <h2 className="hero-title">
                    La calidad del software se logra cuando los procesos se documentan, evalúan y mejoran continuamente
                </h2>
                <p className="hero-subtitle">
                    Descubre cómo los instrumentos de calidad garantizan la excelencia en el desarrollo de software
                </p>
                <button className="hero-button" onClick={scrollToFundamentos}>
                    Explorar más ↓
                </button>
            </div>
        </section>
    );
};
export default HeroSection;