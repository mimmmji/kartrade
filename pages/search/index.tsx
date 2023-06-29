import CardBox from "@/components/CardBox";
import Header from "@/components/Header";
import { SearchProps } from "@/types/types";
import { GetServerSideProps } from "next";

export default function Search({ keyword, filteredCards }: SearchProps) {
  return (
    <>
      {filteredCards.length > 0 ? (
        <section className="section">
          <Header />
          {filteredCards.map((card) => (
            <CardBox key={card.id} card={card} />
          ))}
        </section>
      ) : (
        <section className="section h-[100vh]">
          <Header />
          <div className="w-[305px] text-xl gray2 text-center m-auto">
            Sorry, <span className="black">'{keyword}'</span> returned no
            results. Please search another word or try checking the spelling
          </div>
        </section>
      )}
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  let keyword = context.query.keyword;
  const res = await fetch(`http://localhost:3000/api/search/${keyword}`);
  const cardData = await res.json();

  return { props: { keyword, filteredCards: cardData.filteredCards } };
};
