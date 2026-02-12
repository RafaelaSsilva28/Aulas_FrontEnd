const Aula04_Filmes = ({ titulo, genero, img }) => {
  return (
    <div style={estilos.div}>
      <img style={estilos.img} src={img} alt="" />
      <h3 style={estilos.titulo}>{titulo}</h3>
      <p style={estilos.genero}>{genero}</p>
      <div style={estilos.bt}>
        <button style={estilos.button}>Assistir</button>
      </div>
    </div>
  );
};
export default Aula04_Filmes;

const estilos = {
  img: {
    height: "300px",
    width: "100%",
    borderRadius: "5px",
  },
  div: {
    display: "inline-block",
    flexWrap:
      "wrap" /* Permite que os cards pulem de linha em telas pequenas */,
    gap: "20px" /* Espaçamento entre os cards */,
    justifyContent: "center" /* Centraliza os cards na tela */,
    padding: "20px",
    backgroundColor: "#f8f5f5",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
    marginLeft: "65px",
    marginTop: "30px",
  },
  titulo: {
    textAlign: "center",
    color: "#261185",
    marginBottom: "10px" /* Espaço abaixo do título */,
    marginTop: "5px",
  },
  genero: {
    textAlign: "center",
    color: "#912828",
  },
  button: {
    padding: "10px 15px",
    backgroundColor: "#4c0f8f",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "12px",
    cursor: "pointer",
  },
  bt: {
    textAlign: "center",
    marginTop: "5px",
  },
};
