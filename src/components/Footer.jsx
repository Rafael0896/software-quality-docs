import React, { useState } from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h4>Información del proyecto</h4>
                        <p><strong>Aprendiz:</strong> RAFAEL ÁLVAREZ</p>
                        <p><strong>Programa:</strong> Análisis y Desarrollo de Software</p>
                        <p><strong>Ficha:</strong> 2885501</p>
                    </div>
                    <div className="footer-section">
                        <h4>Formación</h4>
                        <p><strong>Instructor:</strong> JULIÁN ANDRÉS LOAIZA LÓPEZ</p>
                        <p><strong>Centro de Formación:</strong> SENA</p>
                    </div>
                    <div className="footer-section">
                        <h4>Detalles</h4>
                        <p><strong>Año:</strong> 2025</p>
                        <p><strong>Versión:</strong> 1.0</p>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>© 2025 - Instrumentos de Calidad del Software - SENA</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;