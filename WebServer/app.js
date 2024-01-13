const express = require('express');
const path = require('path');
const homeRoutes = require('./routes/homeRoutes');

const app = express();
const port = 3000;


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.use('/', homeRoutes);

app.listen(port, () => {
  
});
