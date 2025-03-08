import emailjs from 'emailjs-com';

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_6aq6zyd', 'template_t0k8mqr', e.target, '0VWOF1eua2vlU14fs')
    .then((result) => {
        console.log('Success:', result.text);
    }, (error) => {
        console.log('Error:', error.text);
    });

  e.target.reset();
};
