import React from "react";

import { render } from "@testing-library/react";

import { RouterEnum } from "../../../enums/router.enum";
import Link from "./link";

describe("Link tests", () => {
  it("should render link", () => {
    const link = {
      name: RouterEnum.COLLECTIONS,
      router: "/"
    };

    const { getByText } = render(<Link link={link} />);

    expect(getByText(link.name)).toHaveTextContent(link.name);
  });
});
