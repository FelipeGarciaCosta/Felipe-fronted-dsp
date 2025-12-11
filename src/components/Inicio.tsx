import React, { useState } from "react";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import Dashboard from "./Dashboard";

function Inicio() {
    return(

        <div className="pt-16">
            <Header />
            <Dashboard />
            <Footer />
        </div>
    );
}
export default Inicio;