import { render, screen } from "@testing-library/react";
import App from "../App";

describe(`${App.name}  component`, () => {
  test("demo", () => {
    expect(true).toBe(true);
  });

  test("Renders the main page", () => {
    render(<App />);
    expect(true).toBeTruthy();
  });
  test("expect App to contains title `Calcul de l'IMC`", () => {
    render(<App />);
    const title = screen.getByRole("heading", {
      name: /Calcul de l'IMC/i,
      level: 1,
    });
    expect(title).toBeInTheDocument();
  });
});
