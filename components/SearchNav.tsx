import { SearchNavProps } from "@/types/types";
import { useRouter } from "next/router";
import { useState } from "react";

export default function SearchNav({ onEnterKeyPress }: SearchNavProps) {
  const [keyword, setKeyword] = useState("");
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const handleSearchKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (onEnterKeyPress) {
        onEnterKeyPress();
      }
      router.push(`/search?keyword=${keyword}`);
    }
  };
  return (
    <>
      <div className="bg-white w-[373px] search-nav">
        <div className="mx-default mt-[30px] flex flex-row pb-[6px] bottom-gray2 w-[325px]">
          <img
            className="w-[24px] h-[24px] mr-[5px]"
            src="/search-icon-gray.png"
            alt="search"
          />
          <input
            className="font3 gray2 w-full"
            placeholder="Search by title"
            value={keyword}
            onChange={handleInputChange}
            onKeyPress={handleSearchKeyPress}
          />
        </div>
        <div className="mt-[40px] mx-default flex justify-between">
          <span className="font-[14px] font-medium">History</span>
          <span className="gray2 font-[13px]">Delete All</span>
        </div>
        <div className="min-h-[170px]"></div>
      </div>

      <style jsx>
        {`
          .search-nav {
            box-shadow: 0px 6px 20px 0px #0000001a;
          }
        `}
      </style>
    </>
  );
}
