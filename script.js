

var menuBtn = document.querySelector('.menu-icon');
    menu = document.querySelector('header ul');
   /*  menu.style.display = "none"; */

menuBtn.addEventListener('click',  desplegarMenu)

/* function desplegarMenu(event){

    if(menu.style.display == 'none'){
        menu.style.display = 'block';    // Aqui el javascript lo que hace es inyectar estilos en css, lo cual no está mal pero no es lo mejor
    }else{                               // ya que puede entrar en conflicto con los @media del propio css
        menu.style.display = 'none'
    }
    
} */


function desplegarMenu(event){
   if( menu.className == ''){           // Aqui javascript lo que hace es inyectar una clase en el html, lo cual es más acertado.
        menu.className = "show";
   }else{
       menu.className = "";
   }
}




