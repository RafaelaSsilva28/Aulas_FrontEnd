import { estilos } from "../style/Estilos";
import Aula07_Multicomponentes, {
  MeuComponenteNomeado,
  MeuComponenteNomeado2
} from "./Aula07_Multicomponentes";
import Aula07_Perfil from "./Aula07_Perfil";

const Aula07 = () => {
  return (
    <div style={estilos.cardAula}>
      <h2>Aula07 - Importação e Exportação de Módulos</h2>
      <h3>Compreendendo importação e exportação padrão ou nomeada</h3>
      <hr />

      <Aula07_Multicomponentes />
      <MeuComponenteNomeado />
      <MeuComponenteNomeado2 />
      {/* <enderecoServidor /> */}
      <Aula07_Perfil />
    </div>
  );
};
export default Aula07;
