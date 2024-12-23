import { useState, useEffect } from "react";

const ResultIMC = (props) => {
  useEffect(() => {
    console.log(` inside ResultIMC useEffect `);
    console.log(props.imc);
  }, []);

  return (
    <>
      <h1>Résultat du calcul</h1>
      <div>IMC: {props.imc}</div>
    </>
  );
};

export default ResultIMC;
