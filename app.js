const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("./config/yargs");

require("colors");

console.clear();

console.log("base: yargs", argv.base);
// const base = 1;
crearArchivo(argv.b, argv.l, argv.h)
    .then((nombreArchivo) => console.log(nombreArchivo.yellow, "Creado".green))
    .catch((err) => console.log(err));
