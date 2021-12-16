// ==================================================================
// ==================================================================
// Objects

// var movie = {
//     title: "Bicycle Thieves",
//     year: 1948
// };

// console.log(movie);

// console.log(movie.title);
// console.log(movie.year);

// console.log(movie['title']);
// console.log(movie['year']);

// var user = {
//     first_name: "Pero",
//     last_name: "Perovski",
//     e_mail: "pero.perovski@gmail.com",
//     age: 28
// };

// var academy = {
//     name: "Semos Academy",
//     module: "Javascript",
//     trainer: "Mario Petkovski"
// };

// console.log("user", user);

// console.log(`Hello World. My name is ${user.first_name} ${user.last_name} and I'm ${user.age} years old. I'm being taught ${academy.module} by ${academy.trainer} in the ${academy.name}.`);

// var hotel = {
//     name: "Majestic",
//     roomNumber: 237,
//     // hasVacancy: true
//     hasVacancy: false,
//     management: {
//         manager: "Pero",
//         email: "Pero@pero.com"
//     }
// }

// hotel.founded = 1993;

// console.log("hotel", hotel);
// console.log("manager name", hotel.management.manager);
// console.log("The keys of the hotel object", Object.keys(hotel));
// console.log(typeof hotel);

// ==================================================================
// ==================================================================

// Arrays

// () small size brackets, used to declare a function
// [] medium sized brackets, used to declare an array
// {} large sized brackets, used to declare an object

// var movies = [
//     "Bicycle Thieves",
//     "Notorious",
//     "The Friends of Eddie Coyle",
//     "Rushmore",
//     "Mad Max",
//     "Pulp Fiction",
//     "Jackie Brown"
// ];

// console.log("movies", movies);
// console.log(movies[movies.length - 1]);

// var users = [{
//     name: "Pero",
//     handle: "@pero"
// }, {
//     name: "Mario",
//     handle: "@mario5et"
// }];

// console.log("users", users);

// var movies = [{
//         name: "Pulp Fiction",
//         year: 1994,
//         genres: ["comedy", "crime", "drama"],
//         director: {
//             name: "Quentin Tarantino",
//             dob: "22.2.1922"
//         },
//         hasOscar: true,
//         actors: ["Samuel L. Jackson", "John Travolta", "Uma Thurman"]
//     },
//     {
//         name: "The Friends of Eddie Coyle",
//         year: 1976,
//         genres: ["crime", "drama", "thriller"],
//         director: {
//             name: "Peter Yates",
//             dob: "22.2.1945"
//         },
//         hasOscar: false,
//         actors: ["Robert Mithcum", "Peter Boyle"]
//     },
//     {
//         name: "Notorious",
//         year: 1948,
//         genres: ["crime", "drama", "film-noir"],
//         director: {
//             name: "Alfred Hitchcock",
//             dob: "22.2.1900"
//         },
//         hasOscar: true,
//         actors: ["Cary Grant", "Ingrid Bergman"]
//     },
// ];

// console.log("movies", movies);

// var colors = ["red", "green", "blue"];
// push -> add an element to the back of the array
// colors.push("yellow");
// console.log("colors", colors);

// pop -> returns the last element of the array 
// var last_color = colors.pop();
// console.log("color", last_color);

// shift -> returns the first element of the array
// var first_color = colors.shift();
// console.log("first_color", first_color);

// unsifht -> adds an element to the start of the array
// colors.unshift("black");
// console.log(colors);

// slice -> returns a new array sliced from start and end point
// console.log(colors);
// var slice_arr = colors.slice(1, 2);
// console.log("new_arr", slice_arr);

// splice ->
// console.log(colors);
// var splice_arr = colors.splice(1);
// var color = "magenta";
// colors.splice(1, 1, color);
// console.log("splice_arr", colors);

var rgb = ["red", "green", "blue"];
console.log("rgb", rgb);
var cmyk = ["cyan", "magenta", "yellow", "karbon"];
console.log("cmyk", cmyk);

var pallete = rgb.concat(cmyk);
console.log("pallete", pallete);