import './index.css'
//ReactDom utillizado para exibir dados na tela
import ReactDom from 'react-dom'

import React from 'react'

import App from './App'

//RENDER = renderizar/mostrar algo na tela
ReactDom.render(
    <App/>,
    //referenciado para a pagina index
    document.getElementById('root'));