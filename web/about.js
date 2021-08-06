console.log("hello world");

const ducky = document.querySelector('#ducky')

function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Thank you! Your form has been submitted')

}

function duckyAlert(evt){
	evt.preventDefault()

	alert("You really are so smart")

}

let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);
ducky.addEventListener('mouseover', duckyAlert)
