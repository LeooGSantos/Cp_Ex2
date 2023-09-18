import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importe useNavigate
import { ListaProdutos } from '../components/ListaProdutos';
import './Home.css'; // Importe o arquivo de estilo CSS

export default function Home() {
  const [novoProduto, setNovoProduto] = useState({
    nome: '',
    desc: '',
    preco: '',
    img: '',
  });

  const [nextProductId, setNextProductId] = useState(1); // Variável para rastrear o próximo ID
  const navigate = useNavigate(); // Obtenha a função de navegação

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNovoProduto({ ...novoProduto, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Adicione a validação dos campos aqui, se necessário

    // Crie um novo objeto de produto com base nos dados do formulário e no próximo ID
    const novoProdutoObj = {
      id: nextProductId, // Use o próximo ID disponível
      nome: novoProduto.nome,
      desc: novoProduto.desc,
      preco: novoProduto.preco,
      img: novoProduto.img,
    };

    // Adicione o novo produto à lista de produtos
    ListaProdutos.push(novoProdutoObj);

    // Atualize o próximo ID disponível para o próximo valor
    setNextProductId(nextProductId + 1);

    // Limpe os campos do formulário
    setNovoProduto({
      nome: '',
      desc: '',
      preco: '',
      img: '',
    });

    // Redirecione o usuário para a página de produtos após adicionar um novo produto
    navigate('/produtos');
  };

  return (
    <>
      <h1>Home</h1>

      {/* Formulário de Inserção de Produtos */}
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="nome">Nome:</label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={novoProduto.nome}
              onChange={handleChange}
              required
              className="input-field"
            />
          </div>
          <div>
            <label htmlFor="desc">Descrição:</label>
            <input
              type="text"
              id="desc"
              name="desc"
              value={novoProduto.desc}
              onChange={handleChange}
              required
              className="input-field"
            />
          </div>
          <div>
            <label htmlFor="preco">Preço:</label>
            <input
              type="text"
              id="preco"
              name="preco"
              value={novoProduto.preco}
              onChange={handleChange}
              required
              className="input-field"
            />
          </div>
          <div>
            <label htmlFor="img">Imagem URL:</label>
            <input
              type="text"
              id="img"
              name="img"
              value={novoProduto.img}
              onChange={handleChange}
              required
              className="input-field"
            />
          </div>
          <div>
            <button type="submit" className="submit-button">
              Inserir Produto
            </button>
          </div>
        </form>
      </div>

      {/* Listagem de Produtos (você pode renderizar sua lista de produtos aqui) */}
    </>
  );
}
