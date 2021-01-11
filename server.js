const express = require("express");

const exphbs = require('express-handlebars');

const app = express();

app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

app.use(express.static('public'));

const port = process.env.PORT || 3000;

app.get('/home', (req, res) => {
	res.render('home.handlebars');
});

app.get('/about', (req, res) => {
	res.render('about.handlebars');
});

app.get('/contact', (req, res) => {
 res.render('contact.handlebars')
});

app.listen(port, () => {
	console.log("Server is running on port " + port);
});