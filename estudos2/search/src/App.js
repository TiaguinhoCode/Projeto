  import logo from './logo.svg';
  import './App.css';
  import { useMemo, useState } from 'react';

  import { LoadProdutos } from './utils/loadProdutos';

  export default function App() {

    const produtos = LoadProdutos()

    const [busca, setBusca] = useState('');

    // Fazer um filter 
    const produtsFiltradas = useMemo(() => {
      return produtos.filter((produto) => produto.description.toLowerCase().includes(busca.toLowerCase()));
    }, [produtos, busca]) 

    console.log(produtos);

    return (
      <div className="App">
        <input 
          type="text"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />

        <ul>
          {produtsFiltradas.map((produto) => (
            <section key={produto.id} className="product-card">
                <img src={produto.urlImage} alt="fone" className="card__image" />

                <div className="card__infos">
                  <h2 class="descricao">{produto.description}</h2>
                    <p class="valor">Atacado: R${produto.value}</p>
                    <p class="id">ID:{produto.id}</p>
                    <p class="stock">Estoque: {produto.stock}</p>
                    <p class="cx_und">Cx: {produto.cx_und}</p>
                </div>
            </section>
          ))}
        </ul>
      </div>
    );
  }

