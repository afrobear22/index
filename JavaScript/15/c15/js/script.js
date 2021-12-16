// ############################################################################
// ############################################################################
// var, const and let

// if (true) {
//     var name = "Key Crucial Value";
// }

// var name = "Martin";
// console.log(name);

// if (true) {
//     let movie = "Pulp Fiction";
//     let movie = "Test";
//     console.log(movie);

//     const email = "mario5etkovski@gmail.com"; 
//     email = "peroperovski@gmail.com"; 
//     console.log("email", email);
// }


// let user = {
//     name: "Pero",
//     age: 123
// };

// let colors = ["red", "green", "blue"];

// const user = {
//     name: "Mario Petkovski"
// }
// user.name = "Pero Perovski";
// console.log("user", user);


// ############################################################################
// ############################################################################
// Functions

// function SayHello() {
//     console.log("Hello Mario Petkovski");
// }

// Function is called by it's name and the small brackets
// A function can be called many times
// SayHello();

// function SayHello() {
//     return "Hello Mario";
// }

// var is not available outside the function scope
// function SayHello() {
//     var simpleVar = "Mario";
// }

// console.log(simpleVar); 

// function ShowAlert() {
//     alert("hello world");
// }

// ShowAlert();

// function CalculateNumbers() {
//     return 5 * 10;
// }

// console.log(CalculateNumbers());


// function SayHello(name) {
//     return `Hello ${name}`;
// }

// console.log( SayHello("Mario") );
// console.log( SayHello("Pero") );
// console.log( SayHello("Martin") );
// console.log( SayHello("Martina") );

// function ReturnPromptVal(_prompt) {
//     return _prompt;
// }

// console.log(   ReturnPromptVal(prompt("Enter Name"))   );

// const Calculate = (num1, num2) => {
//     return num1 * num2;
// }

// function Calculate(num1, num2) {
//     return num1 * num2;
// }

// var Calculate = function (num1, num2) {
//     return num1 * num2;
// }

// console.log(Calculate(10, 5));

// const tellFortune = (numChildren, partner, location, jobTitle) => {
//     return `You will be an ${jobTitle} in ${location}, and married to ${partner} with ${numChildren} kids.`;
// }

// const calculateDogAge = (puppyAge) => {
//     return `Your doggie is ${puppyAge * 7} years old in dog years!`;
// }

// const calculateSupply = (age, amountPerDay) => {
//     return `You will need ${amountPerDay} to last you until the ripe old age of ${age}.`;
// }

// console.log(calculateDogAge(11));
// console.log(tellFortune(10, "Gal Gadot", "Hollywood", "actor"));
// console.log(calculateSupply(28, "10 apple pies"));
// console.log(calculateSupply(18, "5 Macdonald's burgers"));


// const InitiateChessBoard = (size, blackSquare, whiteSquare) => {
//     var chessBoard = "";

//     for (var i = 0; i < size; i++) {
//         for (var j = 0; j < size; j++) {
//             if ((i + j) % 2 == 0) {
//                 chessBoard += whiteSquare;
//             } else {
//                 chessBoard += blackSquare;
//             }
//         }
//         chessBoard += "\n";
//     };

//     return chessBoard;
// }

// const MarioTower = (size) => {
//     var tower = "";
//     for (var i = 0; i < size; i++) {
//         tower += "▣";
//         console.log(tower);
//     }
// }

// MarioTower(10);
// console.log(InitiateChessBoard(8, "▣", "▢"));

// Callback functions

// function firstFunc(callback) {
//     callback();
// }

// const PrintMovie = (filmName) => {
//     console.log(`The film you've chosen is ${filmName}`);
// }

// const HandlePrintMovie = (callback) => {
//     var movie = prompt("Enter movie name");
//     callback(movie);
// }

// HandlePrintMovie(PrintMovie);

// const ExecuteInTime = () => {
//     console.log("I will execute in three seconds");
// }

// setTimeout(ExecuteInTime, 3000);

// setInterval(() => {
//    console.log("I'm executing on every third second.");
// }, 3000);
