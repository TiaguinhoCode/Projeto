import Button from "./evento/Button";

function Evento({ numero }) {
    // Evento á usando elemento de escuta diretamente na tag 
    function meuEvento() {
        console.log(`Opa, fui ativado! ${numero}`)
        console.log(`Ativando primeiro evento!`)
    }

    function segundoEvento() { 
        console.log("Ativando segundo evento!");
    }

    return (
        <div>
            <p>Clique para disparar um evento:</p>
            <Button event={meuEvento} text="Primeiro Evento" />
            <Button event={segundoEvento} text="Segundo Evento" />
            <button onClick={meuEvento}>Ativar!</button>
        </div>
    );
}

export default Evento