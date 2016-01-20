var express = require('express'),
    router = express.Router();

var routes = {
  index: function(req, res, next) {
    return res.json({status: 'ok'});
  },

};

router.get('/health', routes.index);

exports = module.exports = router;
