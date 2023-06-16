import type { NextApiRequest, NextApiResponse } from "next";

export type Card = {
  username: string;
  title: string;
  detail: string;
  price: number;
  imageUrl: string;
  logoUrl: string;
};

type Data = {
  cards: Card[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    cards: [
      {
        username: "koreans1",
        title: "Deco-Sumi Killer of Queen Collection",
        detail:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
        price: 199,
        imageUrl:
          "https://i1.daumcdn.net/thumb/C600x600/?fname=https://t1.daumcdn.net/cfile/tistory/99230D385F8FF78C1D",
        logoUrl:
          "https://i1.daumcdn.net/thumb/C600x600/?fname=https://t1.daumcdn.net/cfile/tistory/99230D385F8FF78C1D",
        createdAt: new Date().toString()
      },
      {
        username: "koreans2",
        title: "2022 Season Greetings",
        detail:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt",
        price: 199,
        imageUrl:
          "https://dimg.donga.com/wps/SPORTS/IMAGE/2020/03/10/100088233.1.jpg",
        logoUrl:
          "https://dimg.donga.com/wps/SPORTS/IMAGE/2020/03/10/100088233.1.jpg",
      },
      {
        username: "koreans3",
        title: "2020 Map Of The Soul:7 Ver3",
        detail:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto",
        price: 199,
        imageUrl:
          "https://img.jjang0u.com/data4/docs/306/202104/11/2a/c11b72583b0c4b46508d429c37c1cb15_563804.jpg",
        logoUrl:
          "https://img.jjang0u.com/data4/docs/306/202104/11/2a/c11b72583b0c4b46508d429c37c1cb15_563804.jpg",
      },
      {
        username: "koreans4",
        title: "2020 Map Of The Soul:7 Ver3",
        detail:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto",
        price: 199,
        imageUrl:
          "https://image.jtbcplus.kr/data/contents/jam_photo/202006/17/a72cddd4-0047-4556-ad55-8cdeadb46efc.jpg",
        logoUrl:
          "https://image.jtbcplus.kr/data/contents/jam_photo/202006/17/a72cddd4-0047-4556-ad55-8cdeadb46efc.jpg",
      },
      {
        username: "koreans5",
        title: "2020 Map Of The Soul:7 Ver3",
        detail:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto",
        price: 199,
        imageUrl:
          "https://digitalchosun.dizzo.com/site/data/img_dir/2019/08/19/2019081980069_0.jpg",
        logoUrl:
          "https://digitalchosun.dizzo.com/site/data/img_dir/2019/08/19/2019081980069_0.jpg",
      },
      {
        username: "koreans6",
        title: "2020 Map Of The Soul:7 Ver3",
        detail:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto",
        price: 199,
        imageUrl:
          "https://images.khan.co.kr/article/2022/09/29/news-p.v1.20220929.5483d21cd86149648135d8d14ed6ca30_P1.jpg",
        logoUrl:
          "https://images.khan.co.kr/article/2022/09/29/news-p.v1.20220929.5483d21cd86149648135d8d14ed6ca30_P1.jpg",
      },
      {
        username: "koreans7",
        title: "2020 Map Of The Soul:7 Ver3",
        detail:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto",
        price: 199,
        imageUrl:
          "https://daily.hankooki.com/news/photo/202206/836417_1103454_2626.png",
        logoUrl:
          "https://daily.hankooki.com/news/photo/202206/836417_1103454_2626.png",
      },
      {
        username: "koreans8",
        title: "2020 Map Of The Soul:7 Ver3",
        detail:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto",
        price: 199,
        imageUrl:
          "https://img.jjang0u.com/data3/chalkadak/306/202003/26/158519311481741.jpg",
        logoUrl:
          "https://img.jjang0u.com/data3/chalkadak/306/202003/26/158519311481741.jpg",
      },
      {
        username: "koreans9",
        title: "2020 Map Of The Soul:7 Ver3",
        detail:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto",
        price: 199,
        imageUrl:
          "https://cdn.topstarnews.net/news/photo/202205/14695380_799581_5223.jpg",
        logoUrl:
          "https://cdn.topstarnews.net/news/photo/202205/14695380_799581_5223.jpg",
      },
      {
        username: "koreans10",
        title: "2020 Map Of The Soul:7 Ver3",
        detail:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto",
        price: 199,
        imageUrl:
          "https://pbs.twimg.com/media/EO_Hl6ZUwAAacbg?format=jpg&name=large",
        logoUrl:
          "https://pbs.twimg.com/media/EO_Hl6ZUwAAacbg?format=jpg&name=large",
      },
      {
        username: "koreans11",
        title: "2020 Map Of The Soul:7 Ver3",
        detail:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto",
        price: 199,
        imageUrl:
          "https://digitalchosun.dizzo.com/site/data/img_dir/2020/04/21/2020042180128_1.jpg",
        logoUrl:
          "https://digitalchosun.dizzo.com/site/data/img_dir/2020/04/21/2020042180128_1.jpg",
      },
    ],
  });
}
