import animals from "./assets/data/tierdatenbank"
import './App.css'
import AnimalList from "./assets/components/animalList/AnimalList"

function App() {

  return (
    <>
      <AnimalList animals = {animals}/>
    </>
  )
}

export default App
