const express = require('express');
const router = express.Router();

const listaController = require('../controller/receita');

router.get('/', listaController);

module.exports = router;
