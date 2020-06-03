import React, { Component } from "react";
import ToolBar from "./ToolBar";
import SideDrawer from "./side_drawer/SideDrawer";
import BackDrop from "./back_drop/BackDrop";

class IndexHeaderComponent extends Component {
  state = {
    sideDrawerOpen: false,
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backDropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backDrop;

    if (this.state.sideDrawerOpen) {
      backDrop = <BackDrop click={this.backDropClickHandler} />;
    }

    return (
      <>
        <ToolBar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backDrop};
      </>
    );
  }
}

export default IndexHeaderComponent;
