export default function Footer() {
  return (
    <>
      <div className="flex-center flex-row footer-container h-[85px]">
        <div className="black-button mr-[20px] flex-center flex-row">
          <img
            className="w-[14px] h-[14px] mr-[4px]"
            src="/message-white.png"
          />
          <div className="font-medium text-[13px]">SEND MESSAGE</div>
        </div>
        <div className="white-button flex-center flex-row">
          <img className="w-[14px] h-[14px] mr-[4px]" src="/heart.png" />
          <div className="font-medium text-[13px]dd">WISH LIST</div>
        </div>
      </div>
      <style jsx>{`
        .footer-container {
          box-shadow: 0px 4px 20px 0px #00000033;
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          margin-left: auto;
          margin-right: auto;
          width: 375px;
          background-color: white;
        }
      `}</style>
    </>
  );
}
