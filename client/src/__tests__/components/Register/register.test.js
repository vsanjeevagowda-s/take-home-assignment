import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import Login from "../../../components/Login/Login";


jest.mock("../../../services/user.js");
import { login } from '../../../services/user';

const Component = (
  <HashRouter>
    <Switch>
    <Login />
    </Switch>
  </HashRouter>
)

describe('login', () => {

  beforeAll(() => {
    login.mockImplementation(()=>{
      return new Promise((resolve, reject) =>{
        reject('test')
      })
  })
  })

  test("renders login component", () => {
    const { getByText } = render(Component);
    const linkElement = getByText(/Sign In/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("renders email field", () => {
    const { getByTestId } = render(Component);
    const ele = getByTestId('login-email')
    fireEvent.change(ele, { target: { value: 'a@gmail.com' } })
    expect(ele.value).toBe('a@gmail.com')
  });

  test("renders password field", () => {
    const { getByTestId } = render(Component);
    const ele = getByTestId('login-password')
    fireEvent.change(ele, { target: { value: '123' } })
    expect(ele.value).toBe('123')
  });

  test("should login with valid email / password", () => {
    
    const { getByText, getByTestId, debug } = render(Component);
    const login = getByTestId('login-button')
    const email = getByTestId('login-email')
    const password = getByTestId('login-password')
    fireEvent.change(email, { target: { value: 'user@gmail.com' } })
    fireEvent.change(password, { target: { value: 'password' } })
    // debug();
    fireEvent.click(login);
    // debug();
  });
});
