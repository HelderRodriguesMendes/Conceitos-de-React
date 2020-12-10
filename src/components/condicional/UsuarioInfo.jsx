import React from 'react'
import If from './If'

export default (props) => {
    const usuario = props.usuario || {}
    return (
        <div>
            {/*caso o usuario seja informado com nome */}
            <If test={usuario && usuario.nome}>
                Seja bem vindo <strong>{usuario.nome}</strong>!
            </If>
            
            {/*caso o usuario não seja informado ou não seja informado com nome */}
            <If test={!usuario || !usuario.nome}>
                Seja bem vindo <strong>Usuário</strong>!
            </If>
        </div>
    )
}