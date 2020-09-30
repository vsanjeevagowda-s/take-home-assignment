import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import userEvent  from "@testing-library/user-event";
import { screen } from '@testing-library/dom'
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import Header from "../../../components/Layout/Header";


const Component = (
  <HashRouter>
    <Switch>
    <Header />
    </Switch>
  </HashRouter>
)

describe('Header', () => {
  test("renders Header component", () => {
    const { getByText } = render(Component);
    const linkElement = getByText(/logout/i);
    expect(linkElement).toBeInTheDocument();
  });
})