/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))




/* ---------------- GSAP ANIM ----------- */


gsap.from('.megbizhato', 1.5, {opacity: 0, y:-400, delay: .1})
gsap.from('.effektiv', 1.5, {opacity: 0, x:400, delay: .2})
gsap.from('.odaado', 1.5, {opacity: 0, x:-300, delay: .1})
gsap.from('.TDLOGOb', 1.5, {opacity: 0, y:-500, delay: 1})
gsap.from('.TDLOGOs', 1.5, {opacity: 0, y:-500, delay: 1})

/* ------------------ GSAP AMIN VÉGE -------- */



/* ---------- ANIM ------ */

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } 
    });
});


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));