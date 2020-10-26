let h1 = document.getElementById("#first");
console.log(h1);

h1 = document.getElementsByClassName("special")[0];
console.log(h1);

h1 = document.querySelector(".special");
console.log(h1);

h1 = document.querySelectorAll(".special")[0];
console.log(h1);

h1 = document.getElementsByTagName("p")[0];
console.log(h1);

h1 = document.querySelector('p');
console.log(h1);

h1 = document.querySelectorAll('p')[0];
console.log(h1);

h1 = document.querySelector('h1 + p');
console.log(h1);