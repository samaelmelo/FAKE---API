
import {Room} from "./components/Room"
import {Footer} from "./components/Footer"
import { GlobalStyle } from "./estilo/GlobalStyle";
import { useState } from "react";


export function App(){

  const [ data, setData ] = useState('Nota de rodapé')

  return (
    <>
      <Room/>
      <Footer info={data}/>
      <GlobalStyle/>
    </>
  );
}
