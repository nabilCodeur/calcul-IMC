import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FormIMC from "../../components/FormIMC";
import calculIMC from "../../utils/calculIMC";
import fillAndSubmitFormIMC from "../helper/fillAndSubmitFormIMC";

jest.mock("../../utils/calculIMC", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe(`${FormIMC.name} Component`, () => {
  beforeEach(() => {
    render(<FormIMC />);
    jest.clearAllMocks();
  });

  test("contains form JSX", () => {
    const form = screen.getByRole("form");
    expect(form).toBeInTheDocument();
  });
  test("should  input submit button be in the document ", () => {
    const inputSubmit = screen.getByRole("button", {
      name: /Valider/i,
    });
    expect(inputSubmit).toBeInTheDocument();
  });

  test("should call calculIMC with correct values when form is submitted", async () => {
    const mockCalculIMC = jest.mocked(calculIMC);
    const user = userEvent.setup();
    const VALID_SIZE = "170";
    const VALID_WEIGHT = "80";

    await fillAndSubmitFormIMC(user, VALID_SIZE, VALID_WEIGHT);
    expect(mockCalculIMC).toHaveBeenCalledTimes(1);
    expect(mockCalculIMC).toHaveBeenCalledWith(
      Number(VALID_SIZE),
      Number(VALID_WEIGHT),
    );
  });
  test("should contains inputs for weight and size", () => {
    const inputSize = screen.getByLabelText<HTMLInputElement>(/Taille en cm/i);
    const inputWeight = screen.getByLabelText(/Poids en kg/i);

    expect(inputWeight).toBeInTheDocument();
    expect(inputSize).toBeInTheDocument();
  });
  test("inputs should have  type number", () => {
    const inputSize = screen.getByLabelText<HTMLInputElement>(/Taille en cm/i);
    expect(inputSize).toHaveAttribute("type", "number");
  });
  test("user input 170cm size and 80 weight should display correct IMC result", async () => {
    const mockCalculIMC = jest.mocked(calculIMC);
    const MOCK_IMC_RESULT = 27.7;
    mockCalculIMC.mockReturnValue(MOCK_IMC_RESULT);

    const user = userEvent.setup();
    const SIZE_INPUT_USER = "170";
    const WEIGHT_INPUT_USER = "80";

    await fillAndSubmitFormIMC(user, SIZE_INPUT_USER, WEIGHT_INPUT_USER);

    const textResultIMC = await screen.findByText(`IMC : ${MOCK_IMC_RESULT}`);
    expect(textResultIMC).toBeInTheDocument();
  });
  test("wrong input weight because inferior to 20 kg", async () => {
    const INVALID_WEIGHT = "19";
    const VALID_SIZE = "150";

    const user = userEvent.setup();
    await fillAndSubmitFormIMC(user, VALID_SIZE, INVALID_WEIGHT);
    const errorMessageWeight =
      screen.getByTestId<HTMLParagraphElement>("error-weight");
    expect(errorMessageWeight).toBeInTheDocument();
    expect(errorMessageWeight).toHaveTextContent(
      "Number must be greater than or equal to 20",
    );
  });
  test("invalid input size should make appear error message", async () => {
    const VALID_WEIGHT = "60";
    const INVALID_SIZE = "10";
    const user = userEvent.setup();
    await fillAndSubmitFormIMC(user, INVALID_SIZE, VALID_WEIGHT);
    const errorMessageSize =
      screen.getByTestId<HTMLParagraphElement>("error-size");
    expect(errorMessageSize).toBeInTheDocument();
    expect(errorMessageSize).toHaveTextContent(
      "Number must be greater than or equal to 20",
    );
  });
  test("calculIMC should not be called if size input is empty", async () => {
    const mockCalculIMC = jest.mocked(calculIMC);
    const NO_SIZE_INPUT = null;
    const WEIGHT_VALID = "60";
    const user = userEvent.setup();
    await fillAndSubmitFormIMC(user, NO_SIZE_INPUT, WEIGHT_VALID);
    expect(mockCalculIMC).not.toHaveBeenCalled();
  });
  test("calculIMC should not be called if weight input is empty", async () => {
    const mockCalculIMC = jest.mocked(calculIMC);
    const NO_WEIGHT_INPUT = null;
    const SIZE_VALID = "60";
    const user = userEvent.setup();
    await fillAndSubmitFormIMC(user, NO_WEIGHT_INPUT, SIZE_VALID);
    expect(mockCalculIMC).not.toHaveBeenCalled();
  });
});
