function InputTelefone(props) {
  return (
    <div className="input-group">
      <label htmlFor="telefone">Telefone</label>
      <input
        type="tel"
        id="telefone"
        name="telefone"
        value={props.valor}
        onChange={props.onChange}
      />
      {props.erro && <p className="erro">{props.erro}</p>}
    </div>
  );
}

export default InputTelefone;