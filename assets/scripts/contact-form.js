// Code from EmailJS documentation and Slack Questions

const button = document.getElementById('button');
const contactForm = document.getElementById('form');

//Setting variables for serviceID and templateID
const serviceID = 'default_service';
const templateID = 'template_tngtc2q';

//Code from emailJS to set up the initial function
contactForm.addEventListener('submit', function (event) {
  event.preventDefault(); //preventing default submit 

  button.value = 'Sending...'; //displaying new button value when sending 

  emailjs.sendForm(serviceID, templateID, this) //sending the form
    .then(() => {

      button.value = 'Submit';

      //get the name of the user from input field
      let userName = document.getElementById('name');


      //alert shows to the user when the message has been sent 
      alert(`Thank you for getting in touch ${userName.value}. Your message has been sent! We will be in touch soon!`);

      //reset the form on submit 
      contactForm.reset();

    }, (err) => {
      //error message if the email is not being sent
      button.value = 'Submit';
      alert(alert(JSON.stringify(err)`Sorry ${userName.value} something went wrong, please try again`));
    });
});