console.log("ejecutando server");
// ES5 require en vez de import
const jsonServer = require("json-server")

const server = jsonServer.create() // creamos el objeto del servidor

//* nos crea las configuraciones basicas del servidor
const middlewares = jsonServer.defaults() 
server.use(middlewares) // con .use() agregamos alguna configuracion al servidor

//* permitimos accesos externos de cualquier lugar al servidor
const allowAccessFromAnywhere = (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  next(); // continua con el servidor
}
server.use(allowAccessFromAnywhere)

//* donde almacacenará o controlará la base de datos
const router = jsonServer.router("db.json") // automaticamente creará TODOS los puntos de contacto (rutas, metodos, endpoints) de acceso a la db json.
server.use(router)

//* declarar un puerto para que el cliente acceda al servidor
const PORT = 5005;

//* poner a andar y escuchar el servidor
server.listen(PORT, () => {
  console.log(`Servidor JSON ejecutandose en el puerto ${PORT}`)
  console.log(`Acceso local en http://localhost:${PORT}`)
})