import React from 'react'

export default (props) => {
    const min = 30
    const max = 80
    const gerarIdadePai = () => parseInt(Math.random() * (max - min)) + min
    const gerarNerd = () => Math.random() > 0.5
    return (
        <div>
            <div>Filho</div>
             <button onClick={
                 function(e){
                    props.quandoClicar('Manoel', gerarIdadePai(), gerarNerd())
                 }
             }>Fornecer Informações</button>
        </div>
    )
}