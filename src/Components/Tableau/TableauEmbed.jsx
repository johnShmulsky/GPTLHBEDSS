import React, { useEffect, useRef } from "react";
// eslint-disable-next-line no-unused-vars
import tableau from "tableau-api";
import useMediaQuery from "../../hooks/useMediaQuery";

const TableauEmbed = () => {
  const vizRef = useRef(null);
  const isMobile = useMediaQuery("(max-width: 500px)");

  console.log(isMobile);

  useEffect(() => {
    const vizUrl =
      "https://public.tableau.com/views/MainDashboard_15789299527310/GreatPlains2";
    const options = {
      width: "100%",
      height: isMobile ? "1500px" : "1300px",
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
  }, [isMobile]);

  useEffect(() => {
    var divElement = document.getElementById("viz1600378894751");
    if (divElement) {
      var vizElement = divElement.getElementsByTagName("div")[0];
      if (divElement.offsetWidth > 800) {
        vizElement.style.width = "950px";
      } else if (divElement.offsetWidth > 500) {
        vizElement.style.width = "950px";
      } else {
        vizElement.style.width = "100%";
      }
    }
  }, []);

  return (
    <div
      className="tableauPlaceholder"
      id="viz1600378894751"
      style={{ position: "relative " }}
    >
      <div ref={vizRef}></div>
    </div>
  );
};
export default TableauEmbed;
