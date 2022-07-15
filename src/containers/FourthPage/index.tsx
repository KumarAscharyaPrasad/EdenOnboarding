import CreateButton from "../../components/Buttons";
import CommonComponent from "../../components/CommonComponent.tsx";
import { FourthPageData } from "../../mocks/StaticData";

const FourthPage = () => {
  // all the crud operations and state handling will be done here
  // from here data will pass to the child components through props
  return (
    <>
      <CommonComponent
        imgUrl={FourthPageData.imgUrl}
        pageTitle={FourthPageData.pageTitle}
        subTitle={FourthPageData.subTitle}
        successImg={FourthPageData.successImg}
      />
      <div className="mx-auto col-sm-4">
        {" "}
        <CreateButton
          buttonText={FourthPageData.buttonText}
          path={FourthPageData.path}
        />
      </div>
    </>
  );
};

export default FourthPage;
