import React, { useState } from 'react';

const BuenasPracticas = () => {
    const practicas = [
        {
            marco: "ISO 25010",
            practica: "Evaluación de atributos de calidad",
            descripcion: "Medir y documentar características como funcionalidad, rendimiento y seguridad"
        },
        {
            marco: "CMMI",
            practica: "Gestión de requisitos",
            descripcion: "Documentar, rastrear y validar todos los requisitos del proyecto"
        },
        {
            marco: "Scrum",
            practica: "Revisión de Sprint",
            descripcion: "Inspeccionar el incremento y adaptar el Product Backlog según sea necesario"
        },
        {
            marco: "ITIL",
            practica: "Gestión de cambios",
            descripcion: "Controlar el ciclo de vida de todos los cambios con mínima interrupción"
        },
        {
            marco: "ISO 25010",
            practica: "Pruebas de usabilidad",
            descripcion: "Evaluar la facilidad de uso mediante pruebas con usuarios reales"
        },
        {
            marco: "CMMI",
            practica: "Aseguramiento de calidad",
            descripcion: "Verificar que los procesos se sigan correctamente y sean efectivos"
        }
    ];

    return (
        <section id="buenas-practicas" className="section alt-bg">
            <div className="container">
                <h2 className="section-title">Buenas Prácticas de Calidad del Software</h2>
                <div className="table-container">
                    <table className="practices-table">
                        <thead>
                        <tr>
                            <th>Marco de referencia</th>
                            <th>Buena práctica</th>
                            <th>Descripción</th>
                        </tr>
                        </thead>
                        <tbody>
                        {practicas.map((p, index) => (
                            <tr key={index}>
                                <td><span className="marco-badge">{p.marco}</span></td>
                                <td><strong>{p.practica}</strong></td>
                                <td>{p.descripcion}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default BuenasPracticas;