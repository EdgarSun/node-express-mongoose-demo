var mongoose = require('mongoose')
  , Article = mongoose.model('Article')
  , utils = require('../../lib/utils')
  , extend = require('util')._extend

exports.show = function(req, res){

  var changelist = req.param('changelist')
  var message = {user: req.user,message:req.flash('message'),messageMode:req.flash('messagemode')};
  res.render('reports/report', message);
}