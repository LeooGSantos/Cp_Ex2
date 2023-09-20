import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ListaProdutos } from '../components/ListaProdutos';

export default function AdicionarProdutos() {
  document.title = "ADICIONAR PRODUTO";

  const navigate = useNavigate();

  // armazena as informações do novo produto
  const [novoProduto, setNovoProduto] = useState({
    nome: '',
    desc: '',
    preco: '',
    img: '',
  });

  const handleChange = (e) => {
      // target - extrair as informações relevantes de um campo de entrada 
    const { name, value } = e.target;
    // criar um novo objeto com todas as propriedades existentes de novoProduto e substituir a propriedade correspondente com o novo valor - usando SPREAD.
    setNovoProduto({ ...novoProduto, [name]: value });
  }

  const handleSubmit = (e) => {
    // evitar a página ser recarregada quando o formulário é enviado
    e.preventDefault();

    // calculando o maior ID existente na lista e adicionando 1
    // Math.max para encontrar o maior valor
    // 0 é usado para que, se não houver produtos na lista, o próximo ID seja definido como 1.
    const proximoId = Math.max(...ListaProdutos.map((produto) => produto.id), 0) + 1;

    // Crie o novo produto com o próximo ID
    const novoProdutoComId = {
      id: proximoId.toString(),
      // Spread - para copiar todas as outras propriedades do estado novoProduto para este
      ...novoProduto,
    };

    // push -  enviar produto à lista de produtos
    ListaProdutos.push(novoProdutoComId);

    alert("Produto adicionado com SUCESSO!");

    navigate('/produtos');
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Adicionar Produto</legend>
            <div>
              <label htmlFor="idNome">Nome</label>
              <input type="text" name="nome" id="idNome" value={novoProduto.nome} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="idDesc">Descrição</label>
              <input type="text" name="desc" id="idDesc" value={novoProduto.desc} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="idPreco">Preço</label>
              <input type="text" name="preco" id="idPreco" value={novoProduto.preco} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="idImg">URL da Imagem</label>
              <input type="text" name="img" id="idImg" value={novoProduto.img} onChange={handleChange} />
            </div>
            <div>
              <button>ADICIONAR</button>
            </div>
          </fieldset>
        </form>
      </div>
    </>
  );
}
