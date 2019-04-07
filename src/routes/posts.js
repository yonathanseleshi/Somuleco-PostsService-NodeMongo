const app = require('express');
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
