// Your code goes here
// mouseover
// mouseout
// keydown
// load
// resize
// dblclick
// click
// focus
// blur
// mousemove

// ==================== loading the page alert using 'load'
window.addEventListener("load", function() {
  //alert("Welcome to Fun Bus!!!");
});

// ==================== Changing window color using 'resize'
window.addEventListener("resize", function(event) {
  // if current width is 500px or less, change background
  if (window.outerWidth <= 400) {
    console.log("updating style");
    document.body.style.backgroundColor = "lightblue";
  } else {
    document.body.style.backgroundColor = "white";
  }
});

// ==================== log mouse location to console using 'mousemove'
document.addEventListener("mousemove", function(event) {
  console.log(`Mouse Location: X: ${event.clientX} Y: ${event.clientY}`);
});

// ==================== updated navigation
//changed nav bar color
const mainNav = document.querySelector(".main-navigation");
mainNav.style.backgroundColor = "#FFEBCD";

//changed a tag color using 'dblclick'
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(item => {
  //changed a tag color using 'dblclick'
  item.addEventListener("dblclick", function() {
    item.style.fontWeight = "bold";
    item.style.color = "red";
  });
  // updated anchor tags using 'focus' for keyboard navigation
  item.addEventListener("focus", function() {
    item.style.color = "blue";
  });

  // using 'blur' previously focused element resets to normal style.
  item.addEventListener("blur", function() {
    item.style.color = "black";
  });
});

//added animation to Fun Bus heading using 'keydown' on 'F'
const mainHeading = document.querySelector(".logo-heading");
document.addEventListener("keydown", function(event) {
  if (event.key === "f") {
    mainHeading.style.fontSize = "60px";
  }
});

// ==================== Pick your Destination image using 'mouseover' and 'mouseout'
const desImage = document.querySelector(".content-destination img");
desImage.addEventListener("mouseover", function() {
  desImage.style.opacity = 0.3;
  console.log("Mouse is over bus");
});
desImage.addEventListener("mouseout", function() {
  desImage.style.opacity = 1;
  console.log("Mouse is out of bus");
});

// ==================== sign me up button using 'click'
const signUpBtn = document.querySelectorAll(".btn");
signUpBtn.forEach(item => {
  item.addEventListener("click", function() {
    prompt("Enter Your Email:");
  });
});
