usuarioLogeado = sessionStorage.getItem("acceso");

$(".btn-buy").click( () =>{
        if(usuarioLogeado === "true"){
            console.log("enviando email de confirmacion...");
            notificaciones.showToast("✅ ¡Gracias por su compra! Recibiras un mail para finalizar la compra.");
            localStorage.removeItem("carrito");
            setTimeout(function(){
                window.location.reload(1);
            }, 2500);
        }
        else {
            notificaciones.showToast("❌ Debes iniciar sesion primero")
        }
});

