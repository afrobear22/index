// Create an express server.
// Hide the port inside a .env file.
// Using the MVC architecture, create two models and two controllers, separated by features.

// Feature 1: 
//     Full CRUD capabilites for planets.
//         - Read all planets (an array of planets)
//         - Add a new planet to the array
//         - Edit an existing planet
//         - Delete a planet
// Feature 2:
//     Full CRUD capabilities for stars.
//         - Read all stars (an array of stars)
//         - Add a new star to the array.
//         - Edit an existing star
//         - Delete a star

// Reminder, do NOT commit node_modules or .env to github

// BONUS
// Instead of writing the array in memory, try and use the file system to write it (and read it) from a file.

require('dotenv').config();
const http = require('http');
const app = require('./app');

const server = http.createServer(app);
const PORT = process.env.PORT;

server.listen(PORT, () => {
    console.log('Server running!');
});