import React from "react";
// import SvgButton from "./button/svgButton";
//import SVGInline from "react-svg-inline";
//import "svg/home.svg";
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
    const color="red";
    const colorOnHover = "blue";
    const colorOnActive = "green";
    const width = 100;
    const height = 100;
    
    return (
      <div onClick={this.handleClick} css={css`
        & circle{
          fill: ${color};
        };
        & circle:hover{
          fill: ${colorOnHover};
        };
        & circle:active{
          fill: ${colorOnActive};
        };
      `}>
        <svg viewBox="0 0 10 10" width={width} height={height} xmlns="http://www.w3.org/2000/svg">
          <circle cx="5" cy="5" r="5"/>
        </svg>
      </div>
    );
  }
}

export default App;
