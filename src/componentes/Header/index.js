
import Logo from '../Logo'
import OpcoesHeader from '../OpcoesHeader'
import IconesHeader from '../IconesHeader'
import styled from 'styled-components'

const AppContainerHeader = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: center;
`


function Header() {
    return (
        <AppContainerHeader>
            <Logo/>
            <OpcoesHeader/>
            <IconesHeader/>
        </AppContainerHeader>
    )
}

export default Header