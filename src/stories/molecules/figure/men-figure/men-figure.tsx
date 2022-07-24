import React from "react";
import Image from "next/image";

import { RouterEnum } from "../../../../enums/router.enum";
import Link, { ILink } from "../../../atoms/link/link";

const MenFigure = (): JSX.Element => {
  const linkToMenCollections: ILink = {
    name: RouterEnum.MEN,
    router: "/men"
  };

  return (
    <figure>
      <Image alt="men collections random image" src="" />
      <figcaption>
        <h2>Men Collection</h2>
        <article>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et turpis non nulla
          sollicitudin efficitur. Sed ultricies scelerisque risus, ac fermentum massa. Fusce finibus
          vehicula nisl, vitae vulputate justo fermentum quis. Sed porta nisi id elit maximus
          tincidunt. Nulla facilisi. Nam tempor consequat purus a consectetur. Fusce nibh orci,
          scelerisque ac ex id, dapibus iaculis libero.
        </article>
        <Link link={linkToMenCollections} />
      </figcaption>
    </figure>
  );
};

export default MenFigure;
