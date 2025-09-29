# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

* [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh.
* [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled.
Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

---

# 📌 Actividad de Clase: To-Do List Optimizada

El objetivo es construir una **To-Do List** con funcionalidades que requieran el uso de los **hooks** vistos en clase para mejorar el rendimiento y la experiencia de usuario.

---

## ✅ Requisitos de la Aplicación

### 🔹 Estructura Base

* Un componente padre llamado `App.js`.
* Un componente para la lista de tareas: `TaskList.js`.
* Un componente individual para cada tarea: `TaskItem.js`.
* Un formulario para agregar nuevas tareas: `TaskForm.js`.

### 🔹 Funcionalidades de la Lista

* Agregar nuevas tareas.
* Marcar tareas como completadas.
* Eliminar tareas.

---

## ⚡ Implementación de los Hooks (El Desafío)

### 🔹 `useMemo`

* **Reto:** La lista debe tener un **filtro de alta prioridad** y mostrar un **conteo de tareas pendientes**.
  Estos cálculos pueden ser costosos si la lista es muy larga.
* **Aplicación:** Usar `useMemo` para memorizar el resultado del filtrado y el conteo, recalculándolos **solo cuando cambie la lista de tareas** (`toDos`).

---

### 🔹 `useCallback`

* **Reto:** `TaskItem.js` es un componente “tonto” que solo recibe props.
  Queremos que solo se re-renderice si sus props cambian.
* **Aplicación:**

  * Envolver en el padre las funciones `handleComplete` y `handleDelete` con `useCallback`.
  * Esto mantiene la misma referencia entre renders.
  * Combinado con `React.memo` en `TaskItem`, previene renders innecesarios.

---

### 🔹 `useRef`

* **Reto:** Al agregar una nueva tarea, el campo `<input>` debe enfocarse automáticamente.
* **Aplicación:**

  * Usar `useRef` para obtener una referencia al `<input>`.
  * Dentro de un `useEffect`, llamar a `.focus()` después de agregar la tarea.

---

### 🔹 `useContext`

* **Reto:** La aplicación necesita un **modo de visualización** (compacto/detallado), activado desde un interruptor en el encabezado.
  Pasar la prop `displayMode` manualmente a cada componente sería ineficiente.
* **Aplicación:**

  * Crear un `DisplayModeContext` y un `Provider` que envuelva la app.
  * `TaskItem` (y otros) consumirán el valor con `useContext` para ajustar el estilo.

---
