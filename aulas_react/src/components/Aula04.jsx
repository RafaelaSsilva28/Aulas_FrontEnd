import { estilos } from '../style/Estilos'
import Aula04_Filmes from './Aula04_filmes'
import Aula04_IMC from './Aula04_IMC'

const Aula04 = () => {
    return(
        <div style={estilos.cardAula}>
            <h2> Aula 04 - Props</h2>
            <h3>Criação de componentes reutilizaveis e suas estilizações</h3>
          <Aula04_IMC nome='Rafaela' peso={75} altura={1.80}/> 
          <Aula04_IMC nome='Guilherme' peso={75} altura={1.80}/> 
          <Aula04_IMC nome='Guilherme' peso={75} altura={1.80} cor='#90126f'/> 
        
        <Aula04_Filmes img='https://m.media-amazon.com/images/I/71IHLi5qPLL._AC_SX425_.jpg'
        titulo='Flow' genero='Animação'/>

        <Aula04_Filmes img='https://m.media-amazon.com/images/I/81JtFk9adxS._AC_SY300_SX300_QL70_ML2_.jpg'
        titulo='Raya And The Last Dragon' genero='Animação'/>

        <Aula04_Filmes img='https://m.magazineluiza.com.br/a-static/420x420/dvd-enrolados-disney-original/campinascomercio2/4964/7cd98eb1ad9c60f8fd5dc006204c40b6.jpeg'
        titulo='Enrolados' genero='Animação'/>

        </div>

    )
}
export default Aula04