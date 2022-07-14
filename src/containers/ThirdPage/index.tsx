import React from "react";
import CommonComponent from "../../components/CommonComponent.tsx";
import ThirdPageCards from "../../components/InputFields/thirdPageCards";

const ThirdPage = () => {
  return (
    <>
      <CommonComponent
        imgUrl={"images/thirdprogress.png"}
        pageTitle={"How are you planning to use Eden?"}
        subTitle={"We'll streamline your setup experience accordingly."}
        child={<ThirdPageCards />}
        path={"/fourth-page"}
        buttonText="Create Workspace"
      />
    </>
  );
};

export default ThirdPage;
