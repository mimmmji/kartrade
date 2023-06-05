import React from "react";

interface CardBoxProps {
  username: string;
  title: string;
  detail: string;
  price: string;
  imageUrl: string;
  logoUrl: string;
}

const CardBox: React.FC<CardBoxProps> = ({
  username,
  title,
  detail,
  price,
  imageUrl,
  logoUrl,
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
        <div className="mx-[25px] my-[10px] text-left">
          <div className="font-medium text-[20px]">{title}</div>
          <div className="mt-1 text-[14px] text-[#777777] leading-6">
            {detail}
          </div>
          <div className="mt-5 text-[22px] font-normal leading-7">{price}</div>
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
