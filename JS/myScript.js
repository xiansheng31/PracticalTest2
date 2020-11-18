alert("You're about visit my E-resume but first...");

var name = prompt("What is your name?");

if (name.length != 0){
	alert("Hello, " + name + ". Welcome to my E-resume!");  
}
else {
  alert("Don't be shy!")
}

//window.onbeforeunload = function(){
//  return 'Are you sure you want to leave?';
//};



//var x = confirm ("Do you want to leave this page");
//
//if (x == true) {
//	alert("Thanks for visiting!");
//}
//if (x == false) {
//	alert("Thank you");
//}