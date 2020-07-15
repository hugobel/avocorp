import React from "react";
import { render, screen } from "@testing-library/react";
import App from ".";

describe("<App /> tests", () => {
  test('renders a "hello world" message', () => {
    render(<App />);
    expect(screen.getByText(/hello world/i)).toBeInTheDocument();
  });
});
