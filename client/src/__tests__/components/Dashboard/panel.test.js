import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import userEvent  from "@testing-library/user-event";
import { screen } from '@testing-library/dom'
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import Panel from "../../../components/Dashboard/Panel";


const Component = (
  <HashRouter>
    <Switch>
    <Panel />
    </Switch>
  </HashRouter>
)

describe('Panel', () => {
  test("renders Panel component", () => {
    const { getByText } = render(Component);
    const linkElement = getByText(/Running instances/i);
    expect(linkElement).toBeInTheDocument();
  });
})