//##########################################
// If statement

// if;
// else;
// if else;

// if(condition){
//     //piece of code that will be executed
// }

// if (5 > 4) {
//     console.log("Yes, five is larger than four");
// }

// var num_a = 500;
// var num_b = 500;

// if(num_a < num_b) {
//     console.log(`${num_a} is smaller than ${num_b}`)
// } else {
//     console.log(`${num_a} is larger than ${num_b}`)
// }

// if(num_a < num_b) {
//     console.log(`${num_a} is smaller than ${num_b}`)
// } else if(num_a > num_b) {
//     console.log(`${num_a} is larger than ${num_b}`)
// } else {
//     console.log(`${num_a} is equal to ${num_b}`)
// }

//++++++++++++++++++++++++++++++++++++++++
// +++++exercise +++++++

// var height = 200;
// var allowed_height = 160;

// if (height > allowed_height) {
//     console.log(`You are over ${allowed_height}cm high. You are allowed to ride on the roller coaster`)
// } else if(height < allowed_height) {
//     console.log(`You are bellow ${allowed_height}cm high. You are NOT allowed to ride on the roller coaster`)
// } else {
//     console.log(`Unknown type or number. Try again.`)
// }

//++++++++++++++++++++++++++++++++++++++++++++++

// 3 tipa na ednakvo ++++++++++
// =    set value
// ==    value equal to
// ===     value & type equal to

// example 

// var name = "Bla";
// var other_name = "Pero";

// if (name === other_name) {
//     console.log("The names are the same");
// } else {
//     console.log("The names are different.")
// }

//+++++++++++++++++++++++++
//++++ exercise ++++

// var lang = "es";

// if (lang == "en") {
//     console.log("English language code")
// } else if (lang == "de") {
//     console.log("German language code")
// } else if (lang == "es") {
//     console.log("Spanish language code")
// } else {
//     console.log("Unknown language code")
// }

//+++++++++++++++++++++++++
//++++ exercise ++++

// var score = 81;

// if (score <= 20) {
//     console.log("Grade F")
// } else if (score <= 40) {
//     console.log("Grade D")
// } else if (score <= 60) {
//     console.log("Grade C")
// } else if (score <= 80) {
//     console.log("Grade B")
// } else if (score <= 100) {
//     console.log("Grade A")
// } else { 
//     console.log("Invalid score")
// }

//+++++++++++++++++++++++++
//++++ exercise ++++

// console.log("Monday/Tuesday/Wednesday/Thursday/Friday is a working day");
// console.log("Saturday/Sunday is a weekend");

// var day = prompt("What is the day today?");


// if (day === "monday" || day === "tuesday" || day === "wednesday" || day === "thursday" || day === "friday") {
//     console.log(`${day} is a working day`)
// } else if (day  === "saturday" || day === "sunday") {
//     console.log(`${day} is a weekend`)
// } else {
//     console.log("Invalid day")
// }

//+++++++++++++++++++++++++

//switch

// var day = prompt("What is the day today?");

// switch(day) {
//     case "Monday":
//         console.log(`${day} is a working day`);
//         break;
//     case "Tuesday":
//         console.log(`${day} is a working day`);
//         break;
//     case "Wednesday":
//         console.log(`${day} is a working day`);
//         break;
//     case "Thursday":
//         console.log(`${day} is a working day`);
//         break;
//     case "Friday":
//         console.log(`${day} is a working day`);
//         break;
//     case "Saturday":
//         console.log(`${day} is a weekend`);
//         break;
//     case "Sunday":
//         console.log(`${day} is a weekend`);
//         break;
//     default: console.log("Not a valid day");
// }

//+++++++++++++++++++++++++\\
// + exercise + \\

// var weather = "sunny";

// switch(weather) {
//     case "cloudy":
//         console.log("Wear something that would warm you");
//         break;
//     case "rainy":
//         console.log("Don't forget to bring an umbrella");
//         break;
//     case "sunny":
//         console.log("Don't forget to bring sunscream");
//         break;
//     default: console.log("Invalid weather type")
// }

//+++++++++++++++++++++++++\\
// + exercise + \\

// var number = 1;

// switch(true) {
//     case number > 0:
//         console.log(`Number ${number} is a positive number`);
//         break;
//     case number == 0:
//         console.log(`Number ${number} is zero`);
//         break;
//     case number < 0:
//         console.log(`Number ${number} is a negative number`);
//         break;
//     default: console.log(`Number ${number} is a invalid number`);
// }