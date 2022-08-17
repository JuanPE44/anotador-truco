
const contPuntaje = document.querySelector('.contenedor-puntaje');
const tablero15 = document.querySelector('.tablero-15');
const tablero30 = document.querySelector('.tablero-30');
const boton15 = document.getElementById(15);
const boton30 = document.getElementById(30);
const seGano = document.querySelector('.contenedor-seGano');
const btnSeGano = document.querySelector('.seGano button');

let seJuega15 = false;
let seJuega30 = false;

let puntosNosotros = 0;
let puntosEllos = 0;
let puntosCajaNosotros = 0;
let puntosCajaEllos = 0;
let ganador = false;


const cantidadDePuntos = () => {
    
    boton15.addEventListener('click', (e) => {
        contPuntaje.style.display = 'none';
        tablero15.style.display = 'flex';
        seJuega15 = true;
    })
    
    boton30.addEventListener('click', (e) => {
        contPuntaje.style.display = 'none';
        tablero30.style.display = 'flex';
        seJuega30 = true;
    })    
}

const pintarCaja = (quien, puntos, nosotros) => {
    nosotros ? puntosCajaNosotros++ : puntosCajaEllos++;
    nosotros ? puntosCaja = puntosCajaNosotros : puntosCaja = puntosCajaEllos;
    console.log(puntosCaja)
    
    document.querySelectorAll(quien).forEach(caja => {
        
        
        
        if((caja.id == 1 && puntos>=0) || (caja.id == 2 && puntos>5) || (caja.id == 3 && puntos>10)) {
          
            switch(puntosCaja) {
                case 1: caja.classList.add('border-top');
                break;
                case 2: caja.classList.add('border-right');
                break;
                case 3: caja.classList.add('border-bottom');
                break;
                case 4: caja.classList.add('border-left');
                break;
                case 5: caja.firstElementChild.classList.add('border-center'); 
                        nosotros ? puntosCajaNosotros = 0 : puntosCajaEllos = 0;                                                                                                               
                break;
                              
            }  
        }
              
    })
    
}

const despintarCaja = (quien, puntos, nosotros) => {
    
    nosotros ? puntosCajaNosotros-- : puntosCajaEllos--;
    if(puntosCajaNosotros == -1) {puntosCajaNosotros = 4}
    if(puntosCajaEllos == -1) {puntosCajaEllos = 4}
    nosotros ? puntosCaja = puntosCajaNosotros : puntosCaja = puntosCajaEllos;
    
    document.querySelectorAll(quien).forEach(caja => {
                        
        if((caja.id == 1 && puntos<5) || (caja.id == 2 && puntos>=5 && puntos<10) || (caja.id == 3 && puntos>=10 && puntos<15)) {
          
            switch(puntosCaja+1) {
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
              
    })
    
    
}

const sumarNosotros = () => {
    document.querySelector('.sumar-nosotros').addEventListener('click', (e) => {
        puntosNosotros++;
        ganar(puntosNosotros, true)
        pintarCaja('.nosotros .caja',puntosNosotros, true)
    });     
     
}

const restarNosotros = () => {
    document.querySelector('.restar-nosotros').addEventListener('click', (e) => {
        puntosNosotros--;
        
        despintarCaja('.nosotros .caja',puntosNosotros, true)
    });      
}

const sumarEllos = () => {
    document.querySelector('.sumar-ellos').addEventListener('click', (e) => {
        puntosEllos++;
        ganar(puntosEllos, false)
        pintarCaja('.ellos .caja',puntosEllos, false) 
    });      
    
}

const restarEllos = () => {
    document.querySelector('.restar-ellos').addEventListener('click', (e) => {
        puntosEllos--;
        
        despintarCaja('.ellos .caja',puntosEllos, false) 
    });      
}


const ganar = (puntos, nosotros) => {
    if(seJuega15) {
        if(puntos == 15) {
            const p = document.querySelector('.seGano p');

            ganador = true;        
            seGano.style.display = 'flex';            
            p.innerHTML = `${nosotros ? 'Ganamos nosotros' : 'Ganaron ellos'} ${nosotros ? puntosNosotros: puntosEllos} a ${!nosotros ? puntosNosotros: puntosEllos}`;
        } 
    }
    if(seJuega30) {
        if(puntos == 30) {
            ganador = true;
        } 
    }
}

const sacarClases = () => {
    document.querySelectorAll('.caja').forEach(caja => {
        caja.classList.remove('border-top','border-right','border-bottom','border-left');
        caja.firstElementChild.classList.remove('border-center'); 
    })
}

const reiniciar = () => {
    btnSeGano.addEventListener('click', (e)=> {
        puntosNosotros = 0;
        puntosEllos = 0;
        puntosCajaNosotros = 0;
        puntosCajaEllos = 0;
        ganador = false;
        seGano.style.display = 'none';  
        sacarClases()
    });
}




const god = () => {
    cantidadDePuntos();
    sumarNosotros();
    restarNosotros();
    sumarEllos();
    restarEllos();
    reiniciar();
}

god();