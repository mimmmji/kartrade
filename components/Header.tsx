import Link from "next/link";
import { useState } from "react";
import SearchNav from "./SearchNav";

export default function Header() {
  const [isSearchNavVisible, setIsSearchNavVisible] = useState(false);
  const toggleSearchNav = () => {
    setIsSearchNavVisible(!isSearchNavVisible);
  };

  return (
    <>
      <div className="flex items-center justify-between h-[70px] w-[375px] bottom-gray">
        <Link href="/">
          <img className="mx-default" src="/logo.svg" alt="Karade" />
        </Link>
        <div className="flex">
          <img
            className="icon"
            src="/search-icon.svg"
            alt="search"
            onClick={toggleSearchNav}
          />
          <img className="icon mx-default" src="/menu-icon.svg" alt="menu" />
        </div>
      </div>
      {isSearchNavVisible && (
        <div className="absolute top-[71px] z-10 flex-center">
          <SearchNav onEnterKeyPress={toggleSearchNav} />
        </div>
      )}
    </>
  );
}
