import { useContext, useEffect, useState } from "react";
import { buscarPorId, modificar } from "../services/ContatoService";
import { RotaContext } from "../contexts/RotaContext";
import Formulario from "./Formulario";

function Editar() {
  const { rota, setRota } = useContext(RotaContext);
  const [contato, setContato] = useState({});
  const [erro, setErro] = useState("");
  const id = rota.replace("/editar/", "");

  const carregar = async () => {
    const resposta = await buscarPorId(id);
    if (resposta.sucesso) {
      setContato(resposta.dados);
      setErro("");
    } else {
      setErro(resposta.mensagem);
    }
  };

  useEffect(() => {
    carregar();
  }, [id]);

  const handleSalvar = async (contatoAtualizado) => {
    const resposta = await modificar(id, contatoAtualizado);
    if (resposta.sucesso) {
      setErro("");
      setRota("/listar");
    } else {
      setErro(resposta.mensagem);
    }
  };

  return (
    <>
      <h2>Editar Contato</h2>
      <Formulario onSubmit={handleSalvar} valores={contato} />
      {erro && <p className="erro">{erro}</p>}
    </>
  );
}

export default Editar;