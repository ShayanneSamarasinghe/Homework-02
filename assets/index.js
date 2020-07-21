
var i = 0;
var txt = 'This is some random text maynnnneee';
var speed = 60;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("indexJumbotron").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
