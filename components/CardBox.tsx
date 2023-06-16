import React from "react";
import {Card} from "@/pages/api/cards";

const CardBox: React.FC<{card: Card}> = ({
    card: {
      username,
      title,
      detail,
      price,
      imageUrl,
      logoUrl,
    }
}) => {
  return (
    <>
      <div className="flex-col flex-center border-gray h-[640px] w-[375px]">
        <div className="cardbox-container">
          <img className="w-[325px] h-[325px] mt-[20px]" src={imageUrl} />
          <div className="cardbox-container-writer flex-center flex-row h-[70px] w-[325px]">
            <img className="rounded-full h-10 w-10" src={logoUrl} />
            <div className="ml-2">@{username}</div>
          </div>
        </div>
        <div className="text-left mx-[25px]">
          <div className="mt-[27px] font-medium text-[20px] leading-[25px]">
            {title}
          </div>
          <div className="line-clamp-3 mt-[11.25px] text-[14px] text-[#777777] h-[69.25px] leading-[22px]">
            {detail}
          </div>
          <div className="mt-[8px] mb-[18px] text-[22px] font-normal leading-[34px]">
            {price}
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .cardbox-container-writer {
            justify-content: flex-start;
            border-bottom: 1px solid #d8d8d8;
          }
        `}
      </style>
    </>
  );
};

export default CardBox;
