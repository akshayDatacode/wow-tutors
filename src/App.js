import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import IndexHeaderComponent from "./components/header_components/IndexHeaderComponent";
import IndexFooterComponent from "./components/footer_components/IndexFooterComponent";
import Index from "./components/main_components/Index";
function App() {
  return (
    <>
      <div style={{ height: "100%", background: "#f7f7f6" }}>
        <IndexHeaderComponent />
        <div className="container-fluid p-0 mt-5">
          <Index />
        </div>
        <div className="text-primary ">
          <IndexFooterComponent className="container-fluid p-0" />
        </div>
      </div>
    </>
  );
}

export default App;
