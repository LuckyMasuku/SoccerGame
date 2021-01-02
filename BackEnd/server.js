const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

//allow the bodypurser to intercept from the http 
//allows to use everytime 
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())


//Connection string to connect to database
const myConnectionString = 'mongodb+srv://admin:masuku@cluster0.ty8xv.mongodb.net/matches?retryWrites=true&w=majority';
mongoose.connect(myConnectionString, { useNewUrlParser: true });

//Schema of the database on what type of database it will be stored
const Schema = mongoose.Schema;

//How the document will look like
var matchSchema = new Schema({
    player: String,
    venue: String,
    team: String

});

//match collection that allows the entry to the database this will allow to write data to the database
var MatchModel = mongoose.model("match", matchSchema);




////listening to get the request
app.get('/', (req, res) => {
    res.send('Wellcome to my game!')
})
// listen to the post request and pull team, venue and player out from the body
app.get('/api/matches', (req, res) => {

    // const mymatches = [
    //     {
    //         "Player": "Hakim",
    //         "Venue": "London",
    //         "imdbID": "tt4154756",
    //         "Type": "match",
    //         "Team": "https://upload.wikimedia.org/wikipedia/commons/d/dd/Hakim_Ziyech_2020.jpg"
    //     },
    //     {
    //         "Player": "Thiago",
    //         "Venue": "Liverpool",
    //         "imdbID": "tt3498820",
    //         "Type": "match",
    //         "Team": "https://cdn.footballtransfertavern.com/wp-content/uploads/2020/09/Thiago-Alcantara-in-action-for-Liverpool.jpg"
    //     },
    //     {
    //         "Player": "Ben",
    //         "Venue": "Sunderland",
    //         "imdbID": "tt0816711",
    //         "Type": "match",
    //         "Team": "https://i2-prod.dailystar.co.uk/incoming/article19445534.ece/ALTERNATES/s1227b/0_httpscdnimagesdailystarcoukdynamic122photos804000900x738862804"
    //     },
    //     {
    //         "Player": "Reeces",
    //         "Venue": "Chalsea",
    //         "imdbID": "tt0407304",
    //         "Type": "match",
    //         "Team": "https://i2-prod.football.london/incoming/article19228145.ece/ALTERNATES/s1200b/1_GettyImages-1229473615.jpg"
    //     },
    //     {
    //         "Player": "Reeces",
    //         "Venue": "Chalsea",
    //         "imdbID": "tt0407304",
    //         "Type": "match",
    //         "Team": "https://i2-prod.football.london/incoming/article19228145.ece/ALTERNATES/s1200b/1_GettyImages-1229473615.jpg"
    //     }
    // ]

    //This will allow interaction with database
    MatchModel.find((err, data) => {
        res.json(data);
    })


    // res.status(200).json({
    //     message: "Matches to be played",
    //     matches:mymatches
    // });
})

//Get request find the id in the database and use it
app.get('api/matches/:id',(req, res)=>{
    console.log(req.params.id);
   //This will return the match with that id
    MatchModel.findById(res.params.id, (err, data)=>{
        res.json(data);
    })
})
// when data is passed 
app.post('/api/matches', (req, res) => {
    console.log('Matches Played!')
    console.log(req.body.player);
    console.log(req.body.venue);
    console.log(req.body.team);

    //Allows interaction with from our database
    MatchModel.create({
        player: req.body.player,
        venue: req.body.venue,
        team: req.body.team
    })
    //Allows and send the response back to the client if the match was added to database this will avoid replication
    res.send('Item Added');
})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})