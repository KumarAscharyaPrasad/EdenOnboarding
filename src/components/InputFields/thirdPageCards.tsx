import { useState } from "react";
import { RiTeamFill, RiUserFill } from "react-icons/ri";
import Cards from "./cards";

const ThirdPageCards = () => {
  const [selected, setSelected] = useState<boolean>(false);
  console.log(selected);

  return (
    <>
      <div className="container">
        <div className="row justify-content-center ">
          <Cards
            key="1"
            icon={<RiUserFill />}
            header={"For Myself"}
            content={" Write better . Think more clearly .Stay organized"}
            selected={selected}
            changeSelected={setSelected}
          />
          <Cards
            key="2"
            icon={<RiTeamFill />}
            header={"With my team"}
            content={"wikis,docs,tasks & projects all in one place"}
            selected={selected}
            changeSelected={setSelected}
          />
        </div>

        
      </div>
    </>
  );
};

export default ThirdPageCards;
