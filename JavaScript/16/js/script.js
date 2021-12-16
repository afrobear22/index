  //#######################################################\\
 //=========================================================\\
// ===                        DOM                         ===\\
// DOM - Document Object Model \\

// returning element .getElementById();
// var hello = document.getElementById("hello");

// console.log(hello);
// console.dir(hello);

// dokolku ne raboti CONSOLE.DIR togas iskoristi:
// console.log({hello});   <---- ja vrsi istata funkcija kako dir...

// hello.innerHTML = "Hello World!";

//// mini vezba \\\\

// var lorem = document.getElementById("lorem")

// console.dir(lorem);

// lorem.innerHTML = "lorem20lorem ipsum lorem20lorem ipsumlorem20lorem ipsumlorem20lorem ipsumlorem20lorem ipsumlorem20lorem ipsumlorem20lorem ipsumlorem20lorem ipsum";

//#######################################################\\
// returning element .getElementsByClassName();

// var date = document.getElementsByClassName("date");

// console.log(date);
// date[0].innerHTML = new Date();
// date[0].innerHTML = new Date().toLocaleTimeString();

//#######################################################\\
// returning element .getElementsByTagName();

// var div = document.getElementsByTagName("div");
// console.log("div", div);
// div[0].style.width = "100px";
// div[0].style.height = "100px";
// div[0].style.backgroundColor = "red";

// returning all element .querySelector(); or .querySelectorAll();

// var yourName = document.querySelector("div");
// console.log("blazo", blazo);


// var yourName = document.querySelectorAll("div");
// console.log("blazo", {blazo});

//// mini vezba \\\\

// var divs = document.querySelectorAll("div");

// for (var i = 0; i < divs.length; i++) {
//   let singleDiv = divs[i];
//   singleDiv.style.width = "100px"
//   singleDiv.style.height = "100px"
//   singleDiv.style.display = "inline-block"
//   singleDiv.style.backgroundColor = "red"
// }

//#######################################################\\

// var button = document.querySelector(".click")
// var result = document.querySelector(".result")

// // button.addEventListener("click", function (){
// //   result.innerHTML = new Date();
// // });

// // +++++ na drug nacin istovo +++

// function ReturnDate() {
//   result.innerHTML = new Date ();
// }

// button.addEventListener("click", ReturnDate);

// let _name = document.querySelector("span");
// console.log("_name", _name);

// _name.setAttribute("id", "name");
// _name.setAttribute("class", "_name _second_class");
// _name.removeAttribute("id");
// _name.removeAttribute("class");



// var h2 = document.createElement("h2")
// // h2.innerHTML = "Peroooo"
// h2.appendChild(document.createTextNode("Pero Perovski"));
// document.body.appendChild(h2);
// console.log("h2", h2);