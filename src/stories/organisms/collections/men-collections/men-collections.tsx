import React from "react";

import MenFigure from "../../../molecules/figure/men-figure/men-figure";
import MenLastProducts from "../men-last-products/men-last-products";

const MenCollections = (): JSX.Element => {
  return (
    <section>
      <MenFigure />
      <MenLastProducts />
    </section>
  );
};

export default MenCollections;
