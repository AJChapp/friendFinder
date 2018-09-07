var express = require('express');
// https://expressjs.com/en/4x/api.html
var bodyParser = require('body-parser');
// https://www.npmjs.com/package/body-parser
var path = require('path');

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var data = ""
var ppl = ['Joe', 'Jeff', 'Jill', 'Jane'];

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname, 'survey.html'));
});
app.post('/api/results', function (req, res) {
    data = req.body;
    console.log(data);
});
app.get('/api/results', function (req, res) {
   var superData = [ppl,data]
    res.send(superData);
    
});
app.get('/results', function (req, res) {
    res.sendFile(path.join(__dirname, 'results.html'));
});








app.listen(PORT, function () {
    console.log("Listening on http://localhost:" + PORT);
});
