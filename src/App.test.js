import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Using multiples jobs and artifacts/i);
  expect(linkElement).toBeInTheDocument();
});
