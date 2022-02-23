let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
let miDiv = document.querySelector("#div-1");
let leftBar = document.querySelector(".leftBar");

const inyectarCards = () => {
  productos.forEach((element) => {
    miDiv.innerHTML += `<div class="card">
      <img src="${element.img}" style="width:50%">
      <h3>${element.nombre}</h3>
      <h4>${element.estilo}</h4>
      <h5>IBU: <span>${element.ibu}</span></h5>
      <h6>PRECIO : $<span>${element.precio}</span></h6>
      <button class="btn-add" data-id="${element.id}">AGREGAR</button>
    </div>
    `;
  });

  let btnAdd = document.querySelectorAll(".btn-add");

  btnAdd.forEach((element) => {
    element.addEventListener("click", (event) => {
      enviarAlCarrito(event.target.parentElement);
      notificaciones.showToast("✅ Añadido al carrito correctamente");
    });
  });
};
const enviarAlCarrito = (datosProductos) => {
  let productoAlCarrito = {
    imagen: datosProductos.querySelector("img").src,
    nombre: datosProductos.querySelector("h3").textContent,    
    estilo: datosProductos.querySelector("h4").textContent,
    precioPorUnidad: Number(
      datosProductos.querySelector("h6 span").textContent
    ),
    precioTotal: Number(datosProductos.querySelector("h6 span").textContent),
    cantidad: 1,
    id: Number(datosProductos.querySelector("button").getAttribute("data-id")),
  };

  let existeProducto = carrito.some(
    (element) => element.id === productoAlCarrito.id
  );

  if (existeProducto) {
    carrito = carrito.map((element) => {
      if (element.id === productoAlCarrito.id) {
        element.cantidad++;
        element.precioTotal = element.precioPorUnidad * element.cantidad;
        return element;
      } else {
        return element;
      }
    });
  } else {
    carrito.push(productoAlCarrito);
  }
  localStorage.setItem("carrito", JSON.stringify(carrito));
  inyectarHTMLcarrito();
};

const inyectarHTMLcarrito = () => {
  leftBar.innerHTML =  `<p class="shopCard">Shop</p> <hr>`
  carrito.forEach((element) => {
    leftBar.innerHTML += `<div id="productoAComprar">
    <h3>${element.nombre}</h3>
    <h4>${element.estilo}</h4>
    <p>$${element.precioTotal}</p>
    <h5>Llevo: ${element.cantidad}</h5>
    <img src="${element.imagen}" style="width:50%">
    <button class="btn-menos" data-id=${element.id}> - </button>
    <button class="btn-borrar" data-id=${element.id}> Eliminar </button>
    <hr>
    </div>`;
  });
  
  let divTotal = document.createElement("div");
  let miTotal = totalDelCarrito();
  divTotal.innerHTML = `<p>Precio Final: ${miTotal}<p>
                        <hr>
                        <button class="btn-buy"> COMPRAR </button>`;
  leftBar.appendChild(divTotal);

};

const restarProducto = (event) => {
  let idProducto = Number(event.target.getAttribute("data-id"));

  carrito = carrito.map((element) => {
    if (element.id === idProducto) {
      element.cantidad--;
      element.precioTotal = element.precioTotal - element.precioPorUnidad;
      if (element.cantidad === 0) {
        element.cantidad = 1;
        element.precioTotal = element.precioPorUnidad;
      }
      return element;
    } else {
      return element;
    }
  });
  localStorage.setItem("carrito", JSON.stringify(carrito));
  inyectarHTMLcarrito();
};

const borrarProducto = (event) => {
  let idProducto = Number(event.target.getAttribute("data-id"));
  carrito = carrito.filter((element) => element.id != idProducto);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  inyectarHTMLcarrito();
};

leftBar.addEventListener("click", (event) => {
  if (event.target.classList.contains("btn-menos")) {
    restarProducto(event);
  }
  if (event.target.classList.contains("btn-borrar")) {
    borrarProducto(event);
  }
});

const totalDelCarrito = () => {
  let miTotal = carrito.reduce(
    (acumulador, iterador) => acumulador + iterador.precioTotal,
    0
  );
  return miTotal;
};

inyectarCards();
inyectarHTMLcarrito();
