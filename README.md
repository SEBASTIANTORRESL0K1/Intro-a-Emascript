# Agencia de Viajes - Registro de Viajes

Este proyecto es una aplicación web para registrar y gestionar itinerarios de viajes. Permite a los usuarios registrar destinos, seleccionar métodos de transporte, y visualizar un itinerario con los detalles de cada viaje.

## Archivos principales

### `index.html`
- Contiene la estructura básica de la página web.
- Incluye un formulario para registrar nuevos viajes y una sección para mostrar el itinerario.

### `app.js`
- Controla la lógica principal de la aplicación.
- Importa funciones desde el módulo `viajes.js` para registrar destinos, calcular costos y mostrar el itinerario.
- Maneja eventos como el registro de nuevos viajes mediante el botón "Registrar".

### `viajes.js`
- Módulo que contiene las funciones relacionadas con la gestión de viajes:
  - `registrarDestino`: Agrega un nuevo destino al sistema.
  - `calcularCosto`: Calcula el costo del viaje según el destino y el transporte.
  - `mostrarItinerario`: Muestra todos los viajes registrados en el itinerario.
  - `agregarViajeHTML`: Actualiza el HTML para reflejar los viajes registrados.

### `styles.css`
- Archivo de estilos para mejorar la apariencia de la aplicación.

## Funcionalidades principales
1. **Registrar destinos**: Permite agregar un destino, fecha y transporte al itinerario.
2. **Calcular costos**: Calcula automáticamente el costo del viaje según el destino y el transporte seleccionado.
3. **Mostrar itinerario**: Visualiza todos los viajes registrados en un formato claro y organizado.

## Cómo usar
1. Selecciona un destino, método de transporte y fecha en el formulario.
2. Haz clic en el botón "Registrar" para agregar el viaje al itinerario.
3. Visualiza los viajes registrados en la sección "Itinerario de Viajes".

## Datos del Autor
- **Nombre**: Sergio Sebastian Velasco Torres
- **Correo Electrónico**: svelasco13@ucol.mx
- **Fecha**: 22/03/2025
