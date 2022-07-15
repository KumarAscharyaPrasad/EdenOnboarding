import { useState } from "react";
import CommonComponent from "../../components/CommonComponent.tsx";
import SecondPageInput from "../../components/InputFields/secondPageInput";
import { WorkspaceType } from "../../components/InputFields/types";
import { SecondPageData } from "../../mocks/StaticData";
const initialWorkSpace: WorkspaceType = {
  workspaceName: "",
  url: "",
};
const SecondPage = () => {
  // all the crud operations and state handling will be done here
  // from here data will pass to the child components through props
  const [workspace, setWorkspace] = useState<WorkspaceType>(initialWorkSpace);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setWorkspace({
      ...workspace,
      [name]: value,
    });
  };
  return (
    <>
      {" "}
      <CommonComponent
        imgUrl={SecondPageData.imgUrl}
        pageTitle={SecondPageData.pageTitle}
        subTitle={SecondPageData.subTitle}
        child={
          <SecondPageInput
            workspace={workspace}
            handleInputChange={handleInputChange}
            path={SecondPageData.path}
            buttonText={SecondPageData.buttonText}
          />
        }
      />
    </>
  );
};

export default SecondPage;
