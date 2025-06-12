import { useContext, useEffect, useState } from "react";
import { buscarTodos, remover } from "../services/ContatoService";
import { RotaContext } from "../contexts/RotaContext";
import Listagem from "./Listagem";

function Listar() {
  const [contatos, setContatos] = useState([]);
  const [erro, setErro] = useState("");
  const { setRota } = useContext(RotaContext);

  const handleModificar = (id) => {
    setRota(`/editar/${id}`);
  };

  const handleRemover = async (id) => {
    const resposta = await remover(id);
    if (resposta.sucesso) {
      carregar();
    } else {
      setErro(resposta.mensagem);
    }
  };

  const carregar = async () => {
    const resposta = await buscarTodos();
    if (resposta.sucesso) {
      setContatos(resposta.dados);
      setErro("");
    } else {
      setErro(resposta.mensagem);
    }
  };

  useEffect(() => {
    carregar();
  }, []);

  return (
    <>
      <h2>Meus Contatos</h2>
      <Listagem 
        itens={contatos} 
        onModificar={handleModificar}
        onRemover={handleRemover}
      />
      {erro && <p className="erro">{erro}</p>}
    </>
  );
}

export default Listar;