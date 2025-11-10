# 🧩 Software Quality Docs

## 📖 Descripción del Proyecto
**Software Quality Docs** es una **landing page desarrollada en React** que centraliza la documentación y los instrumentos relacionados con los procesos de **calidad del software**.  
Su objetivo principal es ofrecer un entorno organizado y visualmente atractivo para consultar, diseñar y diligenciar documentos que garanticen la calidad del desarrollo de software.

El sitio web agrupa secciones clave como **fundamentos de calidad**, **buenas prácticas**, **control de cambios**, **formatos de pruebas**, **matriz de trazabilidad** y **listas de chequeo**, brindando soporte documental al ciclo de vida del software.

---

## ⚙️ Características Principales
- 📚 Sección de fundamentos de calidad del software.  
- 🧾 Instrumentos documentales como formatos, listas de chequeo y matrices de trazabilidad.  
- 🔄 Módulo para control de cambios.  
- ✅ Buenas prácticas en desarrollo y aseguramiento de la calidad.  
- 💡 Diseño moderno, limpio y responsivo.  
- 🧩 Estructura modular por componentes de React.  

---

## 🌐 Demo en Vercel
🔗 **Link del proyecto desplegado:** [aquí](https://software-quality-docs.vercel.app/)

---

## 🗂️ Estructura del Proyecto
```
software-quality-docs/
│
├── public/
│   ├── icons8-software-64.png
│   ├── logo.png
│   └── index.html
│
├── src/
│   ├── components/
│   │   ├── documentos/
│   │   │   ├── ControlCambios.jsx
│   │   │   ├── FormatoPruebas.jsx
│   │   │   ├── ListaChequeo.jsx
│   │   │   ├── MatrizTrazabilidad.jsx
│   │   │   └── Modal.jsx
|   |   |
|   │   ├── Fundamentos.jsx
|   |   ├── BuenasPracticas.jsx
│   │   ├── Header.jsx
│   │   ├── HeroSection.jsx
│   │   ├── Footer.jsx
│   │   └──Instrumentos.jsx
│   │
│   ├── App.jsx
│   ├── index.js
│   ├── main.jsx
│   ├── counter.js
│   └── style.css
│
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

---

## 💻 Tecnologías Utilizadas
- **React.js** → Framework principal para la interfaz de usuario.  
- **HTML5 / CSS3** → Estructura y estilos base.  
- **JavaScript (ES6+)** → Lógica de componentes e interacción.  
- **Vite** → Entorno de desarrollo rápido para React.  
- **Node.js & npm** → Gestión de dependencias y scripts.  

---

## 🚀 Instalación y Ejecución Local
Sigue estos pasos para ejecutar el proyecto en tu entorno local:

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/<tu-usuario>/software-quality-docs.git
   ```

2. **Accede al directorio del proyecto**
   ```bash
   cd software-quality-docs
   ```

3. **Instala las dependencias**
   ```bash
   npm install
   ```

4. **Ejecuta el servidor de desarrollo**
   ```bash
   npm run dev
   ```

5. **Abre en el navegador**
   ```
   http://localhost:5173
   ```

---

## 🧱 Componentes Principales
| Componente | Descripción |
|-------------|--------------|
| **Header.jsx** | Contiene el encabezado principal y el logo. |
| **HeroSection.jsx** | Muestra la introducción o mensaje principal de la landing page. |
| **Instrumentos.jsx** | Sección que agrupa los documentos de calidad. |
| **ListaChequeo.jsx** | Formato para evaluar el cumplimiento de criterios de calidad. |
| **MatrizTrazabilidad.jsx** | Controla la relación entre requerimientos y pruebas. |
| **BuenasPracticas.jsx** | Presenta prácticas recomendadas de desarrollo. |
| **ControlCambios.jsx** | Registra modificaciones y versiones de documentos. |
| **Footer.jsx** | Pie de página con información institucional. |

---

## 🧠 Propósito Académico
Este proyecto ha sido desarrollado como parte de una **actividad académica del programa de Análisis y Desarrollo de Software (SENA)**, con el fin de aplicar principios de **calidad del software**, documentación y buenas prácticas en desarrollo frontend.

---

## 👨‍💻 Autor
**Rafael Álvarez**  
📚 Estudiante de Tecnología en Análisis y Desarrollo de Software  
🔧 SENA – Servicio Nacional de Aprendizaje  
📅 Año: 2025  

---

## 📄 Licencia
Este proyecto se distribuye bajo la licencia **MIT**, lo que permite su uso, modificación y distribución con fines educativos o de desarrollo.
