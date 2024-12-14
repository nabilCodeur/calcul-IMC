import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const fillAndSubmitFormIMC = async (
  user: ReturnType<typeof userEvent.setup>,
  size?: string | null,
  weight?: string | null,
) => {
  const inputWeight = screen.getByLabelText(/Poids en kg/i);
  const inputSize = screen.getByLabelText<HTMLInputElement>(/Taille en cm/i);

  const submitFormButton = screen.getByRole<HTMLButtonElement>("button", {
    name: "Valider",
  });
  if (size) await user.type(inputSize, size);
  if (weight) await user.type(inputWeight, weight);
  await user.click(submitFormButton);
};

export default fillAndSubmitFormIMC;
