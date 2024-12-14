import "./App.css";
import FormIMC from "./components/FormIMC";
import ResultIMC from "./components/ResultIMC";

const App = () => {
  return (
    <main style={{ display: "flex", flexDirection: "column", gap: 10 , alignItems: "center" }}>
      <h1>Calcul de l'IMC</h1>
      <FormIMC />
      <ResultIMC />
    </main>
  );
};

export default App;
