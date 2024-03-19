let mensaje: string = "Hola mundo"

mensaje = "chanchito feliz"

mensaje = "chao mundo"

console.log(mensaje);

console.log(typeof []);

// tipos de JS
// * number
// * string
// * boolean
// * null
// * undefined
// * object
// * function

// tipos de TS
// * any
// * unknow
// * never
// * arrays
// * tuplas
// * Enums
// *
// * tipos inferidos
// * 

let extincionDinosaurios: number = 76_000_000
let dinosaurioFavorito: string = 'T-rex'
let extintos: boolean = true

function ConfigFunction (config: number){
    let configNew: number = config + 1
    console.log(configNew);
}

ConfigFunction (3)

let animales: string[] = ['vaca', 'perro', 'gato']
let nums: number[] = [1, 2 ,3]
let checks: boolean[] = []

