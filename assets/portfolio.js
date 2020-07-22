
var i = 0;
var txt = 'This is some random text maynnnneee';
var speed = 60;

function typeWriter() {
  console.log("something something")
  if (i < txt.length) {
    document.getElementById("portfolioJumbotron").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
