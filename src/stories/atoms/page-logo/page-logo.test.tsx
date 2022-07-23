import React from "react";

import { render } from "@testing-library/react";

import PageLogo from "./page-logo";

describe("Page logo tests", () => {
  it("should render", () => {
    const { container } = render(<PageLogo />);

    expect(container).toMatchSnapshot();
  });
});
