var express = require('express');
var router = express.Router();

var app = express();

/* GET home page. */
router.get('/', function(req, res, next) {
  var database = require('../databaseModule.js');
  database.init();
  if (req.session.username) {
    res.render('edit');
  }
  else {
    res.redirect('login');
  }
});

/* POST signup page. */
router.post('/', function(req, res, next) {
  console.log(req.body.id);
  console.log(req.body.level);
  console.log(req.body.fill);

  var check = /cslab[\d]*-[\d]+/;

  if(req.body.fill == "") {
    res.render('edit', {error: "Error: No Description Entered For Issues!"});
  }
  else if(req.body.level == undefined){
    res.render('edit', {error: "Error: No Level Chosen!"});
  }
  else {
    var database = require('../databaseModule.js');
    database.init();
    database.compExists(req.body.id, function(message){
      console.log("MESSAGE: " + message);
      if (message == true) {
        database.addIssues(req.body.id, req.body.level, req.body.fill);
        res.render('edit', {error: "Added Issue Successfully!"});
      }
      else {
        res.render('edit', {error: "Error: Selected Computer Does Not Exist!"});
      }
    });
  }
});

module.exports = router;
