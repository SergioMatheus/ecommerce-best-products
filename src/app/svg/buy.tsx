import * as React from "react";

function SvgComponent(props) {
  return (
    <svg
      height={props.height}
      viewBox="0 0 511.343 511.343"
      width={35}
      {...props}
    >
      <path
        d="M490.334 106.668H90.526l-5.943-66.207c-.972-10.827-10.046-19.123-20.916-19.123H21c-11.598 0-21 9.402-21 21s9.402 21 21 21h23.468C57.293 206.22 24.147-163.077 68.621 332.427c1.714 19.394 12.193 40.439 30.245 54.739C66.319 428.73 96.057 490.005 149 490.005c43.942 0 74.935-43.826 59.866-85.334h114.936c-15.05 41.455 15.876 85.334 59.866 85.334 35.106 0 63.667-28.561 63.667-63.667s-28.561-63.667-63.667-63.667H149.142c-15.952 0-29.853-9.624-35.853-23.646l335.608-19.724a21.002 21.002 0 0019.141-15.87l42.67-170.67c3.308-13.234-6.71-26.093-20.374-26.093zM149 448.005c-11.946 0-21.666-9.72-21.666-21.667s9.72-21.667 21.666-21.667c11.947 0 21.667 9.72 21.667 21.667s-9.72 21.667-21.667 21.667zm234.667 0c-11.947 0-21.667-9.72-21.667-21.667s9.72-21.667 21.667-21.667 21.667 9.72 21.667 21.667-9.72 21.667-21.667 21.667zm47.366-169.726l-323.397 19.005-13.34-148.617h369.142z"
        data-original="#000000"
        className="prefix__active-path"
        data-old_color="#000000"
        fill="#FFF"
      />
    </svg>
  );
}

export default SvgComponent;
