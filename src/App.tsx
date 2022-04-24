import './index.css';
import { RouteList } from './Routes/RouteList';

const App = () => {
  return (
    <div>
      <header>
        <div className="headerTitle">
          Galeria de fotos
        </div>
        <hr />
      </header>


      <div className='content'>
        <RouteList />
      </div>


      <footer>
        <div className='footerMain'>
          Criado com amor por Breno.
        </div>
      </footer>
    </div>
  )
}

export default App;