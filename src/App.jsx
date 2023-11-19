import './App.css'
import Main from './Components/Main';
import Start from './Components/Start'
import {Routes,Route} from "react-router-dom";

function App() {
  
  return (
    <>
     <Routes>
      <Route path='/' element={<Start/>} />
      <Route path='/main' element={<Main/>} />
     </Routes>
    </>
  )
}

export default App
