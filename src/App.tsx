import "./App.css";
import FormIMC from "./components/FormIMC";
import ResultIMC from "./components/ResultIMC";
import { useState } from "react";

const App = () => {
  // State for size and weight
  const [size, setSize] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);
  const [imc, setImc] = useState<string>();

  const getVariables = (argSize: number, argWeight: number) => {
    console.log("--- successfully retrieved size and weight");
    setSize(argSize);
    setWeight(argWeight);
    console.log(`size: ${size}, weight: ${weight}`);
  };

  const sendResultIMC = (): void => {
    console.log("--- inside sendResultIMC");
    const heightM = size / 100; // Convert height to meters
    setImc(weight / (heightM * heightM));
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
