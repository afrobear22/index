  //#######################################################\\
 //=========================================================\\
// ===          Functions                                 ===\\

// funckii se parce kod od koga ke go povikame ke izvrsi nesto

// var - obicna deklaracija 

// function SayHello() {
//     console.log("hello blaze");
// }

// // mora da se execute'ne preku imeto na funkcijata

// SayHello();

// //

// function SayHello() {
//     return "hello blaze";
// }

// console.log(SayHello());

// //  potocno e so Return

//++++++++++++++++++++++++ //++++++++++++++++++++++++ 

// if(true) {
//     var name = "Blaze";
// }

// var name = "Martin";
// console.log(name);

// ako imame vakvo scenario togas varijablata so e nezavisna ke bide prioritetna,
// za da ne se slucuvaat vakvi scenaria togas se koristi komandata LET
// LET ja ima funkcijata koga ke bide vo scope da ja izvrsi komandata

// if(true) {
    // let movie = "Blade";
    // console.log(movie);
// }


// let user = {
//     name: "Pero",
//     age: 123
// };

// let colors = ["red", "blue", "green"]

// Tret tip na deklariranje e CONST se koristi koga se znae definitivno so ke bide taa promena

// if(true) {
//     const email = "jakimovski22@gmail.com";
//     console.log("email", email);
// }

//++++++++++++++++++++++++ //++++++++++++++++++++++++ 

// function ShowAlert() {
//     alert("hello world")
// }
// ShowAlert();

// function CalculateNumber() {
//     return 5*10;
// }
// console.log(CalculateNumber());

// function SayHello(name) {
//     return `Hello ${name}`;
// }
// console.log(SayHello());

// const Calculate = (num1, num2) => {
//     return num1 * num2;
// }
// console.log(Calculate (10,10));

//++++++++++++++++++++++++ //++++++++++++++++++++++++ 
//++++++++++++ exercise ++++++++++++\\

// function tellFortune(numChild, parName, geoLocat, jobTitle) {
//     return `You will be a ${jobTitle} in ${geoLocat}, and married to ${parName} with ${numChild} kids.`
// }

// console.log(tellFortune(3, "Andy", "Mexico", "accountant"));


// const calculateDogAge = (puppyAge) => {
//     return `Your doggie is ${puppyAge * 7} years old in dog years!`;
// }

// console.log(calculateDogAge(6));

// const calculateSupply = (age, amountPerDay) => {
//     return `You will need ${amountPerDay} to last you until the ripe old age of ${age}`;
// }
// console.log(calculateSupply(28,"10 apple pies"));
// console.log(calculateSupply(18,"5 burgers"));

//++++++++++++++++++++++++ //++++++++++++++++++++++++ 
//++++++++++++ domasnoto od prethoden cas ++++++++++++\\
//            kako bi izgledalo fancy
// const InitiateChessBoard = (size, blackSquare, whiteSquare) => {
//     var chessBoard = "";
//     for(var i = 0; i < size; i++){
//         for(j = 0; j < size; j++) {
//             if((i + j)% 2 == 0) {
//             chessBoard += whiteSquare;
//             } else {
//             chessBoard += blackSquare;
//             }
//         }
//         chessBoard += "\n";
//     }

//     return chessBoard;
// }

// console.log(InitiateChessBoard(8,"□","■"));

//           kako bi izgledalo so dosegasnoto znaenje

// var chessBoard = "";
// for(var i = 0; i < 8; i++){
//     for(j = 0; j < 8; j++) {
//         if((i + j)% 2 == 0) {
//             chessBoard += "■";
//         } else {
//             chessBoard += "□";
//         }
//     }
//     chessBoard += "\n";
// }
// console.log(chessBoard);

//++++++++++++ domasnoto od prethoden cas ++++++++++++\\

// const MarioTower = (size) => {
//     var tower = "";
//     for(var i = 0; i < size; i++) {
//         tower += "□";
//         console.log(tower);
//     }
// }

// MarioTower(10)

//++++++++++++++++++++++++ //++++++++++++++++++++++++ 
  //#######################################################\\
 //=========================================================\\
// ===          Callback functions                        ===\\

// function firstFunc(callback) {
//     callback();
// }

// const PrintMovie = (filmName) => {
//     console.log(`The film you've chosen is ${filmName}.`);
// }

// const HandlePrintMovie = (callback) => {
//     var movie = prompt("Enter movie name");
//     callback(movie);
// }

// HandlePrintMovie(PrintMovie);

//===========================

// setTimeout(function() {
//     console.log("I will execute in 2 seconds");

// }, 2000);

// bolje kucano od ist primer 

// const ExecuteInTime = () => {
//     console.log("I will execute in 2 seconds");
// }
// setTimeout(ExecuteInTime,2000);

// setInterval(() => {
//     console.log("I will execute in 4 seconds")
// },4000);

// clearInterval(); - >> za stop
