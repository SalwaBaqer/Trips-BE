const User = require("../../db/models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_SECRET, JWT_EXPIRATION_MS } = require("../../config/keys");

exports.signup = async (req, res, next) => {
  const { password } = req.body;
  const saltRounds = 10;
  try {
    //password hashing
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    req.body.password = hashedPassword;

    //create a new user
    const newUser = await User.create(req.body);
    console.log(newUser);
    //generate token
    const payload = {
      _id: newUser._id,
      username: newUser.username,
    };
    const token = generateToken(payload);
    res.status(201).json({ token });
  } catch (error) {
    next(error);
  }
};

const generateToken = (payload) => {
  payload.exp = Date.now() + JWT_EXPIRATION_MS;
  const token = jwt.sign(JSON.stringify(payload), JWT_SECRET);
  return token;
};
