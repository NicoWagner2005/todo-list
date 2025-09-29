# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

* [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh.
* [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled.
Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

---

# Actividad de Clase: To-Do List Optimizada
El objetivo es construir una To-Do List con funcionalidades que requieran el uso de los hooks vistos en clase para mejorar el rendimiento y la experiencia de usuario.


## Requisitos de la Aplicación
### Estructura Base:
- Un componente padre llamado App.js.
- Un componente para la lista de tareas (TaskList.js).
- Un componente individual para cada tarea (TaskItem.js).
- Un formulario para agregar nuevas tareas (TaskForm.js).
### Funcionalidades de la Lista:
- Agregar nuevas tareas.
- Marcar tareas como completadas.
- Eliminar tareas.
- Implementación de los Hooks (El Desafío)

### Los estudiantes deben aplicar los siguientes hooks en las áreas específicas para optimizar la aplicación:

### useMemo:
El Reto: La lista de tareas debe tener un "filtro de alta prioridad" y, además, mostrar un "conteo de tareas pendientes". El cálculo de este conteo y la lista filtrada pueden ser costosos si la lista de tareas es muy larga.
Aplicación: Usar useMemo para memorizar el resultado del filtrado y el cálculo del conteo de tareas pendientes. De esta forma, solo se volverán a calcular cuando la lista de tareas (toDos) cambie, y no en cada re-renderización del componente.

### useCallback:
El Reto: El componente TaskItem.js (la tarea individual) es un componente "tonto" que solo recibe props. Queremos que este componente solo se re-renderice si sus propias props cambian. Las funciones handleComplete y handleDelete se pasan como props desde el componente padre.
Aplicación: Envolver las funciones handleComplete y handleDelete en el componente padre con useCallback. Esto asegura que estas funciones mantengan su referencia y no se vuelvan a crear en cada renderización del padre, lo que previene re-renderizaciones innecesarias de cada TaskItem (si se usa React.memo en TaskItem).

### useRef:
El Reto: Cuando el usuario agrega una nueva tarea, el campo de entrada del formulario (<input>) debe enfocarse automáticamente para que el usuario pueda escribir de inmediato la siguiente tarea.
Aplicación: Usar useRef para obtener una referencia al elemento del DOM (<input>) y, dentro de un useEffect con la dependencia adecuada, llamar al método .focus().

### Context:
El Reto: La aplicación necesita un "modo de visualización" (compacto o detallado) que se pueda activar desde un interruptor en el encabezado. Este modo debe afectar el estilo de todas las tareas en la lista. Pasar la prop displayMode a cada componente a través de la jerarquía sería ineficiente.
Aplicación: Crear un DisplayModeContext y un Provider que envuelva la aplicación. El componente TaskItem y cualquier otro componente que necesite saber el modo de visualización, lo consumirá directamente usando useContext.


## 📐 Component Contracts

### TaskItem
```jsx
<TaskItem 
  id={string}
  text={string}
  completed={boolean}
  onComplete={function}
  onDelete={function}
/>

