//adding styling to list items
let pitch = document.getElementsByTagName("li");
for (let i = 0; i < pitch.length; i++) {
  pitch[i].className = "item";
  pitch[i].style.padding = "5px";
  pitch[i].style.background = "#6B7FD7";
  pitch[i].style.marginTop = "20px";
  pitch[i].style.marginBottom = "20px";
  pitch[i].style.textAlign = "center";
  pitch[i].style.width = "150px";

  let list = document.getElementById("list");
  list.style.color = "#BCEDF6";
  list.style.display = "table";
  list.style.margin = "0 auto";
  list.style.listStyleType = "none";
  list.style.textAlign = "center";
  list.style.width = "150px";
  list.style.height = "250px";
}

//Adding new welcoming into the h1 and implementing input
let user = prompt("Hi, What shall we call you");
let about = document.getElementById("about");
let welcome = document.getElementById("welcome");
welcome.textContent = "Welcome to Assignment 6 Inc. " + user + " !";
welcome.style.textAlign = "center";
welcome.style.padding = "20px";
about.textContent =
  "It is " +
  user +
  " right? " +
  "Haha of course I know, I'm a computer for data's sake. " +
  "Here is more about Assignment 6 Inc !";
about.style.textAlign = "center";

//Adding bottom paragraph and setting new attributes
let text = document.getElementsByTagName("body");
text[0].setAttribute("id", "para");
let main = document.getElementById("para");
let p = document.createElement("p");

main.appendChild(p);
p.textContent = "Nobody does it like Assignment 6 Inc.";
p.style.textAlign = "center";
p.style.color = "#DDFBD2";

//replace text inside list
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
one.textContent = "We offer things that have purpose";
two.textContent = "Our stuff is great";
three.textContent = "We are totally a legitimate business";
four.textContent = "We are not shady at all";
