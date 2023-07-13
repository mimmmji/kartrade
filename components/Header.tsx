import { useAuthStatus } from "@/hooks/useAuthStatus";
import Link from "next/link";
import { useState } from "react";
import SearchNav from "./SearchNav";

export default function Header() {
  const [isSearchNavVisible, setIsSearchNavVisible] = useState(false);
  const toggleSearchNav = () => {
    setIsSearchNavVisible(!isSearchNavVisible);
  };

  const { init, isLoggedIn } = useAuthStatus();

  return (
    <>
      <div className="flex items-center justify-between h-[70px] w-[375px] bottom-gray">
        <Link href="/">
          <img className="mx-default" src="/logo.svg" alt="Karade" />
        </Link>
        <div className="flex w-[25%] justify-between mr-[25px]">
          {init &&
            (isLoggedIn ? (
              <Link href="/profile">
                <img
                  className="w-[30px] h-[30px]"
                  src="/login.png"
                  alt="login"
                />
              </Link>
            ) : (
              <Link href="/login">
                <img
                  className="w-[30px] h-[30px]"
                  src="/login.png"
                  alt="login"
                />
              </Link>
            ))}

          <img
            className="icon mt-[5px]"
            src="/search-icon.svg"
            alt="search"
            onClick={toggleSearchNav}
          />
          <img className="icon mt-[5px]" src="/menu-icon.svg" alt="menu" />
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
