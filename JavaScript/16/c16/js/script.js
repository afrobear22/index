// ########################################################################
// ########################################################################
// DOM - Document Object Model

// returning elements [getElementById]
// window.onload = function () {
//     var hello = document.getElementById("hello");
//     // var prgrph = document.getElementById("prgrph");
//     console.log({
//         hello
//     });
// }

// window.addEventListener("load", function() {
//     var hello = document.getElementById("hello");
//     // var prgrph = document.getElementById("prgrph");
//     console.log({hello});
// });
// console.dir(hello);
// hello.innerHTML = "Hello World!";
// prgrph.innerHTML = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.";

// returning elements [getElementByClassName]
// var date = document.getElementsByClassName("date");
// console.log(date);
// date[0].innerHTML = new Date().toLocaleDateString();

// returning elements [getElementByTagName]

// var div = document.getElementsByTagName("div");
// console.log("div", div);
// div[0].style.width = "100px";
// div[0].style.height = "100px";
// div[0].style.backgroundColor = "red";

// returning elements [querySelector/All]

// var yourName = document.querySelector(".name");
// var yourName = document.querySelectorAll(".name");
// console.log("yourName", {yourName});

// var divs = document.querySelectorAll("div");
// for(var i = 0; i < divs.length; i++) {
//     let singleDiv = divs[i];
//     singleDiv.style.width = "100px";
//     singleDiv.style.height = "100px";
//     singleDiv.style.display = "inline-block";
//     singleDiv.style.backgroundColor = "red";
//     singleDiv.innerHTML = `This div holds an index number of ${i}`;
// }

// var button = document.querySelector(".button");
// var result = document.querySelector(".result");

// button.addEventListener("click", function() {
//     result.innerHTML = new Date();
// });

// function ReturnDate() {
//     result.innerHTML = new Date();
// }

// button.addEventListener("click", ReturnDate);

// let _name = document.querySelector("span");
// console.log("_name", _name);

// _name.setAttribute("id", "name");
// _name.setAttribute("class", "_name _second_class");
// _name.removeAttribute("id");
// _name.removeAttribute("class");

// _name.classList.add("first-class");
// _name.classList.remove("first-class");

// _name.addEventListener("click", function (event) {
//     this.classList.add("color-me");
//     event.stopPropagation();
// });

// window.addEventListener("click", function () {
//     console.log("Clicked on window");
//     _name.classList.remove("color-me");
// });

// var h2 = document.createElement("h2");
// h2.appendChild(document.createTextNode("Pero Perovski"));
// h2.innerHTML = "Pero Perovski";
// console.log("h2", h2);

// var _element_holder = document.querySelector(".element-holder");
// var _body = document.body;

// _element_holder.appendChild(h2);
// _body.appendChild(h2);


let programming_languages = ["Python", "C++", "Java", "Golang", "C"];
let render = document.querySelector(".render");

const RenderLanguagesInList = () => {
    var ol = document.createElement("ol");
    for(var i = 0; i < programming_languages.length; i++) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(programming_languages[i]));
        ol.appendChild(li);
    }
    document.body.appendChild(ol);
}

render.addEventListener("click", RenderLanguagesInList);