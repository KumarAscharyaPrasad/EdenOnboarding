import CreateButton from "../Buttons";
import { FirstPageInputProps } from "./types";

const FirstPageInput = ({
  buttonText,
  handleInputChange,
  names,
  path,
}: FirstPageInputProps) => {
  return (
    <>
      <div className="h-100 mx-auto col-sm-4 justify-content-center">
        <div className="my-auto ">
          <form className="mt-3">
            <div className="d-flex">
              <label
                htmlFor="inputFullName"
                style={{
                  fontWeight: "bold",
                  opacity: "65%",
                  marginBottom: "2px",
                }}
              >
                Full Name
              </label>
            </div>
            <input
              className="form-control"
              type="text"
              name="fullName"
              id="inputFullName"
              placeholder="Steve Jobs"
              value={names.fullName}
              onChange={handleInputChange}
              required
            />
            <div className="d-flex mt-4">
              <label
                htmlFor="inputDisplayName"
                style={{
                  fontWeight: "bold",
                  opacity: "65%",
                  marginBottom: "2px",
                }}
              >
                Display Name
              </label>
            </div>
            <input
              type="text"
              className="form-control"
              id="inputDisplayName"
              name="displayName"
              placeholder="Steve"
              value={names.displayName}
              onChange={handleInputChange}
            />{" "}
            <CreateButton buttonText={buttonText} path={path} />
          </form>
        </div>
      </div>
    </>
  );
};

export default FirstPageInput;
