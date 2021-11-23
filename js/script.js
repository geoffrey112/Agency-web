let elemBurger = document.getElementById('buttonBurger');
let elemHtml = document.getElementById('headerLeft');
let nav = document.createElement('nav');
let statut = false;

function addMenuBurger(){
  if(statut === false){
    nav.id = 'menuBurger';
    nav.innerHTML = '<ul id="list-menu"><li><a href="index.html">Home</a></li><hr><li><a href="pages/destinations.html">Destinations</a></li><hr><li><a href="pages/termsConditions.html">Terms & Conditions</a></li><hr><li><a href="pages/contact.html">Contact</a></li></ul>';
    elemHtml.after(nav);
    statut = true;
  }else if(statut === true){
    nav.remove();
    statut = false;
  }
}


elemBurger.addEventListener('click', addMenuBurger);


