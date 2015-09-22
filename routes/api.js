var Subreddit = require('../models/Subreddit');
var HourlyAnalytics = require('../models/HourlyAnalytics');
var moment = require('moment');
var timestamps = require('mongoose-times');
var express = require('express');
var router = express.Router();

//paginate subreddits
router.get('/subreddits/:page/:pagelimit', function(req, res, next){

  var params    = req.params,
      page      = params.page,
      pageLimit = params.pagelimit,
      skip      = (page - 1) * pageLimit,
      result = {};

  Subreddit.count().exec()

  .then(function(total) {
      result.totalPage = Math.ceil(total / pageLimit);
  })
  .then(function(){
    Subreddit.find().skip(skip).limit(pageLimit).exec()
    .then(function(subreddits){
      result.subreddits = subreddits;
      res.status(200).send(result);
    })
  })
});

//get daily hourly data for 1 subreddit
router.get('/daily/:subreddit', function(req, res, next){

  var subreddit = req.params.subreddit,
      today     = new Date(moment.utc().format('MM-DD-YYYY')),
      lastDay   = new Date(moment.utc().subtract(1, 'day').format('MM-DD-YYYY'));

  HourlyAnalytics.find({$and:[{'display_name': subreddit},
                              {'utcDay': {'$gte': lastDay, '$lt': today}}]}).exec()

  .then(function(hourlyAnalytics){
    res.status(200).send(hourlyAnalytics);
  })

});

//get weekly hourly data for 1 subreddit
router.get('/weekly/:subreddit', function(req, res, next){

  var subreddit = req.params.subreddit,
      today     = new Date(moment.utc().format('MM-DD-YYYY')),
      aWeekAgo  = new Date(moment.utc().subtract(7, 'day').format('MM-DD-YYYY'));

  HourlyAnalytics.find({$and:[{'display_name': subreddit},
                              {'utcDay': {'$gte': aWeekAgo}}]}).exec()

  .then(function(hourlyAnalytics){
    res.status(200).send(hourlyAnalytics);
  })

});

module.exports = router;