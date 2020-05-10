/*
-- se genero la carpeta img dentro de public ya que no viene por defecto
-- se cambio el template engine de .jade a .ejs
-- se añadio dentro de la carpeta /public/stylesheets el archivo de grilla boostraps-grid
-- se crea la carpeta data para almacenar la base de datos

    para agregar la base de datos dentro del controlador
    const fs = require("fs");
    JSON.parse(fs.readFileSync("data/productos.json"));

RECOMENDABLE
al momendo de utlizarae el json debemos llamar a cada dato almacenado en el con los simbolos <% %>
realizar un forEach y escribiendo una sola vez cada producto que recorra el json y muestre los datos que correspondan a cada uno
*/