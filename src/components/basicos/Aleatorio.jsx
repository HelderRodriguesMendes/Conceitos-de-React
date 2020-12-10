import React from 'react'

export default (props) =>
    <div>
        <p>
            <strong>{props.frase}</strong>

            {/*gerando numero aleatorio */}
            <strong> {Math.floor(Math.random() * props.max + props.min)}</strong>
        </p>
    </div>

