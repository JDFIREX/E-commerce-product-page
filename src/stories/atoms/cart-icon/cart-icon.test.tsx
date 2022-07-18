import React from "react";

import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import CartIcon from "./cart-icon";

describe("Cart icon tests", () => {
  it("should render", () => {
    const mockedFn = jest.fn();

    const { container } = render(<CartIcon toggleCartMenu={mockedFn} />);

    expect(container).toMatchSnapshot();
  });

  it("should toggle cart menu ahve been called", async () => {
    const mockedFn = jest.fn();

    const { getByRole } = render(<CartIcon toggleCartMenu={mockedFn} />);
    await userEvent.click(getByRole("button"));

    expect(mockedFn).toHaveBeenCalled();
  });
});
