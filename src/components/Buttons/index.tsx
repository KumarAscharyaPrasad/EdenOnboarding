import React from "react";
import { useNavigate } from "react-router-dom";
import { CreateButtonProps } from "./types";

const CreateButton = ({ buttonText,path }: CreateButtonProps) => {
  const navigate = useNavigate();

  return (
    <>
      <button
        type="submit"
        className="mt-4 btn w-100 bgcolor-1"
        style={{ color: "white" }}
        onClick={() => {
          navigate(path);
        }}
      >
        {buttonText}
      </button>
    </>
  );
};

export default CreateButton;
