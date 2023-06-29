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

export type SearchProps = {
  keyword: string;
  filteredCards: Card[];
};

export type SortSelectProps = {
  sortType: string;
  onSortChange: (value: string) => void;
};

export type SearchNavProps = {
  onEnterKeyPress: () => void;
};
