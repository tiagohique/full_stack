import styled from 'styled-components'


const AppUl = styled.ul`
    display: flex;
`

const AppLi = styled.li`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
`

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

function OpcoesHeader() {
    return (
        <AppUl>
            { textoOpcoes.map( (texto) => (
                <AppLi><p>{texto}</p></AppLi>
            ) ) }
      </AppUl>
    )
}

export default OpcoesHeader