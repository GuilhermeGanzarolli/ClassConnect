import React, { useEffect, useState } from 'react'

import styles from './PainelAlunos.module.css'


const PainelAlunos = () => {

  const [data, setData] = useState(null)
  const [nome, setNome] = useState("")
  const [idade, setIdade] = useState("")
  const [serie, setSerie] = useState("")
  const [responseMessage, setResponseMessage] = useState("")

  const handleSubmit = (e) =>{
    e.preventDefault()

    const aluno = {
      nome,
      idade,
      serie
    }
    
    fetch('http://localhost:5000/api/students/cadastrarAluno',{
      method:'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(aluno)
    })
    .then(response => response.json())
    .then(data => setResponseMessage(data.message))
    .catch(error => console.error("Error: ", error))

  }

  useEffect(()=>{
    fetch('http://localhost:5000/api/students/alunos')
      .then(response=>response.json())
      .then(data=>setData(data))
      .catch(error=>console.error(error))
    
  },[])

  return (
    <div className={styles.conteudo}>
        <div>
          <h3>Cadastrar aluno</h3>
          <form action="" onSubmit={handleSubmit}>
            <label htmlFor="">
              <span>Nome</span>
              <input type="text" onChange={(e)=>setNome(e.target.value)} value={nome}/>
            </label>
            <label htmlFor="">
              <span>Idade</span>
              <input type="text" onChange={(e)=>setIdade(e.target.value)} value={idade}/>
            </label>
            <label htmlFor="">
              <span>Série</span>
              <input type="text" onChange={(e)=>setSerie(e.target.value)} value={serie}/>
            </label>
            <input className={styles.btnSubmit} type="submit" />
          </form>
          {responseMessage && responseMessage}
        </div>

        {data && data.map((aluno)=>(
          <p key={aluno._id}> {aluno.nome} - {aluno.idade} - {aluno.serie}*</p>
        ))}
    </div>
  )
}

export default PainelAlunos