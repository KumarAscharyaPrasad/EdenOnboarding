import React from "react";
import CommonComponent from "../../components/CommonComponent.tsx";
import FirstPageInput from "../../components/InputFields/firstPageInput";

const WelcomePage = () => {
  return (
    <>
      <CommonComponent
        imgUrl={"images/firstprogress.png"}
        pageTitle={"Welcome! First things first..."}
        subTitle={"You can always change them later"}
        child={<FirstPageInput />}
        path="/second-page"
        buttonText="Create Workspace"
      />
    </>
  );
};

export default WelcomePage;
