import CardBox from "@/components/CardBox";
import Header from "@/components/Header";
import { Card } from "@/types/types";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [cards, setCards] = useState<Card[]>([]);
  const [sortType, setSortType] = useState("default");

  useEffect(() => {
    const initialSortType = router.query.sortType ?? "default";
    setSortType(initialSortType as string);
  }, [router.query.sortType]);

  useEffect(() => {
    fetch(`/api/cards?sortType=${sortType}`)
      .then((response) => response.json())
      .then((data) => setCards(data.cards))
      .catch((error) => console.error("Error", error));
  }, [sortType]);

  function handleSortChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const selectedSortType = e.target.value;
    setSortType(selectedSortType);
    router.push(`/?sortType=${selectedSortType}`);
  }

  return (
    <>
      <section className="section">
        <Header />
        <div className="w-[375px] h-12 border-gray flex justify-end items-center">
          <select
            className="price mx-default text-[13px] text-right"
            onChange={handleSortChange}
            value={sortType}
          >
            <option value="default">Price ($)</option>
            <option value="price-asc">Price: Low-High</option>
            <option value="price-desc">Price: High-Low</option>
          </select>
        </div>
        <div className="main-image-container flex-center w-[375px] h-[470px]">
          <img
            className="w-[325px] h-[420px]"
            src="https://t1.daumcdn.net/cfile/tistory/99F443375F7B0B0903"
            alt="main-image"
          />
        </div>

        {cards.map((card) => (
          <CardBox key={card.id} card={card} />
        ))}
      </section>
    </>
  );
}
