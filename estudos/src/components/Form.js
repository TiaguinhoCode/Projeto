// Importa estado
import { useState } from 'react'

function Form() {
    // e ou event que evento da submissão
    function cadastrarUsuario (e) {
        // vai apra execução do formulario 
        e.preventDefault();
        console.log("Cadastrou com sucesso!");
        console.log(name);
        console.log(passoword);
    }

    // Resgata dados
    const[name, setName] = useState(/* Vou definir um valor inicial */) ;
    const [passoword, setPassoword] = useState();

    return(
        <div>
            <h1>Meu cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" id="name" placeholder="Digite seu nome" 
                    onChange={/* Vou regasta os dados da funcao */ (e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="passoword">Senha:</label>
                    <input type="passoword" id="passoword" name="passoword" placeholder="Digite sua senha"
                    onChange={(e) => setPassoword(e.target.value)}
                    />
                </div>
                <div>
                    <input type="submit" value="Cadastrar"/>
                </div>
            </form> 
        </div>
    );
}

export default Form