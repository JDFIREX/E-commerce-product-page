import React from "react";

import { render } from "@testing-library/react";

import { RouterEnum } from "../../../enums/router.enum";
import Links from "./links";

describe("Links test", () => {
  it("should render all RouterEnum links", () => {
    const { getByRole, getByText } = render(<Links />);

    expect(getByRole("navigation").children).toHaveLength(Object.keys(RouterEnum).length);
    expect(getByText(Object.values(RouterEnum)[0])).toBeInTheDocument();
  });
});
