//Materialize INIT
M.AutoInit();
//AOS INIT
AOS.init();

//TypedJs
var typed = new Typed('.typed', {
    strings: ['<span class="yellow-text">npm</span> run porfolio', '<span class="yellow-text">Hello</span> World'],
    typeSpeed: 75,
    backSpeed: 35,
    backDelay: 1000,
    startDelay: 1000,
    loop: true,
    //smartBackspace: true // Default value
  });

  var typed = new Typed('.contact-text-typed', {
    strings: ['<span class="yellow">npm</span> run contact<br/>^1000 `<span class="yellow">Facundo is waiting a message...</span><br/>` ^1000\n `<span class="green">Thank u!...</span>`'],
    typeSpeed: 75,
    backSpeed: 35,
    backDelay: 1000,
    startDelay: 1000,
    loop: true,
    //smartBackspace: true // Default value
  });


//Reveal

/*ScrollReveal().reveal('.personal', { delay: 200, interval: 300, scale: 0});
ScrollReveal().reveal('.universidad',  { delay: 200, interval: 300, scale: 0});
ScrollReveal().reveal('.cursos',  { delay: 200, interval: 300, scale: 0});
ScrollReveal().reveal('.repo',  { delay: 200});
ScrollReveal().reveal('.timeline-event',  { delay: 200, interval: 300, scale: 0});*/