import { useState, useEffect } from "react";
import InputNome from "../components/InputNome";
import InputTelefone from "../components/InputTelefone";

function Formulario(props) {
  const [nome, setNome] = useState("");
  const [erroNome, setErroNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [erroTelefone, setErroTelefone] = useState("");

  useEffect(() => {
    if (props.valores) {
      setNome(props.valores.nome || "");
      setTelefone(props.valores.telefone || "");
    }
  }, [props.valores]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validação
    let valido = true;
    if (!nome) {
      setErroNome("Nome é obrigatório");
      valido = false;
    }
    if (!telefone) {
      setErroTelefone("Telefone é obrigatório");
      valido = false;
    }
    
    if (valido) {
      props.onSubmit({ nome, telefone });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputNome 
        valor={nome} 
        onChange={(e) => setNome(e.target.value)} 
        erro={erroNome} 
      />
      <InputTelefone 
        valor={telefone} 
        onChange={(e) => setTelefone(e.target.value)} 
        erro={erroTelefone} 
      />
      <button type="submit">Salvar</button>
    </form>
  );
}

export default Formulario;