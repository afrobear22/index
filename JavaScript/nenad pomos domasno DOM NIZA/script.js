//+++++++++++++++++++++++++++++++++
// domasno niza od filmovi vo DOM

var h1 = document.createElement("h1");
h1.appendChild(document.createTextNode("Top 5 movies"));
h1.innerHTML = "Top 5 movies";
h1.style.textAlign = "center";

var _body = document.body;
_body.prepend(h1);


let mov_btn = document.querySelector(".tbl-btn");

let movies = [
    {
        movieTitle: "Inception",
        year: 2010,
        runningTime: "2h28min",
        genre: ["adventure", "action", "sci-fi"],
        cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
    },
    {
        movieTitle: "Interstellar",
        year: 2014,
        runningTime: "2h49min",
        genre: ["drama", "adventure", "sci-fi"],
        cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
    },
    {
        movieTitle: "The Intouchables",
        year: 2011,
        runningTime: "1h52min",
        genre: ["comedy", "drama", "biography"],
        cast: ["Francois Cluzet", "Omar Sy", "Anne Le Ny"],
    },
    {
        movieTitle: "Joker",
        year: 2019,
        runningTime: "2h2min",
        genre: [ "crime", "thriller", "drama"],
        cast: ["Joaquin Phoenix", "Robert De Niro", "Zazie Beetz"],
    },
    {
        movieTitle: "Tenet",
        year: 2020,
        runningTime: "2h30min",
        genre: ["action", "thriller", "sci-fi"],
        cast: ["John David Washington", "Robert Pattinson", "Elizabeth Debicki"],
    },
];

let headers = ["Movie Title", "Year", "Running time", "Genre", "Cast"];


mov_btn.addEventListener('click', () => {
    let table = document.createElement("table");
    let headerRow = document.createElement("tr");

    headers.forEach(headerText => {
        let header = document.createElement("th");
        let textNode = document.createTextNode(headerText);
        header.appendChild(textNode);
        headerRow.appendChild(header);
    });

    table.appendChild(headerRow);
    let trpe = 0;
    let sedmaKolona = 1;
    movies.forEach(movie => {
        let row = document.createElement("tr");
        row.style.borderBottom = "3px solid black";
        if(trpe % 2 === 0){
            row.style.background = "blue"
        }
        trpe++;
        let cellIndex = 0;
        Object.values(movie).forEach(text => {
            let cell = document.createElement("td");
           
            if(sedmaKolona % 7 === 0 ){
                cell.style.backgroundColor = "purple"
            }
            if(movie.genre.includes("drama") && cellIndex === 3){
                cell.style.backgroundColor = "red"
            }
            
            let textNode = document.createTextNode(text);
            cell.appendChild(textNode);
            row.appendChild(cell);
            sedmaKolona++;
            cellIndex++;
        })

        table.appendChild(row);

    });
    table.style.border = "3px double black";
    table.style.borderCollapse = "collapse"

    _body.appendChild(table);

});

let t = document.getElementsByClassName("kkk");
t.backgroundColor = "black";
console.log(t);




mov_btn.style.alignItems = "center"
mov_btn.style.border = "3px double black";
mov_btn.style.backgroundColor = "lightgreen";

