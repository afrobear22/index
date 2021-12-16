//##########################################
// For

// vo  zagradite () stoi varijabla ili uslov.....

// for(var i = 0; i <= 10; i++) {
//     console.log(i);
// }

// for(i = 100; i >= 0; i--) {
//     console.log(i)
// }

// for(var i = 0; i <= 20; i++) {
//     if(i % 2 === 0) {
//         console.log(`${i} is an EVEN number`);
//     } else {
//         console.log(`${i} is an ODD number`);
//     }
// }
//++++++++++++++++++++++++ //++++++++++++++++++++++++ 
//++++++++++++++++++++++++ //++++++++++++++++++++++++ 

// var colors = ["red", "green", "blue", "cyan", "magenta", "yellow", "carbon"]

// console.log("colors", colors);

// for(var i = 0; i < colors.length; i++) {
//     console.log(colors[i]);
// }

//++++++++++++++++++++++++ //++++++++++++++++++++++++ 
//++++++++++++++++++++++++ //++++++++++++++++++++++++ 

// var programming_languages = [
//     {
//         name: "Javascript",
//         id:1
//     },
//     {
//         name: "Python",
//         id:2
//     },
//     {
//         name: "Java",
//         id:3
//     },
//     {
//         name: "C++",
//         id:4
//     }
// ]

// console.log("programming_languages", programming_languages);

// for(var i = 0; i < programming_languages.length; i++) {
//     //+++ programming_languages[i].name = "C++" +++ za imenuvanje na site programski jazici vo c++  \\ 
    // if(programming_languages[i].id === 3) {
    //     console.log(programming_languages[i]);
    // }
// }

//++++++++++++++++++++++++ //++++++++++++++++++++++++ 
//++++++++++++ exercise ++++++++++++\\

// for(var i = 0; i <= 10; i++) {
//     if([i] * 9) {
//         console.log(i*9);
//     }
//     // console.log(i*9);
// }

// var movies = [
//     {
//         name: "Arcane",
//         year: 2021,
//         cast: [
//             "Jinx",
//             "Vi"
//         ]
//     },
//     {
//         name: "Blade",
//         year: 2004,
//         cast: [
//             "Vesley Snipe",
//             "Dzej"
//         ]
//     }
// ];

// for(var i = 0; i < movies.length; i++) {
//     for(var j = 0; j < movies[i].cast.length; j++) {
//         console.log(movies[i].cast[j]);
//     }
// }
// +++++++++++console.log("movies", movies);

//++++++++++++++++++++++++ exercise
// var movies = [
//     {
//         name: "Arcane",
//         year: 2021,
//         cast: [
//             {name: "Jinx", dob: 1946},
//             {name: "Vi", dob: 1973}
//         ]
//     },
//     {
//         name: "Blade",
//         year: 2004,
//         cast: [
//             {name: "Vesley", dob: 1955},
//             {name: "Snipe", dob: 1955}
//         ]
//     }
// ];


// for(var i = 0; i < movies.length; i++) {
//     for(var j = 0; j < movies[i].cast.length; j++) {
//         if(movies[i].cast[j].dob === 1973) {
//             console.log(movies[i].cast[j].name);
//         }
//     }
// }
//++++++++++++++++++++++++ //++++++++++++++++++++++++ 
//++++++++++++++++++++++++ //++++++++++++++++++++++++ 


//=========================================================\\
// ===         While         ===\\

// var i = 0;

// while(condition) {
//     //
// }

// var i = 0;

// while(i <= 10) {
//    console.log(i);
//    i++;
// }

//=========================================================\\
// ===       Do while         ===\\

var i = 0;
do {
    console.log(i);
    i++;
}

while(i <= 10)