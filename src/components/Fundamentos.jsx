import React, { useState } from 'react';

const Fundamentos = () => {
    return (
        <section id="fundamentos" className="section">
            <div className="container">
                <h2 className="section-title">Fundamentos de la Calidad del Software</h2>
                <div className="fundamentos-content">
                    <p className="intro-text">
                        La <strong>calidad del software</strong> se refiere al grado en que un producto de software satisface
                        las necesidades explícitas e implícitas de los usuarios, cumpliendo con los requisitos funcionales
                        y no funcionales establecidos.
                    </p>

                    <div className="cards-grid">
                        <div className="card">
                            <h3>Funcionalidad</h3>
                            <p>Capacidad del software para proporcionar funciones que satisfagan las necesidades del usuario</p>
                        </div>
                        <div className="card">
                            <h3>Fiabilidad</h3>
                            <p>Capacidad de mantener un nivel de rendimiento específico bajo condiciones establecidas</p>
                        </div>
                        <div className="card">
                            <h3>Usabilidad</h3>
                            <p>Facilidad de uso y aprendizaje del software por parte de los usuarios finales</p>
                        </div>
                        <div className="card">
                            <h3>Eficiencia</h3>
                            <p>Uso óptimo de recursos en relación con el nivel de rendimiento proporcionado</p>
                        </div>
                        <div className="card">
                            <h3>Mantenibilidad</h3>
                            <p>Facilidad con la que el software puede ser modificado para corregir o mejorar</p>
                        </div>
                        <div className="card">
                            <h3>Portabilidad</h3>
                            <p>Capacidad del software para ser transferido de un ambiente a otro</p>
                        </div>
                    </div>

                    <div className="frameworks">
                        <h3>Marcos de trabajo reconocidos:</h3>
                        <div className="framework-tags">
                            <span className="tag">ISO 25010</span>
                            <span className="tag">CMMI</span>
                            <span className="tag">Scrum</span>
                            <span className="tag">ITIL</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Fundamentos;