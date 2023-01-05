// import { v4 as uuidv4 } from 'https://jspm.dev/uuid';
// import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js'
const form = document.querySelector("#form");
const input = document.querySelector("#name");
const container = document.querySelector("#container");

let array = [];

const removeName = (id) => {
  array = array.filter((item) => item.id !== id);

  container.innerHTML = "";

  for (const item of array) {
    mostrarElementoHTML(item);
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // let id = Math.round(Math.random() * 5);

  // console.log('inicio id',id)

  // const existeID = array.find((item) => item.id === id);

  // console.log(existeID)

  // if (existeID) {
  //   id = Math.round(Math.random() * 5);
  // }

  // console.log('id final',id)
  // let id = 0;

  // const id = array.length > 0 ? array[array.length - 1].id + 1 : 1;

  // if (array.length > 0) {
  //   id = array[array.length - 1].id + 1;
  // } else {
  //   id = 1;
  // }

  // objeto para agregar al array
  const item = {
    name: input.value,
    id: self.crypto.randomUUID(),
  };

  // agregar item al array
  array.push(item);

  // mostrarElementoHTML(item);

  const li = document.createElement("li");

  // agregar item al html
  li.innerHTML += `
    <span>${item.name}</span>
    <button class="btn-link btn-delete">eliminar</button>
    <button class="btn-link btn-edit">editar</button>
    `;

  const btnEliminar = li.querySelector(".btn-delete");
  const btnEditar = li.querySelector(".btn-edit");

  btnEliminar.onclick = () => {
    removeName(item.id);
  };

  btnEditar.onclick = () => {
    alert("EDITARRRR");
  };

  container.append(li);
});

const mostrarElementoHTML = (item) => {
  const li = document.createElement("li");
  li.classList.add("lista");

  const span = document.createElement("span");
  span.textContent = item.name;

  const button = document.createElement("button");

  button.innerText = "eliminar";
  button.classList.add("btn-link");
  // button.setAttribute("id", item.id);
  button.onclick = function () {
    removeName(item.id);
  };

  li.appendChild(span);
  li.appendChild(button);

  container.appendChild(li);
};
