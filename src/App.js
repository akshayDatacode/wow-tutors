import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import IndexHeaderComponent from "./components/header_components/IndexHeaderComponent";
import IndexFooterComponent from "./components/footer_components/IndexFooterComponent";
import AppRouters from "./app_routers/AppRouters";

function App() {
  return (
    <>
      <div style={{ height: "100%" }}>
        <IndexHeaderComponent />
        <div className="container-fluid mt-5 border border-danger">
          <AppRouters />
        </div>
        <div className="mt-5 text-primary border border-warning">
          <IndexFooterComponent />
        </div>
      </div>
    </>
  );
}

export default App;
