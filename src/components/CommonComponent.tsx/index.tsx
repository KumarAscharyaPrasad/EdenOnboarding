import React from "react";
import CreateButton from "../Buttons";
import { CommonComponentProps } from "./types";

const CommonComponent = ({
  child,
  imgUrl,
  pageTitle,
  subTitle,
  path,
  buttonText,
  successImg,
}: CommonComponentProps) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "10vh",
        }}
      >
        <img src="favicon.png" alt="favicon" />
        <h1>Eden</h1>
      </div>
      <div>
        <img src={imgUrl} alt="favicon" />
      </div>
      {successImg && (
        <div>
          <img src={successImg} alt="success-img" />
        </div>
      )}
      <div>
        <h1 style={{ fontWeight: "bold", wordSpacing: "-4px" }}>{pageTitle}</h1>
        <p style={{ color: "gray" }}>{subTitle}</p>
      </div>
      {child}
      <div className="mx-auto col-sm-4">
        {" "}
        <CreateButton buttonText={buttonText} path={path} />
      </div>
    </>
  );
};

export default CommonComponent;
