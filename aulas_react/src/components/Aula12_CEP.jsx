import { useState } from "react";
import { estilos } from "../style/Estilos";

const Aula12_CEP = () => {

    const [cep, setCep] = useState('');
    const [logradouro, setlogradouro] = useState('');
    const [localidade, setlocalidade] = useState('');
    const [bairro, setbairro] = useState('');
    const [estado, setestado] = useState('');

    const buscarDados = async () => {
        try {

            const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json`);
            const dados = await resposta.json();

            setlogradouro(dados.logradouro);
            setbairro(dados.bairro);
            setlocalidade(dados.localidade);
            setestado(dados.estado);

        } catch (error) {
            console.log("Erro ao buscar dados:", error);
        }
    };

    return (
        <div>
            <div style={estilos.cardAula}>
                <h2>Buscar CEP</h2>

                <input
                    type="text"
                    placeholder="Digite o CEP"
                    value={cep}
                    onChange={(event) => setCep(event.target.value)}
                />

                <button onClick={buscarDados}>Buscar CEP</button>

                <p>Logradouro - {logradouro}</p>
                <p>Bairro - {bairro}</p>
                <p>Cidade - {localidade}</p>
                <p>Estado - {estado}</p>

            </div>
        </div>
    );
};

export default Aula12_CEP;