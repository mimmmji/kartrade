import Header from "@/components/Header";
import { GetServerSideProps } from "next";
import { useState } from "react";
import { Card } from "../api/cards/[id]";

type DetailProps = {
  card: Card;
};

const fetchCard = async (id: number) => {
  const res = await fetch(`http://localhost:3000/api/cards/${id}`);
  const data = await res.json();
  return data;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id as string;
  const cardData = await fetchCard(Number(id));

  return {
    props: {
      card: cardData.cards[0],
    },
  };
};

export default function Detail({ card }: DetailProps) {
  const [quantity, setQuantity] = useState(1);
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <>
      <section className="section">
        <Header />
        <div className="w-[375px] h-12 border-gray flex items-center">
          <span className="gray text-[13px] ml-[25px]">Home {">"}</span>
          <span className="text-[13px] ml-[5px]">Card Detail</span>
        </div>

        <div className="flex flex-row justify-between items-center mx-default h-[82px] w-[325px] bottom-gray">
          <div className="flex items-center">
            <img className="rounded-full h-10 w-10" src={card.logoUrl} />

            <div className="ml-2 text-[15px]">@{card.username}</div>
          </div>
          <div className="flex items-center">
            <img className="icon" src="/message-icon.svg" alt="message" />
            <div className="text-[12px] ml-[3px]">Send Message</div>
          </div>
        </div>
        <div className="mx-default my-[28.5px]">
          <div className="font-medium text-[28px] mb-[28px]">{card.title}</div>
          <div className="text-[16px]  mb-[28px] gray">{card.detail}</div>
          <div className="font-medium text-[28px] mb-[2px]">
            USD {card.price}
          </div>
          <div className="text-[14px] mb-[28px] gray">
            Local Taxes included (where applicable)
          </div>
        </div>
        <div className="flex-center w-[322px] h-[375px] border-gray-2 mx-default">
          <img className="w-[322px] h-[322px]" src={card.imageUrl} />
        </div>
        <div className="flex-center w-[322px] h-[375px] border-gray-2 mx-default">
          <img className="w-[322px] h-[322px]" src={card.imageUrl} />
        </div>
        <div className="flex-center w-[322px] h-[375px] border-gray-2 mx-default">
          <img className="w-[322px] h-[322px]" src={card.imageUrl} />
        </div>
        <div className="w-[325px] h-[212px] border-gray-2 mx-default">
          <div className="flex flex-row items-center mt-[42px]">
            <div className="font-medium text-[16px] mr-[32px]">Quantity</div>
            <img
              className="w-[38px] h-[38px] mr-[20px]"
              onClick={decreaseQuantity}
              src="/minus.svg"
            />
            <div className="mr-[20px]">{quantity}</div>
            <img
              className="w-[38px] h-[38px]"
              src="/plus.svg"
              onClick={increaseQuantity}
            />
          </div>
          <div className="flex flex-row my-[40px]">
            <div className="black-button mr-[20px] flex flex-row">
              <div className="font-medium text-[13px] flex-center mx-auto">
                SEND MESSAGE
              </div>
            </div>
            <div className="white-button flex flex-row">
              <div className="font-medium text-[13px] flex-center mx-auto">
                WISH LIST
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>
        {`
          .cardbox-container-writer {
            border-bottom: 1px solid #d8d8d8;
          }
        `}
      </style>
    </>
  );
}
