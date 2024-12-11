const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Aluno = mongoose.model('Aluno', {
    nome: String,
    idade: String,
    serie: String
})

//Rotas dos alunos
router.get('/', (req, res)=>{
    res.send('Rota teste dos alunos')
})

router.post('/cadastrarAluno', async (req, res) =>{
    const aluno = new Aluno({
        nome: req.body.nome,
        idade: req.body.idade,
        serie: req.body.serie
    })

    await aluno.save()
    res.send(aluno)
})

router.get('/alunos', async (req, res)=>{
    const alunos = await Aluno.find()
    res.send(alunos)
})

router.get('/alunoEspecifico', async (req, res)=>{
    const alunos = await Aluno.findOne({nome:"Guilherme"})
    res.send(alunos)
})

module.exports = router