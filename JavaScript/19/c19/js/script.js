const socket = new WebSocket("ws://localhost:8080");
var button = document.querySelector("button");

socket.onopen = (event) => {
    console.log("Socket connection succesfully established.");
};

socket.onerror = (error) => {
    console.error("There was an error with your connection => ", error);
};

socket.onclose = (event) => {
    console.log("Socket connection was closed.");
};

socket.onmessage = (message) => {
    const container = document.querySelector(".messages");
    container.innerHTML += message.data; 
};

var _name = prompt("Enter chat name");

button.addEventListener("click", () => {
    const value = document.querySelector("input").value;
    const finalData = 
    `<div class="single-message">
        <h2 class="name">${_name}</h2>
        <p class="message">${value}</p>
    </div>`;
    socket.send(finalData);
});