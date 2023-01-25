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

// Obtener un solo usuario
const getUser = (id) => {
  fetch(`${BASE_URL}/users/${id}`)
    .then((response) => response.json())
    .then((user) => {
      populateForm(user);
    });
};

getUsers();
