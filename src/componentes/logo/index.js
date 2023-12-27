import logo from '../../imagens/logo.svg'
import styled from 'styled-components'

const AppDiv = styled.div`
    display: flex;
    font-size: 30px;
`
const AppImg = styled.img`
    margin-right: 10px;
`

function Logo() {
    return (
        <AppDiv>
            <AppImg
                src={logo}
                alt='logo' 
                className='logo-img'
            ></AppImg>
            <p><strong>Tiago</strong>Books</p>
       </AppDiv>
    )
}

export default Logo