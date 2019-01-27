let  express = require( 'express' );
let app = express();
let bodyParser = require('body-parser');
let monk = require('monk');
let MongoClient = require('mongodb').MongoClient;
let mongo = require('mongodb');

let db = monk('mongodb://cooper@ds063240.mongolab.com:63240/polydata');

var port = process.env.PORT || 7250;

var server = app.listen(port);
var router = express.Router();

console.log("Server running on port: ", port );

//Cross-Domain goodies
app.use( function (req,res, next ){
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods','GET,POST,PUT,DELETE');
    next();
})

app.use(bodyParser.urlencoded({
    extension: true
}))

app.use(bodyParser.json());

function randNum(start, end ) {
    return Math.floor(Math.random() * end ) + start;
}

app.use('/', router );

router.route( '/').get( (req, res) =>{
    console.log("It's Alive!!!");
    res.send("Welcome to our All Round Test Message Server");
}) 


router.route( '/message').get( (req, res) =>{
    console.log("Send our message...");
    var dataObj = {
        'data' : 'test'
    }

    res.json(dataObj);
}) 