import './App.css';
import HelloWord from './components/HelloWord'
import Frase from './components/Frase'
import SayMyName from './components/SayMyName';
import Pessoas from './components/Pessoas';
import Evento from './components/Evento';
import Form from './components/Form';

function App() {

    const name = "Maria";

    const newName = name.toUpperCase()

    function sum(a, b) {
        return a + b
    }

    // Alteração de atributos
    const url = "https://via.placeholder.com/150"

    return ( 
        <div className = "App">
            <h2> Alterando O JSX </h2>      
            <p> Olá, { newName } </p>     
            <p> Soma: { sum(5, 9) } </p>     

            <Frase/> 
            <HelloWord/>
            <Frase/>
            <SayMyName nome="Tiago Rafael" />
            <SayMyName nome="Aproveitando props de foma dinamica" />
            <SayMyName nome={name}/>
            <Pessoas nome="Rodrigo" idade="28" profissao="ti" foto="https://via.placeholder.com/150"/>
            <h2>Testando eventos</h2>
            <Evento numero="1"/>
            
            <Form/>
        </div>
    );
}

export default App;