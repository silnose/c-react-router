# Curso React Router

React Router nos ayudara a manejar múltiples paginas dentro de nuestra aplicación sin tener que recargar, o, dicho de otra manera, nos ayudara a crear una Single Page Application (SPA).

# Tipos de enrutadores

## **BrowserRouter**

**_A.K.A "El enrutador sin recarga" o el componente encargado de manejar el historial del navegador utilizando las bondades de HTML5 history API_**

- [**Propiedades**](https://reactrouter.com/web/api/BrowserRouter)
  - basename ( base path url)
  - getUserConfirmation (confirmaciones antes de salir)
  - forceRefresh (forzar la recarga de la pagina true/false)
  - keyLenght (tamaños de los keys unicos en la navegacion)
  - children (componentes hijos de browserRouter)

## **HashRouter**

**_A.K.A primo hermano de browser router pero en todas las rutas antepone un # hash, utilizado antiguamente previo a la aparicion de HTML5 History API para indicar que eran rutas del frontend_**

## **Memory Router**

**_A.K.A el que mantiene el historial de busqueda en memoria. Perfecto para propositos de testing_**

## **Static Router**

**_A.K.A el que nos sirve para renderizar una ruta especifica. Perfecto para Server Side Render _**

## **Native Router**

**_A.K.A el sirve para usar react router con react native _**

# Enlaces/ Rutas

## **Link**

**_A.K.A "El que reemplaza a "a href" de html>_**

- [**Propiedades**](https://reactrouter.com/web/api/Link)

  - to (href- una locación en forma de cadena de text. Esta será la locación a la que navegaremos cuando le damos click a un hipervínculos.)
  - replace (un booleano que nos permite modificar el comportamiento de Link. Cuando este es verdadero en lugar de agregar una nueva locación a la historia, este reemplaza la locación actual.
    )
  - innerRef (modificar el atributo padre "a")
  - others

- ```
   <Link to={{ pathname: '/route', search: '?id=3', state: { foo: 'bar'} }}>My route</Link>
  ```

## **Nav Link**

**_A.K.A similar a LINK pero con mas poderes_**

- [**Propiedades**](https://reactrouter.com/web/api/NavLink)

  - activeClassName (clase para marcar estilo activado en el menu)
  - activeStyle (estilos inline)
  - isActive (es el elemento actual del menu?)
  - exact (validar rutas exactas)
  - strict (validar rutas estrictas)
  - location

- ```
  <NavLink exact to='/' activeClassName='is-selected'>
                  Home
                </NavLink>
  ```

## **Route**

**_A.K.A el que define las diferentes rutas de nuestra aplicación_**

- [**Propiedades**](https://reactrouter.com/web/api/Route)
  - component (componente a renderizar )
  - path (ruta donde se renderizara el componente)
  - render (alternativa a component para renderizar en modo de funcion)
  - children (hijos del componente)
  - exact (definir si queremos que la ruta tiene o no que ser exacta para renderizar un componente)
  - strict (definir si queremos que el último slash sea tomado en cuenta para renderizar un componente)
  - sensitive (definir si queremos validar "case sensitive" para las rutas)

## **Switch**

**_A.K.A el que causa que solo se renderice el primer hijo Route o Redirect que coincida con la locación o URL actual.
En el caso que no usemos Switch todas las rutas que cumplan con la condición se renderizarán._**

- [**Mas..**](https://reactrouter.com/web/api/Switch)

## **Redirect**

**_A.K.A el que causa un redireccionamiento a una ruta diferente a la actual. La ruta a la que este nos redirecciona reemplaza la locación actual en la historia del navegador. Ejemplo: para utilizar rutas cortas y faciles de recordar y luego redireccionar al usuario al lugar correcto_**

- [**Propiedades**](https://reactrouter.com/web/api/Redirect)
  - **from**: Esta propiedad funciona de manera muy similar a la propiedad path de Route, cuando la locación coincide con from, se ejecuta el Redirect.
  - **to**: hacia donde se realizara el redireccionamiento.
  - **push**: nos permite modificar el comportamiento de Redirect. Cuando este es verdadero en lugar de reemplazar la locación actual en la historia, este agrega una nueva locación.
  - **exact** (definir si queremos que la ruta tiene o no que ser exacta para renderizar un componente)
  - **strict** (definir si queremos que el último slash sea tomado en cuenta para renderizar un componente)

## Prompt

**_A.K.A una nueva forma de bloquear la navegación. Esto bloqueará cualquier enrutamiento, pero no la actualización ni el cierre de la página._**

- ```
  <Prompt when={props.value} message='Are you sure?' />
  ```

# Props

## History

Dentro de los componentes que renderizamos a través de Route encontramos en sus props un objeto llamado history, este objeto cuenta con multiples propiedades y métodos como:

- [**Mas..**](https://reactrouter.com/web/api/history)

- **go**: es un método que te permite ir a cierto momento en el historial de navegación, recibe como parámetro un número, dependiendo de la cantidad es cuanto avanzara en el historial y si es positivo o negativo será la dirección que tome.
- **goBack**: es un método que te permite navegar una pagina hacia atrás, funciona de forma similar a que si llamáramos a go(-1).
- **goForward**: es un método que te permite navegar una pagina hacia adelante, funciona de forma similar que si llamáramos a go(1).
- **push**: te permite añadir una nueva ruta al stack de navegación.

## Locations

Locations representan dónde está la aplicación ahora, dónde quieres que vaya, o incluso dónde estaba. Se parece a esto:

- ```
  key: 'ac3df4', // not with HashHistory!
  pathname: '/somewhere',
  search: '?some=search-string',
  hash: '#howdy',
  state: {}
  ```

[**Mas..**](https://reactrouter.com/web/api/location)

## withRouter

Cuando incluimos un componente en nuestra aplicación, a menudo este, se envuelve en un componente Route como este:

```
<Route path="/videos" component={VideoComponent} />
```

Haciendo esto el componente VideoComponent tiene acceso a this.props.history por lo que puede redirigir al usuario con this.props.history.push.

Pero algunos componentes (comúnmente los headers/ layouts ) aparecen en cada página, por lo que no están envueltos en un componente "Route":

```
render() {
return (<Header />);
}
```

Esto significa que el encabezado no puede redirigir al usuario ni contiene las props history, locatios etc.

Para evitar este problema, el componente header puede ser "decorado" en una función **withRouter**, cuando se exporta:

```
export default withRouter(Header);
```

# Server Side Render (SSR)

## Static Router

Los métodos utilizados de HTML5 para el BrowserRouter no existen en Node (server side), por eso se debe utilizar StaticRouter.

Dentro de nuestro proyecto en el archivo app.js encontraremos varios componentes que solo funcionan del lado del navegador, necesitamos separar las cosas en un archivo de compilación para el cliente y uno para el servidor.

## ReactDOMServer

Al momento de renderizar nuestros componentes en React hemos estado utilizando el método render de reactDOM, pero este método solo funciona en el navegador. Para poder renderizar en el servidor haremos uso de reactDOMServer, cuenta con cuatro métodos de los cuales dos se utilizan dentro de un stream, los otros dos métodos son:

renderToString: te sirve para hacer server render y re-renderizar en el navegador.
renderToStaticMarkup: este método te sirve si quieres hacer un server render que NO utilice un renderizado en el navegador.

## Licencia 📄

MIT

## Conceptos Aprendidos 🤓

- <https://platzi.com/cursos/react-router/>

## Certificado

- [Diploma](./readme-static/diploma-react-router.pdf)

---

👩‍💻 with ❤️ by [silnose](https://github.com/silnose) 😊
