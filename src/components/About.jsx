import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./AnimatedTitle";

// Register ScrollTrigger plugin for GSAP
gsap.registerPlugin(ScrollTrigger);

/**
 * About component that displays an introduction section
 * with animations using GSAP and ScrollTrigger.
 *
 * @component
 * @returns {JSX.Element} The About section with animations.
 */
const About = () => {
  // Apply GSAP animation when the component is mounted
  useGSAP(() => {
    /**
     * Creates a timeline animation for the clip effect
     * that triggers when the user scrolls to the section.
     */
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip", // Element that triggers the animation
        start: "center center", // Animation starts when the center of the trigger is at the center of the viewport
        end: "+=800 center", // Animation ends after scrolling 800px past the center
        scrub: 0.5, // Smooth scrubbing effect for animation
        pin: true, // Keeps the element fixed in place while scrolling
        pinSpacing: true, // Adds spacing to avoid layout shifts
      },
    });

    // Expands the masked clip area to full viewport size
    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0, // Removes rounded corners
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      {/* Main content container with vertical spacing */}
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        {/* Section subtitle */}
        <h2 className="font-general text-sm uppercase md:text-[10px]">
          Welcome to Zentry
        </h2>

        {/* Animated title component with formatted text */}
        <AnimatedTitle
          title=" Disc<b>o</b>ver the world's <br /> l<b>a</b>rgest shared adventure"
          containerClass="mt-5 !text-black text-center"
        />

        {/* Subtext section containing additional information */}
        <div className="about-subtext">
          <p>The Game of Games begins-you life, now an epic MMORPG</p>
          <p>Zentry unites every player from countless games and platforms</p>
        </div>
      </div>

      {/* Full-screen section containing an animated background image */}
      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="img/about.webp"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
