import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ListaProdutos } from "../components/ListaProdutos";


export default function AdicionarProdutos(){
    document.title = "ADICIONAR PRODUTOS";

const App = () => {
    const [list, setList] = useState(ListaProdutos);
    const [name, setName] = useState('');
  
    function handleChange(event) {
        setName(event.target.value);
    }
  
    function handleAdd() {
        const novaLista = list.concat({name, id:uuidv4()});

        setList(novaLista);

        setName('');
    }
  
    return (
      <>
        <div>
          <input type="text" value={name} onChange={handleChange} />
          <button type="btn" onClick={handleAdd}>Adicionar Produto</button>
        </div>
  
        <ul>
          {list.map((item) => (
            <li key={produtos.id}>{produtos.name}</li>
          ))}
        </ul>
      </>
    );
  }};