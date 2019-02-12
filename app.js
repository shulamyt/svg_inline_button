import React from "react";
//import SVGInline from "react-svg-inline";
//import EdgeSvg from "./svg/edge.svg";
import edgeSvg from "./svg/edge";
import addTextSvg from "./svg/addText";
import SvgButton from "./svgButton";

/** @jsx jsx */
import { css, jsx } from '@emotion/core';

class App extends React.Component {
  
  handleClick(){
    console.log("click");
  }

  render() {
    const edgButtonProps = {
       color: "red",
       colorOnHover: "blue",
       colorOnActive: "green",
       width: "30px",
       height: "30px",
       svg: edgeSvg,
       onClick: this.handleClick
    };

    const addTextButtonPropsDemoColors = {
      svgPaths: {
        "plus": {
          color: "yellow",
          colorOnHover: "purple",
          colorOnActive: "olive"
        }
      },
      color: "blue",
      colorOnHover: "green",
      colorOnActive: "red",
      width: "30px",
      height: "30px",
      svg: addTextSvg,
      onClick: this.handleClick,
      label: "Add"
   };

   const addTextButtonProps = {
    svgPaths: {
      "plus": {
        color: "rgb(61, 191, 246)",
        colorOnHover: "rgb(61, 191, 246)",
        colorOnActive: "rgb(61, 191, 246)"
      }
    },
    color: "rgb(0, 0, 0)",
    colorOnHover: "rgb(61, 191, 246)",
    colorOnActive: "rgb(61, 191, 246)",
    width: "30px",
    height: "30px",
    svg: addTextSvg,
    onClick: this.handleClick,
    label: "Add"
  }

    return (
      <div>
        <SvgButton {...edgButtonProps}/>
        <SvgButton {...addTextButtonPropsDemoColors}/>
        <SvgButton {...addTextButtonProps}/>
      </div>
      
    );
  }
}

export default App;
