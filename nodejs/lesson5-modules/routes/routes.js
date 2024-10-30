const router = (req, res) => {
    if (req.url === '/') {
        res.write("Start 1");
        res.end();
        
    }
  }

module.exports = router;