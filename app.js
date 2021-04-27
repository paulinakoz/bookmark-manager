const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
app.use(require('body-parser').urlencoded({ extended: false }));

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('pages/index'); 
})

app.listen(port, () => {
    console.log(`Bookmark manager app listening at http://localhost:${port}`);
  });

