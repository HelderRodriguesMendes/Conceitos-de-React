import React from 'react'
import alunos from '../../data/alunos'

export default (props) => {

    const alunosList = alunos.map(aluno => {
        return (
            <li key={aluno.id}>
                Id: {aluno.id} - Nome: {aluno.nome} - Nota: {aluno.nota}
            </li>
        )
    })

    return (
        <div>
            <ul style={{ listStyle: 'none' }}>
                {alunosList}
            </ul>
        </div>
    )
}