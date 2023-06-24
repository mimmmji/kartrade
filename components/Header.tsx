import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className="flex items-center justify-between h-[70px] w-[375px]">
        <Link href="/">
          <img className="mx-default" src="/logo.svg" alt="Karade" />
        </Link>
        <div className="flex">
          <img className="icon" src="/search-icon.svg" alt="search" />
          <img className="icon mx-default" src="/menu-icon.svg" alt="menu" />
        </div>
      </div>
    </>
  );
}
