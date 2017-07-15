var express = require('express');

var router = new express.Router();

router.get('/', (req, res) => {
  res.status(200).json({
    message: "You're authorized to see this secret message."
  });
});

module.exports = router;