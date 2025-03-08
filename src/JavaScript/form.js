const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        e.target,
        EMAILJS_CONFIG.USER_ID
    ).then(
        (result) => console.log('Success:', result.text),
        (error) => console.log('Error:', error.text)
    );

    e.target.reset();
};
