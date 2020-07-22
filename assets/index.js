
var i = 0;
var txt =  "Hi! ** My Name is ${Shayanne}. ** Welcome to my portfolio page. ** A little about me: ** I am a graduate of the ${University of Ottawa} and ${Sheridan College}.** I began my professional career as a ${casting director} and ${production coordinator} on tv and commercial productions in ${Toronto, Canada}.** During the pandemic of 2020 I decided it was time to learn some new skills. I’ve always been interested in ${coding/programming} so I figured I would take the down time I had and further develop on those interests. Since May of 2020, I’ve completed several interesting programming projects and learned many aspects of front end and back end programming. I’m currently on my way to becoming a full stack developer.** In my down time I [watch movies, play with my dog and take photos] Follow me on IG if you wanna see some pics."
var speed = 60;
var newLine = "<br>"

// function typeWriter() {
//   if (i < txt.length) {
//     document.getElementById("indexJumbotron").innerHTML += txt.charAt(i);
//     i++;
//     setTimeout(typeWriter, speed);
//   }
// }



function typeWriter() {
  console.log("Something again")
    if (i < txt.length) {
      console.log("something something again")
      if(txt.charAt(i) === "*"){
        console.log("something")
        document.getElementById("indexJumbotron").innerHTML += newLine;
        i+=2
      }else{
      document.getElementById("indexJumbotron").innerHTML += txt.charAt(i);
      i++;
      
      }
    setTimeout(typeWriter, speed);
  }
}


