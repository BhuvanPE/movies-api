var express = require('express');
var mongoose = require('mongoose');
const Movie = require('../models/Movie');
var router = express.Router();

/* GET movies listing. */
router.get('/', function(req, res, next) {
  //res.send('get all movies');
  Movie.find().sort('-year').exec(function(err, movies){
    if(err) res.status(500).send(err);
    else res.status(200).json(movies);
  })
});

/* GET movie identified by id */
router.get('/:id', function(req, res, next) {
  //res.send('get movie' + req.params.id);
  Movie.findById(req.params.id, function(err, movieinfo){
    if(err) res.status(500).send(err);
    else res.status(200).json(movieinfo);
  })
});

/* POST movie */
router.post('/', function(req, res, next) {
  //res.send('post movie, title' + req.body.title);
  Movie.create(req.body, function(err, movieinfo){
    if(err) res.status(500).send(err);
    else res.sendStatus(200);
  })
});

/* PUT movie */
router.put('/:id', function(req, res, next) {
  //res.send('put movie' + req.params.id);
  Movie.findByIdAndUpdate(req.params.id, req.body, function(err, movieinfo){
    if(err) res.status(500).send(err);
    else res.sendStatus(200);
  })
});

/* DELETE movie */
router.delete('/:id', function(req, res, next) {
  //res.send('delete movie' + req.params.id);
  Movie.findByIdAndDelete(req.params.id, req.body, function(err, movieinfo){
    if(err) res.status(500).send(err);
    else res.sendStatus(200);
  });
});

module.exports = router;
