import { useState, useEffect } from "react";

const ResultIMC = ({ imc }) => {
  console.log(` inside ResultIMC `);

  useEffect(() => {
    console.log(` inside ResultIMC useEffect `);
    console.log(imc);
  }, [imc]);

  return (
    <>
      <h1>Résultat du calcul</h1>
      <div>IMC: {imc}</div>
    </>
  );
};

export default ResultIMC;
