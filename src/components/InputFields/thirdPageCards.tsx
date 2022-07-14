import { useState } from "react";
import { RiTeamFill, RiUserFill } from "react-icons/ri";
import Cards from "../Cards";
import { CardType } from "../Cards/types";
const ThirdPageCards = () => {
  const [selected, setSelected] = useState<CardType>("MYSELF");
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
      </div>
    </>
  );
};

export default ThirdPageCards;
