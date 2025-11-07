import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from "./components/HeroSection.jsx";

// Componente principal de la aplicación
export default function App() {
    return (
        <div className="app">
            <Header/>
            <main>
                <section id="practices">
                    <HeroSection/>
                </section>
            </main>
        </div>
    );
}