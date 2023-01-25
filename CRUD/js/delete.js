// Eliminar Un Usuario
const deleteUser = (id) => {
  fetch(`${BASE_URL}/users/${id}`, {
    method: "DELETE",
  }).finally(() => (window.location.href = "index.html"));
};
