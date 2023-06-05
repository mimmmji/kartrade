import CardBox from "@/components/CardBox";

export default function Home() {
  return (
    <>
      <section className="flex-center flex-col main-container w-[375px] border-gray mx-auto">
        <div className="flex items-center justify-between h-[70px] w-[375px]">
          <img className="ml-6" src="/logo.svg" alt="Karade" />
          <div className="flex mr-6">
            <img className="icon" src="/search-icon.svg" alt="search" />
            <img className="icon ml-[25px]" src="/menu-icon.svg" alt="menu" />
          </div>
        </div>
        <div className="w-[375px] h-12 border-gray flex justify-end items-center">
          <select className="price">
            <option value="default">Price ($)</option>
          </select>
        </div>
        <div className="main-image-container flex-center w-[375px] h-[470px]">
          <img
            className="w-[325px] h-[420px]"
            src="https://t1.daumcdn.net/cfile/tistory/99F443375F7B0B0903"
            alt="main-image"
          />
        </div>

        <CardBox
          username="koreans1"
          title="Deco-Sumi Killer of Queen Collection"
          detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis"
          price="USD 199"
          imageUrl="https://i1.daumcdn.net/thumb/C600x600/?fname=https://t1.daumcdn.net/cfile/tistory/99230D385F8FF78C1D"
          logoUrl="https://i1.daumcdn.net/thumb/C600x600/?fname=https://t1.daumcdn.net/cfile/tistory/99230D385F8FF78C1D"
        />
        <CardBox
          username="koreans2"
          title="2022 Season Greetings"
          detail="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt"
          price="USD 199"
          imageUrl="https://dimg.donga.com/wps/SPORTS/IMAGE/2020/03/10/100088233.1.jpg"
          logoUrl="https://dimg.donga.com/wps/SPORTS/IMAGE/2020/03/10/100088233.1.jpg"
        />
        <CardBox
          username="koreans3"
          title="2020 Map Of The Soul:7 Ver3"
          detail="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto"
          price="USD 199"
          imageUrl="https://i1.daumcdn.net/thumb/C600x600/?fname=https://t1.daumcdn.net/cfile/tistory/992DE04C5FA9052011"
          logoUrl="https://i1.daumcdn.net/thumb/C600x600/?fname=https://t1.daumcdn.net/cfile/tistory/992DE04C5FA9052011"
        />
      </section>
    </>
  );
}
