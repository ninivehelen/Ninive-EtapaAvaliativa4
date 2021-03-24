const mongoose = require('mongoose');
const Login = require('../models/login')

module.exports = {
  store(req, res)
{
  const login = await Login.create(req.body);
  return res.json(login);
}
}