const express = require('express');
const router = require('./app/router');
const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/app/views');

app.use(express.static(__dirname + '/public'));

app.use(router);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`linstening on ${PORT}`);
});