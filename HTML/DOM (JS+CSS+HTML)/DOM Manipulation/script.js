//SELECT
let tag = document.getElementById("highlight");
//MANIPULATE
tag.style.color = 'blue';
tag.style.border = '10px solid red';
tag.style.fontSize = '70px';
tag.style.background = 'yellow';
tag.style.marginTop = '200px';

//SEPARATION OF CONCERNS - blog.teamtreehouse.com
tag.classList.add("some-class");
tag.classList.remove("some-class");
tag.classList.toggle("some-class");
