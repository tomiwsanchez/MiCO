$(".form").append('<button id="btn-login">Enviar</button>');

$("#btn-login").click(() => { 
            if($("#edad").val() >= 18) {
                console.log("acceso correcto");
                const ACCESO_CONFIRMADO = sessionStorage.setItem('acceso', true);
                const NOMBRE_USUARIO = sessionStorage.setItem('usuarioNombre', $("#name").val());
                const EMAIL_USUARIO = sessionStorage.setItem('usuarioEmail', $("#email").val());
                document.getElementById('loginForm').reset();
                notificaciones.showToast("✅ ¡Accediste correctamente!")
                setTimeout(() => {
                    window.location.href = "/index.html";
                }, 1500) 
        }
        else if($("#edad").val() < 18) {
                notificaciones.showToast("❌ Debes ser mayor de edad")
                setTimeout(function(){
                    window.location.reload(1);
                 }, 5000);
        }
});