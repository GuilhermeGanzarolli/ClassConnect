const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const MateriasSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    notas: {type:[Number]}
})


const Aluno = mongoose.model('Aluno', {
    nome: String,
    idade: String,
    serie: String,
    materiasMatriculadas: [MateriasSchema],
})

//Rotas dos alunos
router.get('/', (req, res)=>{
    res.send('Rota teste dos alunos')
})

//CADASTRAR UM ALUNO
router.post('/cadastrarAluno', async (req, res) =>{
    const aluno = new Aluno({
        nome: req.body.nome,
        idade: req.body.idade,
        serie: req.body.serie,
        materiasMatriculadas: req.body.materiasMatriculadas
    })

    await aluno.save()
    res.send(aluno)
})

//ADICIONAR UMA MATÉRIA A GRADE DO ALUNO
router.post('/addMateria/:IdAluno', async(req, res)=>{
    const aluno = await Aluno.findById({_id:req.params.IdAluno})
    const {nome, nota} = req.body
    aluno.materiasMatriculadas.push({nome, nota})
    await aluno.save()
    res.send(aluno)
})

//LISTAR TODOS OS ALUNOS
router.get('/alunos', async (req, res)=>{
    const alunos = await Aluno.find()
    res.send(alunos)
})


//BUSCAR UM ALUNO ESPECÍFICO
router.get(`/alunoEspecifico/:IdAluno`, async (req, res)=>{
    const alunos = await Aluno.findById({_id:req.params.IdAluno})
    res.send(alunos)
})


//DELETAR UM ALUNO
router.delete("/:id", async(req, res) =>{
    const aluno = await Aluno.findByIdAndDelete(req.params.id)
    return res.json({message:`Usuário ${aluno.nome} deletado com sucesso`})
})

module.exports = router