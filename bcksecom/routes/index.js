var express = require('express');
var router = express.Router();
//Dependencias necesarias

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get(
  '/info',
  function(req, res) {
    var infoObj = {}; //$infoObj = array();
    infoObj.cuenta = "0801199901357";
    infoObj.nombre = "Leonardo Alvarado";
    infoObj.email = "10leoalvarado@gmail.com";
    res.json(infoObj);
  }
);

router.get(
  '/hook',
  function(req, res) {
    res.render("hook", {});
  }
); //get hook

router.post(
  '/hook',
  function(req, res) {
    var body = req.body;
    console.log(body);
    res.render("hook", body);
  }
); //Post Hook

module.exports = router;
