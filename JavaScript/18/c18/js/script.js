// ========================================================================
// ========================================================================
// undefined

// var _name;
// console.log(_name);

// ========================================================================
// ========================================================================
// null
// return id === tt1258197;

// {
//     movieTitle: "Exam",
//     posterUrl: "pateka.png",
//     starRating: null
//     voteCount: null
// }

// if (movie.voteCount !== null) {
//     movie.voteCount += math;
// }

// let Hotel = {
//     hasVacancy: false,
//     Name: "Hilton",
//     founded: 1932
// }

// if(Hotel.hasVacancy) {
//     console.log("The hotel is available");
// } else {
//     console.log("The hotel is not available");
// }

// const PrintAvailability = () => {
//     return Hotel.hasVacancy ? console.log("The hotel is available") : console.log("The hotel is not available");
// }

// PrintAvailability();

// obj.property?.name;

// ========================================================================
// ========================================================================
// Deconstructing arrays and objects

// var colors = ["red", "green", "blue"];
// var newColors = colors;

// newColors.push("brown");
// console.log("colors", colors);
// console.log("newColors", newColors);

// var alphabet = ["A", "B", "C", "D", "E", "F"];
// console.log("alphabet", alphabet);

// const [a,, c, ...pero] = alphabet;

// console.log(a);
// console.log(c);
// console.log(pero);

// var colors = ["red", "green", "blue"];
// var [...newColors] = colors;
// newColors.push("brown");

// console.log("colors", colors);
// console.log("newColors", newColors);

// let Movie = {
//     title: "Once Upon a Time in Hollywood",
//     year: 2019,
//     genres: ["comedy", "drama"],
//     people: {
//         name: "Quentin Tarantino",
//         dob: "12.23.1942"
//     },
//     awards: 124
// }

// // const { title: MovieTitle, year, awards = 87 } = Movie;
// // console.log(MovieTitle);
// // console.log(year);
// // console.log(awards);

// const ReturnMovieData = ({title, year}) => {
//     return `The title of the movie is ${title}. It was released in ${year}.`;
// }

// console.log(ReturnMovieData(Movie));

// ========================================================================
// ========================================================================

// var products = [
//     {title: "Milk", price: 45},
//     {title: "Eggs", price: 65},
//     {title: "Bread", price: 42},
//     {title: "Meat", price: 430},
//     {title: "Cereal", price: 180},
//     {title: "Peanut Butter", price: 120},
//     {title: "Coca-cola", price: 70},
//     {title: "Air Jordans", price: 6000}
// ];

// console.log("OUR PRODUCTS =>", products);
// filter

// const filteredArray = products.filter((product) => {
//     return product.price > 300;
// });

// console.log("filteredArray", filteredArray);

// map

// const mappedArray = products.map((product) => {
//     return product.price;
// });

// console.log("mappedArray", mappedArray);

// find

// const findElement = products.find((product) => {
//     return product.price === 430;
// });

// console.log("findElement", findElement);

// some

// const someArr = products.some(product => {
//     return product.price >= 100;
// });

// console.log("someArr", someArr);

// every

// const everyArr = products.every(product => {
//     return product.price >= 100;
// });

// console.log("everyArr", everyArr);

// includes

// const numbers = [1, 2, 3, 4, 5];
// var colors = ["red", "green", "blue"];
// console.log("numbers", numbers);

// let int_val = numbers.includes(7);
// let str_val = colors.includes("green");
// console.log("val", int_val);
// console.log("str_val", str_val);

// HOMEWORK

var gallery_grid = document.querySelector(".gallery-grid");
var gallery_detail_popup = document.querySelector(".gallery-detail-popup");
var popup_image = document.querySelector(".popup-image");
var close_popup = document.querySelector(".close-popup");

const FetchPhotos = () => {
    fetch("https://jsonplaceholder.typicode.com/photos")
        .then(res => res.json())
        .then(data => {
            let slicedArr = data.slice(0, 100);
            slicedArr.forEach(photo => {
                let img = document.createElement("img");
                img.src = photo.thumbnailUrl;
                img.classList.add("image")
                gallery_grid.appendChild(img);
                console.log("FetchPhotos -> photo", photo);

                img.addEventListener("click", function () {
                    ShowPopup(photo);
                });
            });
        }).catch(err => {
            console.error("FetchPhotos -> err", err)
        });
}

const ShowPopup = (img) => {
    gallery_detail_popup.classList.remove("hidden");
    gallery_detail_popup.classList.add("show");
    popup_image.src = img.url;
}

const ClosePopup = () => {
    gallery_detail_popup.classList.remove("show");
    gallery_detail_popup.classList.add("hidden");
}

FetchPhotos();
close_popup.addEventListener("click", ClosePopup);