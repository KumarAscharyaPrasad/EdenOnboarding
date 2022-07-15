import CreateButton from "../Buttons";
import { SecondPageInputProps } from "./types";

const SecondPageInput = ({
  buttonText,
  handleInputChange,
  path,
  workspace,
}: SecondPageInputProps) => {
  return (
    <>
      <div className="h-100 mx-auto col-sm-4 justify-content-center">
        <div className="my-auto ">
          <form className="mt-3">
            <div className="d-flex">
              <label
                htmlFor="inputWorkspaceName"
                style={{
                  fontWeight: "bold",
                  opacity: "65%",
                  marginBottom: "2px",
                }}
              >
                Workspace Name
              </label>
            </div>
            <input
              className="form-control"
              type="text"
              name="workspaceName"
              id="inputWorkspaceName"
              placeholder="Eden"
              value={workspace.workspaceName}
              onChange={handleInputChange}
            />
            <div className="d-flex mt-4">
              <label
                htmlFor="inputWorkspaceUrl"
                style={{
                  fontWeight: "bold",
                  opacity: "65%",
                  marginBottom: "2px",
                }}
              >
                Workspace URL <span style={{ opacity: "35%" }}>(optional)</span>
              </label>
            </div>
            <div className="input-group mb-3">
              <span
                className="input-group-text"
                id="basic-addon3"
                style={{ opacity: "65%" }}
              >
                www.eden.com/
              </span>
              <input
                type="text"
                className="form-control"
                id="inputWorkspaceUrl"
                aria-describedby="basic-addon3"
                placeholder="Example"
                value={workspace.url}
                name='url'
                onChange={handleInputChange}
              />
            </div>
            <CreateButton buttonText={buttonText} path={path} />
          </form>
        </div>
      </div>
    </>
  );
};

export default SecondPageInput;
