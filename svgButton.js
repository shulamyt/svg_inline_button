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
  const buttonStyle = createButtonStyle(props);
  return (
    <div onClick={props.onClick} css={buttonStyle}>
       {props.svg}
       <div>{props.label}</div>
    </div>
  );
};

const createButtonStyle = (props) => {
  const buttonStyle = {
    width: props.width,
    height: props.height,
    userSelect: 'none',
    cursor: 'pointer',
    '&': {
      color: props.color,
      path: {
        fill: props.color
      }
    },
    '&:hover': {
      color: props.colorOnHover,
      path: {
        fill: props.colorOnHover
      },
    },
    '&:active': {
      color: props.colorOnActive,
      path: {
        fill: props.colorOnActive
      }
    }
  };
  addStyleForSvgPaths(props.svgPaths, buttonStyle);
  return buttonStyle;
};

const addStyleForSvgPaths = (svgPaths, buttonStyle) => {
  if(svgPaths){
    for (const classname in svgPaths) {
      buttonStyle['&'][`path.${classname}`]        = {fill: svgPaths[classname].color};
      buttonStyle['&:hover'][`path.${classname}`]  = {fill: svgPaths[classname].colorOnHover};
      buttonStyle['&:active'][`path.${classname}`] = {fill: svgPaths[classname].colorOnActive};
    }
  };
};

export default SvgButton;