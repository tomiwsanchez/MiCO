class InicioSesion {
    constructor() {
        this.acceso = sessionStorage.getItem("acceso");
        this.username = sessionStorage.getItem("usuarioNombre");
        this.inicioSesion();
    }
    inicioSesion(){            
        if(this.acceso === 'true'){
            this.sacarLogin()
            this.imprimirNombre()           
        }
    }
    sacarLogin(){
        $(".sing-in").hide()
    }
    imprimirNombre(){
        $(".nav-bar").append(`<a class="user">${this.username}</a>`)
    }
}