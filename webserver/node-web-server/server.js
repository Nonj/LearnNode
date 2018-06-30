const express = require('express');
const hbs = require('hbs');

let app = express();

// Registering where to grab parts (components)
hbs.registerPartials(__dirname + "/views/partials")

// Tells express which view engine we'd like to use
app.set('view engine', 'hbs')

// Registering function to call in hbs templates
hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear()
})

// Registering function to call in hbs templates
// Takes name of helper, and function
hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase()
})

// Set path to views file
app.set('views', __dirname + "/views")
// Allows for serving of static webpages
// __dirname is an absolute path to this folder.
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    //res.send('<h1>Hello Express!</h1>');
    res.render('home.hbs', {
        pageTitle: 'Home Page',
        bodyTitle: 'Welcome',
        message: 'Welcome Home',
    });
});

// Routing to about page
app.get('/about', (req, res) => {
    res.render('about.hbs', {
       pageTitle: 'About Page',
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