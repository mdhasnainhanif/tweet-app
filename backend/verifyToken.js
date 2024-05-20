const jwt = require("jsonwebtoken");
const { handleError } = require("./error");

const JWT_SECRET = "E$%XCRT&b8yCrt7bY*";

module.exports.verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return next(handleError(401, "You are not authenticated"));
  }

  const token = authHeader.split(' ')[1];

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return next(handleError(403, "Token is invalid"));
    }
    req.user = user;
    next();
  });
};
