import React from "react";

import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import UserProfile from "./user-profile";

describe("User profile tests", () => {
  it("should open menu wrapper", async () => {
    const { getByRole, getByText } = render(<UserProfile />);

    await userEvent.click(getByRole("button"));

    expect(getByText("menu profile")).toBeInTheDocument();
  });

  it("should toggle menu wrapper", async () => {
    const { getByRole, getByText, container } = render(<UserProfile />);

    await userEvent.click(getByRole("button"));

    expect(getByText("menu profile")).toBeInTheDocument();

    await userEvent.click(getByRole("button"));

    expect(container.children).toHaveLength(1);
  });
});
