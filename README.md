# Descripción del Proyecto

Este proyecto utiliza archivos HTML y JavaScript para construir una aplicación web interactiva. A continuación, se describe el propósito de cada tipo de archivo:

## Archivos HTML
Los archivos HTML son responsables de la estructura y el contenido básico de la aplicación. Definen los elementos visuales como encabezados, párrafos, botones y formularios. Además, sirven como punto de entrada para enlazar los archivos JavaScript y CSS.

### Ejemplo de un archivo HTML
```html
<!DOCTYPE html>
<html>
<head>
    <title>Mi Proyecto</title>
    <script src="script.js"></script>
</head>
<body>
    <h1>Bienvenido a mi aplicación</h1>
    <button id="miBoton">Haz clic aquí</button>
</body>
</html>
```

## Archivos JavaScript
Los archivos JavaScript contienen la lógica y funcionalidad de la aplicación. Se encargan de manejar eventos, realizar cálculos, manipular el DOM (Document Object Model) y comunicarse con servidores si es necesario.

### Ejemplo de un archivo JavaScript
```javascript
// script.js
document.getElementById('miBoton').addEventListener('click', () => {
    alert('¡Botón clickeado!');
});
```

## Relación entre HTML y JavaScript
El archivo HTML proporciona la estructura básica, mientras que el archivo JavaScript añade interactividad y dinamismo. Ambos trabajan juntos para crear una experiencia de usuario completa y funcional.

## Datos del Autor
- **Nombre**: Sergio Sebastian Velasco Torres
- **Correo Electrónico**: svelasco13@ucol.mx
- **Fecha**: 22/03/2025
