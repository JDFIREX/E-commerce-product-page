import React from "react";

import { render } from "@testing-library/react";

import MenuItem from "./menu-item";

describe("Menu item tests", () => {
  it("Should render children", () => {
    const children = (
      <div>
        <p>test</p>
      </div>
    );

    const { container, getByText } = render(<MenuItem>{children}</MenuItem>);

    expect(container).toBeInTheDocument();
    expect(getByText("test")).toHaveTextContent("test");
  });
});
