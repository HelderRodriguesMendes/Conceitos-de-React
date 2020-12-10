import REACT, { useState } from 'react'
import './Input.css'

export default (props) => {

    const [valor, setValor] = useState('Inicial')

    function quandoDigitar(e) {
        //altera o valor do componete na tela atravez do evento ao digitar algo
        setValor(e.target.value)
    }

    return (
        <div className="Input">
            <div style={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                {/* readOnly é que o valo do componete não alterar, não é controlado */}
                <input value={valor} readOnly />

                {/*onChange evento que altera os dados do componente na tela */}
                <input value={valor} onChange={quandoDigitar} />
            </div>
        </div>
    )
}
