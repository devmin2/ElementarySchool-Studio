// Sticy Nav Script
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("nav");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        nav.classList.add("sticky")
    } else {
        nav.classList.remove("sticky");
    }
}

// Scroll Show and Hide
function view(){
	const scrollnav = document.querySelectorAll('.nav__link');
 	const winTop = document.documentElement.scrollTop;
  
  scrollnav.forEach((i) => {
  	const navTop = i.offsetTop-0;
    
    if( navTop <= winTop )
    	i.classList.add('scroll')
    else {
        i.classList.remove('scroll');
        }});
}

window.addEventListener('scroll', () => {
	view()
})