import React from "react";
import { render, screen } from "@testing-library/react";
import App from ".";

describe("<App /> tests", () => {
  test('renders a member access form', () => {
    render(<App />);

    const header = screen.getByText(/member access/i);
    expect(header).toBeInTheDocument();

    const inactiveHeader = screen.queryByText(/welcome/i);
    expect(inactiveHeader).not.toBeInTheDocument();
  });
});
