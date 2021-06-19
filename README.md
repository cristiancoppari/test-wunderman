# Prueba técnica para Wunderman

## 1. Consigna

Crear una landing de fantasía cuya finalidad es dibujar un árbol de directorios o carpetas.

La landing en cuestión debe cumplir con los siguientes requisitos o características:

- Debe ser responsive.
- Debe contener un header con un logo ficticio y un menú de navegación con 3 links a cada sección de la página. Al achicarse el tamaño de pantalla debe aparecer el menú de hamburguesa.
- No se deben utilizar librerías salvo cuando se lo pida.
- El desarrollo debe estar en Vanilla JavaScript. Para los estilos se puede utilizar SCSS y/o Bootstrap o Materialize.
- En el cuerpo de la página se deben incorporar 3 Secciones: 1) Información, 2) Árbol de directorios y 3) Extras.
- Se deben implementar una serie de reglas en ESLint.

## 2. Setup

Para iniciar el proyecto se debe descargar o clonar el contenido del repositorio. Una vez descargados los archivos, se debe abrir esta carpeta en la terminal y correr el comando `npm install`. Este va a instalar todas las dependencias que estén listadas en el archivo `package.json`.

Una vez instaladas todas las dependencias, en la terminal ubicados en la carpeta raíz del proyecto se debe correr el comando `npm start`. Este comando va a inicializar un servidor de desarrollo en el dominio http://localhost:8080.

En este proyecto se utilizó SCSS como pre procesador de CSS. Se creo un entorno de desarrollo que mira por cambios en los diferentes archivos de SCSS, y una vez detectados cambios compila estos archivos en `public/css/styles.css`. A su vez al haber algún cambio la página donde estamos viendo el proyecto se actualiza automáticamente.

Para finalizar también se cuenta con el script `npm run build:css`. Este minifica los archivos de CSS eliminando todos los espacios en blancos y los comentarios. Obteniendo así un archivo de hojas de estilo 50% más liviano.

## 3. Desarrollo

Antes que nada dibujé en lápiz y papél como se vería el sitio una vez desarrollado. Ubiqué todas secciones y los diferentes componentes en un orden que creo lógico para ver el sitio web.

Luego de esto me puse a pensar como se podría dibujar el árbol de directorios. Luego de pensar por algunos minutos llegue a la conclusión que la mejor forma de representarlo era la siguiente:

```
{
  "type": "directory",
  "name": "app",
  "children": [
    {
      "type": "directory",
      "name": "public",
      "children": [
        {
          "type": "directory",
          "name": "css",
          "children": [
            {
              "type": "file",
              "name": "styles.css"
            },
            {
              "type": "file",
              "name": "styles.min.css"
            }
          ]
        }
      ]
    },
    {
      "type": "directory",
      "name": "src",
      "children": [
        {
          "type": "directory",
          "name": "scss",
          "children": [
            {
              "type": "directory",
              "name": "layout",
              "children": [
                {
                  "type": "file",
                  "name": "_header.scss"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "file",
      "name": "index.html"
    }
  ]
}
```

Siguiendo con esta estructura, yo debía desarrollar algo que me permita iterar sobre las diferentes keys de un objeto. Si el tipo del valor de esa key es un `objeto`, entonces es una **carpeta**. Esta carpeta puede contener archivos, como no. Entonces, si ese array contiene algún elemento adentro se debe iterar sobre las keys de esos objetos para ver si son **carpetas** o **archivos**. Luego de pensar bastante tiempo logré desarrollar (con ayuda de Google) una función recursiva que itera sobre las propiedades de cada objeto y sobre cada objeto para poder obtener todos los valores que se encuentran dentro de los mismos. Finalmente para imprimir en el DOM estos elementos utilicé template strings, ya que lo intenté realizar creando los elementos con `document.createElement()` y colocarle los diferentes hijos adentro con `appendChild()` pero no lo pude hacer.
