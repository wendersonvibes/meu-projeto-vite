// CSS (styled components)
import { Container, Produto, ProdutoOverflow, AddButton } from "./styles.jsx";

// Icons
import { FaRegTrashCan } from "react-icons/fa6";

// Hooks do react
import { useRef, useState } from "react";
import { v4 } from "uuid";

// 4v -> para criar chaves primárias para os elementos do "banco de dados temporário"; ferramenta do "uuid"
// useRef -> para referenciar algo
// useState -> cria um estado para salvar dados

function Home() {
  // Salvar os produtos dento da array "produtos"
  const [produtos, setProdutos] = useState([]);
  const inputRef = useRef();
  const titulo = "Lista de compras";

  // Salvar os itens da lista de compras
  function salvar_produto(){
    // Aqui é para salvar o produto
    setProdutos([{id: v4(), nome: inputRef.current.value}, ...produtos]); 
      // "...produtos" serve para que os produtos já existentes continuem exibidos na tela
  };
  
  // Deletar produto
  function deletar_produto(id){
    setProdutos(produtos.filter(produto => produto.id !== id))
  };

  return (
    <Container>
      <h1>{titulo}</h1>
      <input type="text" placeholder="Produto" ref={inputRef}/>
      <AddButton onClick={salvar_produto}>Adicionar</AddButton>

      <ProdutoOverflow>
      {/* Para exibir cada produto */}
        {
          produtos.map((produto) => (
            <Produto key={produto.id}>
              <p>{produto.nome}</p>
              <button onClick={() => {deletar_produto(produto.id)}}><FaRegTrashCan /></button>
            </Produto>  
          ))
        }
      </ProdutoOverflow>

    </Container>
  );
}

export default Home
