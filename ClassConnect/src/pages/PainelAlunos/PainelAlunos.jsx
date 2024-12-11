import React, { useEffect, useState } from 'react'


const PainelAlunos = () => {

  const [data, setData] = useState(null)

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log("Formulário enviado")
  }

  useEffect(()=>{
    fetch('http://localhost:5000/api/students/alunos')
      .then(response=>response.json())
      .then(data=>setData(data))
      .catch(error=>console.error(error))
    
  },[])

  return (
    <div>
        <div>
          <h3>Cadastrar aluno</h3>
          <form action="" onSubmit={handleSubmit}>
            <label htmlFor="">
              <span>Nome</span>
              <input type="text" />
            </label>
            <label htmlFor="">
              <span>Idade</span>
              <input type="text" />
            </label>
            <label htmlFor="">
              <span>Série</span>
              <input type="text" />
            </label>
            <input type="submit" />
          </form>
        </div>

        PainelDosAlunos
        {data && data.map((aluno)=>(
          <p key={aluno._id}>{aluno.nome}</p>
        ))}
    </div>
  )
}

export default PainelAlunos