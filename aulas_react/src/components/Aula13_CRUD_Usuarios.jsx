import { useEffect, useState } from "react"
import Aula13_Usuario from "./Aula13_Usuario"

const Aula13_CRUD_Usuarios = () => {
    const [listaUsuarios, setListaUsuarios] = useState([])
    const [nome, setNome] = useState('')
    const [senha, setSenha] = useState('')
    const [email, setEmail] = useState('')
    const [editando, setEditando] = useState(false)
    const [id, setId] = useState('')
    
     function botaoAlterar(usuario){ //essa function recebe um objeto com todos os dados do usuario
        setNome(usuario.nome) //quando clicar no botao alterar vai alterar o nome
        setEmail(usuario.email)
        setSenha(usuario.senha)
        setEditando(true)
        setId(usuario.id_usuario)
    }

    async function botaoAdicionar() {
        const novoUsuario = {
            nome: nome,
            email: email,
            senha: senha


        }

             //botão POST utilizando uma outra API
        try {
            let endpoint = 'http://10.130.42.68:3001/usuarios';
            let metodo = 'POST';

            if (editando == true) {
                endpoint = `http://10.130.42.68:3001/usuarios/${id}`
                metodo = 'PUT'
            }
            const resposta = await fetch(endpoint, {
                method:  metodo, //mandando o metodo post para diferenciar do metodo GET que é como padrão
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(novoUsuario)
            }) //mandando um objeto como parametro

            if (!resposta.ok) {  //se der algum erro na resposta : 
                throw new Error('Erro ao adicionar usuario: ' + resposta)
            }

            buscarDados()
            LimparCamposFormularios()

        } catch (erro) {
            console.error('Erro ao adicionar usuario', erro.message)
        }

            //function com campos para reutilizar a função
    function LimparCamposFormularios(){
        setNome('')
        setEmail('')
        setSenha('')
        setEditando(false)
        setId('')
    }        
    }
    //BOTÃO EXCLUIR
    async function botaoExcluir(id_usuario) {

                    if (!window.confirm('Você tem certeza que deseja excluir?')) return

            //botão POST
        try {
            
            const resposta = await fetch(`http://10.130.42.68:3001/usuarios/${id_usuario}`, {
                method:  'DELETE', //mandando o metodo post para diferenciar do metodo GET que é como padrão
                
            }) 

            if (!resposta.ok) {  //se der algum erro na resposta : 
                throw new Error('Erro ao adicionar usuario: ' + resposta.statusText)
            }

            buscarDados()

        } catch (erro) {
            console.error('Erro ao adicionar usuario', erro.message)
        }
    }
    useEffect(() => {
        buscarDados()
    }, [])

    //function buscar dados da API
    async function buscarDados() {
        try{
            const resposta = await fetch('http://10.130.42.68:3001/usuarios')
            const dados =await resposta.json()
            setListaUsuarios(dados)
        } catch (erro) {
            console.error('Erroao  carregar os dados', erro.message)
            
        }
    }

    return (
        <div>
            <h1>Cadastro de Usuarios</h1>
            <div style={{ display: "flex", flexDirection: 'column', gap: 10 }}>
                <input type="text" placeholder="Nome" style={estilos.inputs} value={nome}
                    onChange={(event) => setNome(event.target.value)} />
                    <input type="email" placeholder="Email" style={estilos.inputs} value={email}
                    onChange={(event) => setEmail(event.target.value)} />
                <input type="password" placeholder="Senha" style={estilos.inputs} value={senha}
                    onChange={(event) => setSenha(event.target.value)} />
                <button  style={estilos.botao} onClick={botaoAdicionar}>
                    {editando == false ? "Adicionar usuario" : "Editar Usuario"}
                </button>

                {
                    editando == true && <button style={estilos.botao} onClick={LimparCamposFormularios}>Cancelar</button>
                }
                <hr />
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }} >
                    {
                        listaUsuarios.map((usuario, pos) => (
                            <Aula13_Usuario key={pos} usuario={usuario} botaoExcluir={botaoExcluir} botaoAlterar={botaoAlterar}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

const estilos = {
    cadastro: {
        display: "flex",
        flexDirection: "column",
        gap: "10px",
    },
    inputs: {
        padding: "10px",
        fontSize: "16px",
    },
    botao: {
        backgroundColor: "#e30613",
        color: "#fff",
        borderRadius: "5px",
        fontWeight: "bold",
        border: "none",
        padding: "10px",
        fontSize: "16px",
    }
}

export default Aula13_CRUD_Usuarios