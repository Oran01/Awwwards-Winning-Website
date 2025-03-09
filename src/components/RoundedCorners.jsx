import React from "react";

/**
 * RoundedCorners component that defines an SVG filter for rounded corner effects.
 * This filter applies a Gaussian blur and color transformation to create a soft-glow effect.
 *
 * @component
 * @returns {JSX.Element} The SVG filter definition
 */
const RoundedCorners = () => {
  return (
    <svg
      className="invisible absolute size-0"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Define a custom filter with Gaussian blur and color matrix effects */}
        <filter id="flt_tag">
          {/* Apply a blur effect */}
          <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />

          {/* Adjust color properties to create a glowing effect */}
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
            result="flt_tag"
          />

          {/* Composite the filtered graphic with the original source */}
          <feComposite in="SourceGraphic" in2="flt_tag" operator="atop" />
        </filter>
      </defs>
    </svg>
  );
};
export default RoundedCorners;
