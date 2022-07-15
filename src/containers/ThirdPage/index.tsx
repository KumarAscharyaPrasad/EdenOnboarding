import { useState } from "react";
import { CardType } from "../../components/Cards/types";
import CommonComponent from "../../components/CommonComponent.tsx";
import ThirdPageCards from "../../components/InputFields/thirdPageCards";
import { ThirdPageData } from "../../mocks/StaticData";

const ThirdPage = () => {
  // all the crud operations and state handling will be done here
  // from here data will pass to the child components through props
  const [selected, setSelected] = useState<CardType>("MYSELF");

  return (
    <>
      <CommonComponent
        imgUrl={ThirdPageData.imgUrl}
        pageTitle={ThirdPageData.pageTitle}
        subTitle={ThirdPageData.subTitle}
        child={
          <ThirdPageCards
            selected={selected}
            setSelected={setSelected}
            path={ThirdPageData.path}
            buttonText={ThirdPageData.buttonText}
          />
        }
      />
    </>
  );
};

export default ThirdPage;
