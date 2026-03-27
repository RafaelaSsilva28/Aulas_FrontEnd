import { BrowserRouter, Routes, Route } from "react-router-dom"
import Principal from "./pages/Principal"
import Sobre from "./pages/Sobre"
import NotFound from "./pages/NotFound"
import Perfil from "./pages/Perfil"
import Inicio from "./pages/Inicio"
import Detalhes from "./pages/Detalhes"
import Contato from "./pages/Contato"
import Filmes from "./pages/Filmes"

function App (){
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={ <Principal />}></Route>
            <Route path="/sobre" element={ <Sobre />}>  </Route>
            <Route path="/perfil/:nome" element={ <Perfil />}>  </Route>
            <Route path="*" element={ <NotFound />}>  </Route>
            <Route path="/inicio" element={ <Inicio />}>  </Route>
            <Route path="/detalhes" element={ <Detalhes />}>  </Route>
            <Route path="/contato" element={ <Contato />}>  </Route>
            <Route path="/filmes/:id" element={ < Filmes />}>  </Route>
          
            
        </Routes>
    </BrowserRouter>
  )
}

export default App
