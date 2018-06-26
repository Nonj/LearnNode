const express = require('express');
const hbs = require('hbs');

let app = express();

// Tells express which view engine we'd like to use
app.set('view engine', 'hbs')

// Allows for serving of static webpages
// __dirname is an absolute path to this folder.
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    //res.send('<h1>Hello Express!</h1>');
    res.render('home.hbs', {
        pageTitle: 'Home Page',
        bodyTitle: 'Welcome',
        message: 'Welcome Home',
        currentYear: '2018'
    });
});

// Routing to about page
app.get('/about', (req, res) => {
    res.render('about.hbs', {
       pageTitle: 'About Page',
       currentYear: new Date().getFullYear()
    });
});

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Error'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000');
}); 