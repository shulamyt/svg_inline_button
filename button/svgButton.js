/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const SvgButton = props => {
  return (
    <div onClick={props.onClick} 
    className={css`
      
      &:hover {
        color: ${color};
      }`}>
      <Svg width={props.width}>{props.svg}</Svg>
    </div>
  );
};

export default SvgButton;
