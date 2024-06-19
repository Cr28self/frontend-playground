import React, { useContext } from "react";
import { LevelContext } from "../../lib/context";

// Context Consumer
const Element = () => {
  // useContext : 가장 가까운 Context.Provider의 value 반환 ( Context Consuer 역할 )
  const level = useContext(LevelContext);
  return (
    <div>
      <h1>{level}</h1>
    </div>
  );
};

export default Element;
