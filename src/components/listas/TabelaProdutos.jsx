import './TabelaProdutos.css'
import React from 'react'
import produtos from '../../data/produtos'

export default (props) => {

    function getLinhas() {
        return produtos.map((produto, id) => {
            return (
                <tr key={produto.id} className={id % 2 === 0 ? 'Par' : 'Impar'}>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    {/*toFixed(2) exibe apenas duas casas decimais */}
                    <td>R$ {produto.preco.toFixed(2).replace('.', ',')}</td>
                </tr>
            )
        })
    }

    return (
        <div className="TabelaProdutos">
            <table border="1">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {getLinhas()}
                </tbody>
            </table>
        </div>
    )
}