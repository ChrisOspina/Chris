import Footer from "../footer/footer";

import React from 'react';
import Topbar from "../topbar/topbar";
import Dashboard from "../../pages/dashboard";
import DoctorDashboard from "../../doctor/DoctorDashboard";
import Medexer from "../../pages/medexer";
import Report from "../../pages/report";
import { Routes, Route } from "react-router-dom";
import Images from "../../pages/images";
import ReportGallery from "../../pages/reportgallery";
import ReportPagepdf from "../../test/print button";

const Submain = () => {
    return (
        <div className="h-full w-full flex flex-col ">
            <Topbar/>
             <Routes> 
                {/* Render patient or doctor dashboard based on user*/}
                <Route path="/" element={<Dashboard />} />
                <Route path="/" element={<DoctorDashboard />} />
                <Route path="/medexer" element={<Medexer />} /> 
                <Route path="/report" element={<Report />} />
                <Route path="/reportgall" element={<ReportGallery />} />
                <Route path="/images" element={<Images />} />
                <Route path="/pdf" element={<ReportPagepdf />} />
            </Routes>
            <Footer/>
        </div>
    );
};

export default Submain;
