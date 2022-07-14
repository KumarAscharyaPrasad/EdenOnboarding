import React from "react";
type CardsProps = {
  icon: React.ReactNode;
  header: string;
  content: string;
  selected: boolean;
  changeSelected: (selected: boolean) => void;
};
const Cards = ({
  content,
  header,
  icon,
  changeSelected,
  selected,
}: CardsProps) => {
  return (
    <>
      {" "}
      <div
        className=" col-2 mx-4 bgcolor-2"
        style={{
          border: `1px  ${selected ? " solid #431ab4f6" : " solid #c7c7c7"}`,
          borderRadius: "5px",
          width: "12vw",
        }}
        onClick={() => {
          changeSelected(selected ? selected : !selected);
        }}
      >
        <div className="p-2 fw-bold">
          <span className={`d-flex my-3 ${selected ? "color-1" : "color-2"}`}>
            {icon}
          </span>
          <p className="d-flex ">{header}</p>
          <p className="col-sm-12" style={{ fontSize: "80%", opacity: "50%" }}>
            {content}
          </p>
        </div>
      </div>
    </>
  );
};

export default Cards;
