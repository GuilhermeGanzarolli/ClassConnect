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

router.get(`/alunoEspecifico/:IdAluno`, async (req, res)=>{
    const alunos = await Aluno.findById({_id:req.params.IdAluno})
    res.send(alunos)
})

router.delete("/:id", async(req, res) =>{
    const aluno = await Aluno.findByIdAndDelete(req.params.id)
    return res.json({message:`Usuário ${aluno.nome} deletado com sucesso`})
})

module.exports = router