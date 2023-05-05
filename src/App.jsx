import Navbar from './components/navbar'
import ItemListContainer from './components/ItemListContainer';

function App() {

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <ItemListContainer saludo="¡Hola Codeeeer!" />
      </div>
    </>
  )
}

export default App
