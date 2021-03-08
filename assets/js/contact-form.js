    // Code from EmailJS documentation 

    const btn = document.getElementById('button');

    document.getElementById('form')
     .addEventListener('submit', function(event) {
       event.preventDefault();
    
       const serviceID = 'default_service';
       const templateID = 'template_tngtc2q';
    
       emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
          btn.value = 'Send';
          alert('Sent! Thanks for your message will get back to you shortly : ');
        }, (err) => {
          btn.value = 'Send Email';
          alert(JSON.stringify(err));
        });
    });

   