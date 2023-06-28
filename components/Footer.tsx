import { useEffect, useRef } from "react";

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!footerRef.current) return;
      const initialCoords = footerRef.current.getBoundingClientRect();

      if (window.scrollY < initialCoords.top) {
        footerRef.current.classList.add("sticky");
      } else {
        footerRef.current.classList.remove("sticky");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className="flex-center flex-row footer-container h-[85px] "
        ref={footerRef}
      >
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
          position: -webkit-sticky;
          position: sticky;
          bottom: 0;
          background-color: white;
        }

        .sticky {
          box-shadow: 0px 4px 20px 0px #00000033;
        }
      `}</style>
    </>
  );
}
