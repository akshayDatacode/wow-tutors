import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import IndexHeaderComponent from "./components/header_components/IndexHeaderComponent";
import Index from "./components/main_components/Index";
import IndexFooterComponent from "./components/footer_components/IndexFooterComponent";

function App() {
  return (
    <>
      <IndexHeaderComponent />
      <Index />
      <IndexFooterComponent />
    </>
  );
}

export default App;
