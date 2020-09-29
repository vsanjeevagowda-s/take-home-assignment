import React from "react";
import { render, fireEvent, debug } from "@testing-library/react";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import Login from "../../../components/Login/Login";

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

  test("should login with valid email / password", () => {

    const MockMyComponent = () => {
      React.useEffect(() => {
        console.log('using an effect');
      });
      return (<div>Hello World</div>);
    };
    jest.mock('./MyComponent', () => ({
      __esModule: true,
      namedExport: jest.fn(),
      default: jest.fn()
    }));
    
    const { getByText, getByTestId } = render(Component);
    const login = getByText('Login')
    const email = getByTestId('login-email')
    const password = getByTestId('login-password')
    fireEvent.change(email, { target: { value: 'user@gmail.com' } })
    fireEvent.change(password, { target: { value: 'password' } })
    fireEvent.click(login)
    debug(login)
  });
});
