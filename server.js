// Dependencies
const express = require('express');
const path = require('path');

// Sets up the Express App
const app = express();
const PORT = 3000;

// Variables
const reservations = [
  {
    name: "Nick",
    phone: "555-555-5555",
    email: "aisthorpe@gmail.com",
    id: "nickais"
  }
  
];

const waitlist = [

];

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'home.html')));

app.get('/tables', (req, res) => res.sendFile(path.join(__dirname, 'tables.html')));

app.get('/reserve', (req, res) => res.sendFile(path.join(__dirname, 'reserve.html')));

// Starts the server to begin listening
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));


