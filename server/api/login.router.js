'use strict';

var router = require('express').Router();

var User = require('./users/user.model');

router.post('/', function(req,res,next){
    User.find({
        where: req.body
    })
    .then(user => {
        console.log('in login post', user)
        if(user){
            req.session.user = user
            res.sendStatus(200)
        }
        else res.sendStatus(401)
    })
    .catch(next)
})



module.exports = router