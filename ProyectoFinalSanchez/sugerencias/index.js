const lista = document.getElementById("lista");
function agregarSugerencias() {
  const cervezaInput = document.getElementById("cerveza");
  const descripcionInput = document.getElementById("descripcion");

  const cerveza = cervezaInput.value;
  const descripcion = descripcionInput.value;
  const card = document.createElement("li");
  card.classList.add("card");
  card.innerHTML = `
    <h2>${cerveza}</h2>
    <span>${descripcion}</span>
  `;
  notificaciones.showToast("✅ ¡Gracias por tu sugerencia!")
  lista.appendChild(card);
  
  
  cervezaInput.value = "";
  descripcionInput.value = "";
}