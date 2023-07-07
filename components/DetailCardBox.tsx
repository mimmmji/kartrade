import { Card } from "@/types/types";

const DetailCardBox: React.FC<{ card: Card }> = ({
  card: { detailImageUrl },
}) => {
  return (
    <>
      {detailImageUrl.map((imageUrl, index) => (
        <div
          key={index}
          className="flex-center w-[322px] h-[375px] bottom-gray mx-default"
        >
          <img className="w-[322px] h-[322px]" src={imageUrl} />
        </div>
      ))}
    </>
  );
};

export default DetailCardBox;
