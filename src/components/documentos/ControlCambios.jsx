import React from 'react';

const ControlCambios = () => (
    <div className="documento">
        <div className="doc-header">
            <h2>📝 Ficha de Control de Cambios</h2>
            <p className="doc-subtitle">Versión 1.0 | SENA - Análisis y Desarrollo de Software</p>
        </div>

        <div className="doc-info">
            <div className="info-row">
                <span><strong>Proyecto:</strong> _______________________</span>
                <span><strong>Versión del Sistema:</strong> _______________________</span>
            </div>
        </div>

        <table className="doc-table">
            <thead>
            <tr>
                <th style={{width: '8%'}}>ID Cambio</th>
                <th style={{width: '10%'}}>Fecha Solicitud</th>
                <th style={{width: '12%'}}>Solicitante</th>
                <th style={{width: '10%'}}>Tipo</th>
                <th style={{width: '20%'}}>Descripción del Cambio</th>
                <th style={{width: '15%'}}>Justificación</th>
                <th style={{width: '10%'}}>Impacto</th>
                <th style={{width: '10%'}}>Estado</th>
                <th style={{width: '10%'}}>Fecha Implementación</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>CC-001</td>
                <td>15/01/2025</td>
                <td>Juan Pérez</td>
                <td>
                    ☐ Correctivo<br/>
                    ☑ Mejora<br/>
                    ☐ Nuevo
                </td>
                <td>Agregar validación de formato de email en registro</td>
                <td>Mejorar calidad de datos y reducir errores</td>
                <td>
                    ☐ Alto<br/>
                    ☑ Medio<br/>
                    ☐ Bajo
                </td>
                <td>
                    ☐ Solicitado<br/>
                    ☐ Aprobado<br/>
                    ☑ Implementado<br/>
                    ☐ Rechazado
                </td>
                <td>20/01/2025</td>
            </tr>
            <tr>
                <td>CC-002</td>
                <td>18/01/2025</td>
                <td>María García</td>
                <td>
                    ☑ Correctivo<br/>
                    ☐ Mejora<br/>
                    ☐ Nuevo
                </td>
                <td>Corregir error en cálculo de descuentos</td>
                <td>Bug crítico que afecta transacciones</td>
                <td>
                    ☑ Alto<br/>
                    ☐ Medio<br/>
                    ☐ Bajo
                </td>
                <td>
                    ☐ Solicitado<br/>
                    ☑ Aprobado<br/>
                    ☐ Implementado<br/>
                    ☐ Rechazado
                </td>
                <td></td>
            </tr>
            <tr>
                <td>CC-003</td>
                <td>22/01/2025</td>
                <td>Carlos López</td>
                <td>
                    ☐ Correctivo<br/>
                    ☐ Mejora<br/>
                    ☑ Nuevo
                </td>
                <td>Implementar sistema de notificaciones push</td>
                <td>Requerimiento del cliente para mejorar comunicación</td>
                <td>
                    ☑ Alto<br/>
                    ☐ Medio<br/>
                    ☐ Bajo
                </td>
                <td>
                    ☑ Solicitado<br/>
                    ☐ Aprobado<br/>
                    ☐ Implementado<br/>
                    ☐ Rechazado
                </td>
                <td></td>
            </tr>
            <tr>
                <td>CC-004</td>
                <td>25/01/2025</td>
                <td>Ana Martínez</td>
                <td>
                    ☐ Correctivo<br/>
                    ☑ Mejora<br/>
                    ☐ Nuevo
                </td>
                <td>Optimizar tiempo de carga de reportes</td>
                <td>Mejorar experiencia de usuario</td>
                <td>
                    ☐ Alto<br/>
                    ☑ Medio<br/>
                    ☐ Bajo
                </td>
                <td>
                    ☐ Solicitado<br/>
                    ☐ Aprobado<br/>
                    ☑ Implementado<br/>
                    ☐ Rechazado
                </td>
                <td>28/01/2025</td>
            </tr>
            <tr>
                <td>CC-005</td>
                <td></td>
                <td></td>
                <td>
                    ☐ Correctivo<br/>
                    ☐ Mejora<br/>
                    ☐ Nuevo
                </td>
                <td></td>
                <td></td>
                <td>
                    ☐ Alto<br/>
                    ☐ Medio<br/>
                    ☐ Bajo
                </td>
                <td>
                    ☐ Solicitado<br/>
                    ☐ Aprobado<br/>
                    ☐ Implementado<br/>
                    ☐ Rechazado
                </td>
                <td></td>
            </tr>
            <tr>
                <td>CC-006</td>
                <td></td>
                <td></td>
                <td>
                    ☐ Correctivo<br/>
                    ☐ Mejora<br/>
                    ☐ Nuevo
                </td>
                <td></td>
                <td></td>
                <td>
                    ☐ Alto<br/>
                    ☐ Medio<br/>
                    ☐ Bajo
                </td>
                <td>
                    ☐ Solicitado<br/>
                    ☐ Aprobado<br/>
                    ☐ Implementado<br/>
                    ☐ Rechazado
                </td>
                <td></td>
            </tr>
            </tbody>
        </table>

        <div className="doc-footer">
            <div className="analysis-section">
                <h3>Análisis de Impacto</h3>
                <table className="analysis-table">
                    <thead>
                    <tr>
                        <th>Área Afectada</th>
                        <th>Descripción del Impacto</th>
                        <th>Recursos Necesarios</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>☐ Base de Datos<br/>☐ Frontend<br/>☐ Backend<br/>☐ API<br/>☐ Documentación</td>
                        <td></td>
                        <td></td>
                    </tr>
                    </tbody>
                </table>
            </div>

            <div className="approval-section">
                <h3>Aprobaciones</h3>
                <div className="approval-grid">
                    <div className="approval-box">
                        <p><strong>Líder Técnico:</strong></p>
                        <p>Nombre: _______________________</p>
                        <p>Firma: _______________________</p>
                        <p>Fecha: _______________________</p>
                    </div>
                    <div className="approval-box">
                        <p><strong>Product Owner:</strong></p>
                        <p>Nombre: _______________________</p>
                        <p>Firma: _______________________</p>
                        <p>Fecha: _______________________</p>
                    </div>
                    <div className="approval-box">
                        <p><strong>QA Manager:</strong></p>
                        <p>Nombre: _______________________</p>
                        <p>Firma: _______________________</p>
                        <p>Fecha: _______________________</p>
                    </div>
                </div>
            </div>

            <div className="summary">
                <p><strong>Total cambios solicitados:</strong> _____</p>
                <p><strong>Cambios aprobados:</strong> _____</p>
                <p><strong>Cambios implementados:</strong> _____</p>
                <p><strong>Cambios rechazados:</strong> _____</p>
            </div>
        </div>
    </div>
);

export default ControlCambios;