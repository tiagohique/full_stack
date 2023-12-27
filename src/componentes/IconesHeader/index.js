
import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'
import styled from 'styled-components'

const AppUl = styled.ul`
    display: flex;
    align-items: center;
`

const AppLi = styled.li`
    margin-right: 40px;
    width: 25px;
`

const icones = [perfil, sacola]

function IconesHeader() {
    return (
        <AppUl>
            {icones.map((icone) => (
                <AppLi><img src={icone}></img></AppLi>
            ))}
        </AppUl>
    )
}

export default IconesHeader