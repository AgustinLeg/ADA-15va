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
