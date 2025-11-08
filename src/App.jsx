import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from "./components/HeroSection.jsx";
import Fundamentos from "./components/Fundamentos.jsx";
import BuenasPracticas from "./components/BuenasPracticas.jsx"
import Instrumentos from "./components/Instrumentos.jsx";
import Footer from "./components/Footer.jsx";


// Componente principal de la aplicación
export default function App() {
    return (
        <div className="app">
            <Header/>
            <main>
                <section id="practices">
                    <HeroSection/>
                </section>
                <section id="practices">
                    <Fundamentos/>
                </section>
                <section id="practices">
                    <BuenasPracticas/>
                </section>
                <section id="practices">
                    <Instrumentos/>
                </section>
            </main>
            <Footer/>
        </div>
    );
}