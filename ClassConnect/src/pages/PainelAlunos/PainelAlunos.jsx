import React, { useEffect, useState } from 'react'
import {Link} from 'react-router'

import useFetch from '../../hooks/useFetch'

import styles from './PainelAlunos.module.css'


const PainelAlunos = () => {

  const [nome, setNome] = useState("")
  const [idade, setIdade] = useState("")
  const [serie, setSerie] = useState("")
  const [responseMessage, setResponseMessage] = useState("")
  const [listaNovosAlunos, setListaNovosAlunos]= useState([])

  const {data:alunos, loading, error, refech} = useFetch('http://localhost:5000/api/students/alunos')


  const handleSubmit = async (e) =>{
    e.preventDefault()

    const aluno = {
      nome,
      idade,
      serie
    }
    
    await fetch('http://localhost:5000/api/students/cadastrarAluno',{
      method:'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(aluno)
    })
    .then(response => response.json())
    .then(data => {
      setListaNovosAlunos(aluno)
      setResponseMessage(data.message)
    })
    .catch(error => console.error("Error: ", error))

    setNome("")
    setIdade("")
    setSerie("")
    alert(`Aluno ${aluno.nome} cadastrado com sucesso`)
    refech()
  }

  const handleDelete = async (id) =>{
    await fetch(`http://localhost:5000/api/students/${id}`,{
      method: 'DELETE'
    })
      .then(response =>response.json())
      .then(data=>{
        setResponseMessage(data.message)
        setListaNovosAlunos(id)
      })
      .catch(err => console.log('Erro ao deletar o item', err))
      refech()
  }

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
          <div className={styles.areaMsg}>
            {responseMessage && responseMessage}
          </div>
        </div>

        <table>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Idade</th>
            <th>Série</th>
            <th>Opções</th>
          </tr>
          {alunos && alunos.map((aluno)=>(
          <tr key={aluno._id}>
            <td><Link to={`/painel-aluno/${aluno._id}`} >#</Link></td>
            <td>{aluno.nome}</td>
            <td>{aluno.idade}</td>
            <td>{aluno.serie}</td>
            <td>
              <button className={styles.btnDeletar} onClick={()=>handleDelete(aluno._id)}>
                Deletar
              </button>
            </td>
          </tr>
        ))}
        </table>
    </div>
  )
}

export default PainelAlunos