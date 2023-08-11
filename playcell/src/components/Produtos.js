import React, { useEffect, useState } from 'react';
/* Vou usar essa requisição HTTP Diretamente no diretorio  */ 
import jsonData from '../date/Produtos.json';

function Produtos() {

    /* Declarar estado do componete */ 
    const [data, setData] = useState([]);

    /* Usa JSON  */
    useEffect(() => {
        setData(jsonData.produtos); 
      }, []);

    return(
        
        <div>
        <h1>Lista de Produtos:</h1>
        <ul>
          {data.map(item => (
            <li key={item.ID} className='produtos'>
              <h2>{item.descricao}</h2>
              <p>Preço de Varejo: R${item.ID}</p>
              <p>Preço de Varejo: R${item.descricao}</p>
              <p>Preço de Atacado: R${item.preco_de_varejo}</p>
              <p>Estoque: {item.preco_de_atacado}</p>
              <p>Código de Barras: {item.estoque}</p>
              <p>Código de Barras: {item.data_da_ultima_compra}</p>
            </li>
          ))}
        </ul>
      </div>

    );
}

export default Produtos