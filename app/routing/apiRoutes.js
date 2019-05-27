let matches = require('../data/friends');

module.exports = function(app) {
    app.get("/api/matches", function(req, res) {
        res.json(matches);
      });
    app.post("/api/matches", function(req, res) {
        matches.push(req.body);
        res.json(true)
    });
    }