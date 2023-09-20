import Cabecalho from "./components/Cabecalho";

import Rodape from "./components/Rodape";

import { Outlet } from "react-router-dom";

export default function App() {
  //Área declarativa
  
  return (
    <>
      {/* Área imperativa */}

      <Cabecalho />
      <Outlet/>
      <Rodape />
    </>
  );
}
