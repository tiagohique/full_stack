import './App.css';
import Logo from './componentes/logo';
import perfil from './imagens/perfil.svg'
import sacola from './imagens/sacola.svg'

const textoOpcap = ['CATEGORIAS', 'MINHA ESTANTE', 'FAVORITOS'];
const icones = [perfil, sacola]

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Logo />
        <ul className='opcoes'>
          {textoOpcap.map((texto) => (
            <li className='opcao' key={texto}>
              <p>{texto}</p>
            </li>
          ))}
        </ul>


        <ul className='icones'>
          {icones.map((icone) => (
            <li><img src={icone} className='icone'></img></li>
          ))}
        </ul>

      </header>
    </div>
  );
}

export default App;