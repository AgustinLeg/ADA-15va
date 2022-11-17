const $ = (selector) => document.querySelector(selector);

// let emailInput = $("#email");
let passwordInput = $("#password");
let form = $("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log("submit");
  if (ValidarEmail()) {
    alert(`Bienvenido `);
  } else {
    alert("error");
  }
});

// emailInput.addEventListener('change' , event => event.target.value)

// el mail no este vacio
function ValidarEmail() {
  let esValido = false;

  let emailInput = $("#email"); // obtener "actualizado";
  // el input tenga mas de 1 caracter => '' === false - 0 === false - undefined === false
  if (emailInput.value) {
    emailInput.classList.remove("is-danger");
    emailInput.classList.add("is-success");
    esValido = true;
  } else {
    emailInput.classList.add("is-danger");
    emailInput.parentElement.innerHTML += `<span class="help is-danger error">El email es obligatorio </span>`;
  }

  return esValido;
}
