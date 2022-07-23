import React from "react";

import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import MenuWrapper from "./menu-wrapper";

describe("Menu wrapper tests", () => {
  it("should called mocked toggle menu open fn", async () => {
    const mockedFn = jest.fn();

    const { container } = render(
      <MenuWrapper isOpen={true} toggleMenuOpen={mockedFn}>
        {}
      </MenuWrapper>
    );

    await userEvent.click(container);

    expect(mockedFn).toHaveBeenCalledTimes(1);
  });

  it("should render children when menu wrapper is open", () => {
    const mockedFn = jest.fn();

    const { getByText } = render(
      <MenuWrapper isOpen={true} toggleMenuOpen={mockedFn}>
        <p>test</p>
      </MenuWrapper>
    );

    expect(getByText("test")).toBeInTheDocument();
  });

  it("should not render children when menu wrapper is close", () => {
    const mockedFn = jest.fn();

    const { container } = render(
      <MenuWrapper isOpen={false} toggleMenuOpen={mockedFn}>
        <p>test</p>
      </MenuWrapper>
    );

    expect(container).toContainHTML("<div />");
  });
});
