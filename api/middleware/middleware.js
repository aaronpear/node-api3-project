const User = require('../users/users-model.js');

function logger(req, res, next) {
  // DO YOUR MAGIC
  const timestamp = new Date().toLocaleString();
  console.log(`${timestamp}, Method: ${req.method}, URL: ${req.originalUrl}`);
  next();
}

async function validateUserId(req, res, next) {
  // DO YOUR MAGIC
  try {
    const user = await User.getById(req.params.id);
    if (!user) {
      res.status(404).json({message: "user not found" });
    } else {
      req.user = user;
      next();
    }
  } catch (err) {
    res.status(500).json({ message: "error validating user ID" });
  }
  next();
}

function validateUser(req, res, next) {
  // DO YOUR MAGIC
  next();
}

function validatePost(req, res, next) {
  // DO YOUR MAGIC
  next();
}

// do not forget to expose these functions to other modules
module.exports = {
  logger,
  validateUserId,
  validateUser,
  validatePost
}