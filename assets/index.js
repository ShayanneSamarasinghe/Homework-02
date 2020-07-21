
var i = 0;
var txt =  "Hi! \n My Name is Shayanne. \n Welcome to my portfolio page. \n A little about me \n I am a graduate of the University of Ottawa and Sheridan College.\n I began my professional career as a casting director and production coordinator on tv and commercial productions in Toronto, Canada.\n During the pandemic of 2020 I decided it was time to learn some new skills. I’ve always been interested in coding/programming so I figured I would take the down time I had and further develop on those interests. Since May of 2020, I’ve completed several interesting programming projects and learned many aspects of front end and back end programming. I’m currently on my way to becoming a full stack developer.\n In my down time I watch movies, play with my dog and take photos. Follow me on IG if you wanna see some pics."
var speed = 60;

// function typeWriter() {
//   if (i < txt.length) {
//     document.getElementById("indexJumbotron").innerHTML += txt.charAt(i);
//     i++;
//     setTimeout(typeWriter, speed);
//   }
// }



function typeWriter() {
  if (i < txt.length) {
    if(txt.charAt(i) === "\"){
      document.getElementById("indexJumbotron").innerHTML += txt.charAt(i)+txt.charAt(i+1);
      i+=2
    }else{
    document.getElementById("indexJumbotron").innerHTML += txt.charAt(i);
    i++;
    
  }
  setTimeout(typeWriter, speed);
}


