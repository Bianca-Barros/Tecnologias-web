import { createContext, useState } from "react";

export const RotaContext = createContext();

export function RotaProvider(props) {
  const [rota, setRota] = useState("/listar");
  
  return (
    <RotaContext.Provider value={{ rota, setRota }}>
      {props.children}
    </RotaContext.Provider>
  );
}