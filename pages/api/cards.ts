import { Card, Data } from "@/types/types";
import type { NextApiRequest, NextApiResponse } from "next";

export const cards: Card[] = [
  {
    id: 1,
    username: "koreans1",
    title: "Deco-Sumi Killer of Queen Collection",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
    price: 199,
    imageUrl:
      "https://i1.daumcdn.net/thumb/C600x600/?fname=https://t1.daumcdn.net/cfile/tistory/99230D385F8FF78C1D",
    logoUrl:
      "https://i1.daumcdn.net/thumb/C600x600/?fname=https://t1.daumcdn.net/cfile/tistory/99230D385F8FF78C1D",
    detailImageUrl: [
      "https://thumb.mtstarnews.com/06/2023/01/2023012009283197753_1.jpg",
      "https://spnimage.edaily.co.kr/images/Photo/files/NP/S/2021/04/PS21040400005.jpg",
      "https://thumb.mtstarnews.com/06/2023/03/2023032310101878066_1.jpg/dims/optimize",
    ],
    createdAt: new Date().toString(),
  },
  {
    id: 2,
    username: "koreans2",
    title: "2022 Season Greetings",
    detail:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt",
    price: 80,
    imageUrl:
      "https://dimg.donga.com/wps/SPORTS/IMAGE/2020/03/10/100088233.1.jpg",
    logoUrl:
      "https://dimg.donga.com/wps/SPORTS/IMAGE/2020/03/10/100088233.1.jpg",
    detailImageUrl: [
      "https://img.wkorea.com/w/2021/01/style_6007f3c060e84-560x700.jpg",
      "https://live.staticflickr.com/65535/51758268858_45b6de8c34_o.jpg",
      "https://img.newspim.com/news/2017/11/20/1711200942414380.jpg",
    ],
    createdAt: new Date().toString(),
  },
  {
    id: 3,
    username: "koreans3",
    title: "2020 Map Of The Soul:7 Ver3",
    detail:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto",
    price: 100,
    imageUrl:
      "https://file.mk.co.kr/meet/neds/2023/03/image_readtop_2023_206601_16789256425390822.jpg",
    logoUrl:
      "https://file.mk.co.kr/meet/neds/2023/03/image_readtop_2023_206601_16789256425390822.jpg",
    detailImageUrl: [
      "https://cdn.mhnse.com/news/photo/202209/140883_133474_025.png",
      "https://image.jtbcplus.kr/data/contents/jam_photo/202303/21/d4b1c298-01ba-4d03-a980-689fce0125b0.jpg",
      "https://m.segye.com/content/image/2019/06/28/20190628505291.jpg",
    ],
    createdAt: new Date().toString(),
  },
  {
    id: 4,
    username: "koreans4",
    title: "2020 Map Of The Soul:7 Ver3",
    detail:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto",
    price: 190,
    imageUrl:
      "https://image.jtbcplus.kr/data/contents/jam_photo/202006/17/a72cddd4-0047-4556-ad55-8cdeadb46efc.jpg",
    logoUrl:
      "https://image.jtbcplus.kr/data/contents/jam_photo/202006/17/a72cddd4-0047-4556-ad55-8cdeadb46efc.jpg",
    detailImageUrl: [
      "https://cdn.newsculture.press/news/photo/202303/520264_640692_1118.jpg",
      "https://cdn.newsculture.press/news/photo/202304/521929_643799_375.jpg",
      "https://img.mbn.co.kr/filewww/news/other/2021/08/19/110029192098.jpg",
    ],
    createdAt: new Date().toString(),
  },
  {
    id: 5,
    username: "koreans5",
    title: "2020 Map Of The Soul:7 Ver3",
    detail:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto",
    price: 112,
    imageUrl:
      "https://digitalchosun.dizzo.com/site/data/img_dir/2019/08/19/2019081980069_0.jpg",
    logoUrl:
      "https://digitalchosun.dizzo.com/site/data/img_dir/2019/08/19/2019081980069_0.jpg",
    detailImageUrl: [
      "https://file.mk.co.kr/meet/neds/2022/02/image_readtop_2022_150702_16450566524949241.jpg",
      "https://img.marieclairekorea.com/2022/08/mck_630732270999a-scaled.jpg",
      "https://image.fnnews.com/resource/media/image/2022/08/22/202208221604459254_l.jpg",
    ],
    createdAt: new Date().toString(),
  },
  {
    id: 6,
    username: "koreans6",
    title: "2020 Map Of The Soul:7 Ver3",
    detail:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto",
    price: 92,
    imageUrl:
      "https://images.khan.co.kr/article/2022/09/29/news-p.v1.20220929.5483d21cd86149648135d8d14ed6ca30_P1.jpg",
    logoUrl:
      "https://images.khan.co.kr/article/2022/09/29/news-p.v1.20220929.5483d21cd86149648135d8d14ed6ca30_P1.jpg",
    detailImageUrl: [
      "https://images.khan.co.kr/article/2022/10/31/news-p.v1.20221031.4e5d26d664814db8896803fc241ca92c_P1.png",
      "https://file.mk.co.kr/meet/neds/2023/05/image_readmed_2023_392111_16848019825480348.jpg",
      "https://img.wkorea.com/w/2022/11/style_63844e19df21f-464x700.jpg",
    ],
    createdAt: new Date().toString(),
  },
  {
    id: 7,
    username: "koreans7",
    title: "2020 Map Of The Soul:7 Ver3",
    detail:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto",
    price: 98,
    imageUrl:
      "https://daily.hankooki.com/news/photo/202206/836417_1103454_2626.png",
    logoUrl:
      "https://daily.hankooki.com/news/photo/202206/836417_1103454_2626.png",
    detailImageUrl: [
      "https://file.mk.co.kr/meet/neds/2021/04/image_readtop_2021_341648_16179362464605076.jpg",
      "https://img.hankyung.com/photo/202010/BF.24202077.1.jpg",
      "https://img.vogue.co.kr/vogue/2022/06/style_62a2c49275175-745x930.png",
    ],
    createdAt: new Date().toString(),
  },
  {
    id: 8,
    username: "koreans8",
    title: "2020 Map Of The Soul:7 Ver3",
    detail:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto",
    price: 102,
    imageUrl:
      "https://img.jjang0u.com/data3/chalkadak/306/202003/26/158519311481741.jpg",
    logoUrl:
      "https://img.jjang0u.com/data3/chalkadak/306/202003/26/158519311481741.jpg",
    detailImageUrl: [
      "https://img.hankyung.com/photo/202106/BF.26701756.1.jpg",
      "https://fashionseoul.com/wp-content/uploads/2020/09/20200903_JOY_03-e1599102648671.jpg",
      "https://cdn.ggilbo.com/news/photo/202004/764038_597312_2414.jpg",
    ],
    createdAt: new Date().toString(),
  },
  {
    id: 9,
    username: "koreans9",
    title: "2020 Map Of The Soul:7 Ver3",
    detail:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto",
    price: 123,
    imageUrl:
      "https://cdn.topstarnews.net/news/photo/202205/14695380_799581_5223.jpg",
    logoUrl:
      "https://cdn.topstarnews.net/news/photo/202205/14695380_799581_5223.jpg",
    detailImageUrl: [
      "https://file.mk.co.kr/meet/neds/2021/02/image_readtop_2021_187003_16142330014553698.jpg",
      "https://talkimg.imbc.com/TVianUpload/tvian/TViews/image/2018/07/31/jvihm9GnzvGr636686315841370454.jpg",
      "https://www.naewoeilbo.com/news/photo/202102/326567_105431_1048.jpg",
    ],
    createdAt: new Date().toString(),
  },
  {
    id: 10,
    username: "koreans10",
    title: "2020 Map Of The Soul:7 Ver3",
    detail:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto",
    price: 99,
    imageUrl:
      "https://pbs.twimg.com/media/EO_Hl6ZUwAAacbg?format=jpg&name=large",
    logoUrl:
      "https://pbs.twimg.com/media/EO_Hl6ZUwAAacbg?format=jpg&name=large",
    detailImageUrl: [
      "https://live.staticflickr.com/65535/52033452808_eedc5a5e31_o.jpg",
      "https://img.wkorea.com/w/2020/12/style_5fe6f7ef657ef-539x700.jpg",
      "https://dimg.donga.com/wps/SPORTS/IMAGE/2018/08/05/91378255.1.jpg",
    ],
    createdAt: new Date().toString(),
  },
  {
    id: 11,
    username: "koreans11",
    title: "2020 Map Of The Soul:7 Ver3",
    detail:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto",
    price: 73,
    imageUrl:
      "https://digitalchosun.dizzo.com/site/data/img_dir/2020/04/21/2020042180128_1.jpg",
    logoUrl:
      "https://digitalchosun.dizzo.com/site/data/img_dir/2020/04/21/2020042180128_1.jpg",
    detailImageUrl: [
      "https://img.wkorea.com/w/2020/04/style_5e9acb17940a8-539x700.jpg",
      "https://image.jtbcplus.kr/data/contents/jam_photo/202009/17/eed0cd3b-e8b6-4e9c-827d-274217bb3edc.jpg",
      "https://biz.chosun.com/resizer/pbfk1O2x2qqDiHqYHOj_bhelXyg=/616x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosunbiz/LM3TTNDCV5AKVL55KNJAZOQFVQ.jpg",
    ],
    createdAt: new Date().toString(),
  },
];

function sortCards(cards: Card[], sortType: string | undefined): Card[] {
  switch (sortType) {
    case "price-asc":
      return cards.sort((a, b) => a.price - b.price);
    case "price-desc":
      return cards.sort((a, b) => b.price - a.price);
    default:
      return cards;
  }
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { sortType } = req.query;

  const sortedCards = sortCards(cards, sortType as string | undefined);

  res.status(200).json({ cards: sortedCards });
}
