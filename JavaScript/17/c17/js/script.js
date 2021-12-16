// ===============================================================================================
// ===============================================================================================
// Dom excercise

// var colors = ["red", "green", "blue", "cyan", "magenta", "yellow", "karbon"];
// var colors_2 = [{
//         name: "pero"
//     },
//     {
//         name: "pero 2"
//     },
// ];
// console.log("colors", colors);

// colors.forEach((prv_param) => {
//     console.log("prv_param", prv_param);
// });
// colors_2.forEach((prv_param) => {
//     console.log("prv_param", prv_param.name);
// });

// let Movies = [{
//         title: "Pulp Fiction",
//         year: 1994,
//         time: "2h35min",
//         genre: ["crime", "comedy", "thriller"],
//         cast: ["Samuel L. Jackson", "Uma Thurman", "John Travolta"],
//     },
//     {
//         title: "Mad Max",
//         year: 1994,
//         time: "2h35min",
//         genre: ["crime", "comedy", "thriller"],
//         cast: ["Samuel L. Jackson", "Uma Thurman", "John Travolta"],
//     },
//     {
//         title: "Star Wars",
//         year: 1994,
//         time: "2h35min",
//         genre: ["crime", "comedy", "thriller"],
//         cast: ["Samuel L. Jackson", "Uma Thurman", "John Travolta"],
//     },
//     {
//         title: "All That Jazz",
//         year: 1994,
//         time: "2h35min",
//         genre: ["crime", "comedy", "thriller"],
//         cast: ["Samuel L. Jackson", "Uma Thurman", "John Travolta"],
//     },
//     {
//         title: "The Power of the Dog",
//         year: 1994,
//         time: "2h35min",
//         genre: ["crime", "comedy", "thriller"],
//         cast: ["Samuel L. Jackson", "Uma Thurman", "John Travolta"],
//     },
//     {
//         title: "Drive My Car",
//         year: 1994,
//         time: "2h35min",
//         genre: ["crime", "comedy", "thriller"],
//         cast: ["Samuel L. Jackson", "Uma Thurman", "John Travolta"],
//     }
// ];

// console.log("Movies", Movies);

// let button = document.querySelector("#button");

// const GenerateTable = () => {
//     var table = document.createElement("table");
//     table.border = "1";
//     table.cellPadding = "10";
//     table.cellSpacing = "5";
//     table.style.marginTop = "20px";

//     var keys = Object.keys(Movies[0]);

//     var thead = document.createElement("thead");
//     var tablehead_row = document.createElement("tr");

//     for (var i = 0; i < keys.length; i++) {
//         var th = document.createElement("th");
//         th.appendChild(document.createTextNode(keys[i]));
//         th.style.textTransform = "capitalize";
//         tablehead_row.appendChild(th);
//     }

//     thead.appendChild(tablehead_row);
//     table.appendChild(thead);

//     var tbody = document.createElement("tbody");
//     table.appendChild(tbody);

//     Movies.forEach(movie => {
//         var tabledata_row = document.createElement("tr");
//         for (var m in movie) {
//             if (movie.hasOwnProperty(m)) {
//                 var td = document.createElement("td");
//                 td.style.textTransform = "capitalize";
//                 td.appendChild(document.createTextNode(movie[m]));
//                 tabledata_row.appendChild(td);
//             }
//         }
//         tbody.appendChild(tabledata_row);
//     });
//     document.body.appendChild(table);
// }

// button.addEventListener("click", GenerateTable);

// ===============================================================================================
// ===============================================================================================
// Promises

// some action = watching a movie


// .
// .
// .

// PROMISE: kazi mi sto napravi

// pending
// resolve
//     --namesti masa
// reject
//     --otvoram frizider, da baram drugo nesto
// settle
//     --zavrseni so jadenje

// var HasBurek = false;

// const promise = new Promise((resolve, reject) => {
//     if(HasBurek) {
//         resolve("I'm calling to let you know, that I'm bringing BUREK!");
//     } else {
//         reject("Burek place not opened. Find something else to eat.");
//     }
// });

// promise.then(res => { console.info(res); });
// promise.catch(err => { console.error(err) });

// ===============================================================================================
// ===============================================================================================
// Fetch

// let url = "https://jsonplaceholder.typicode.com/users";

// const GenerateListFromData = (list) => {
//     var ul = document.createElement('ul');
//     for (var i = 0; i < list.length; i++) {
//         var li = document.createElement("li");
//         li.appendChild(document.createTextNode(list[i].name));
//         ul.appendChild(li);
//     }
//     document.body.appendChild(ul);
// }

// const FetchData = (url) => {
//     console.log("LOADING...");
//     fetch(url)
//         .then(res => res.json())
//         .then(data => {
//             GenerateListFromData(data);
//             console.log("DATA LOADED");
//         })
//         .catch(err => console.error(err));
// }

// FetchData(url);


fetch("https://jsonplaceholder.typicode.com/albums")
    .then(res => res.json())
    .then(data => {
        for (var i = 0; i < data.length; i++) {
            if (data[i].id === 67) {
                console.log("data[i]", data[i]);
            } 
        }
            
    })
    .catch(err => console.error(err));