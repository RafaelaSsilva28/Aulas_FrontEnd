//IMPORTANDO O ARQUIVO CSS
import '../style/Aula03.css'
import { estilos } from '../style/Estilos'
import Aula03_Login from './Aula03_Login'

const Aula03 = () => {
    return(
        <div style={estilos.cardAula}>
            <h2> Aula03 - Componentes e estilização</h2>
            <h3>Criação de componentes reutilizaveis e suas estilizações</h3>
            <p>Aprendendo a criar e reutilizar componentes e estilizações para melhorar a UI</p>

            <hr />
            <p className='texto'>CSS Externo</p>
            <p className='descricao'>A forma mais simples e classica de estilização CSS</p>

            <hr />
            <p style={ {color:'rgb(255, 0, 0)', fontWeight: 'bold'} }>Estilização Inline</p>
            <p style={ {fontStyle: 'italic', } }>Estilos Aplicados diretamente nos elementos como OBJETOS </p>
            
            <hr />
            <p style={estilos.tituloModulo}>CSS Modules</p>
            <p style={estilos.descricaoModulo}>CSS modularizado é a forma mais comum para Mobile</p>  

            <hr />
            <Aula03_Login/> 

        </div>
        
        
    )
}



export default Aula03