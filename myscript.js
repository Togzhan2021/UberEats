//Get the button
var mybutton = document.getElementById("topBtn");

// When the user scrolls down 25px from the top of the document, show the button
window.onscroll = function(){
	scrollFunction();
}

function scrollFunction(){

	if(document.body.scrollTop > 25 || document.documentElement.scrollTop > 25){
		mybutton.style.display = "block";
	}else{
		mybutton.style.display = "none";
	}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction(){
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}