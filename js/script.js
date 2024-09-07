/*
    Easy Digital 
    Site v.1
    August 2024
*/

/*======================================= Rolagem da Página =======================================*/
/*======================================= Ao escolher link, fecha menu Collapse =======================================*/
$(".nav-link").on("click", function () {
    $('.navbar-collapse').collapse('hide');
});

/*======================================= Rolagem da Página =======================================*/
/*======================================= Alteração de cor do banner =======================================*/

$(window).on('scroll', function () {
    var scrollTop = $(window).scrollTop();
    if (scrollTop >= 100) {
        $('body').addClass('fixed-header');
    } else {
        $('body').removeClass('fixed-header')
    }
});

/*======================================= Animação - Efeito digitação =======================================*/
/*======================================= Banner - Seja bem vindo =======================================*/
$(document).ready(function () {
    new Typed('#type-it', {
        strings: ['Easy!', 'Digital!'],
        typeSpeed: 100,
        loop: true
    });
});

/*======================================= e-mail =======================================*/
/*======================================= Envio do e-mail =======================================*/
const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()
    //serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_kbezpx8','template_fia6p1r','#contact-form','5jrs-CXFsaJQYjBvT')
    .then(() =>{
        contactMessage.textContent = 'Mensagem enviada com sucesso '

        setTimeout(() =>{
            contactMessage.textContent = ''
        }, 5000)

        contactForm.reset()
    
    })
}
contactForm.addEventListener('submit', sendEmail)