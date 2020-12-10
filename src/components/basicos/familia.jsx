import React, { cloneElement } from 'react'

export default (props) => {
    return (
        <div>
            {/*props.children exibe os filhos da familia */}

            {
                /*acessando cada filho da familia*/ 
                props.children.map((child, i) => {

                    /* clona e exibe cada filho com a props da familia */ 
                    return cloneElement(child, {...props, key: i})
                })
            }
        </div>
    )
}