const jwt = require("jsonwebtoken");

const SECRET_KEY = process.env.SECRET_KEY;

module.exports.loger = (req, res, next) => {
  console.log(`request method:${req.method} request path:${req.path}`);
  next();
};

module.exports.authMiddleware = (req, res, next) => {
  try{
    const token = req.headers.authorization.split(' ')[1]

    const { id, email } = jwt.verify(token, SECRET_KEY);
    req.user = {
      id,
      email,
    };
    next()
    return res.status(200).json({
      message: "Authorized",
    });
  } catch (error) {
    res.clearCookie("access_token");
    return res.status(401).json({
      message: "invalid token",
    });
  }
};
