import { useState } from "react";

const FormIMC = (props) => {
  const [size, setSize] = useState<string>("");
  const [weight, setWeight] = useState<string>("");

  // Handle form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // Prevents page reload
    props.getVariables(size, weight);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 10,
        width: "50%",
      }}
    >
      <label htmlFor="size">Taille en cm</label>
      <input
        type="number"
        id="size"
        value={size}
        onChange={(e) => setSize(e.target.value)}
      />
      <label htmlFor="weight">Poids en kg</label>
      <input
        type="number"
        id="weight"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <br />
      <input type="submit" value={"Valider"} />
    </form>
  );
};

export default FormIMC;
