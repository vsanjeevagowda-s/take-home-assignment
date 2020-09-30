import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import userEvent  from "@testing-library/user-event";
import { screen } from '@testing-library/dom'
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import Dashboard from "../../../components/Dashboard/Dashboard";


const Component = (
  <HashRouter>
    <Switch>
    <Dashboard />
    </Switch>
  </HashRouter>
)

describe('Dashboard', () => {
  test("renders dashboard component", () => {
    const { getByTestId } = render(Component);
    const linkElement = getByTestId(/dashboard-wrapper/i);
    expect(linkElement).toBeInTheDocument();
  });
})