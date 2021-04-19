const jwt = require('jsonwebtoken');
const userModel = require('../models/user.js');

const auth = async (request, response, next) => {
  const token = request.header('Authorization').replace('Bearer ', '');
  try {
    const data = jwt.verify(token, process.env.JWT_KEY);
    const user = await userModel.findOne({
      _id: data._id,
      'tokens.token': token,
    });
    if (!user) {
      throw new Error();
    }
    request.user = user;
    request.token = token;
    next();
  } catch (error) {
    response
      .status(401)
      .send({ error: 'Not authorized to access this resource' });
  }
};

module.exports = auth;
