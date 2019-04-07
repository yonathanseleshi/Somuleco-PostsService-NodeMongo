import bodyParser from "body-parser";
import mongoose from "mongoose";

var express = require('express');


var router = express.Router();


mongoose.Promise = global.Promise;

mongoose.connect(
    'mongodb://localhost/SocialPosts',
    {
        useMongoClient: true
    });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express page' });
});

module.exports = router;
