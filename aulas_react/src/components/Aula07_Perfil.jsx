const Aula07_Perfil = () => {


    return(
        <div style={estilos.loginConteudo}>
            
           <Avatar />
           <Nome />
           <Button />

        </div>
    )
}


export const Avatar = () =>{
    return(
    <img style={estilos.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8bXXlgCBVRH1uLmaHZJ4qXyy_QiTCvLlOhw&s" alt="" />
    )
} 

export const Nome = () =>{
    return(
    <p>Rafaela</p>
    )
}
export const Button= () =>{
     return(

        <button>SEGUIR</button>
     )
}

const estilos = {
    loginConteudo: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#dcd6d6',
        padding: '50px',
        margin: '10px auto',
        width: '300px',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
        gap: '5px',
        marginTop: '40px',
    
        
    },
    img: {
        height:'200px',
        borderRadius: '200px'

    }
}

export default Aula07_Perfil