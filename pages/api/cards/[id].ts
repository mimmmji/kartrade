import type { NextApiRequest, NextApiResponse } from "next";
import cards from "@/data/cards";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const card = cards.find(
    (card) => card.id === parseInt(id as string)
  );

  res.status(200).json({ card });
}
