const Aula13_Usuario = ({ usuario, botaoExcluir, botaoAlterar}) => {
    return (
        <div style={estilos.cardUsuario}>
            <h2 style={estilos.titulo}>Nome: {usuario.nome}</h2>
            <h2 style={estilos.titulo}>Email: {usuario.email}</h2>
            <button style={estilos.botao} onClick={() => botaoExcluir(usuario.id_usuario)}>Excluir</button>
            <button style={estilos.botao} onClick={() => botaoAlterar(usuario)}>Editar</button>

        </div>
    )
}

const estilos = {
    cardUsuario: {
        border: "1px solid #ccc",
        padding: 10,
        width: 250, 
        textAlign: 'center'
    },

    imagem: {
        height: 150,
        width: "100%",
        objectFit: "contain"
    },

    titulo: {
        fontSize: 14,
        color: "#333",
        textAlign: "center"
    },

    senha: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#e30613"
    },

    botao: {
        display: "inline-block",
        background: "#e30613",
        color: "white",
        textDecoration: "none",
        padding: "8px 12px",
        borderRadius: 5,
        marginTop: 10,
        fontWeight: "bold"
    },

    freteGratis: {
        fontWeight: "bold"
    }
};

export default Aula13_Usuario