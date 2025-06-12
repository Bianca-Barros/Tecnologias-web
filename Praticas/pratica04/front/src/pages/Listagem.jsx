function Listagem(props) {
  return (
    <ul className="lista-contatos">
      <li className="cabecalho-lista">
        <span>Nome</span>
        <span>Telefone</span>
        <span>Ações</span>
      </li>
      {props.itens.map((contato) => (
        <li key={contato.id}>
          <span>{contato.nome}</span>
          <span>{contato.telefone}</span>
          <span className="acoes">
            <button 
              onClick={() => props.onModificar(contato.id)}
              className="btn-modificar"
            >
              Editar
            </button>
            <button 
              onClick={() => props.onRemover(contato.id)}
              className="btn-remover"
            >
              Remover
            </button>
          </span>
        </li>
      ))}
    </ul>
  );
}

export default Listagem;