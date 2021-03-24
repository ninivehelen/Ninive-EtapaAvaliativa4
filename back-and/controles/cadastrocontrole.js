const mongoose = require('mongoose');
const Cadastro = require('../models/cadastro')

module.exports = {
  store(req, res)
{
  const cadastro = await Cadastro.create(req.body);
  return res.json(cadastro);
}
}