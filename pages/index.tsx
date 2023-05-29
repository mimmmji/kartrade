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
            <img className="cardbox-container-photo" />
            <div className="cardbox-container-writer"></div>
          </div>
          <div className="line"></div>
          <div className="cardbox-info">
            <div className="cardbox-info-title"></div>
            <div className="cardbox-info-detail"></div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .main-container {
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          max-width: 420px;
          margin: 0 auto;
          position: relative;
          border: 1px solid black;
        }

        .nav-container {
          position: absolute;
          width: 100%;
          height: 29px;
          top: 57px;
          display: flex;
          justify-content: space-between;
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
          position: absolute;
          top: 102px;
          width: 100%;
          height: 50px;
          border: 1px solid #d8d8d8;
          display: flex;
          align-items: center;
          justify-content: right;
        }

        .price {
          position: relative;
          right: 15px;
        }

        .main-image-container {
          position: absolute;
          top: 152px;
          display: flex;
          height: 470px;
          width: 100%;
          border: 1px solid #d8d8d8;
          align-items: center;
          justify-content: center;
        }
        .main-imagebox {
          height: 400px;
          width: 325px;
        }
      `}</style>
    </>
  );
}
