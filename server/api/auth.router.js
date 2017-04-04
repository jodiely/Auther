'use strict';

var router = require('express').Router();

var User = require('./users/user.model');

router.post('/login', function(req,res,next){
    User.find({
        where: req.body
    })
    .then(user => {
        console.log('in login post', user)
        if(user){
            req.session.user = user
            res.status(200).send(user)
        }
        else res.sendStatus(401)
    })
    .catch(next)
})

router.post('/signup', function(req,res,next){
    User.create(req.body)
    .then(user => {
        console.log('in signup post', user)
        req.session.user = user
        res.status(200).send(user)
    })
    .catch(next)
})

module.exports = router
