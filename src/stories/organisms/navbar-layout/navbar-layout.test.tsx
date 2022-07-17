import React from "react";

import { render } from "@testing-library/react";

import NavbarLayout from "./navbar-layout";

describe("Navbar layout tests", () => {
  it("test", () => {
    const { container } = render(<NavbarLayout />);

    expect(container).toBeInTheDocument();
  });
});
