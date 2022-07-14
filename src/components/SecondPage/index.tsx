import CommonComponent from "../CommonComponent.tsx";
import SecondPageInput from "../InputFields/secondPageInput";

const SecondPage = () => {
  return (
    <>
      {" "}
      <CommonComponent
        imgUrl={"images/secondprogress.png"}
        pageTitle={"Welcome! First things first..."}
        subTitle={"You can always change them later"}
        child={<SecondPageInput />}
        path={'/third-page'}
        buttonText="Create Workspace"
      />
    </>
  );
};

export default SecondPage;
