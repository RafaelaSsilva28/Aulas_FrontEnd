import { useState } from "react"
const Aula03_Login = () => {

        const [ email, setEmail ] = useState('')    //variavel, função e estado inicial
        const [ senha, setSenha ] = useState('')    //variavel, função e estado inicial
        const [ mensagem, setMensagem ] = useState('')    //variavel, função e estado inicial
    
        function validar(){
            setMensagem(senha && email)
        }if (email && senha == 'senai@senai.br', 123 ){
                setMensagem(mensagem = 'Login bem sucedido')
        }


    return (
        <div style={estilos.loginConteudo}>
                <img style={estilos.logo} src="https://tecservice.com.br/wp-content/uploads/2024/05/senai-logo.jpg"></img>
                <h2 style={estilos.tituloLogin}>Login</h2>

            <div style={estilos.grupoInput}>
                 <label style={estilos.label}  >Email</label>
                 <input type='text' placeholder='Digite seu email' style={estilos.input}  onChange={ (event) => setEmail(event.target.value) } value={email}></input>
            </div>

            <div style={estilos.grupoInput}>
                 <label style={estilos.label}>Senha</label>
                 <input type='password' placeholder='Digite sua senha' style={estilos.input}  onChange={ (event) => setSenha(event.target.value) } value={senha}></input>
                 <p  onChange={ (event) => setMensagem(event.target.value) } value={mensagem}></p>
            </div>

            <button style={estilos.botao} onClick={validar}>Entrar</button>

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



export default Aula03_Login