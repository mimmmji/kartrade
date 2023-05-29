import { Head } from "next/document";

export default function Home() {
  return (
    <>
      <section className="main-container">
        <div className="nav-container">
          <div className="nav-container-left">
            <img className="logo" src="/logo.svg" alt="Karade" />
          </div>
          <div className="nav-container-right">
            <img className="search-icon" src="/search-icon.svg" alt="search" />
            <img className="menu-icon" src="/menu-icon.svg" alt="menu" />
          </div>
        </div>
        <div className="nav2">
          <select className="price">
            <option value="default">Price ($)</option>
          </select>
        </div>
        <div className="main-image-container">
          <img
            className="main-imagebox"
            src="https://pbs.twimg.com/media/FRxIn9BX0AI4myb?format=jpg&name=900x900"
            alt="main-image"
          />
        </div>
        <div className="cardbox">
          <div className="cardbox-container">
            <div className="cardbox-container-photo"></div>
            <div className="cardbox-container-writer">
              <div className="cardbox-container-writer-logo"></div>
              <div className="cardbox-container-writer-name">@koreans1</div>
            </div>
          </div>
          <div className="line"></div>
          <div className="cardbox-info">
            <div className="cardbox-info-title">
              Deco-Sumi Killer of Queen Collection
            </div>
            <div className="cardbox-info-detail">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis
            </div>
            <div className="cardbox-info-price">USD 199</div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .main-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          max-width: 420px;
          position: absolute;
          margin: auto;
          border: 1px solid black;
          overflow: auto;
        }

        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          height: 70px;
        }

        .nav-container-left {
        }

        .nav-container-right {
          margin-right: 25px;
          padding: 5px;
          display: flex;
        }

        .logo {
          margin-left: 25px;
        }

        .search-icon {
          height: 20px;
          margin-right: 25px;
          width: 20px;
          border-radius: 0px;
        }

        .menu-icon {
          margin-top: 2px;
          height: 16px;
          width: 17px;
        }

        .nav2 {
          font-family: "Neue Haas Unica";
          font-style: normal;
          font-weight: 400;
          font-size: 13px;
          line-height: 13px;
          color: #1a1a1a;
          width: 100%;
          height: 50px;
          border: 1px solid #d8d8d8;
          display: flex;
          align-items: center;
          justify-content: right;
        }

        .price {
          right: 15px;
        }

        .main-image-container {
          height: 470px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          width: 100%;
        }

        .cardbox {
          display: flex;
          flex-direction: column;
          align-items: center;
          height: 640px;
          width: 100%;
          border: 1px solid #d8d8d8;
        }
        .cardbox-container-photo {
          width: 325px;
          height: 325px;
          display: flex;
          background-color: #d8d8d8;
          margin-top: 35px;
        }

        .main-imagebox {
          height: 400px;
          width: 325px;
        }

        .cardbox-container-writer {
          display: flex;
          flex-direction: row;
          align-items: center;
          height: 70px;
          justify-content: flex-start;
          border-bottom: 1px solid #d8d8d8;
        }

        .cardbox-container-writer-logo {
          display: flex;
          margin: 0 10px;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background-color: #d8d8d8;
        }

        .cardbox-container-writer-name {
          display: flex;
          margin: 0 10px;
        }

        .cardbox-info {
          margin: 25px;
          display: flex;
          flex-direction: column;
        }

        .cardbox-info-title {
          display: flex;
          font-family: Neue Haas Unica;
          font-size: 20px;
          font-weight: 500;
          line-height: 25px;
          letter-spacing: 0em;
          text-align: left;
          width: 332px;
          height: 51.75px;
        }

        .cardbox-info-detail {
          display: flex;
          font-family: Neue Haas Unica;
          font-size: 14px;
          font-weight: 400;
          line-height: 22px;
          letter-spacing: 0em;
          text-align: left;
          width: 333px;
          height: 69.25px;
          color: #777777;
          margin-top: 5px;
        }

        .cardbox-info-price {
          display: flex;
          font-family: Neue Haas Unica;
          font-size: 22px;
          font-weight: 400;
          line-height: 34px;
          letter-spacing: 0em;
          text-align: left;
          width: 99px;
          height: 25.69px;
          margin-top: 20px;
        }
      `}</style>
    </>
  );
}
