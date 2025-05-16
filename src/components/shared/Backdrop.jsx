import React from "react";

const Backdrop = ({ data }) => {
    return (
        <div
            className={`fixed z-20 h-screen w-screen bg-black opacity-50 transition duration-200 ${data ? "top-26" : "top-0"} left-0`}
        ></div>
    );
};

export default Backdrop;
