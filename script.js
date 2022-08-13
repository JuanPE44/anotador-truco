
const contPuntaje = document.querySelector('.contenedor-puntaje');
const tablero15 = document.querySelector('.tablero-15');
const tablero30 = document.querySelector('.tablero-30');

let seJuega15 = false;
let seJuega30 = false;

let puntosNosotros = 0;
let puntosEllos = 0;


const cantidadDePuntos = () => {
    document.getElementById(15).addEventListener('click', (e) => {
        contPuntaje.style.display = 'none';
        tablero15.style.display = 'flex';
        seJuega15 = true;
    })
    
    document.getElementById(30).addEventListener('click', (e) => {
        contPuntaje.style.display = 'none';
        tablero30.style.display = 'flex';
        seJuega30 = true;
    })    
}

const pintarCaja = (quien,puntos) => {
    document.querySelectorAll(quien).forEach(caja => {
        
        if(caja.id == 1) {
            switch(puntos) {
                case 1: caja.classList.add('border-top');
                break;
                case 2: caja.classList.add('border-right');
                break;
                case 3: caja.classList.add('border-bottom');
                break;
                case 4: caja.classList.add('border-left');
                break;
                case 5: caja.firstElementChild.classList.add('border-center');
                break;
            }  
        }
        if (caja.id == 2) {
            switch(puntos) {
                case 6: caja.classList.add('border-top');
                break;
                case 7: caja.classList.add('border-right');
                break;
                case 8: caja.classList.add('border-bottom');
                break;
                case 9: caja.classList.add('border-left');
                break;
                case 10: caja.firstElementChild.classList.add('border-center');
                break;
            }  
        }    
        if (caja.id == 3) {
            switch(puntos) {
                case 11: caja.classList.add('border-top');
                break;
                case 12: caja.classList.add('border-right');
                break;
                case 13: caja.classList.add('border-bottom');
                break;
                case 14: caja.classList.add('border-left');
                break;
                case 15: caja.firstElementChild.classList.add('border-center');
                break;
            } 
        }      
    })
}

const despintarCaja = (quien, puntos) => {
    document.querySelectorAll(quien).forEach(caja => {
        
        if(caja.id == 1) {
            switch(puntos+1) {
                case 1: caja.classList.remove('border-top');
                break;
                case 2: caja.classList.remove('border-right');
                break;
                case 3: caja.classList.remove('border-bottom');
                break;
                case 4: caja.classList.remove('border-left');
                break;
                case 5: caja.firstElementChild.classList.remove('border-center');
                break;
            }  
        }
        if (caja.id == 2) {
            switch(puntos+1) {
                case 6: caja.classList.remove('border-top');
                break;
                case 7: caja.classList.remove('border-right');
                break;
                case 8: caja.classList.remove('border-bottom');
                break;
                case 9: caja.classList.remove('border-left');
                break;
                case 10: caja.firstElementChild.classList.remove('border-center');
                break;
            }  
        }    
        if (caja.id == 3) {
            switch(puntos+1) {
                case 11: caja.classList.remove('border-top');
                break;
                case 12: caja.classList.remove('border-right');
                break;
                case 13: caja.classList.remove('border-bottom');
                break;
                case 14: caja.classList.remove('border-left');
                break;
                case 15: caja.firstElementChild.classList.remove('border-center');
                break;
            } 
        }      
    })
}

const sumarNosotros = () => {
    document.querySelector('.sumar-nosotros').addEventListener('click', (e) => {
        puntosNosotros++;
        console.log(puntosNosotros)
        pintarCaja('.nosotros .caja',puntosNosotros)
    });     
     
}

const restarNosotros = () => {
    document.querySelector('.restar-nosotros').addEventListener('click', (e) => {
        puntosNosotros--;
        console.log(puntosNosotros)
        despintarCaja('.nosotros .caja',puntosNosotros)
    });      
}

const sumarEllos = () => {
    document.querySelector('.sumar-ellos').addEventListener('click', (e) => {
        puntosEllos++;
        console.log(puntosEllos)
        pintarCaja('.ellos .caja',puntosEllos) 
    });      
    
}

const restarEllos = () => {
    document.querySelector('.restar-ellos').addEventListener('click', (e) => {
        puntosEllos--;
        console.log(puntosEllos)
        despintarCaja('.ellos .caja',puntosEllos) 
    });      
}





const god = () => {
    cantidadDePuntos();
    sumarNosotros()
    restarNosotros()
    sumarEllos()
    restarEllos();
}

god();