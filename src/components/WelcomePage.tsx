import CommonComponent from "./CommonComponent.tsx";
import FirstPage from "./InputFields/firstPageInput";
import React from "react";

const WelcomePage = () => {
  return (
    <>
      <CommonComponent
        imgUrl={"images/firstprogress.png"}
        pageTitle={"Welcome! First things first..."}
        subTitle={"You can always change them later"}
        child={<FirstPage />}
        path="/second-page"
        buttonText="Create Workspace"
      />
    </>
  );
};

export default WelcomePage;
