import "./App.css";
import FormIMC from "./components/FormIMC";
import ResultIMC from "./components/ResultIMC";
import { useState } from "react";

const App = () => {
  const [imc, setImc] = useState<string>();

  const getVariables = (argSize: number, argWeight: number) => {
    console.log("--- successfully retrieved size and weight");
    console.log(`size: ${argSize}, weight: ${argWeight}`);
    setImc(argWeight / (argSize * argSize));
  };

  return (
    <>
      <h1>Calcul de l'IMC</h1>
      <FormIMC getVariables={getVariables} />
      <ResultIMC imc={imc} />
    </>
  );
};

export default App;
