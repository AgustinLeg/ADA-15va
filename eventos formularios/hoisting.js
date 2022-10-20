// Declaracion de una funcion (function declaration)

sumar();

function sumar() {
  console.log(2 + 2);
}



// Expresion de Funcion (Function Expression)


sumar2(); // no funciona 

let sumar2 = function () {
  console.log(2 + 2);
};


// let sumar2;

// sumar2();

// let sumar2 =  function () {
//     console.log(2 + 2);
//   }

// error  Cannot access 'sumar2' before initialization
