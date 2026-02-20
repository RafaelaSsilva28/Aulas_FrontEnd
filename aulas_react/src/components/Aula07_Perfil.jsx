import { useState } from "react"

const Aula07_Perfil = ({foto, nome}) => {


    return(
        <div style={estilos.loginConteudo}>
            
           <Avatar foto={foto} />
           <Nome nome={nome} />
           <BotaoSeguir />

        </div>
    ) 
}


export const Avatar = ({foto}) =>{
    return(
    <img style={estilos.img} src={foto} alt="" />
    )
} 

export const Nome = ({nome}) =>{
    return(
    <p style={{marginTop: "10px", color: "#940909", textShadow: "2px 2px 4px #ec7272"
}}>{nome}</p>
    )
}
export const BotaoSeguir= () =>{
    const [seguindo, setSeguindo] = useState(false)


     return(

        <button onClick={() => setSeguindo(!seguindo)} style={{
            backgroundColor: seguindo == false ? '#34cb50' : "#516bd2",
            color: '#FFF',
            border:'none',
            padding: '10px 16px',
            borderRadius: '8px',
            marginTop: "10px",

        }}>
            { seguindo == false ? "Seguir" : "Deixar de Seguir"}
        </button>
     )
}

const estilos = {
    loginConteudo: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor:'#fffefe',
        padding: '50px',
        margin: '10px auto',
        width: '300px',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
        gap: '5px',
        marginTop: '40px',
        borderRadius: '10px'
    
        
    },
    img: {
        height:'150px',
        width: '150px',
        borderRadius: '90%',
        filter: 'drop-shadow(5px 5px 10px rgba(190, 120, 63, 0.5))'


    }
}

export default Aula07_Perfil