const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv');
const routes = require('./homeRoutes');

dotenv.config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set the view Directory and Engine to Handlebars
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');

// Define routes
app.use('/', routes);

// Start the server
app.listen(3001, () => {
  console.log('Server is running on port 3001');
});