const express = require('express');
const bookmarksRouter = require('./controllers/bookmarksRouter');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
app.use(require('body-parser').urlencoded({ extended: false }));

app.set('views', './views');
app.set('view engine', 'ejs');

app.use('/', bookmarksRouter);

app.listen(port, () => {
    console.log(`Bookmark manager app listening at http://localhost:${port}`);
});

