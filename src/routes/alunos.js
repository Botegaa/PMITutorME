const express = require('express');
const router = express.Router();
const Aluno = require('../models/aluno');



router.post('/login', async (req, res) => {
  const { email, senha } = req.body;

  try {
    const aluno = await Aluno.findOne({ email });

    if (!aluno) return res.status(404).json({ erro: 'Email não encontrado' });
    if (aluno.senha !== senha) return res.status(401).json({ erro: 'Senha incorreta' });

    res.json({ mensagem: 'Login bem-sucedido', aluno });
  } catch (err) {
    res.status(500).json({ erro: 'Erro interno no servidor' });
  }
});

router.post('/', async (req, res) => {
  try {
    const novoAluno = new Aluno(req.body);
    const salvo = await novoAluno.save();
    res.status(201).json(salvo); 
  } catch (err) {
    res.status(400).json({ erro: err.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const atualizado = await Aluno.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!atualizado) return res.status(404).json({ erro: 'Aluno não encontrado' });

    res.json(atualizado);
  } catch (err) {
    res.status(400).json({ erro: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deletado = await Aluno.findByIdAndDelete(req.params.id);

    if (!deletado) return res.status(404).json({ erro: 'Aluno não encontrado' });

    res.json({ mensagem: 'Aluno deletado com sucesso' });
  } catch (err) {
    res.status(400).json({ erro: err.message });
  }
});


router.get('/', async (req, res) => {
  try {
    const alunos = await Aluno.find();
    res.json(alunos);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao buscar alunos' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const aluno = await Aluno.findById(req.params.id);
    if (!aluno) {
      return res.status(404).json({ erro: "Aluno não encontrado" });
    }
    res.json(aluno);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao buscar aluno' });
  }
});

module.exports = router;