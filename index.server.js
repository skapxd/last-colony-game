// @ts-check
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const index = fs.readFileSync(`${__dirname}/index.html`, 'utf8');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {

  res.send(index);
} );

const port = process.env.PORT || 3000; 
app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})