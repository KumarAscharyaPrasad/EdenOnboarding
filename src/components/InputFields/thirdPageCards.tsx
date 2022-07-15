import { RiTeamFill, RiUserFill } from "react-icons/ri";
import CreateButton from "../Buttons";
import Cards from "../Cards";
import { ThirdPageInputProps } from "./types";
const ThirdPageCards = ({buttonText,path,selected,setSelected}:ThirdPageInputProps) => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center ">
          <Cards
            key="1"
            icon={<RiUserFill />}
            header={"For Myself"}
            content={" Write better . Think more clearly .Stay organized"}
            checked={selected === "MYSELF"}
            changeSelected={setSelected}
            current={"MYSELF"}
          />
          <Cards
            key="2"
            icon={<RiTeamFill />}
            header={"With my team"}
            content={"wikis,docs,tasks & projects all in one place"}
            checked={selected === "MYTEAM"}
            changeSelected={setSelected}
            current={"MYTEAM"}
          />
          
        </div>
        <div className="mx-auto col-sm-4">
            {" "}
            <CreateButton buttonText={buttonText} path={path} />
          </div>
      </div>
    </>
  );
};

export default ThirdPageCards;
