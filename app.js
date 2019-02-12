import React from "react";
//import SVGInline from "react-svg-inline";
//import EdgeSvg from "./svg/edge.svg";
import edgeSvg from "./svg/edge.js";
import SvgButton from "./svgButton";

/** @jsx jsx */
import { css, jsx } from '@emotion/core';

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     selectedButton: undefined
  //   };

  //   this.handleButtonClick = this.handleButtonClick.bind(this);
  // }

  // handleButtonClick(selectedButton) {
  //   this.setState({selectedButton});
  // }

  // render() {
  //   return(
  //     <div>
  //       <SvgButton svg={} onClick={handleClick} isSelected={true} styleOnHover={} styleOnActive={}/>
  //       <SvgButton onClick={handleClick}/>
  //     </div>
  //   );
  // }
  handleClick(){
    console.log("click");
  }

  render() {
    const buttonProps = {
       color: "red",
       colorOnHover: "blue",
       colorOnActive: "green",
       width: "30px",
       height: "30px",
       svg: edgeSvg,
       onClick: this.handleClick
    }

    return (
      <div>
        <SvgButton {...buttonProps}/>
      </div>
      
    );
  }
  // svg={buttonProps.svg}
  //         onClick={buttonProps.onClick}
  //         color={buttonProps.color}
  //         colorOnHover={buttonProps.colorOnHover}
  //         colorOnActive={buttonProps.colorOnActive}
  //         width={buttonProps.width}
  //         height={buttonProps.height}
}

export default App;
