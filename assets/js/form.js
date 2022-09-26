'use strict';
const btnForm = document.getElementById('sendMessage');
 const ResetForm = () => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    name.innerHTML = '';
    email.innerHTML = '';
    message.innerHTML = '';
 };
   

btnForm.addEventListener('click', function(e){
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    window.location.href=`mailto:amarcosestevez@gmail.com?subject=envioDesdeFormulario&body=Nombre%3A${name}%0ACorreo%3A${email}%0AMensaje%3A${message}`;
    ResetForm();

});

