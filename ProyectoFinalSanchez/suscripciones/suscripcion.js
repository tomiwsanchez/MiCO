$(".form").append(` <form id="form-content">
                    <label for="name" >Nombre</label>
                    <input class="control" id="userName" />
                    <br>
                    <label for="address" >Tu Email</label>
                    <input class="control" id="userAddress"/>
                            
                    </form>
`)

function limpiarFormulario(){
    document.getElementById("form-content").reset();
}

const URLPOST   = "https://jsonplaceholder.typicode.com/users"

const infoInput = []
infoInput.push (document.getElementById("userName"))
infoInput.push (document.getElementById("userAddress"))

$(".form").append('<button id="btn1">Enviar</button>');

$("#btn1").click(() => { 
    $.post(URLPOST, infoInput,(respuesta, estado) => {
        if(estado === "success"){
            console.log("usuario guardado exitosamente")
            limpiarFormulario()
            notificaciones.showToast("✅ ¡Gracias Por Suscribirte! Recibiras un mail con mas informacion");
            setTimeout(() => {
                window.location.href = "/index.html";
            }, 3000)
        }  
    });
});



