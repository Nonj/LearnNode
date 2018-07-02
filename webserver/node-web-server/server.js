const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const port = process.env.PORT || 3000;

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


// Registering a logging middleware
// Logs out the current date/time
// Logs out the method of which the webpage was called (GET, PUT, POST)
// Logs out the page URL
app.use((req, res, next) => {
    let now = new Date().toString();

    let log = `${now}: ${req.method} ${req.url}`;
    console.log(`${now}: ${req.method} ${req.url}`);

    fs.appendFile('server.log', log + '\n', (err) => {
        if (err) console.log('unable to append to server.log');
    });
    next();
});

// Express is ordered in the way which use is called
// This will only take users who visit the site to a maintenance page
// app.use((req,res,next) => {
//    res.render('maintenance.hbs') 
// })

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

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
}); 