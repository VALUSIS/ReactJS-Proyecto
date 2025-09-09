import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import "./App.css"

function App() {
  return (
    <>
      <NavBar />
      <main>
        <ItemListContainer greeting="¡Bienvenido a mi e-commerce!" />
      </main>
    </>
  )
}

export default App