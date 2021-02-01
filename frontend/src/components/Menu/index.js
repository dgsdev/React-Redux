import React from 'react'
import { useSelector } from 'react-redux'

const Menu = () => {
    const stateTitulo = useSelector((state) =>
        state.tituloReducer.titulo)
    return (
        <>
            <h1 className="text-center">{ stateTitulo }</h1>
        </>
    )
}
export default Menu