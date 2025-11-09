import React from 'react';

const MatrizTrazabilidad = () => (
    <div className="documento">
        <div className="doc-header">
            <h2>Matriz de Trazabilidad de Requisitos</h2>
            <p className="doc-subtitle">Versión 1.0 | SENA - Análisis y Desarrollo de Software</p>
        </div>

        <div className="doc-info">
            <div className="info-row">
                <span><strong>Proyecto:</strong> _______________________</span>
                <span><strong>Versión:</strong> _______________________</span>
            </div>
            <div className="info-row">
                <span><strong>Responsable:</strong> _______________________</span>
                <span><strong>Fecha:</strong> _______________________</span>
            </div>
        </div>

        <table className="doc-table matriz-table">
            <thead>
            <tr>
                <th style={{width: '8%'}}>ID Req</th>
                <th style={{width: '18%'}}>Descripción del Requisito</th>
                <th style={{width: '8%'}}>Prioridad</th>
                <th style={{width: '10%'}}>Categoría</th>
                <th style={{width: '15%'}}>Casos de Prueba</th>
                <th style={{width: '15%'}}>Componentes Relacionados</th>
                <th style={{width: '10%'}}>Estado Desarrollo</th>
                <th style={{width: '8%'}}>Estado Pruebas</th>
                <th style={{width: '8%'}}>% Completado</th>
            </tr>
            </thead>
            <tbody>
            <tr className="category-row">
                <td colSpan="9"><strong>REQUISITOS FUNCIONALES</strong></td>
            </tr>
            <tr>
                <td>RF-001</td>
                <td>El sistema debe permitir el registro de nuevos usuarios</td>
                <td>
                    ☑ Alta<br/>
                    ☐ Media<br/>
                    ☐ Baja
                </td>
                <td>Autenticación</td>
                <td>TC-002, TC-003</td>
                <td>UserController, AuthService, UserRepository</td>
                <td>
                    ☐ Pendiente<br/>
                    ☐ En Proceso<br/>
                    ☑ Completado
                </td>
                <td>
                    ☐ No Probado<br/>
                    ☐ En Pruebas<br/>
                    ☑ Aprobado
                </td>
                <td>100%</td>
            </tr>
            <tr>
                <td>RF-002</td>
                <td>El sistema debe validar credenciales de inicio de sesión</td>
                <td>
                    ☑ Alta<br/>
                    ☐ Media<br/>
                    ☐ Baja
                </td>
                <td>Autenticación</td>
                <td>TC-001, TC-003</td>
                <td>LoginController, AuthService, SessionManager</td>
                <td>
                    ☐ Pendiente<br/>
                    ☐ En Proceso<br/>
                    ☑ Completado
                </td>
                <td>
                    ☐ No Probado<br/>
                    ☐ En Pruebas<br/>
                    ☑ Aprobado
                </td>
                <td>100%</td>
            </tr>
            <tr>
                <td>RF-003</td>
                <td>El sistema debe permitir búsqueda de productos por categoría</td>
                <td>
                    ☐ Alta<br/>
                    ☑ Media<br/>
                    ☐ Baja
                </td>
                <td>Búsqueda</td>
                <td>TC-004</td>
                <td>SearchController, ProductService, SearchEngine</td>
                <td>
                    ☐ Pendiente<br/>
                    ☑ En Proceso<br/>
                    ☐ Completado
                </td>
                <td>
                    ☐ No Probado<br/>
                    ☑ En Pruebas<br/>
                    ☐ Aprobado
                </td>
                <td>75%</td>
            </tr>
            <tr>
                <td>RF-004</td>
                <td>El sistema debe gestionar el carrito de compras</td>
                <td>
                    ☑ Alta<br/>
                    ☐ Media<br/>
                    ☐ Baja
                </td>
                <td>E-commerce</td>
                <td>TC-005</td>
                <td>CartController, CartService, ProductRepository</td>
                <td>
                    ☐ Pendiente<br/>
                    ☐ En Proceso<br/>
                    ☑ Completado
                </td>
                <td>
                    ☐ No Probado<br/>
                    ☑ En Pruebas<br/>
                    ☐ Aprobado
                </td>
                <td>90%</td>
            </tr>
            <tr>
                <td>RF-005</td>
                <td>El sistema debe procesar pagos de forma segura</td>
                <td>
                    ☑ Alta<br/>
                    ☐ Media<br/>
                    ☐ Baja
                </td>
                <td>Pagos</td>
                <td>TC-006</td>
                <td>PaymentController, PaymentGateway, OrderService</td>
                <td>
                    ☐ Pendiente<br/>
                    ☑ En Proceso<br/>
                    ☐ Completado
                </td>
                <td>
                    ☑ No Probado<br/>
                    ☐ En Pruebas<br/>
                    ☐ Aprobado
                </td>
                <td>60%</td>
            </tr>
            <tr>
                <td>RF-006</td>
                <td>El sistema debe permitir recuperación de contraseña</td>
                <td>
                    ☐ Alta<br/>
                    ☑ Media<br/>
                    ☐ Baja
                </td>
                <td>Autenticación</td>
                <td>TC-008</td>
                <td>PasswordController, EmailService, TokenService</td>
                <td>
                    ☐ Pendiente<br/>
                    ☐ En Proceso<br/>
                    ☑ Completado
                </td>
                <td>
                    ☐ No Probado<br/>
                    ☐ En Pruebas<br/>
                    ☑ Aprobado
                </td>
                <td>100%</td>
            </tr>

            <tr className="category-row">
                <td colSpan="9"><strong>REQUISITOS NO FUNCIONALES</strong></td>
            </tr>
            <tr>
                <td>RNF-001</td>
                <td>El sistema debe responder en menos de 2 segundos</td>
                <td>
                    ☑ Alta<br/>
                    ☐ Media<br/>
                    ☐ Baja
                </td>
                <td>Rendimiento</td>
                <td>TC-P01</td>
                <td>Todos los servicios backend</td>
                <td>
                    ☐ Pendiente<br/>
                    ☑ En Proceso<br/>
                    ☐ Completado
                </td>
                <td>
                    ☐ No Probado<br/>
                    ☑ En Pruebas<br/>
                    ☐ Aprobado
                </td>
                <td>70%</td>
            </tr>
            <tr>
                <td>RNF-002</td>
                <td>El sistema debe estar disponible 99.5% del tiempo</td>
                <td>
                    ☑ Alta<br/>
                    ☐ Media<br/>
                    ☐ Baja
                </td>
                <td>Disponibilidad</td>
                <td>TC-A01</td>
                <td>Infraestructura, Servidores, Base de Datos</td>
                <td>
                    ☐ Pendiente<br/>
                    ☑ En Proceso<br/>
                    ☐ Completado
                </td>
                <td>
                    ☑ No Probado<br/>
                    ☐ En Pruebas<br/>
                    ☐ Aprobado
                </td>
                <td>50%</td>
            </tr>
            <tr>
                <td>RNF-003</td>
                <td>El sistema debe cumplir con estándares de seguridad OWASP</td>
                <td>
                    ☑ Alta<br/>
                    ☐ Media<br/>
                    ☐ Baja
                </td>
                <td>Seguridad</td>
                <td>TC-S01, TC-S02</td>
                <td>AuthService, ValidationService, SecurityConfig</td>
                <td>
                    ☐ Pendiente<br/>
                    ☐ En Proceso<br/>
                    ☑ Completado
                </td>
                <td>
                    ☐ No Probado<br/>
                    ☐ En Pruebas<br/>
                    ☑ Aprobado
                </td>
                <td>100%</td>
            </tr>
            <tr>
                <td>RNF-004</td>
                <td>El sistema debe ser responsive y adaptarse a dispositivos móviles</td>
                <td>
                    ☐ Alta<br/>
                    ☑ Media<br/>
                    ☐ Baja
                </td>
                <td>Usabilidad</td>
                <td>TC-U01</td>
                <td>Frontend Components, CSS Framework</td>
                <td>
                    ☐ Pendiente<br/>
                    ☐ En Proceso<br/>
                    ☑ Completado
                </td>
                <td>
                    ☐ No Probado<br/>
                    ☐ En Pruebas<br/>
                    ☑ Aprobado
                </td>
                <td>100%</td>
            </tr>
            <tr>
                <td>RNF-005</td>
                <td>El sistema debe soportar 1000 usuarios concurrentes</td>
                <td>
                    ☑ Alta<br/>
                    ☐ Media<br/>
                    ☐ Baja
                </td>
                <td>Escalabilidad</td>
                <td>TC-E01</td>
                <td>Load Balancer, Cache Service, Database Pool</td>
                <td>
                    ☑ Pendiente<br/>
                    ☐ En Proceso<br/>
                    ☐ Completado
                </td>
                <td>
                    ☑ No Probado<br/>
                    ☐ En Pruebas<br/>
                    ☐ Aprobado
                </td>
                <td>20%</td>
            </tr>
            </tbody>
        </table>

        <div className="doc-footer">
            <div className="metrics-section">
                <h3>Métricas del Proyecto</h3>
                <div className="metrics-grid">
                    <div className="metric-box">
                        <p className="metric-label">Total de Requisitos</p>
                        <p className="metric-value">11</p>
                    </div>
                    <div className="metric-box">
                        <p className="metric-label">Requisitos Completados</p>
                        <p className="metric-value">5 (45%)</p>
                    </div>
                    <div className="metric-box">
                        <p className="metric-label">En Proceso</p>
                        <p className="metric-value">5 (45%)</p>
                    </div>
                    <div className="metric-box">
                        <p className="metric-label">Pendientes</p>
                        <p className="metric-value">1 (10%)</p>
                    </div>
                </div>
                <div className="metrics-grid">
                    <div className="metric-box">
                        <p className="metric-label">Pruebas Aprobadas</p>
                        <p className="metric-value">5 (45%)</p>
                    </div>
                    <div className="metric-box">
                        <p className="metric-label">En Pruebas</p>
                        <p className="metric-value">3 (27%)</p>
                    </div>
                    <div className="metric-box">
                        <p className="metric-label">No Probados</p>
                        <p className="metric-value">3 (27%)</p>
                    </div>
                    <div className="metric-box">
                        <p className="metric-label">Cobertura Total</p>
                        <p className="metric-value">78%</p>
                    </div>
                </div>
            </div>

            <div className="coverage-section">
                <h3>Análisis de Cobertura</h3>
                <table className="coverage-table">
                    <thead>
                    <tr>
                        <th>Categoría</th>
                        <th>Requisitos</th>
                        <th>Casos de Prueba</th>
                        <th>Cobertura</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Autenticación</td>
                        <td>3</td>
                        <td>4</td>
                        <td>100%</td>
                    </tr>
                    <tr>
                        <td>E-commerce</td>
                        <td>2</td>
                        <td>2</td>
                        <td>85%</td>
                    </tr>
                    <tr>
                        <td>Seguridad</td>
                        <td>1</td>
                        <td>2</td>
                        <td>100%</td>
                    </tr>
                    <tr>
                        <td>Rendimiento</td>
                        <td>2</td>
                        <td>2</td>
                        <td>60%</td>
                    </tr>
                    </tbody>
                </table>
            </div>

            <div className="signature-section">
                <div className="signature-box">
                    <p><strong>Elaborado por:</strong></p>
                    <p>_______________________</p>
                    <p>Analista de Calidad</p>
                    <p>Fecha: _______________________</p>
                </div>
                <div className="signature-box">
                    <p><strong>Revisado por:</strong></p>
                    <p>_______________________</p>
                    <p>Líder de Proyecto</p>
                    <p>Fecha: _______________________</p>
                </div>
                <div className="signature-box">
                    <p><strong>Aprobado por:</strong></p>
                    <p>_______________________</p>
                    <p>Gerente de Desarrollo</p>
                    <p>Fecha: _______________________</p>
                </div>
            </div>
        </div>
    </div>
);

export default MatrizTrazabilidad;