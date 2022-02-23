class Alertas{
    constructor(){
        this.nodo = document.createElement('div');
        this.toastHtml();
    }
    toastHtml(){
        const clasesToast = $(this.nodo).addClass('toast');
        $('body').prepend(this.nodo);
    }
    showToast(text){
        const contenidoToast = this.nodo.innerHTML = text;
        const toastVisible = $(this.nodo).addClass('toast--visible');
        this.hideToast();
    }
    hideToast(){
        const time = setTimeout( () => {
            $(this.nodo).removeClass('toast--visible')
        }, 3000)
    }
}

const notificaciones = new Alertas();
