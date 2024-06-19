import React, { useContext } from "react";
import { LevelContext } from "../../lib/context";

const Section = ({ children }) => {
  const level = useContext(LevelContext);
  return (
    <section className="p-4 mb-4 border border-red-500 dark:border-blue-300">
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </section>
  );
};

export default Section;
