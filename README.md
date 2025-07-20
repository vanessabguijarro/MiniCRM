# MiniCRM 📦

Este proyecto es un **Mini CRM de gestión de facturación**, desarrollado como muestra de mis conocimientos en **React + Vite**, **TypeScript**, **Node.js**, **Express** y **SQLite**. Incluye funcionalidades completas para gestionar productos, clientes e invoices desde una interfaz moderna y funcional.

---

## 🎨 Diseño UI

La idea planteada visualmente se puede consultar en Figma:

👉 [Ver diseño en Figma](https://www.figma.com/design/x3CsPnaHPnHuL2h2webLlC/Xuntando-pezas)

---

## 📁 Estructura del Proyecto

MiniCRM/
├── front/ # Aplicación React + Vite (cliente)
├── back/ # API REST en Express + SQLite (servidor)
└── README.md

## 🚀 Tecnologías utilizadas

- ⚛️ React + Vite + TypeScript
- 💅 CSS Modules / Estilos personalizados
- 🛠️ Node.js + Express
- 🗄️ SQLite + Knex.js
- 🔒 Autenticación básica (login simulado)
- 📦 CRUD completo para Products, Customers e Invoices

---

### ✅ Requisitos previos

Asegúrate de tener instalado lo siguiente:

- **[Node.js](https://nodejs.org/)** `v18` o superior  
- **npm** `v9` o superior  
- **ts-node** y **TypeScript**  
  ```bash
  npm install -g ts-node typescript



### 1. Clona el repositorio

```bash
git clone https://github.com/vanessabguijarro/MiniCRM.git
cd MiniCRM

### 2. Ejecuta el Back y el Front

En 2 terminales distintas:

cd back
npm install
npx ts-node src/index.ts

Inicia el servidor en: http://localhost:3001

---

cd front
npm install
npm run dev

Esto lanza la app en: http://localhost:5173
