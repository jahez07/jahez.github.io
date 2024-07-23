function emailSend(){

    var userName = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    var messageBody = "Name" + userName +
    "<br/> Email" + email +
    "<br/> Message" + message;
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "22mca018@grd.edu.in",
        Password : "B9F2C7CA7FB411AE0AD5588CF35A3E775A8D",
        To : 'jahezjohn18950@gmail.com',
        From : "jahezjohn18950@gmail.com",
        Subject : "This is the subject",
        Body : messageBody
    }).then(
      message => alert(message)
    );  
}