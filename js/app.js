const dynamicContent = document.getElementById("dynamicContent");

const contentMap = {
  datasAccount: `
        <div class="form-container">
            <form class="left-section">
        <h2>Datos</h2>
        <p>Completa o modifica tus datos personales</p>
        <form>
          <label for="nombre">Nombre</label>
          <input type="text" id="nombre" name="nombre" />

          <label for="apellido">Apellido</label>
          <input type="text" id="apellido" name="apellido" />

          <label for="documento">Documento</label>
          <input type="text" id="documento" name="documento" />

          <h3>Contacto</h3>
          <label for="telefono">Celular o Whatsapp</label>
          <input type="text" id="telefono" name="telefono" />

          <label for="email">Email</label>
          <input type="email" id="email" name="email" />
        </form>
      </form>

      <!-- Sección de Modificar Contraseña -->
      <div class="right-section">
        <h2>Modifica tu contraseña</h2>
        <p>
          Ingresa una contraseña nueva. Debe tener entre 7 y 12 caracteres
        </p>
        <form>
          <label for="new-password">Contraseña nueva</label>
          <input
            minlength="7"
            maxlength="12"
            type="password"
            id="new-password"
            name="new-password"
          />

          <label for="repeat-password">Repetir contraseña</label>
          <input
            minlength="7"
            maxlength="12"
            type="password"
            id="repeat-password"
            name="repeat-password"
          />
          <button type="submit" class="save-button">Guardar cambios</button>
        </form>
      </div>
      </div>
    `,
  favoritesAccount: `
      <div>
          <h2>Guarda tus propiedades favoritas y no te olvides de contactar</h2>
      </div>
      <div>
          <img src="" alt="" />
      </div>
      <div>
          <button type="submit" class="save-button">Guardar cambios</button>
      </div>
    `,
  deleteAccount: `
      <div>
          <h2>Eliminar cuenta</h2>
          <p>Al eliminar tu cuenta, se eliminara tus datos y tu actividad</p>
      </div>

      <div>
          <p>Escribi tu contraseña para eliminar tu cuenta</p>
          <input type="password" name="" id="">
          <button class='btnDelete mt-2'>Eliminar cuenta</button>
      </div>
    `,
};

const updateContent = (section) => {
  dynamicContent.innerHTML = contentMap[section];
};

document
  .getElementById("btnDataAccount")
  .addEventListener("click", () => updateContent("datasAccount"));
document
  .getElementById("btnFavoritesAccount")
  .addEventListener("click", () => updateContent("favoritesAccount"));
document
  .getElementById("btnDeleteAccount")
  .addEventListener("click", () => updateContent("deleteAccount"));
