var friends = require("../data/friends");

module.exports = function(app) {
//Return friends found n friends javascript file
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function (req, res) {
    console.log(req.body.scores);

    // Var for user information
    var user = req.body;

    // for loop to parse - HAD A LOT OF TROUBLE WITH THIS. FOUND CODE SOLUTION WHEN GOOGLING BUT I STILL DONT GET IT
    for (var i = 0; i < user.scores.length; i++) {
        user.scores[i] = parseInt(user.scores[i]);
    }

    // default friend match is the first friend but result will be whoever has the minimum difference in scores
    var bestFriendIndex = 0;
    var minimumDifference = 40;
    for (var i = 0; i < friends.length; i++) {
      var currentFriend = friends[i];
      totalDifference = 0;

      console.log(currentFriend.name);

    // A FOR LOOP to go through the scores
      for (var j = 0; j < currentFriend.scores.length; j++) {
        var currentFriendScore = currentFriend.scores[j];
        var currentUserScore = userScores[j];
        totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
      }

   // if there is a new minimum, change the best friend index and set the new minimum for next iteration comparisons
     if (totalDifference < minimumDifference) {
        bestFriendIndex = i;
        minimumDifference = totalDifference;
      }
    }

  // Push user to the friend array after you have a match
  friends.push(userData);

  // Send the match back to the browser
  res.json(Match);
  });
};
