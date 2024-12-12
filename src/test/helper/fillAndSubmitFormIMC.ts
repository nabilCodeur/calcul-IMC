import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const fillAndSubmitFormIMC = async (
  user: ReturnType<typeof userEvent.setup>,
  size: string,
  weight: string,
) => {
  const inputWeight = screen.getByLabelText(/Poids en kg/i);
  const inputSize = screen.getByLabelText<HTMLInputElement>(/Taille en cm/i);

  const submitFormButton = screen.getByRole<HTMLButtonElement>("button", {
    name: "Valider",
  });
  await user.type(inputSize, size);
  await user.type(inputWeight, weight);
  await user.click(submitFormButton);
};

export default fillAndSubmitFormIMC;
