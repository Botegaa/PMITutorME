const express = require('express');
const router = express.Router();
const Tutor = require('../models/tutor');


router.post('/', async (req, res) => {
  try {
    const novoTutor = new Tutor(req.body);
    const salvo = await novoTutor.save();
    res.status(201).json(salvo);
  } catch (err) {
    res.status(400).json({ erro: err.message });
  }
});


router.get('/', async (req, res) => {
  const tutores = await Tutor.find();
  res.json(tutores);
});

router.put('/cpf/:cpf', async (req, res) => {
  try {
    const cpf = req.params.cpf;
    const atualizado = await Tutor.findOneAndUpdate(
      { cpf },
      req.body,
      { new: true, runValidators: true }
    );
    if (!atualizado) {
      return res.status(404).json({ erro: 'Tutor não encontrado' });
    }
    res.json(atualizado);
  } catch (err) {
    res.status(400).json({ erro: err.message });
  }
});


router.delete('/cpf/:cpf', async (req, res) => {
  try {
    const cpf = req.params.cpf;
    const deletado = await Tutor.findOneAndDelete({ cpf });
    if (!deletado) {
      return res.status(404).json({ erro: 'Tutor não encontrado' });
    }
    res.json({ mensagem: 'Tutor deletado com sucesso' });
  } catch (err) {
    res.status(400).json({ erro: err.message });
  }
});

module.exports = router;