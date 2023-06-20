import CardBox from "@/components/CardBox";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import type { Card } from "../pages/api/cards";

export default function Home() {
  const router = useRouter();
  const [cards, setCards] = useState<Card[]>([]);
  const [sortType, setSortType] = useState("default");

  useEffect(() => {
    const initialSortType =
      typeof router.query.sortType === "string"
        ? router.query.sortType
        : "default";
    setSortType(initialSortType);
  }, [router.query]);

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
      <section className="flex-center flex-col main-container w-[375px] border-gray mx-auto">
        <div className="flex items-center justify-between h-[70px] w-[375px]">
          <img className="ml-6" src="/logo.svg" alt="Karade" />
          <div className="flex mr-6 mr-[25px]">
            <img className="icon" src="/search-icon.svg" alt="search" />
            <img className="icon ml-[25px]" src="/menu-icon.svg" alt="menu" />
          </div>
        </div>
        <div className="w-[375px] h-12 border-gray flex justify-end items-center">
          <select
            className="price mr-[25px] text-[13px] text-right"
            onChange={handleSortChange}
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

        {cards.map((card, index) => (
          <CardBox key={index} card={card} />
        ))}
      </section>
    </>
  );
}
