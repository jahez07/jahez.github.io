function emailSend(){

    var userName = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "jahezjohn18950@gmail.com",
        Password : "A1C07BB890884E80EFCA45CA6DCBF6FF9BFC",
        To : 'jahezjohn18950@gmail.com',
        From : "jahezjohn18950@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );  
}