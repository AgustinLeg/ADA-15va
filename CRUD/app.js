// GET POST PUT DELETE

// Schema
// const user ={
//   name: "Dale Schumm",
//   lastName: "cDermott",
//   email: "Jailyn.Williamson30@gmail.com",
//   createdAt: "2023-01-18T00:38:45.782Z"
// }

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const hideElement = (element) => element.classList.add("is-hidden");
const showElement = (element) => element.classList.remove("is-hidden");

const BASE_URL = "https://63c870f65c0760f69acc0e4a.mockapi.io/api";

let isEditing = false;

// METHODS

// Obtener todos los usuarios
const getUsers = () => {
  fetch(`${BASE_URL}/users`)
    .then((response) => response.json())
    .then((data) => {
      renderUsers(data);
    })
    .catch(() => alert("La base de datos no esta disponible en este momento"));
  // .finally(() => console.log('finnaly'));
};

getUsers();

// Obtener un solo usuario
const getUser = (id) => {
  fetch(`${BASE_URL}/users/${id}`)
    .then((response) => response.json())
    .then((user) => {
      populateForm(user);
    });
};

// Crear un usuario
const registerUser = () => {
  const user = getUserForm();

  fetch(`${BASE_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "Application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .finally(() => (window.location.href = "index.html"));
};

const updateUser = (id) => {
  const user = getUserForm();
  fetch(`${BASE_URL}/users/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "Application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .finally(() => (window.location.href = "index.html"));
};

// Eliminar Un Usuario
const deleteUser = (id) => {
  fetch(`${BASE_URL}/users/${id}`, {
    method: "DELETE",
  }).finally(() => (window.location.href = "index.html"));
};

// DOM
const renderUsers = (users) => {
  // Renderizar Lista de Usuarios
  for (const { id, name, lastName, email, createdAt } of users) {
    $("#table-body").innerHTML += `
        <tr>
          <td>${name}</td>
          <td>${lastName}</td>
          <td>${email}</td>
          <td>${new Date(createdAt).toLocaleString()}</td>
          <td>
            <button class="button is-success btn-edit" data-id="${id}">Editar</button>
            <button class="button is-danger btn-delete" data-id="${id}">Eliminar</button>
          </td>
      </tr>
      `;
  }

  // Eliminar usuario
  for (const button of $$(".btn-delete")) {
    button.addEventListener("click", () => {
      const id = button.getAttribute("data-id");
      $("#btn-modal-delete").setAttribute("data-id", id);
      showModal();
    });
  }

  // Editar Usuario
  for (const button of $$(".btn-edit")) {
    button.addEventListener("click", () => {
      isEditing = true;
      const id = button.getAttribute("data-id");
      $("#btn-submit").textContent = "Editar";
      $("#btn-submit").classList.add("is-primary");
      $("#btn-submit").classList.remove("is-link");
      $("#btn-submit").setAttribute("data-id", id);
      showForm();
      getUser(id);
    });
  }
};

const populateForm = (data) => {
  $("#name").value = data.name;
  $("#lastName").value = data.lastName;
  $("#email").value = data.email;
};

const getUserForm = () => {
  const user = {
    email: $("#email").value,
    name: $("#name").value,
    lastName: $("#lastName").value,
  };

  return user;
};

const showForm = () => {
  const table = $("#table-users");
  const form = $("#form");
  hideElement(table);
  showElement(form);
};

const showModal = () => {
  const modal = $("#modal");
  modal.classList.add("is-active");
};

const hideModal = () => {
  const modal = $("#modal");
  modal.classList.remove("is-active");
};

// Eventos

$("#form").addEventListener("submit", (e) => {
  e.preventDefault();
  if (isEditing) {
    const userID = $("#btn-submit").getAttribute("data-id");
    updateUser(userID);
  } else {
    registerUser();
  }
});

$("#btn-create").addEventListener("click", () => {
  showForm();
  $("#btn-submit").textContent = "Crear";
  $("#btn-submit").classList.remove("is-primary");
  $("#btn-submit").classList.add("is-link");
  $("#btn-submit").removeAttribute("data-id", id);
});

$("#btn-cancel").addEventListener("click", () => {
  const table = $("#table-users");
  const form = $("#form");
  showElement(table);
  hideElement(form);
});

// Modal
$("#btn-modal-cancel").addEventListener("click", hideModal);
$("#btn-modal-close").addEventListener("click", hideModal);
$("#btn-modal-delete").addEventListener("click", (e) => {
  const id = e.target.getAttribute("data-id");
  deleteUser(id);
});
