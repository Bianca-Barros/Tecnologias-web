import { useContext } from "react";
import { RotaContext } from "./contexts/RotaContext";
import Cabecalho from "./components/Cabecalho";
import Conteudo from "./components/Conteudo";
import Listar from "./pages/Listar";
import Novo from "./pages/Novo";
import Editar from "./pages/Editar";

function App() {
  const { rota } = useContext(RotaContext);

  return (
    <>
      <Cabecalho />
      <Conteudo>
        {rota === "/listar" && <Listar />}
        {rota === "/novo" && <Novo />}
        {rota?.startsWith("/editar") && <Editar />}
      </Conteudo>
    </>
  );
}

export default App;