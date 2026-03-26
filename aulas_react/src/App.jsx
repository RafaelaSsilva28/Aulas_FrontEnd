import { BrowserRouter, Routes, Route } from "react-router-dom"
import Principal from "./pages/Principal"
import Sobre from "./pages/Sobre"
import NotFound from "./pages/NotFound"
import Perfil from "./pages/Perfil"

function App (){
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={ <Principal />}></Route>
            <Route path="/sobre" element={ <Sobre />}>  </Route>
            <Route path="/perfil/:nome" element={ <Perfil />}>  </Route>
            <Route path="*" element={ <NotFound />}>  </Route>
          
            
        </Routes>
    </BrowserRouter>
  )
}

export default App
