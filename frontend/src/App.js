import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Menu from './components/Menu'

const App = () => {

  const [inputFrutas, setInputFrutas] = React.useState("")
  const [inputTitulo, setInputTitulo] = React.useState("")

  const frutas = useSelector((state) => state.frutasReducer.frutas)
  const stateTitulo = useSelector((state) => state.tituloReducer.titulo)

  const dispatch = useDispatch()

  const adicionarFruta = (event) => {
    event.preventDefault()

    const objFruta = {
      nome: inputFrutas
    }
    dispatch({ type: "ADICIONAR", value: objFruta })
  }

  const alterarTitulo = (event) => {
    setInputTitulo(event.target.value)
    dispatch({ type: "ALTERAR", value: event.target.value })
  }

  return (
    <div className="container-fluid border-primary rounded w-75 bg-info mt-2 p-2 text-white">

      <form className="form-group text-center">
        <label>Titulo:</label>
        
        <br />
        <input className="form-control form-control-sm w-25 text-center mx-auto"
          placeholder="Digite o título:"
          value={inputTitulo}
          onChange={alterarTitulo} />
        <h1>{stateTitulo}</h1>
      </form>
      <form className="form-group" onSubmit={adicionarFruta}>
        <input className="form-control rounded form-control-sm w-25 text-center mx-auto"
          placeholder="Digite uma fruta:"
          value={inputFrutas}
          onChange={(event) => setInputFrutas(event.target.value)}
        />
        <br />
        <div class="row justify-content-center">
        <button className="btn btn-primary btn-sm">Enviar</button>
        </div>
      </form>
      { frutas.map((fruta, index) => {
        return (
          <li className="mt-3 list-group-item rounded list-group-item-success w-25 text-center mx-auto" key={index}> {fruta.nome} </li>
        )
      })
      }
      <Menu />
    </div>
  )
}

export default App