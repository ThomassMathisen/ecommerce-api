const router = require("express").Router();

router.get("/", async (req, res) => {
  res.send("Success!");
});

module.exports = router;
