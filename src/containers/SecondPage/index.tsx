import CommonComponent from "../../components/CommonComponent.tsx";
import SecondPageInput from "../../components/InputFields/secondPageInput";

const SecondPage = () => {
  return (
    <>
      {" "}
      <CommonComponent
        imgUrl={"images/secondprogress.png"}
        pageTitle={"Let's setup a home for all your work"}
        subTitle={"You can always create another workspace later"}
        child={<SecondPageInput />}
        path={"/third-page"}
        buttonText="Create Workspace"
      />
    </>
  );
};

export default SecondPage;
