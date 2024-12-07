const express = require('express')
const router = express.Router()

//Estas são as rotas dos professores
router.get('/', (req, res)=>{
    res.send('Este é a rota teste dos professores')
})

router.get('/professores', (req, res)=>{
    res.send('Esta é a listagem base dos professores')
})

module.exports = router