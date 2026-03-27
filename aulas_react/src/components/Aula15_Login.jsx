import { useState } from "react"
import { enderecoServidor } from '../utils'
import { useNavigate } from 'react-router-dom'
const Aula15_Login = () => {
                    const navigate = useNavigate()

        const [ email, setEmail ] = useState('')    //variavel, função e estado inicial
        const [ senha, setSenha ] = useState('')    //variavel, função e estado inicial
        const [ mensagem, setMensagem ] = useState('')    //variavel, função e estado inicial
    
        const botaoEntrar = async (event) => {

            //função para não recarregar a tela
            event.preventDefault();
            try{
                if(email == '' || senha == ''){
                    throw new Error('Preencha todos os campos')
                }
                const login = {
                    email: email,
                    senha: senha
                }
                //utilizando autenticação com a API do Back-end
                const resposta = await fetch(`${enderecoServidor}/login`, {
                    method: 'POST',
                    headers: {'Content-Type' : 'application/json'}, 
                    body: JSON.stringify(login)
                })
                const dados = await resposta.json()  //convertendo para JSON

                if (resposta.ok){
                    console.log('Login bem sucedido', dados);
                    setMensagem('Login bem-sucedido!')
                    localStorage.setItem('UsuarioLogado', JSON.stringify(dados))
                    navigate('/inicio')
                }else {
                    setMensagem('Email ou senha incorretos')
                    console.log('Erro ao fazer login', dados.message);
                    
                }
            }catch (erro){
                console.error('Erro ao realizar login: ', erro);
                setMensagem(erro.message)
            }
        }
        // function botaoEntrar(){
        //     setMensagem(senha && email)
        // if (email == 'senai@senai.br' && senha == '123' ){
        //     setMensagem(' ✅ Login bem sucedido')
        // }else {
        //     setMensagem('❌Email ou senha incorreto❌')
        // }
        // }


    return (
        <div style={estilos.loginConteudo}>
                <img style={estilos.logo} src="https://tecservice.com.br/wp-content/uploads/2024/05/senai-logo.jpg"></img>
                <h2 style={estilos.tituloLogin}>Login</h2>

            <div style={estilos.grupoInput}>
                 <label style={estilos.label}  >Email</label>
                 <input type='text' placeholder='Digite seu email' style={estilos.input}  
                 onChange={ (event) => setEmail(event.target.value) } value={email}/>
            </div>

            <div style={estilos.grupoInput}>
                 <label style={estilos.label}>Senha</label>
                 <input type='password' placeholder='Digite sua senha' style={estilos.input} 
                  onChange={ (event) => setSenha(event.target.value) } value={senha}/>

            </div>

            <button onClick={botaoEntrar} style={estilos.botao} >Entrar</button>
                             <p style={{fontStyle: 'bold'}} > {mensagem}</p>

        </div>
        
    )

}


const estilos = {
    loginConteudo: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#c8b3b3',
        padding: '20px',
        margin: '10px auto',
        width: '300px',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
        borderRadius: '8px',
        gap: '5px',
        marginTop: '40px',
    
        
    },
    logo: {
        height:'50px',

    },

    label:{
        display: 'block',
        fontWeight: 'bold'

    },

    input:{
        width: '100%',
        padding: '8px',
        borderRadius: '4px',
        border: '1px solid #fff',

    },
    
    tituloLogin:{
        fontSize: '30px',
        padding: '5px',
        color: '#be0b0b',

    },

    botao:{
        width: '100px',
        backgroundColor: '#be0b0b',
        color:'#fff',
        padding: '10px',
        border: 'none',
        borderRadius: '4px',
        marginTop: '20px'
    },

    grupoInput:{
        width: '100%'
    }
    

}



export default Aula15_Login