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
