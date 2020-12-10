import './App.css'
import React from 'react'

//importando os componentes criados
import Mega from "./components/mega/mega"
import Contador from "./components/contador/Contador"
import Input from "./components/formulario/Input"
import IndiretaPai from "./components/comunicacao/IndiretaPai"
import DiretaPai from "./components/comunicacao/DiretaPai"
import UsuarioInfo from "./components/condicional/UsuarioInfo"
import ParOuImpar from "./components/condicional/ParOuImpar"
import TabelaProdutos from "./components/listas/TabelaProdutos"
import ListaAlunos from "./components/listas/ListaAlunos"
import Familia from "./components/basicos/familia"
import FamiliaMembro from "./components/basicos/familiaMembro"
import PrimeiroComponent from './components/basicos/Primeiro'
import ComponenteComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'

export default _ =>
    <div className='App'>
        <h1>Fundamentos React</h1>

        <div className="Cards">

            <Card titulo="#13 - Mega Sena" color="#631158">
                <Mega qtde={8}></Mega>
            </Card>
            
            <Card titulo="#12 - Contador" color="#1E0C78">
                <Contador numeroInicial={10}></Contador>
            </Card>

            <Card titulo="#11 - Componente Controlado" color="#E55353">
                <Input></Input>
            </Card>

            <Card titulo="#10 - Comunicação Indireta" color="#17968F">
                <IndiretaPai></IndiretaPai>
            </Card>

            <Card titulo="#09 - Comunicação Direta" color="#E21818">
                <DiretaPai></DiretaPai>
            </Card>

            <Card titulo="#08 - Renderização Condicional" color="#BF00FF">
                <ParOuImpar numero={22}></ParOuImpar>
                <UsuarioInfo usuario={{ nome: 'Fernando' }} />
                <UsuarioInfo usuario={{ email: 'fer@nando.com' }} />
            </Card>

            <Card titulo="#07 - Tabela de Produtos" color="#E74B4B">
                <TabelaProdutos></TabelaProdutos>
            </Card>

            <Card titulo="#06 - Listas" color="#5F2323">
                <ListaAlunos></ListaAlunos>
            </Card>

            <Card titulo="#05 - Componente com Filhos" color="#50564D">
                <Familia sobreNome="Borges">
                    <FamiliaMembro nome="João" />
                    <FamiliaMembro nome="Pedro" />
                    <FamiliaMembro nome="Matheus" />
                </Familia>

            </Card>

            <Card titulo="#04 - Desafio Aleatório" color="#090">
                <Aleatorio
                    min={1}
                    max={200}
                    frase="O número aleatório é: " />
            </Card>

            <Card titulo="#03 - Fragmento" color="#800080">
                <Fragmento />
            </Card>

            <Card titulo="#02 - Média Escolar" color="#0000FF">
                <ComponenteComParametro
                    titulo="Situação do Aluno(a)"
                    aluno="Pedro"
                    nota={8.5} />
            </Card>

            <Card titulo="#01 - Aprendendo Component" color="#FF7F50">
                <PrimeiroComponent></PrimeiroComponent>
            </Card>
        </div>
    </div>

