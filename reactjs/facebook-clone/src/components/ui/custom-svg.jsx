import React from 'react';
import { SVG } from '../../constants/svg';

export default function CustomSVG({ svgCode = SVG.home, type = 'div' }) {

  if (type === 'span') {
    return (
      <span dangerouslySetInnerHTML={{ __html: svgCode }} />
    );
  }

  return (
    <div dangerouslySetInnerHTML={{ __html: svgCode }} 
      style={{ display: "flex" }} 
      />
  );
}
