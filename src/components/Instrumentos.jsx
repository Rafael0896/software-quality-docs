import React, { useState } from 'react';
import Modal from './documentos/Modal';
import ListaChequeo from './documentos/ListaChequeo';
import FormatoPruebas from './documentos/FormatoPruebas';
import ControlCambios from './documentos/ControlCambios';
import MatrizTrazabilidad from './documentos/MatrizTrazabilidad';


const Instrumentos = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedDoc, setSelectedDoc] = useState(null);

    const instrumentos = [
        {
            nombre: "Lista de Chequeo de Código",
            descripcion: "Instrumento para verificar estándares de codificación y buenas prácticas",
            items: ["Nomenclatura consistente", "Comentarios adecuados", "Sin código duplicado", "Manejo de excepciones"],
            component: ListaChequeo
        },
        {
            nombre: "Formato de Pruebas Funcionales",
            descripcion: "Documento para registrar casos de prueba y resultados de ejecución",
            items: ["ID del caso de prueba", "Precondiciones", "Pasos a ejecutar", "Resultado esperado", "Estado"],
            component: FormatoPruebas
        },
        {
            nombre: "Ficha de Control de Cambios",
            descripcion: "Registro de modificaciones realizadas en el software",
            items: ["Fecha del cambio", "Solicitante", "Descripción", "Impacto", "Estado de aprobación"],
            component: ControlCambios
        },
        {
            nombre: "Matriz de Trazabilidad",
            descripcion: "Relaciona requisitos con casos de prueba y componentes",
            items: ["ID Requisito", "Descripción", "Prioridad", "Casos de prueba asociados", "Estado"],
            component: MatrizTrazabilidad
        }
    ];

    const openModal = (index) => {
        setSelectedDoc(index);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedDoc(null);
    };

    const SelectedComponent = selectedDoc !== null
        ? instrumentos[selectedDoc].component
        : null;

    return (
        <section id="instrumentos" className="section">
            <div className="container">
                <h2 className="section-title">Instrumentos de Documentación</h2>
                <p className="section-subtitle">
                    Herramientas esenciales para garantizar la calidad
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
                            <button
                                className="download-btn"
                                onClick={() => openModal(index)}
                            >
                                 Ver plantilla
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            <Modal isOpen={modalOpen} onClose={closeModal}>
                {SelectedComponent && <SelectedComponent />}
            </Modal>
        </section>
    );
};

export default Instrumentos;