var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var options = [];

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get('/', function(req, res) {
    res.render('todoList.ejs',{options: options});
});

app.post('/resp', urlencodedParser, function (req, res) {
    // Prepare output in JSON format
    response = {
        option:req.body.option
    };
    console.log(response);
    //res.end(JSON.stringify(response));

    options.push(response.option);
    //options.push("jouer");
    console.log(JSON.stringify(options));
    res.render('todoList.ejs',{options: options});
});

app.listen(8080);