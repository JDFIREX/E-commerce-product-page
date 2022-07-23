import React from "react";

import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import UserProfileLogo from "./user-profile-logo";

describe("User profile logo tests", () => {
  it("should render", () => {
    const mockFn = jest.fn();

    const { container } = render(<UserProfileLogo toggleProfileMenu={mockFn} />);

    expect(container).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it("should toggle profile menu have been called", async () => {
    const mockFn = jest.fn();

    const { getByRole } = render(<UserProfileLogo toggleProfileMenu={mockFn} />);
    await userEvent.click(getByRole("button"));

    expect(mockFn).toHaveBeenCalled();
  });
});
