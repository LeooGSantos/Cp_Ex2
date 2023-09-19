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
    const { name, value } = e.target;
    setNovoProduto({ ...novoProduto, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const proximoId = Math.max(...ListaProdutos.map((produto) => produto.id), 0) + 1;

    const novoProdutoId = {
      id: proximoId.toString(),

      ...novoProduto,
    };

    ListaProdutos.push(novoProdutoId);

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
              <button>ADICIONAR</button>
            </div>
          </fieldset>
        </form>
      </div>
    </>
  );
}