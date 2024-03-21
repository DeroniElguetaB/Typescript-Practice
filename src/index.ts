let mensaje: string = "Hola mundo"

mensaje = "chanchito feliz"

mensaje = "chao mundo"

console.log(mensaje);

console.log(typeof []);

// tipos de datos de JS
// * number
// * string
// * boolean
// * null
// * undefined
// * object
// * function

// tipos de datos de TS
// * any
// * unknow
// * never
// * arrays
// * tuplas
// * Enums
// *
// * tipos inferidos (automaticamente)
// * 

let extincionDinosaurios: number = 76_000_000
let dinosaurioFavorito: string = 'T-rex'
let extintos: boolean = true

function ConfigFunction (config: number){
    let configNew: number = config + 1
    console.log(configNew);
}

ConfigFunction (3)

//TYPESCRIPT DATOS Y EXPRESIONES
// array string
let animales: string[] = ['vaca', 'perro', 'gato']
// array number
let nums: number[] = [1, 2 ,3]
// array boolean
let checks: boolean[] = []
// array any
let variable = []
// array alternativa
let numb2: Array<number> = []
//tuplas (especie de esquema de arreglo ordenado)
let tupla: [number, string[]] = [1, ['primero', 'segundo', 'tercero']]
//enums (PascalCase)(crea un esquima de objeto con variable definida)
//crea IFFE (funcion invocada inmediatamente)
enum Talla { Chica = 's', Mediana = 'm', Grande = 'l', ExtraGrande = 'xl'}
//enums mas optimizado y limpio con el const antes
const enum LoadingState { Idle, Loading, Succes, Error }
//objectos en ts (readonly hace que la propiedad no se pueda modificar)
//1er manera
const objeto: { readonly id: number, nombre?: string} = { id: 1}
//2da manera
const objeto2: { id: number, nombre: string, talla: Talla} = { id: 1, nombre: 'celular', talla: Talla.ExtraGrande}
//3era manera
type Direccion = {
    numero: number,
    calle: string,
    pais: string 
} 
type Persona = { 
    id: number, 
    nombre: string, 
    talla: Talla,
    direccion: Direccion
}
const objeto3: Persona = { 
    id: 1, 
    nombre: 'Raul', 
    talla: Talla.ExtraGrande,
    direccion: {
        numero: 676, 
        calle: 'Pje Spirilli',
        pais: 'Argentina'
    }
}
const arr: Persona[] = []
arr.push(objeto3)

const variable1 = Talla.Grande
console.log(variable1);

const estado = LoadingState.Loading
console.log(estado);

console.log(objeto2);

objeto2.id = 2
objeto2.nombre = 'Sergio'

console.log(objeto2);

console.log(arr);


// metodos de typescript

// console.log(animales);

// animales.map(x => x.indexOf)
// animales.push('conejo')

// console.log(animales);

// console.log(tupla);

// tupla.push(2, ['cuarto','quinto', 'sexto'])

// console.log(tupla);




