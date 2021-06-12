const menuItems = document.querySelector('.menu-items');
const openMenu = document.querySelector('.open-menu');

// This function toggles these classes so that the relevant css is applied.
function OpenClose(){
    menuItems.classList.toggle('active');
    openMenu.classList.toggle('active');
}

openMenu.addEventListener('click', OpenClose);
// This event listener is added so that when one of the nav links is clicked the menu also closes.
// I added the click listener on the ul element that wraps the links
//  instead of the individuals links because that is easier otherwise we could used a foreach loop.
const navLinks = document.querySelector(".nav-links");
navLinks.addEventListener('click', OpenClose);
