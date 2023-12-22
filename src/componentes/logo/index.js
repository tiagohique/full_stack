import logo from '../../imagens/logo.svg'

function Logo() {
    return (
        <div className='logo'>
            <img src={logo} alt='logo'></img>
            <p><strong>Tiago </strong>Books</p>
        </div>
    )
}

export default Logo;