//Items for input
const emailInput = document.querySelector('.email-input');
const firstInput = document.querySelector('#main-input-of-email');
const text1 = document.querySelector('.input-1-text');
  

//when clicked funtion of email
 firstInput.addEventListener('click', function() {
 	emailInput.style.borderBottom = "2px solid #00B4D8";
 	text1.style.color = "#1b95e0";
 }) ;
  
 //when clicked out function of email
 window.addEventListener('mouseup', (event) => {
 	if (event.target != firstInput) {
 		emailInput.style.borderBottom = "2px solid #B7B4A4";
 		text1.style.color = "#8899a6";
 	}
 })

// PASSWORD EVENTS CODE LINES HERE
const passwordInput = document.querySelector('.password-input');
const secondInput = document.querySelector('#main-input-of-password');
const text2 = document.querySelector('.input-2-text');

//when clicked funtion of pssword
 secondInput.addEventListener('click', function() {
 	passwordInput.style.borderBottom = "2px solid #00B4D8";
 	text2.style.color = "#1b95e0";
 }) ;

 //when clicked out function of email
 window.addEventListener('mouseup', (event) => {
 	if (event.target != secondInput) {
 		passwordInput.style.borderBottom = "2px solid #B7B4A4";
 		text2.style.color = "#8899a6";
 	}
 });