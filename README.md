# Formula 1 contada a través de los datos

A continuación, se detallan los pasos necesarios para clonar el repositorio, instalar las dependencias y ejecutar la aplicación.

## Requisitos previos

Antes de comenzar, asegúrate de tener instalado Node.js y npm en tu computadora. Puedes descargarlos desde [Node.js](https://nodejs.org/).

## Clonar el repositorio

Primero, necesitas clonar el repositorio a tu máquina local. Abre una terminal y ejecuta el siguiente comando:

```bash
git clone https://github.com/jaimeamigoUTDT/VD-final.git
```
## Navegar al directorio del proyecto

Una vez clonado el repositorio, navega al directorio del proyecto utilizando el siguiente comando:

```bash
cd my-app
```

## Instalar dependencias

Dentro del directorio del proyecto, instala las dependencias necesarias ejecutando:

```bash
npm install
```

Este comando leerá el archivo package.json y descargará todas las dependencias listadas.

## Construir la aplicación

Después de instalar las dependencias, construye la aplicación con el siguiente comando:

```bash
npm run build
```

Esto generará los archivos necesarios para la versión de producción de tu aplicación.

## Ejecutar la aplicación en modo de desarrollo

Para ejecutar la aplicación en modo de desarrollo, utiliza el siguiente comando:

```bash
npm run preview
```
Esto iniciará un servidor de previsualización y deberías poder ver tu aplicación en funcionamiento abriendo tu navegador y visitando http://localhost:3000 (o el puerto especificado en la configuración de tu aplicación).

## ¡Espero que disfrutes la historia!

# Tecnologías usadas

Para este proyecto tuve que combinar tecnologías vistas en clase, como Svelte, Html, Css, Javascript, D3 con otras librerías como Rollup para el cargado de archivos .csv, y LayerCake o Flourish para hacer los graficos. Por otro lado, Python fue clave para el filtrado de datos, el armado de datasets mas pequeños. Por último, una de las librerías mas importantes para este trabajo fue Svelte-scroller, sobre la que realice el 90% del trabajo.

## Svelte
Svelte fue clave para la modularizacion de componentes y mantener la simpleza del código, que tenía muchos componentes, algunos en ocasiones repetidos. También utilice mucho los condicionales "{#if}" y algunas funciones muy simples hechas por mí, que gracias a la simpleza de Svelte, desarrollarlas fue muy sencillo.

## LayerCake y Flourish
Estas dos librerías me permitieron integrar el 100% de los gráficos. Los gráficos de presupuestos y estáticos los realice con layercake, mientras que los mas complejos e interactivos fueron hechos con Flourish. Tanto layercake como Flourish fueron muy intuitivas para integrar al código, más Flourish que Layercake, ya que la primer simplemente consistía en realizar el gráfico online e insertar un "iframe". Layercake requería de más modificación e integración de código.

## Python
Python fue el lenguaje que elegí para tratar mis datos. Dado que estaba trabajando con un dataset muy grande, usar google spreadsheets o excel era poco práctico. También usé este lenguaje para computar el ranking de pilotos y equipos, donde implemente un script iterativo que recorría todas las entradas de la base de datos y computaba los rankings a partir de esos resultados.

## Svelte-scroller
El objetivo del trabajo era hacer un scrollytelling, por lo que utilizar una librería como Svelte-scroller se volvió indispensable. Utilicé esta librería en reiteradas ocaciones, ya que el proyecto tenía distintas secciones y cada una de ellas tenía un scroller particular. Si bien al principio me costo entender el funcionamiento, una vez que comprendí como funcionaba, pude aprovechar el potencial del mismo.
