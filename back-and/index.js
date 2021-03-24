const express = require('express');
const config = require('./config');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const fakeHMR = require('./fake-hmr');
const cadastrocontole = require("./controles/cadastro")

const compiler = webpack(webpackConfig);

const watching = compiler.watch({
  // Example watchOptions
  aggregateTimeout: 300,
  poll: undefined
}, (err, stats) => { // Stats Object
  console.log(stats.toString({
    chunks: false,  // Makes the build much quieter
    colors: true    // Shows colors in the console
  }))
  if (stats.hasErrors()) {
    console.log('didn\' t build')
    return;
  }
  console.log('built');
  fakeHMR.built();
});

const app = express();
fakeHMR.config({ app });
app.use(express.static('public'));

// require('./webpackRunner');

app.get('/cadastro', (req, res) => {
  res.json({ nome: req.query.idade});
  res.json({ senha: req.query.idade});
  res.json({ codigofunc: req.query.idade});
     
});

app.delete('/cadastro', (req, res) => {
  res.json({ codigofunc : req.query.idade});
     
});

app.put('/cadastro:nome', (req, res) => {
  res.json({ codigofunc : req.query.idade});
     
});
app.use(express.json());

app.post('/cadastro:codigofunc', (req, res) => {
  res.json({codigofunc : req.query.idade});
     res.json(req.body)
});

app.get('/login', (req, res) => {
  res.json({ nome: req.query.idade});
  res.json({ senha: req.query.idade});
  res.json({ codigofunc: req.query.idade});
     
});

app.delete('/login', (req, res) => {
  res.json({ codigofunc : req.query.idade});
     
});

app.put('/login:nome', (req, res) => {
  res.json({ codigofunc : req.query.idade});
     
});
app.use(express.json());

app.post('/login:codigofunc', (req, res) => {
  res.json({ codigofunc : req.query.idade});
     res.json(req.body)
});


app.listen(config.PORT, function () {
  console.log(`App currently running; navigate to localhost:${config.PORT} in a web browser.`);
});

app.get('/cadastrequipamento', (req, res) => {
  res.json({ cod: req.query.idade});
  res.json({ nomeprod: req.query.idade});
  res.json({ utilidade: req.query.idade});
  res.json({ validade: req.query.idade});
     
});

app.delete('/cadastrequipamento', (req, res) => {
  res.json({ cod : req.query.idade});
     
});

app.put('/cadastrequipamento:cod', (req, res) => {
  res.json({ cod : req.query.idade});
     
});
app.use(express.json());

app.post('/cadastrequipamento:cod', (req, res) => {
  res.json({ cod : req.query.idade});
     res.json(req.body)
});

