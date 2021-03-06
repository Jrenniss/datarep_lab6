const express = require('express')
const app = express()
//Change of Port Number = BackEnd Server 
const port = 4000 

//Addition of CORS - Cross-Origin-Request-Server
const cors = require('cors');

//Returns Data from the Server to the Client
const bodyParser = require("body-parser");

//Allows Corss-Origin Requests from Client(Localhost:3000) to Server(Localhost:4000)
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});



//Used for any Request on the Server
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//Route to Server Main Page - http://localhost:4000/
app.get('/', (req, res) => {
    res.send('Hello World!')
})

//Route to API Movies - http://localhost:4000/api/movies
app.get('/api/movies', (req, res) => {
    
    //JSON Data
    const mymovies = [
        {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
        },
        {
            "Title": "Captain America: Civil War",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
        },
        {
            "Title": "World War Z",
            "Year": "2013",
            "imdbID": "tt0816711",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
        }
        , {
            "Title": "War of the Worlds",
            "Year": "2005",
            "imdbID": "tt0407304",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNDUyODAzNDI1Nl5BMl5BanBnXkFtZTcwMDA2NDAzMw@@._V1_SX300.jpg"
        }
    ];

    //Returns JSON and Success Message
    res.status(200).json({
        message: "Everything is Successful",
        movies: mymovies
    });
})

//Console Log of http://localhost:4000/api/movies = Movie Details added in http://localhost:3000/create
app.post('/api/movies', (req, res) => {
    console.log('Movie Recieved');
    console.log(req.body.title);
    console.log(req.body.year);
    console.log(req.body.poster);

})

//Server Setup
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})