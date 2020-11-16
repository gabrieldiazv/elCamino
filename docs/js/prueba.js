

  const pushbar =   new Pushbar({
    blur:true,
    overlay:true,
  });

//open a pushbar
pushbar.open('mypushbar1');	
//close all pushbars
pushbar.close(); 


// codigo gabo cerrar el menu
const cerrar = document.querySelector('.header__menu-enlaces')


iniciar();
function iniciar(){
  cerrar.addEventListener('click', cerro);
}

function cerro(e){
  pushbar.close();
}

