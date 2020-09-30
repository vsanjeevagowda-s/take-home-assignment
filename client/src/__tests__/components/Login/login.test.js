import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { act } from 'react-dom/test-utils';
import { HashRouter, Switch } from "react-router-dom";
import Register from "../../../components/Register/Register";


jest.mock("../../../services/user");
import { register } from '../../../services/user';

const Component = (
  <HashRouter>
    <Switch>
    <Register />
    </Switch>
  </HashRouter>
)

describe('register', () => {

  beforeAll(() => {
    register.mockImplementation(()=>{
      return new Promise((resolve, reject) =>{
        reject('test')
      })
  })
  })

  test("renders register component", () => {
    const { getByText } = render(Component);
    const linkElement = getByText(/Sign Up/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("renders email field", () => {
    const { getByTestId } = render(Component);
    const ele = getByTestId('register-email')
    fireEvent.change(ele, { target: { value: 'a@gmail.com' } })
    expect(ele.value).toBe('a@gmail.com')
  });

  test("renders password field", () => {
    const { getByTestId } = render(Component);
    const ele = getByTestId('register-password')
    fireEvent.change(ele, { target: { value: '123' } })
    expect(ele.value).toBe('123')
  });

  test("should login with valid email / password", () => {
    
    const { getByText, getByTestId, debug, asFragment } = render(Component);
    const login = getByTestId('register-button')
    const email = getByTestId('register-email')
    const password = getByTestId('register-password')
    fireEvent.change(email, { target: { value: 'user@gmail.com' } })
    fireEvent.change(password, { target: { value: 'password' } })
    // debug();
    // act(() => {
      fireEvent.click(login);
    // });
    expect(asFragment()).toMatchSnapshot();
    // debug(asFragment());
  });
});
