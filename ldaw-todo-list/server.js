// Imports
const express = require('express');
const webRoutes = require('./routes/web');
const cors = require('cors');

// Express app creation
const app = express();

// Configurations
const appConfig = require('./configs/app');

// View engine configs
const exphbs = require('express-handlebars');
const hbshelpers = require("handlebars-helpers");
const multihelpers = hbshelpers();
const extNameHbs = 'hbs';
const hbs = exphbs.create({
  extname: extNameHbs,
  helpers: multihelpers
});
app.engine(extNameHbs, hbs.engine);
app.set('view engine', extNameHbs);

// Receive parameters from the Form requests
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

// Use CORS as a middleware
app.use(cors({
  origin: 'http://localhost:3000'
}));

// Routes
app.use('/', webRoutes);

// App init
app.listen(appConfig.expressPort, () => {
  console.log(`Server is listening on ${appConfig.expressPort}! (http://localhost:${appConfig.expressPort})`);
});