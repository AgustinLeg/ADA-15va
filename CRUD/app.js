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
