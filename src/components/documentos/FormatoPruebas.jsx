import React from 'react';

const FormatoPruebas = () => (
    <div className="documento">
        <div className="doc-header">
            <h2> Formato de Pruebas Funcionales</h2>
            <p className="doc-subtitle">Versión 1.0 | SENA - Análisis y Desarrollo de Software</p>
        </div>

        <div className="doc-info">
            <div className="info-row">
                <span><strong>Proyecto:</strong> _______________________</span>
                <span><strong>Sprint/Fase:</strong> _______________________</span>
            </div>
            <div className="info-row">
                <span><strong>Tester:</strong> _______________________</span>
                <span><strong>Fecha de ejecución:</strong> _______________________</span>
            </div>
            <div className="info-row">
                <span><strong>Ambiente:</strong> ☐ Desarrollo ☐ QA ☐ Producción</span>
                <span><strong>Navegador/Dispositivo:</strong> _______________________</span>
            </div>
        </div>

        <table className="doc-table">
            <thead>
            <tr>
                <th style={{width: '8%'}}>ID Caso</th>
                <th style={{width: '15%'}}>Funcionalidad</th>
                <th style={{width: '15%'}}>Precondiciones</th>
                <th style={{width: '20%'}}>Pasos a Ejecutar</th>
                <th style={{width: '15%'}}>Resultado Esperado</th>
                <th style={{width: '12%'}}>Resultado Obtenido</th>
                <th style={{width: '8%'}}>Estado</th>
                <th style={{width: '7%'}}>Prioridad</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>TC-001</td>
                <td>Inicio de sesión</td>
                <td>Usuario registrado en el sistema</td>
                <td>
                    1. Ingresar a la página<br/>
                    2. Escribir usuario<br/>
                    3. Escribir contraseña<br/>
                    4. Clic en "Iniciar sesión"
                </td>
                <td>Usuario accede al dashboard principal</td>
                <td></td>
                <td>☐ Pass<br/>☐ Fail</td>
                <td>☐ Alta<br/>☐ Media<br/>☐ Baja</td>
            </tr>
            <tr>
                <td>TC-002</td>
                <td>Registro de usuario</td>
                <td>Ninguna</td>
                <td>
                    1. Clic en "Registrarse"<br/>
                    2. Completar formulario<br/>
                    3. Aceptar términos<br/>
                    4. Clic en "Crear cuenta"
                </td>
                <td>Se crea cuenta y se envía email de confirmación</td>
                <td></td>
                <td>☐ Pass<br/>☐ Fail</td>
                <td>☐ Alta<br/>☐ Media<br/>☐ Baja</td>
            </tr>
            <tr>
                <td>TC-003</td>
                <td>Validación de campos</td>
                <td>Formulario visible</td>
                <td>
                    1. Dejar campos vacíos<br/>
                    2. Intentar enviar<br/>
                    3. Verificar mensajes
                </td>
                <td>Se muestran mensajes de error en campos requeridos</td>
                <td></td>
                <td>☐ Pass<br/>☐ Fail</td>
                <td>☐ Alta<br/>☐ Media<br/>☐ Baja</td>
            </tr>
            <tr>
                <td>TC-004</td>
                <td>Búsqueda de productos</td>
                <td>Usuario autenticado</td>
                <td>
                    1. Ir a búsqueda<br/>
                    2. Escribir término<br/>
                    3. Presionar Enter<br/>
                    4. Ver resultados
                </td>
                <td>Se muestran productos que coinciden con la búsqueda</td>
                <td></td>
                <td>☐ Pass<br/>☐ Fail</td>
                <td>☐ Alta<br/>☐ Media<br/>☐ Baja</td>
            </tr>
            <tr>
                <td>TC-005</td>
                <td>Carrito de compras</td>
                <td>Usuario con productos seleccionados</td>
                <td>
                    1. Agregar producto<br/>
                    2. Ver carrito<br/>
                    3. Modificar cantidad<br/>
                    4. Eliminar producto
                </td>
                <td>Carrito actualiza correctamente totales y cantidades</td>
                <td></td>
                <td>☐ Pass<br/>☐ Fail</td>
                <td>☐ Alta<br/>☐ Media<br/>☐ Baja</td>
            </tr>
            <tr>
                <td>TC-006</td>
                <td>Proceso de pago</td>
                <td>Carrito con productos</td>
                <td>
                    1. Ir a checkout<br/>
                    2. Ingresar datos<br/>
                    3. Seleccionar método<br/>
                    4. Confirmar pago
                </td>
                <td>Pago procesado exitosamente y orden creada</td>
                <td></td>
                <td>☐ Pass<br/>☐ Fail</td>
                <td>☐ Alta<br/>☐ Media<br/>☐ Baja</td>
            </tr>
            <tr>
                <td>TC-007</td>
                <td>Cierre de sesión</td>
                <td>Usuario autenticado</td>
                <td>
                    1. Clic en perfil<br/>
                    2. Seleccionar "Cerrar sesión"<br/>
                    3. Confirmar acción
                </td>
                <td>Sesión cerrada y redirigido a página principal</td>
                <td></td>
                <td>☐ Pass<br/>☐ Fail</td>
                <td>☐ Alta<br/>☐ Media<br/>☐ Baja</td>
            </tr>
            <tr>
                <td>TC-008</td>
                <td>Recuperar contraseña</td>
                <td>Usuario registrado</td>
                <td>
                    1. Clic "Olvidé contraseña"<br/>
                    2. Ingresar email<br/>
                    3. Verificar correo<br/>
                    4. Restablecer contraseña
                </td>
                <td>Email enviado y contraseña actualizada correctamente</td>
                <td></td>
                <td>☐ Pass<br/>☐ Fail</td>
                <td>☐ Alta<br/>☐ Media<br/>☐ Baja</td>
            </tr>
            </tbody>
        </table>

        <div className="doc-footer">
            <div className="defects-section">
                <h3>Defectos Encontrados</h3>
                <table className="defects-table">
                    <thead>
                    <tr>
                        <th>ID Defecto</th>
                        <th>Caso de Prueba</th>
                        <th>Descripción</th>
                        <th>Severidad</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>D-001</td>
                        <td></td>
                        <td></td>
                        <td>☐ Crítica ☐ Alta ☐ Media ☐ Baja</td>
                    </tr>
                    <tr>
                        <td>D-002</td>
                        <td></td>
                        <td></td>
                        <td>☐ Crítica ☐ Alta ☐ Media ☐ Baja</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div className="summary">
                <p><strong>Total casos ejecutados:</strong> _____</p>
                <p><strong>Casos exitosos (Pass):</strong> _____</p>
                <p><strong>Casos fallidos (Fail):</strong> _____</p>
                <p><strong>Porcentaje de éxito:</strong> _____%</p>
            </div>
            <div className="signature-section">
                <div className="signature-box">
                    <p><strong>Ejecutado por:</strong></p>
                    <p>_______________________</p>
                    <p>Firma y Fecha</p>
                </div>
                <div className="signature-box">
                    <p><strong>Revisado por:</strong></p>
                    <p>_______________________</p>
                    <p>Firma y Fecha</p>
                </div>
            </div>
        </div>
    </div>
);

export default FormatoPruebas;