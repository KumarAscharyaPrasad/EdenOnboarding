import React from "react";
import CommonComponent from "../CommonComponent.tsx";
import ThirdPageCards from "../InputFields/thirdPageCards";

const ThirdPage = () => {
  return (
    <>
      <CommonComponent
        imgUrl={"images/thirdprogress.png"}
        pageTitle={"Welcome! First things first..."}
        subTitle={"You can always change them later"}
        child={<ThirdPageCards />}
        path={"/fourth-page"}
        buttonText="Create Workspace"
      />
    </>
  );
};

export default ThirdPage;
