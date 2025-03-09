import React from "react";
import Button from "./Button";

/**
 * ImageClipBox component that renders an image inside a styled div.
 *
 * @component
 * @param {Object} props - Component properties
 * @param {string} props.src - Image source URL
 * @param {string} props.clipClass - CSS class for styling the image container
 * @returns {JSX.Element} The styled image container
 */
const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} />
  </div>
);

/**
 * Contact component that displays a call-to-action section with images and a button.
 *
 * @component
 * @returns {JSX.Element} The Contact section
 */
const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen px-10">
      {/* Main container with a black background and text */}
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        {/* Left floating images, visible only on larger screens */}
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox
            clipClass="contact-clip-path-1"
            src="img/contact-1.webp"
          />
          <ImageClipBox
            clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
            src="img/contact-2.webp"
          />
        </div>

        {/* Right floating images, adjusted for different screen sizes */}
        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImageClipBox
            clipClass="absolute md:scale-125"
            src="img/swordman-partial.webp"
          />
          <ImageClipBox
            clipClass="sword-man-clip-path md:scale-125"
            src="img/swordman.webp"
          />
        </div>

        {/* Centered text and button */}
        <div className="flex flex-col items-center text-center">
          <p className="font-general text-[10px] uppercase">Join Zentry</p>

          {/* Main heading with special font styling */}
          <p className="special-font mt-10 w-full font-zentry text-5xl leading-[0.9] md:text-[6rem]">
            Let's b<b>u</b>ild the <br /> new era of <br /> g<b>a</b>ming t
            <b>o</b>gether
          </p>

          {/* Contact button */}
          <Button title="contact us" containerClass="mt-10 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
