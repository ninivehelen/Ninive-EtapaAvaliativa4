const mongoose = require('mongoose');
const Cadastroequipamento = require('../models/cadastroequipamento')

module.exports = {
  store(req, res)
{
  const Cadastroequipamento = await Cadastroequipamento.create(req.body);
  return res.json(cadastroequipamento);
}
}