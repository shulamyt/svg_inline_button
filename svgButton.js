import React from "react";
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

/**
 * 
 * @param {JSX.Element} svg 
 * @param {requestCallback} onClick handler onClick
 * @param {String} color the color of the svg
 * @param {String} colorOnHover the color on hover of the svg
 * @param {String} colorOnActive 
 * @param {String} width width with units
 * @param {String} height height with units
 */

const SvgButton = (props) => {

  // return (
  //   <div onClick={props.onClick} css={css`
  //       width: ${props.width};
  //       height: ${props.height};
  //       & path{
  //         fill: ${props.color};
  //       };
  //       & path:hover{
  //         fill: ${props.colorOnHover};
  //       };
  //       & path:active{
  //         fill: ${props.colorOnActive};
  //       };
  //   `}>
  //      {props.svg}
  //   </div>
  // );
  const buttonStyle = {
    width: props.width,
    height: props.height,
    '& path': {
      fill: props.color
    },
    '& path:hover': {
      fill: props.colorOnHover
    },
    '& path:active': {
       fill: props.colorOnActive
    }
  };
  return (
    <div onClick={props.onClick} css={buttonStyle}>
       {props.svg}
    </div>
  );
};
export default SvgButton;