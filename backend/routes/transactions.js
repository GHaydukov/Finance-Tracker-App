const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Hello AGAIN!");
});

module.exports = router;
