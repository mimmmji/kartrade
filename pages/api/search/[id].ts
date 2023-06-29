import type { NextApiRequest, NextApiResponse } from "next";
import cards from "@/data/cards";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const keyword = id as string;

  const keywordLowerCase = keyword.toLowerCase();

  const filteredCards = cards.filter((card) =>
    card.title.toLowerCase().includes(keywordLowerCase)
  );
  res.status(200).json({ filteredCards });
}
