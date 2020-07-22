
var i = 0;
var txt =  "This is my portfolio ** ** Please check out my group projects ${nutShell} and ${Page Exchange} ** ** If you'd like feel free to check out my other projects as well. ** ** You can [click through the repo, watch the demo video or run the application].  "
var speed = 60;
var newLine = "<br>"
var spanOpen =  "<span class='templateLiteral'>"
var spanClose = "</span>"
var spanOpen2 =  "<span class='array'>"
var spanClose2 = "</span>"



function typeWriter() {
    if (i < txt.length) {
      if(txt.charAt(i) === "*"){
        document.getElementById("portfolioJumbotron").innerHTML += newLine;
        i+=2
      }else if (txt.charAt(i) === "$"){
      const end = txt.indexOf("}", i) + 1;
      const span = spanOpen + txt.substring(i, end) + spanClose
      document.getElementById("portfolioJumbotron").innerHTML += span;
      i = end;
    }else if (txt.charAt(i) === "["){
      const end = txt.indexOf("]", i) + 1;
      const span = spanOpen2 + txt.substring(i, end) + spanClose2
      document.getElementById("portfolioJumbotron").innerHTML += span;
      i = end;
    }else{
      document.getElementById("portfolioJumbotron").innerHTML += txt.charAt(i);
      i++;
    }
    setTimeout(typeWriter, speed);
  }
}