import { Card, Data } from "@/types/types";
import type { NextApiRequest, NextApiResponse } from "next";
import cards from "@/data/cards";

function sortCards(cards: Card[], sortType: string | undefined): Card[] {
  switch (sortType) {
    case "price-asc":
      return cards.sort((a, b) => a.price - b.price);
    case "price-desc":
      return cards.sort((a, b) => b.price - a.price);
    default:
      return cards;
  }
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { sortType } = req.query;

  const sortedCards = sortCards(cards, sortType as string | undefined);

  res.status(200).json({ cards: sortedCards });
}
