
var h1_elements = document.getElementsByTagName("h1");
console.log(h1_elements[0]);
console.log(h1_elements[0].innerText); // get element inner text

h1_elements[0].innerText="Hello IJSE 01"; // change inner text
h1_elements[1].innerText="Hello IJSE 02";

console.log(h1_elements[0].innerHTML); // get element inner html

h1_elements[0].innerText="<h2>Hello</h2>"; // it re-present it as a text
h1_elements[0].innerHTML="<h2>Hello</h2>"; // it re-present it as html


var subject1 = document.getElementById("subject1");
var subject2 = document.getElementById("subject2");
var subject3 = document.getElementById("subject3");

subject1.innerText = "HTML Bro";

let subject_elements = document.getElementsByClassName("mysubject");
console.log(subject_elements[0]);
console.log(subject_elements[1]);

subject_elements[1].innerText = "JS Bro";
subject_elements[1].innerHTML = "<i>JS Bro</i>";

let mynames = document.getElementsByName("myname");
console.log(mynames[0]);
console.log(mynames[0].innerText);
console.log(mynames[0].innerHTML);
mynames[0].innerText = "Typescript";

console.log(document.querySelector("h6 > p"));
console.log(document.querySelectorAll("h6 > p"));
console.log(document.querySelector("h6 > p").innerText);
document.querySelector("h6 > p").innerText="hello";
console.log(document.querySelectorAll("h6 > p"));
console.log(document.querySelectorAll("h6 > p")[1].innerText);
document.querySelectorAll("h6 > p")[1].innerText="hiiiiiiiiii";