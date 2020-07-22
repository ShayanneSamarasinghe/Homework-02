
var i = 0;
var txt =  "Hi! ** My Name is ${Shayanne}. ** Welcome to my portfolio page. ** A little about me: ** I am a graduate of the ${University of Ottawa} and ${Sheridan College}.** I began my professional career as a ${casting director} and ${production coordinator} on tv and commercial productions in ${Toronto, Canada}.** During the pandemic of 2020 I decided it was time to learn some new skills. I’ve always been interested in ${coding/programming} so I figured I would take the downtime I had and further build on that curiosity. Since May of 2020, I’ve completed several interesting programming projects and learned many aspects of front end and back end programming. I’m currently on my way to becoming a full stack developer.** In my downtime I [watch movies, play with my dog and take photos]."
var speed = 60;
var newLine = "<br>"
var spanOpen =  "<span class='templateLiteral'>"
var spanClose = "</span>"
var spanOpen =  "<span class='array'>"
var spanClose = "</span>"



function typeWriter() {
    if (i < txt.length) {
      if(txt.charAt(i) === "*"){
        document.getElementById("indexJumbotron").innerHTML += newLine;
        i+=2
      }else if (txt.charAt(i) === "$"){
      const end = txt.indexOf("}", i) + 1;
      const span = spanOpen + txt.substring(i, end) + spanClose
      document.getElementById("indexJumbotron").innerHTML += span;
      i = end;
    }else if (txt.charAt(i) === "["){
      const end = txt.indexOf("]", i) + 1;
      const span = spanOpen + txt.substring(i, end) + spanClose
      document.getElementById("indexJumbotron").innerHTML += span;
      i = end;
    }else{
      document.getElementById("indexJumbotron").innerHTML += txt.charAt(i);
      i++;
    }
    setTimeout(typeWriter, speed);
  }
}


