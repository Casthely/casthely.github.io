const emailInput = document.querySelector('#emailInput');
const resultMessage = document.querySelector('#email-valido');
const emailForm = document.querySelector('#contact-form');
const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message');

emailForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const email = emailInput.value;

    const isValid = validateEmail(email);

    if (isValid) {
        resultMessage.textContent = 'Email esta correto';
        contactMessage.textContent = 'email enviado';
        resultMessage.style.color = "#15ff00";
        contactMessage.style.color = "#15ff00";
        setTimeout(() => {
            resultMessage.textContent = ''
            contactMessage.textContent = ''
        }, 5000)

        contactForm.reset()

    } else {
        resultMessage.textContent = "Formato de email inválido";
        contactMessage.textContent = 'Email não foi enviado';
        resultMessage.style.color = "Yellow";
        contactMessage.style.color = "Yellow";
        setTimeout(() => {
            resultMessage.textContent = ''
            contactMessage.textContent = ''
        }, 5000)
    }
});
/*======================================= e-mail =======================================*/

/*======================================= Envio do e-mail =======================================*/
/*======================================= Envio do e-mail Funciona e-mail correto padrão=======================================*/

const contatoForm = document.getElementById('contact-form'),
    contatoMensagem = document.getElementById('contact-message')

//Função enviar e-mail
const sendEmail = (e) => {
    e.preventDefault()
    //serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_4l9jo6q', 'template_41bv5wc', '#contact-form', '5jrs-CXFsaJQYjBvT')
        .then(() => {
            contatoMensagem.style.color = "Yellow";
            contatoMensagem.textContent = 'Mensagem enviada com sucesso '

            setTimeout(() => {
                contatoMensagem.textContent = ''
            }, 5000)

            contatoForm.reset()

        })

}
contatoForm.addEventListener('submit', sendEmail)

//Easy Digital emailjs.sendForm('service_4l9jo6q', 'template_fia6p1r', '#contact-form', '5jrs-CXFsaJQYjBvT')
//Teste        emailjs.sendForm('service_kbezpx8', 'template_41bv5wc', '#contact-form', '5jrs-CXFsaJQYjBvT')