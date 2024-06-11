/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
     contactMessage = document.getElementById('contact-message')


const sendEmail = (e) => {
     e.preventDefault()

     //serviceID - templateID - #form - publickey
     emailjs.sendForm('service_2auto5','template_17v3rfe','#contact-form', 'JND6Q48YISQrUWv3_')
     .then(() => {
          //show error message
          contactMessage.textContent = 'Message not sent (service error)'

          //remove message after five second
          setTimeout(() => {
               contactMessage.textContent = ''
          }, 5000)

          //Clear input file
     contactForm.reset()

     }, () => {
     //Show sent Message
     contactMessage.textContent = 'Message sent successfully'
})
     
}
contactForm.addEventListener('submit', sendEmail)