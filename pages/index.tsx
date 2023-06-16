import CardBox from "@/components/CardBox";
import { useEffect, useState } from "react";
import type { Card } from "../pages/api/cards";

export default function Home() {
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    fetch("/api/cards")
      .then((response) => response.json())
      .then((data) => setCards(data.cards))
      .catch((error) => console.error("Error", error));
  }, []);

  return (
    <>
      <section className="flex-center flex-col main-container w-[375px] border-gray mx-auto">
        <div className="flex items-center justify-between h-[70px] w-[375px]">
          <img className="ml-6" src="/logo.svg" alt="Karade" />
          <div className="flex mr-6">
            <img className="icon" src="/search-icon.svg" alt="search" />
            <img className="icon ml-[25px]" src="/menu-icon.svg" alt="menu" />
          </div>
        </div>
        <div className="w-[375px] h-12 border-gray flex justify-end items-center">
          <select className="price">
            <option value="default">Price ($)</option>
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
          <CardBox
            key={index}
            username={card.username}
            title={card.title}
            detail={card.detail}
            price={card.price}
            imageUrl={card.imageUrl}
            logoUrl={card.logoUrl}
          />
        ))}
      </section>
    </>
  );
}
