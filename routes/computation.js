var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
  const x = req.query.x; 
  const randomVal = x ? parseFloat(x) : Math.random() * 100;
  const res1 = Math.imul(randomVal, 2); 
  const res2 = Math.log(randomVal, 2); 
  const res3 = Math.log10(randomVal, 2); 
  res.send(`imul function value is ${randomVal} is ${res1} <br/> log value is ${randomVal} is ${res2} <br/> log10 value is ${randomVal} is ${res3}`);
});
module.exports = router;