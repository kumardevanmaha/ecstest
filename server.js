var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');

var servicePort = 8081;

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// set the public directory as container for static files (index.html and image.jpeg)
app.use(express.static('public'))

// set our port
var port = process.env.PORT || servicePort;

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();

router.get('/', function(req, res) {
    res.render('index.html');
});


// START THE SERVER
// =============================================================================
app.listen(port);
console.log(`service listening on port: ` + port);