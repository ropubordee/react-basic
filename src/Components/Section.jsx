import React from "react";
import { create } from "zustand";
const Store = () => {
  return {
    fanme: "Pubordee-dev",
    lanme: "Srisurach",
  };
};
const useStore = create(Store);
const Section = () => {
  const fanme = useStore((state) => state.fanme);

  return (
    <div>
      <h1>
        {fanme}
      </h1>
    </div>
  );
};

export default Section;
