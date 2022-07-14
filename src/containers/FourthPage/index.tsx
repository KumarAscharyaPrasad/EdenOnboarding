import React from "react";
import CommonComponent from "../../components/CommonComponent.tsx";

const FourthPage = () => {
  return (
    <>
      <CommonComponent
        imgUrl={"images/fourthprogress.png"}
        pageTitle={"Congratulations,Eren! "}
        subTitle={
          "You have completed onboarding, you can start using the Eden!"
        }
        path='/'
        buttonText="Launch Eden"
        successImg="images/successImage.png"
      />
    </>
  );
};

export default FourthPage;
