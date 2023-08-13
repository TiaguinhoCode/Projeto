function Pessoas({nome, idade, profissao, foto}) {
    return (
        // Percebe minha props fica muito repetido, entáo para n acontecer isso vou passar um objeto
        <div>
            <img src={foto} alt={nome}/>
            <h2>nome: {nome}</h2>
            <p>idade: {idade}</p>
            <p>profissao: {profissao}</p>
        </div>
    )
}

export default Pessoas