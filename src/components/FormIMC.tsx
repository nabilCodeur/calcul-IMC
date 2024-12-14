import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormSchema, FormSchemaType } from "../schemas/Form";
import calculIMC from "../utils/calculIMC";

const FormIMC = () => {
  const [IMC, setIMC] = useState<null | number>(null);

  const onSubmit: SubmitHandler<FormSchemaType> = ({ size, weight }) => {
    const IMCResult = calculIMC(size, weight);
    setIMC(IMCResult);
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormSchemaType>({ resolver: zodResolver(FormSchema) });
  return (
   <>
      <form
        role="form"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
          width: "90%",
          maxWidth: "400px",
          minWidth: "280px",
          margin: "0 auto",
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <label htmlFor="size">Taille en cm</label>
        <input
          type="number"
          id="size"
          required
          placeholder="Taile"
          {...register("size", { valueAsNumber: true ,})}
        />
        {errors.size && <p data-testid="error-size">Erreur de taille :{errors.size.message}</p>}
     
        <label htmlFor="weight">Poids en kg</label>
        <input
          type="number"
          id="weight"
          placeholder="Poids"
        required
          {...register("weight", { valueAsNumber: true })}
        />
       {errors.weight && (
          <p data-testid="error-weight">Erreur de poids : {errors.weight.message}</p>)}
        <br />
        <input type="submit" value={"Valider"} />
       
          </form>
       <p>Affichage du résultat temporaire en attendant zustand</p>   
      {IMC && <p>IMC : {IMC}</p>}
  </>
  );
};

export default FormIMC;
