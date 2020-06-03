import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import IndexHeaderComponent from "./components/header_components/IndexHeaderComponent";
import Index from "./components/main_components/Index";
import IndexFooterComponent from "./components/footer_components/IndexFooterComponent";

function App() {
  return (
    <>
      <div style={{ height: "100%" }}>
        <IndexHeaderComponent className="mb-5" />
        <Index className="mt-5" />
        <IndexFooterComponent className="mt-5" />
      </div>
    </>
  );
}

export default App;
