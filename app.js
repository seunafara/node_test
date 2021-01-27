const express = require('express');
const bodyParser = require('body-parser');
const me = require('./me.json');

// bring in the express server
const app = express();

// Accept JSON in POST requests with BodyParser
app.use(bodyParser.json());

// My Rule-Validation API
app.get('/', (req, res) => {
   return res.status(200).json({
      message: 'My Rule-Validation API',
      status: 'success',
      data: me,
   });
});

// Port connection
const HTTP_PORT = process.env.HTTP_PORT || 7771;

// Start server - nodemon app
app.listen(HTTP_PORT, () => {
   console.log(`Listening on port ${HTTP_PORT}`);
});
