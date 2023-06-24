export type Card = {
  username: string;
  title: string;
  detail: string;
  price: number;
  imageUrl: string;
  logoUrl: string;
  createdAt: string;
  id: number;
  detailImageUrl: string[];
};

export type Data = {
  cards: Card[];
};

export type DetailProps = {
  card: Card;
};
