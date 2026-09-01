# Huellas Seguras

## Integrantes
- Facundo Amado
- Geremias Pereyra

## Descripción breve
Sitio web para un sistema comunitario que conecta vecinos, refugios y veterinarias para reportar, atender y hacer seguimiento de perros perdidos o maltratados, y facilitar su adopción.

## Tecnologías utilizadas
- HTML5
- CSS3 puro (sin frameworks ni librerías)

## ¿Dónde utilizaron Flexbox?
- Encabezado (barra superior y menú de navegación)
- Portada / sección de inicio
- Sección "Sumate" (tarjetas de roles)
- Pie de página

## ¿Dónde utilizaron Grid?
- Sección "Cómo funciona" (pasos)
- Sección "Casos recientes" (tarjetas de casos)

## ¿Qué variables CSS crearon?
Definidas en `:root`, agrupadas en:
- Colores
- Tipografías
- Espaciados
- Radio de borde
- Sombras
- Ancho máximo del contenedor

## ¿Cómo implementaron el Responsive Design?
Con dos media queries (`max-width: 768px` y `max-width: 480px`) que van reacomodando el layout: las secciones en flex/grid pasan de varias columnas a una sola, y el menú de navegación se convierte en un menú hamburguesa desplegable en pantallas chicas.

## Estrategias de SEO utilizadas
- Título y meta description optimizados
- Meta robots + URL canónica
- Etiquetas Open Graph para redes sociales
- Datos estructurados (JSON-LD / schema.org)
- Texto alternativo (alt / aria-label) en imágenes
- Anchor text descriptivo en los enlaces internos