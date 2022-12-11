//variables
let myName = ("albin pirela");
console.log(myName)
//boolean & numbers
var myWife = ('Andreina AVila');
const myNameWife = myName + 'es esposo de ' + myWife;
//console.log(myNameWife)
let myBoolean = true
let myOtroBool = false
let miNumero = 0
let miNumero2 = 11
let miNumero3 = 315
let miNumero4 = -50
//console.log(miNumero, myBoolean, miNumero3 + miNumero2, myNameWife);
//undefine
let undef
//console.log(undef);
//nulo
let nulo = null
//console.log(nulo, 13, null);
//objetos
//es una agrupacion de datos ,estoy datos tienen sentido entre si
//objeto vacio
//const miprimerObjeto { }
//objeto son agrupaciones de datos que hacen sentido entre si
const miObjeto = {
    unNumero: 12,
    unString: 'Esta cadna de caracteres',
    unaCondicion: true,
}
console.log(miObjeto.unString)
const arrVacio = []
const arr = [1, 2, 'hola', 'mundo', miObjeto]
//console.log(arrVacio, arr)
arr.push(5)
//console.log(arr);
arrVacio.push(5)
arrVacio.push(3)
arrVacio.push(1)
arrVacio.push('hola')
arrVacio.push(myNameWife)
console.log(arrVacio);
