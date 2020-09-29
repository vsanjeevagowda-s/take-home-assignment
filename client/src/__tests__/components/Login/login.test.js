import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Login from "../../../components/Login/Login";

describe('login', () => {
  test("renders login component", () => {
    const { getByText } = render(<Login />);
    const linkElement = getByText(/Sign In/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("renders email field", () => {
    const { getByTestId } = render(<Login />);
    const ele = getByTestId('login-email')
    fireEvent.change(ele, { target: { value: 'a@gmail.com' } })
    expect(ele.value).toBe('a@gmail.com')
  });

  test("renders password field", () => {
    const { getByTestId } = render(<Login />);
    const ele = getByTestId('login-password')
    fireEvent.change(ele, { target: { value: '123' } })
    expect(ele.value).toBe('123')
  });
});
