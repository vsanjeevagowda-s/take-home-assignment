import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import userEvent  from "@testing-library/user-event";
import { screen } from '@testing-library/dom'
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import Layout from "../../../components/Layout/Layout";


const Component = (
  <HashRouter>
    <Switch>
    <Layout />
    </Switch>
  </HashRouter>
)

describe('Layout', () => {
  test("renders Layout component", () => {
    const { getByText } = render(Component);
    const linkElement = getByText(/logout/i);
    expect(linkElement).toBeInTheDocument();
  });
})