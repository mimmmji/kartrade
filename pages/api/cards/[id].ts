import type { NextApiRequest, NextApiResponse } from "next";
import { cards } from "../cards";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const filterCards = cards.filter(
    (card) => card.id === parseInt(id as string)
  );

  res.status(200).json({ cards: filterCards });
}
