import React, { useEffect, useRef } from "react";
// eslint-disable-next-line no-unused-vars
import tableau from "tableau-api";

const TableauEmbed = () => {
  const vizRef = useRef(null);

  useEffect(() => {
    const vizUrl =
      "https://public.tableau.com/views/MainDashboard_15789299527310/GreatPlains2";
    const options = {
      width: "100%",
      height: "800px",
      hideToolbar: false,
      hideTabs: true,
    };

    if (window.tableau) {
      const viz = new window.tableau.Viz(vizRef.current, vizUrl, options);
      return () => {
        if (viz) {
          viz.dispose();
        }
      };
    }
  }, []);

  return (
    <div>
      <div ref={vizRef}></div>
    </div>
  );
};
export default TableauEmbed;
