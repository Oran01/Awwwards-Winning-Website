import React from "react";

/**
 * Button component that renders a customizable button with optional icons.
 *
 * @component
 * @param {Object} props - Component properties
 * @param {string} props.title - The text displayed on the button
 * @param {string} [props.id] - Optional unique identifier for the button
 * @param {JSX.Element} [props.rightIcon] - Optional right-side icon component
 * @param {JSX.Element} [props.leftIcon] - Optional left-side icon component
 * @param {string} [props.containerClass] - Additional CSS classes for styling
 * @returns {JSX.Element} The customizable button component
 */
const Button = ({ title, id, rightIcon, leftIcon, containerClass }) => {
  return (
    <button
      id={id}
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerClass}`}
    >
      {/* Render left icon if provided */}
      {leftIcon}

      {/* Button text inside a styled span */}
      <span className="relative incline-flex overflow-hidden font-general text-xs uppercase">
        <div>{title}</div>
      </span>

      {/* Render right icon if provided */}
      {rightIcon}
    </button>
  );
};

export default Button;
