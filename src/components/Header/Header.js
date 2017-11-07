import React from "react";
import {Adinkra} from "react-adinkra";
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <div className="header-container">
        <div className="header-background"></div>
        <div className=" header">
          <h1>{this.props.header}</h1>
          <div className="sub-sep">
            <p>{this.props.sub}</p>

            <Adinkra className="logo" name={"nea-onim-no-sua-a-oh"}/>

          </div>
        </div>
        <div></div>

      </div>

    )
  }
}

export default Header;
