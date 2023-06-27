import DetailCardBox from "@/components/DetailCardBox";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { DetailProps } from "@/types/types";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { useState } from "react";

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
          <Link href="/">
            <span className="gray text-[13px] ml-[25px]">Home {">"}</span>
          </Link>
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
        <div className="mx-default py-[28.5px]  bottom-gray">
          <div className="font-medium text-[28px] mb-[28px]">{card.title}</div>
          <div className="text-[16px]  mb-[28px] gray">{card.detail}</div>
          <div className="font-medium text-[28px] mb-[2px]">
            USD {card.price}
          </div>
          <div className="text-[14px] mb-[28px] gray">
            Local Taxes included (where applicable)
          </div>
        </div>

        <DetailCardBox card={card} />

        <div className="flex flex-row items-center h-[115px] bottom-gray mx-default">
          <div className="font1 mr-[32px]">Quantity</div>
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

        <div className="mx-default">
          <div className="font1 mt-[30px] mb-[15px]">Specifit Details</div>
          <div className="font2 mb-[22px]">
            Contains:
            <br />
            6 Postcard
            <br />
            2 Random Photocards
            <br />
            1 double sided bookmark
            <br />
            Double Coated / Waterproof cards
          </div>
        </div>
        <div className="border-gray-2 mx-default">
          <div className="font1 mt-[30px] mb-[15px]">Shipping & Returns</div>
          <div className="font2 mb-[107px]">
            Shipping: Free home delivery worldwide
            <br />
            Delivery: 2-5 days delivery
            <br />
            Returns: Free 30-day return policy
            <br />
            Warranty: Lifetime warranty
            <br />
            Tax & Import: Tax and import duties included
            <br />
          </div>
        </div>
        <Footer />
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id;
  const res = await fetch(`http://localhost:3000/api/cards/${id}`);
  const cardData = await res.json();

  return { props: { card: cardData.card } };
};
