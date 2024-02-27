const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

/* // app use data parsing json file */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app get request
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the backend API' });
});

/* // app listen to port */
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
