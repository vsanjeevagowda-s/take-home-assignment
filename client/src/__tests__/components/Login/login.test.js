import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import userEvent  from "@testing-library/user-event";
import { screen } from '@testing-library/dom'
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import Login from "../../../components/Login/Login";


jest.mock("../../../services/user.js");
import { login as loginServiceFn } from '../../../services/user';

const Component = (
  <HashRouter>
    <Switch>
    <Login />
    </Switch>
  </HashRouter>
)

describe('login', () => {

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

  // test("should login with valid email / password", async () => {

  //   loginServiceFn.mockImplementation(()=>{
  //     return new Promise((resolve, reject) =>{
  //       resolve({
  //         message: "Logged in successfully!",
  //         success: true
  //       })
  //     })
  // })
  //   window.history.pushState({}, 'Test page', '/')
  //   const { getByText, getByTestId, debug } = render(<Login />, {wrapper: BrowserRouter});
  //   const login = getByTestId('login-button')
  //   const email = getByTestId('login-email')
  //   const password = getByTestId('login-password')
  //   fireEvent.change(email, { target: { value: 'user@gmail.com' } })
  //   fireEvent.change(password, { target: { value: 'password' } })
  //   // debug();
  //   userEvent.click(login);
  //   // debug();
  //   const logoutButtonElement = await waitForElement(()=> screen.getByTestId(/logout-button/i));
  //   debug(logoutButtonElement);
  //   expect(logoutButtonElement).toBeInTheDocument()
  // });

  test("should show error with invalid credentials", async () => {

    loginServiceFn.mockImplementation(()=>{
      return new Promise((resolve, reject) =>{
        reject({
          message: "Unauthorized",
          success: false
        })
      })
  })
    
    const { getByText, getByTestId, debug } = render(Component);
    const login = getByTestId('login-button')
    const email = getByTestId('login-email')
    const password = getByTestId('login-password')
    fireEvent.change(email, { target: { value: 'user@gmail.com' } })
    fireEvent.change(password, { target: { value: 'password' } })
    // debug();
    fireEvent.click(login);
    // debug();
    await waitForElement(()=> getByTestId(/error-message/i));
    const errorMessage = getByText(/Unauthorized/i)
    // debug(errorMessage);
    expect(errorMessage).toBeInTheDocument()
  });
});
