# To-Do App --- Challenge Técnico (React Trainee)

**Autor:** Juan Pablo Galli Rodríguez

## Resumen rápido

Pequeña aplicación de lista de tareas construida con **React (Create
React App)** para practicar fundamentos:\
- Componentes\
- Estado (`useState`)\
- Manejo de formularios\
- Renderizado condicional\
- Filtros\
- Persistencia en `localStorage`

------------------------------------------------------------------------

## Tecnologías

-   React (Create React App) --- JavaScript\
-   CSS básico

**Deploy:** [To-Do App en
Netlify](https://to-do-app-react-juanpablogalli.netlify.app/)

------------------------------------------------------------------------

## Cómo ejecutar localmente

1.  Clonar el repositorio (o crear con
    `npx create-react-app todo-app`).\
2.  Copiar los archivos `src/` proporcionados.\
3.  Instalar dependencias y arrancar:

``` bash
npm install
npm start
```

La app correrá en <http://localhost:3000>.

------------------------------------------------------------------------

## Funcionalidades implementadas

-   Agregar tareas con validación (no acepta cadena vacía).\
-   Listado de tareas dinámico con `useState` + `map()`.\
-   Marcar tarea como completada / desmarcar.\
-   Eliminar tareas individualmente.\
-   Renderizado condicional: mensaje cuando no hay tareas.\
-   Persistencia en `localStorage` (guardado y carga en `useEffect`).\
-   Filtros: **Todas / Pendientes / Completadas**.\
-   Mejoras de UX/Accesibilidad: envío con **Enter**.

------------------------------------------------------------------------
