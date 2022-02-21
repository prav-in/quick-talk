import React, { useState, useEffect } from "react";
import DesktopDashboard from "./desktopDashboard";
import MobileDashboard from "./mobileDashboard";

export default function Dashboard({ id }) {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 800;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return width < breakpoint ? (
    <MobileDashboard id={id} />
  ) : (
    <DesktopDashboard id={id} />
  );
}
