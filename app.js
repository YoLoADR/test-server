const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Skander Joel Reyane');
});

app.listen(3000, () => {
  console.log('App is listening on port 3000');
});