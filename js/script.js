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


/*======================================= Mascara de campos =======================================*/
/*======================================= Formulários =======================================*/

$(document).ready(function () {
    $('#user_phone').mask('(00) 0000-0000')
});

/*======================================= Função Validar E-Mail =======================================*/
/*======================================= Teste =======================================*/

const validateEmail = (email) => {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(email);
};

/*======================================= Envio do e-mail =======================================*/
/*======================================= Envio do e-mail Funciona e-mail correto padrão=======================================*/

const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message')

//Função enviar e-mail
const sendEmail = (e) => {
    e.preventDefault()
    //serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_kbezpx8', 'template_41bv5wc', '#contact-form', '5jrs-CXFsaJQYjBvT')
        .then(() => {

            //mostrar mensagem para usuário
            contactMessage.textContent = 'Mensagem enviada com sucesso ✅'
            contactMessage.style.color = "#91fe48";

            //remover mensagem após 5 segundos
            setTimeout(() => {
                contactMessage.textContent = ''
            }, 5000)

            //limpar formulário
            contactForm.reset()
        }, () => {
            contactMessage.textContent = 'Mensagem não foi enviada ❌'
            contactMessage.style.color = "#bb1515";
        })
}
contactForm.addEventListener('submit', sendEmail)

/*=======================================  =======================================*/
/*=======================================  =======================================*/

