"use strict";
let mensaje = "Hola mundo";
mensaje = "chanchito feliz";
mensaje = "chao mundo";
console.log(mensaje);
console.log(typeof []);
let extincionDinosaurios = 76000000;
let dinosaurioFavorito = 'T-rex';
let extintos = true;
function ConfigFunction(config) {
    let configNew = config + 1;
    console.log(configNew);
}
ConfigFunction(3);
let animales = ['vaca', 'perro', 'gato'];
let nums = [1, 2, 3];
let checks = [];
let variable = [];
let numb2 = [];
let tupla = [1, ['primero', 'segundo', 'tercero']];
var Talla;
(function (Talla) {
    Talla["Chica"] = "s";
    Talla["Mediana"] = "m";
    Talla["Grande"] = "l";
    Talla["ExtraGrande"] = "xl";
})(Talla || (Talla = {}));
const objeto = { id: 1 };
const objeto2 = { id: 1, nombre: 'celular', talla: Talla.ExtraGrande };
const objeto3 = {
    id: 1,
    nombre: 'Raul',
    talla: Talla.ExtraGrande,
    direccion: {
        numero: 676,
        calle: 'Pje Spirilli',
        pais: 'Argentina'
    }
};
const arr = [];
arr.push(objeto3);
const variable1 = Talla.Grande;
console.log(variable1);
const estado = 1;
console.log(estado);
console.log(objeto2);
objeto2.id = 2;
objeto2.nombre = 'Sergio';
console.log(objeto2);
console.log(arr);
//# sourceMappingURL=index.js.map