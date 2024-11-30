//variables

let Myage = 15,
    Myname = "josefino",
    Mymessage = "hello :)";

//alert(Myname)
//alert(Myage)
//alert(Mymessage)

//constantes

const MybirthDay = "apr-21-2015"

//alert(MybirthDay);

//tipos de datos

let MyAge = 33;
let IsActive = true;
let IsBlue = false;

let MyHeight = null;
let Myheight2 = undefined;

//ingreso de argumentos 

//let year = prompt('año actual:');

//alert(year);

//confirm

//let isBoss = confirm('eres el jefe?');

//alert(isBoss);

//operadores matematicos
let num1 = 10;
let num2 = 20;

// //suma
// alert(num1 + num2);

// //resta
// alert(num1 - num2);

// //multiplicacion 
// alert(num1 * num2);

// //division 
// alert(num1 / num2);

//incremento
// let num3 = 2;

// num3++;
// alert(num3);

//operadores de comparacion

// alert( 2 > 1 );
// alert( 2 < 1);
// alert( 2 == 1 );
// alert( 2 != 1 );

//condicionasles

//let year = prompt('ingrese el año actual:');

// if( year == 2024){
//     alert('felicidades te sabes el año');
// }
// else if( year < 2024){
//     alert('lo intentaste')
// }
// else{
//     alert('eres idiota');
// }

//operadores logicos 

//or ||

// alert( true || true ); //true
// alert( true || false ); //true
// alert( false || true ); //true
// alert( false || false ); //false

// let hour = 12;
// let isWeekend = true;

// if( hour < 9 || hour > 18 || isWeekend ){
//     alert('la oficina esta cerrada');
// }

//and &&

// alert( true && true ); //true
// alert( true && false ); //false
// alert( false && true ); //false
// alert( false && false ); //false

let name = prompt('quien eres?');

if( name == "admin" ){
    let contraseña = prompt('ingrese su contraseña')
    if(contraseña == 123456){
        alert('bienvenido')
    }
    else{
        alert('contraseña incorrecta')
    }
}
else{
    alert('no te conozco')
}

