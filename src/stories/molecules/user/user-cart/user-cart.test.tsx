import React from "react";

import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import UserCart from "./user-cart";

describe("User cart tests", () => {
  it("should open menu wrapper", async () => {
    const { getByRole, getByText } = render(<UserCart />);

    await userEvent.click(getByRole("button"));

    expect(getByText("menu cart")).toBeInTheDocument();
  });

  it("should toggle menu wrapper", async () => {
    const { getByRole, getByText, container } = render(<UserCart />);

    await userEvent.click(getByRole("button"));

    expect(getByText("menu cart")).toBeInTheDocument();

    await userEvent.click(getByRole("button"));

    expect(container.children).toHaveLength(1);
  });
});
