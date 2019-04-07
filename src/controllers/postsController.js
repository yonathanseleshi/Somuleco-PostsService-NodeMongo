const app = require('express');
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import {postSchema} from "../models/postModel";

const Post = mongoose.model('Post', postSchema);

const router = app.Router();

const express = app();

const PORT = 3000;




router.get('/', function(req, res, next) {

    res.send('Post Service running');

});

/*
express.listen(PORT, () =>
    console.log(`server is running on port ${PORT}`)
);*/


module.exports = router;