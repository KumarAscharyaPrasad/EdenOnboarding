import React from "react";


const FirstPageInput = () => {
  return (
    <>
      <div className="h-100 mx-auto col-sm-4 justify-content-center">
        <div className="my-auto ">
          <div className="mt-3" >
            <div className="d-flex">
              <label
                htmlFor="inputFullName"
                style={{ fontWeight: "bold", opacity: "65%",marginBottom:"2px" }}
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
            />
            <div className="d-flex mt-4">
              <label
                htmlFor="inputDisplayName"
                style={{ fontWeight: "bold", opacity: "65%",marginBottom:"2px" }}
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
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstPageInput;
