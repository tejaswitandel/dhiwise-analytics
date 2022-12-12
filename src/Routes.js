import React from "react";
import Chart from "pages/Chart";
import DesktopOne from "pages/DesktopOne";
import DesktopTwo from "pages/DesktopTwo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DesktopTwo />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/desktopone" element={<DesktopOne />} />
        <Route path="/chart" element={<Chart />} />
        <Route path="/dhiwise-dashboard" element={<Home />} />
      </Routes>
    </Router>
  );
};
export default ProjectRoutes;
