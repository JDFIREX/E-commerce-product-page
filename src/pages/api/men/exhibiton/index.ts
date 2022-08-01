import { NextApiRequest, NextApiResponse } from "next";

import { HttpMethodEnum } from "../../../../enums/http/http-method.enum";
import { HttpStatusEnum } from "../../../../enums/http/http-status.enum";
import { HttpStatusMessageEnum } from "../../../../enums/http/http-status-message.enum";

interface ResponseError {
  message: string;
}

const handler = (req: NextApiRequest, res: NextApiResponse<ResponseError>): void => {
  const { method } = req;

  if (method !== HttpMethodEnum.POST) {
    res.status(HttpStatusEnum.METHOD_NOT_ALLOWED).send({
      message: HttpStatusMessageEnum.METHOD_NOT_ALLOWED
    });
    return;
  }

  /*    const menProductsExhibition: ProductExhibitionType[] = prisma.productExhibition.findMany({
        where: {
            collection: CollectionEnum.MEN
        }
    })*/
};

export default handler;
