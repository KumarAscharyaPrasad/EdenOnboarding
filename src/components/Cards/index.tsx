import React from "react";
import { CardsProps } from "./types";

const Cards = ({
  content,
  header,
  icon,
  changeSelected,
  checked,
  current,
}: CardsProps) => {
  return (
    <>
      {" "}
      <div
        className=" col-2 mx-4 bgcolor-2"
        style={{
          border: `1px  ${checked ? " solid #431ab4f6" : " solid #c7c7c7"}`,
          borderRadius: "5px",
          width: "12vw",
        }}
        onClick={() => changeSelected(current)}
      >
        <div className="p-2 fw-bold">
          <span className={`d-flex my-3 ${checked ? "color-1" : "color-2"}`}>
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
