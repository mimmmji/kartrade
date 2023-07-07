import { SearchNavProps } from "@/types/types";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function SearchNav({ onEnterKeyPress }: SearchNavProps) {
  const [keyword, setKeyword] = useState("");
  const [keywords, setKeywords] = useState<string[]>([]);
  const router = useRouter();

  useEffect(() => {
    setKeywords(JSON.parse(localStorage.getItem("keywords") || "[]"));
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const handleSearch = (keyword: string) => {
    onEnterKeyPress();
    const newKeyword = [keyword, ...keywords];
    setKeywords(newKeyword);
    localStorage.setItem("keywords", JSON.stringify(newKeyword));
    router.push(`/search?keyword=${keyword}`);
  };

  const handleDeleteKeyword = (index: number) => {
    const newKeyword = keywords.filter((_, idx) => idx !== index);
    setKeywords(newKeyword);
    localStorage.setItem("keywords", JSON.stringify(newKeyword));
  };

  const handleDeleteAll = () => {
    setKeywords([]);
    localStorage.setItem("keywords", JSON.stringify([]));
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
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleSearch(keyword);
              }
            }}
          />
        </div>
        <div className="mt-[40px] mx-default flex justify-between">
          <span className="text-[14px] font-medium">History</span>
          <button className="gray2 text-[13px]" onClick={handleDeleteAll}>
            Delete All
          </button>
        </div>
        <div className="h-[168px] mx-default mt-[20px] gray2 text-[14px] overflow-y-hidden">
          {keywords.length ? (
            keywords.map((keyword, index) => (
              <div key={index} className="flex justify-between mb-[20px]">
                <span onClick={() => handleSearch(keyword)}>{keyword}</span>
                <button onClick={() => handleDeleteKeyword(index)}>X</button>
              </div>
            ))
          ) : (
            <div className="gray3 text-[14px] h-full w-full flex-center pb-[30px]">
              No history
            </div>
          )}
        </div>
      </div>
    </>
  );
}
