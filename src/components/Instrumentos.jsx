import React, { useState } from 'react';

const Instrumentos = () => {
    const instrumentos = [
        {
            nombre: "Lista de Chequeo de Código",
            descripcion: "Instrumento para verificar estándares de codificación y buenas prácticas",
            items: ["Nomenclatura consistente", "Comentarios adecuados", "Sin código duplicado", "Manejo de excepciones"]
        },
        {
            nombre: "Formato de Pruebas Funcionales",
            descripcion: "Documento para registrar casos de prueba y resultados de ejecución",
            items: ["ID del caso de prueba", "Precondiciones", "Pasos a ejecutar", "Resultado esperado", "Estado"]
        },
        {
            nombre: "Ficha de Control de Cambios",
            descripcion: "Registro de modificaciones realizadas en el software",
            items: ["Fecha del cambio", "Solicitante", "Descripción", "Impacto", "Estado de aprobación"]
        },
        {
            nombre: "Matriz de Trazabilidad",
            descripcion: "Relaciona requisitos con casos de prueba y componentes",
            items: ["ID Requisito", "Descripción", "Prioridad", "Casos de prueba asociados", "Estado"]
        }
    ];

    return (
        <section id="instrumentos" className="section">
            <div className="container">
                <h2 className="section-title">Instrumentos de Documentación</h2>
                <p className="section-subtitle">
                    Herramientas esenciales para garantizar la calidad en cada fase del proyecto
                </p>
                <div className="instruments-grid">
                    {instrumentos.map((inst, index) => (
                        <div key={index} className="instrument-card">
                            <div className="instrument-header">
                                <div className="instrument-number">{index + 1}</div>
                                <h3>{inst.nombre}</h3>
                            </div>
                            <p className="instrument-desc">{inst.descripcion}</p>
                            <div className="instrument-items">
                                <strong>Elementos clave:</strong>
                                <ul>
                                    {inst.items.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                            <button className="download-btn">📥 Descargar plantilla</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Instrumentos;