import React, { useEffect, useState } from 'react'

import styles from './PainelDoAluno.module.css'
import { useParams } from 'react-router'

const PainelDoAluno = () => {
  const {id} = useParams()

  const [infoAluno, setInfoAluno] = useState("")

  useEffect(()=>{
    fetch(`http://localhost:5000/api/students/alunoEspecifico/${id}`)
    .then(dados=>dados.json())
    .then(info=>setInfoAluno(info))

  })

  return (
    <div>
        {infoAluno && infoAluno.nome}
        
    </div>
  )
}

export default PainelDoAluno