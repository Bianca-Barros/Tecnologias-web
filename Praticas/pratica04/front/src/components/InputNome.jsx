function InputNome(props) {
  return (
    <div className="input-group">
      <label htmlFor="nome">Nome</label>
      <input
        type="text"
        id="nome"
        name="nome"
        value={props.valor}
        onChange={props.onChange}
      />
      {props.erro && <p className="erro">{props.erro}</p>}
    </div>
  );
}

export default InputNome;