$(".nav-container").append(`<nav class="nav-bar">                                                                                     
                        <a href="https://www.cerveza-artesanal.co/" target="_BLANK">¿Como se hacen las artesanales?</a></li>
                        <a href="sugerencias/index.html">¡Dejanos tu Sugerencia!</a>
                        <a href="suscripciones/index.html">¡Suscribite!</a>
                        <a href="#">Contacto</a>
                        <a href="login/login.html" class="sing-in">Iniciar Sesion</a>
                    </nav>                                
            `);

$(".menu-toggle-btn").click(function(){
        $(this).toggleClass("fa-times");
        $(".nav-bar").toggleClass("active");
});

