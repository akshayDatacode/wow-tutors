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
        <div className="container-fluid mt-5 border border-danger">
          <Index />
        </div>
        <div className="mt-5 text-primary border border-warning">
          <IndexFooterComponent />
        </div>
      </div>
    </>
  );
}

export default App;
