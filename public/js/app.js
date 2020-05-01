/*
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
*/

/*
console.log("Hello World");

$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 200) {
      //document.getElementsByClassName("hp-links").style.color = "black";

	    $(".hp-links").css("color" , "black");
	  }

	  else{
      $(".hp-links").css("color" , "white");  
      //document.getElementsByClassName("hp-links").style.color = "white";
	
	  }
  })
})

*/


window.onscroll = () => {
  const nav = document.querySelector('#home-nav');
  const igIcon = document.querySelector('.sm-logo');
  const hlink = document.querySelector('#hp-h-link');
  const llink = document.querySelector('#hp-l-link');
  const alink = document.querySelector('#hp-a-link');
  const clink = document.querySelector('#hp-c-link');
  const mlink = document.querySelector('#hp-m-link');
  //const iglink = document.querySelector('#hp-ig-link');
  if(this.scrollY <= 10) {
      nav.className = '';
      hlink.className = '';
      llink.className = '';
      alink.className = '';
      clink.className = '';
      mlink.className = '';
      igIcon.style.filter = "invert(100%)";
      //iglink.className = '';

      //navlinks.className = 'hp-links';
  } else{
      nav.className = 'scroll';
      hlink.className = 'scroll';
      llink.className = 'scroll';
      alink.className = 'scroll';
      clink.className = 'scroll';
      mlink.className = 'scroll';
      //iglink.className = 'scroll';
      igIcon.style.filter = "invert(0%)";

      //navlinks.className='op-links';
  }
};

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}


function showSlides(n) {
  console.log(n)
  var i;
  slideIndex = n
  var slides = document.getElementsByClassName("mySlides");
  //var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {

      slides[i].style.display = "none";
      
  }
  slides[slideIndex-1].style.display = "block";

}

//33406022-3842-4bbd-be12-8218941af44d

//elasticemail pw: 5787F9C73F6254C959F1A8A2FDD3615E0B17

//elasticemail port: 2525
// server: smtp.elasticemail.com



function sendEmail() {
    Email.send({
    SecureToken : "41b2f773-962e-46e5-87b2-1b9a9339c0ec",
    To : 'kevinliu428@gmail.com',
    From : "keepskatingskateschool@gmail.com",
    Subject : "test email",
    Body : "test test test",
    }).then(
      message => alert("mail sent successfully")
    );
}

function changeText(obj){
  obj.innerText = "Can't seem to get a trick quite right? Or just want to get better and form/reinforce solid skateboarding habits? Join one of our experienced instructors for some invaluable one-on-one instruction. Our instructors are exceptional at breaking down tricks into small parts and identifying the fine adjustments you need to master them. These sessions can be anywhere from the local skatepark to your own driveway."
}