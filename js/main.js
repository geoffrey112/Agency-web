const elemBurger = document.getElementById('buttonBurger');
const headerLeft = document.getElementById('headerLeft');
const nav = document.createElement('nav');
let statutNav = false;
headerLeft.after(nav);

function addMenuBurger(){
  if(statutNav === false){    
    nav.id = 'menuBurger';
    
    if(window.location.pathname === '/index.html'){
      nav.innerHTML = '<ul id="list-menu"><li><a href="index.html">Home</a></li><hr><li><a href="pages/destinations.html">Destinations</a></li><hr><li><a href="pages/termsConditions.html">Terms & Conditions</a></li><hr><li><a href="pages/contact.html">Contact</a></li></ul>';
    }else{
      nav.innerHTML = '<ul id="list-menu"><li><a href="../index.html">Home</a></li><hr><li><a href="destinations.html">Destinations</a></li><hr><li><a href="termsConditions.html">Terms & Conditions</a></li><hr><li><a href="contact.html">Contact</a></li></ul>';
    }
    
    nav.animate([
      {
        height : '0',
        marginTop : '-35px'
      },
      { 
        height : '150px',
        marginTop : '0' 
      },
    ], {
      duration : 400, fill : 'forwards'
    });
    statutNav = true;

  }else if(statutNav === true){

    nav.animate([
      { 
        height : '150px', 
        marginTop : '0' 
      },
      { 
        height : '0', 
        marginTop : '-35px'
      },
    ], {
      duration : 400, fill : 'forwards'
    });
    statutNav = false;
  }
}


elemBurger.addEventListener('click', addMenuBurger);


