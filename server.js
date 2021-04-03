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

app.get('/api/reservations', (req, res) => res.json(reservations));

// Post - takes in JSON input
app.post('/api/reservations', (req, res) => {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  const newReservation = req.body;

  // Using a RegEx Pattern to remove spaces from newReservation
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  // This is getting rid of white spaces...
  newReservation.routeName = newReservation.name.replace(/\s+/g, '').toLowerCase();
  console.log(newReservation);

  reservations.push(newReservation);
  res.json(newReservation);
});

// Starts the server to begin listening
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));


