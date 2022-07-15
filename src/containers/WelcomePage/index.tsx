import React, { useState } from "react";
import CommonComponent from "../../components/CommonComponent.tsx";
import FirstPageInput from "../../components/InputFields/firstPageInput";
import { NamesType } from "../../components/InputFields/types";
import { WelcomePageData } from "../../mocks/StaticData";
const initialNames: NamesType = {
  fullName: "",
  displayName: "",
};
const WelcomePage = () => {
  // all the crud operations and state handling will be done here
  // from here data will pass to the child components through props
  const [names, setNames] = useState<NamesType>(initialNames);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setNames({
      ...names,
      [name]: value,
    });
  };
  return (
    <>
      <CommonComponent
        imgUrl={WelcomePageData.imgUrl}
        pageTitle={WelcomePageData.pageTitle}
        subTitle={WelcomePageData.subTitle}
        child={
          <FirstPageInput
            names={names}
            handleInputChange={handleInputChange}
            path={WelcomePageData.path}
            buttonText={WelcomePageData.buttonText}
          />
        }
      />
    </>
  );
};

export default WelcomePage;
