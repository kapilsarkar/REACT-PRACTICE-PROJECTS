import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./components/Main";

const AppLayout = () => {
    return (
      <div className="app">
        <Main/>
      </div>
    );
  };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);