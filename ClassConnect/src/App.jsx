import { useState, useEffect } from 'react'

import './App.css'

function App() {
  const [students, setStudents] = useState([])
  const [nome, setNome] = useState("")
  const [idade, setIdade] = useState("")
  const [serie, setSerie] = useState("")
  const [listAlunos, setListAlunos] = useState([])

  useEffect(()=>{
    fetch('http://localhost:5000/api/students/alunos')
      .then(response => response.json())
      .then(data => {
        setListAlunos(data)
        setStudents(data)
      })
      .catch(error => console.error(`Erro ao buscar alunos: ${error}`))
  },[listAlunos])

  const handelSubmit = (e)=>{
    e.preventDefault()

    const aluno = {
      nome: nome,
      idade: idade,
      serie: serie
    }

    fetch('http://localhost:5000/api/students/',{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(aluno),
    })

    .then((response)=> response.json())
    .then((data)=>{
      console.log('Aluno cadastrado: ', data)
      alert('Aluno cadastrado com sucesso')
    })
    
  }

  return (
    <>
      <h1>Lista de alunos</h1>
      <ul>
        {students.map(student=>(
          <li key={student.key}>{student.nome} - {student.idade}</li>
        ))}
      </ul>
      <form onSubmit={handelSubmit}>
        <label>
          <span>Nome</span>
          <input type="text" value={nome} onChange={(e)=>setNome(e.target.value)}/>
        </label>
        <label>
          <span>Idade</span>
          <input type="text" value={idade} onChange={(e)=>setIdade(e.target.value)}/>
        </label>
        <label>
          <span>Serie</span>
          <input type="text" value={serie} onChange={(e)=>setSerie(e.target.value)}/>
        </label>
        <input type="submit" />
      </form>
    </>
  )
}

export default App
