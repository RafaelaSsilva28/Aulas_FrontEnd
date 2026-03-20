import { useEffect, useState } from "react"
import Aula13_Produto from "./Aula13_Produto"

const Aula13_CRUD_Produtos = () => {
    const [listaProdutos, setListaProdutos] = useState([])
    const [nome_produto, setNome] = useState('')
    const [preco, setPreco] = useState('')
    const [link_produto, setLinkProduto] = useState('')
    const [link_imagem, setLinkImagem] = useState('')
    const [categoria, setCategoria] = useState('')
    const [frete_gratis, setFrete] = useState(false)
    //criando variaveis de estado para alterar meu cadastro metodo PUT
    const [editando, setEditando] = useState(false)
    const [id, setId] = useState('')

    //função para carregar meus dados
    function botaoAlterar(produto){ //essa function recebe um objeto com todos os dados do produto
        setNome(produto.nome_produto) //quando clicar no botao alterar vai alterar o nome
        setPreco(produto.preco)
        setLinkProduto(produto.link_produto)
        setLinkImagem(produto.link_imagem)
        setCategoria(produto.categoria)
        setFrete(produto.frete_gratis)
        setEditando(true)
        setId(produto.id_produto)
    }

    async function botaoAdicionar() {
        const novoProduto = {
            nome_produto: nome_produto,
            preco: preco,
            link_produto: link_produto,
            link_imagem: link_imagem,
            categoria: categoria,
            frete_gratis: frete_gratis
        }
            
        try {
            let endpoint = 'http://localhost:3000/produtos';
            let metodo = 'POST';

            if (editando == true) {
                endpoint = `http://localhost:3000/produtos/${id}`
                //endpoint = `http://10.130.42.68:3001/produtos/${id}`
                metodo = 'PUT'
            }

            //botão POST
            const resposta = await fetch(endpoint, {
                method:  metodo, //mandando o metodo post para diferenciar do metodo GET que é como padrão
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(novoProduto)
            }) //mandando um objeto como parametro

            if (!resposta.ok) {  //se der algum erro na resposta : 
                throw new Error('Erro ao adicionar produto: ' + resposta)
            }

            buscarDados()
            LimparCamposFormularios()

        } catch (erro) {
            console.error('Erro ao adicionar produto', erro.message)
        }
    }
//BOTÃO EXCLUIR
    async function botaoExcluir(id_produto) {
        
            //botão POST
            if (!window.confirm('Você tem certeza que deseja excluir?')) return
        try {
            const resposta = await fetch(`http://localhost:3000/produtos/${id_produto}`, {
                //const resposta = await fetch(`http://10.130.42.68:3001/produtos/${id_produto}`, {

                method:  'DELETE', //mandando o metodo post para diferenciar do metodo GET que é como padrão
                
            }) 

            if (!resposta.ok) {  //se der algum erro na resposta : 
                throw new Error('Erro ao adicionar produto: ' + resposta.statusText)
            }

            buscarDados()

        } catch (erro) {
            console.error('Erro ao adicionar produto', erro.message)
        }
    }
    //function com campos para reutilizar a função
    function LimparCamposFormularios(){
        setNome('')
        setPreco('')
        setLinkProduto('')
        setLinkImagem('')
        setCategoria('')
        setFrete(false)
        setEditando(false)
        setId('')

    }

    useEffect(() => {
        buscarDados()
    }, [])

    //function buscar dados
    async function buscarDados() {
        try{
            const resposta = await fetch('http://localhost:3000/produtos')
            const dados =await resposta.json()
            setListaProdutos(dados)
        } catch (erro) {
            console.error('Erroao  carregar os dados', erro.message)
            
        }
    }

    return (
        <div>
            <h1>Cadastro de Produtos</h1>
            <div style={{ display: "flex", flexDirection: 'column', gap: 10 }}>
                <input type="text" placeholder="Nome" style={estilos.inputs} value={nome_produto}
                    onChange={(event) => setNome(event.target.value)} />
                <input type="number" placeholder="Preço" style={estilos.inputs} value={preco}
                    onChange={(event) => setPreco(event.target.value)} />
                <input type="text" placeholder="Link do Produto" style={estilos.inputs} value={link_produto}
                    onChange={(event) => setLinkProduto(event.target.value)} />
                <input type="text" placeholder="Link da foto" style={estilos.inputs} value={link_imagem}
                    onChange={(event) => setLinkImagem(event.target.value)} />
                <select  style={estilos.inputs} value={categoria} onChange={(event) => setCategoria(event.target.value)}>
                    <option value=''>Selecione uma categoria</option>
                    <option value='Eletrônicos'>Eletrônicos</option>
                    <option value='Brinquedos'>Brinquedos</option>
                    <option value='Livros'>Livros</option>
                </select>
                <span> <input type="checkbox" checked={frete_gratis}
                    onChange={(event) => setFrete(event.target.value)} />  Frete Grátis </span>
                <button  style={estilos.botao} onClick={botaoAdicionar}>{editando == false ? "Adicionar produto" : "Editar Produto"}</button>
                {
                    editando == true && <button style={estilos.botao} onClick={LimparCamposFormularios}>Cancelar</button>
                }
                <hr />
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }} >
                    {
                        listaProdutos.map((produto, pos) => (
                            <Aula13_Produto key={pos} produto={produto} botaoExcluir={botaoExcluir} botaoAlterar={botaoAlterar} /> //mandando as function
                                                                                            //desse arquivo para outro
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

export default Aula13_CRUD_Produtos