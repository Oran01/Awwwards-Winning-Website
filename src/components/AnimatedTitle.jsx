import gsap from "gsap";
import React, { useEffect, useRef } from "react";

/**
 * AnimatedTitle component that animates words when scrolled into view.
 * Uses GSAP for smooth entrance animations.
 *
 * @component
 * @param {Object} props - Component properties
 * @param {string} props.title - The text to be animated
 * @param {string} props.containerClass - Additional CSS classes for styling
 * @returns {JSX.Element} The animated title component
 */
const AnimatedTitle = ({ title, containerClass }) => {
  // Reference to the container element
  const containerRef = useRef(null);

  useEffect(() => {
    /**
     * Creates a GSAP animation context to animate words inside the container.
     * The animation fades in the words and applies a 3D transformation.
     */
    const ctx = gsap.context(() => {
      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current, // Element that triggers animation
          start: "100 bottom", // Animation starts when the element is near the viewport bottom
          end: "center bottom", // Ends when the element reaches the center of the viewport
          toggleActions: "play none none reverse", // Plays forward and reverses on scroll up
        },
      });

      // Animate each word with staggered effect
      titleAnimation.to(".animated-word", {
        opacity: 1,
        transform: "translate3d(0,0,0) rotateY(0deg) rotateX(0deg)",
        ease: "power2.inOut", // Smooth easing function
        stagger: 0.02, // Delay between each word animation
      });
    }, containerRef);

    // Cleanup function to revert animation when the component unmounts
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className={`animated-title ${containerClass}`}>
      {/* Splits the title into separate lines */}
      {title.split("<br />").map((line, index) => (
        <div
          key={index}
          className="flex-center max-w-full  flex-wrap gap-2 px-10 md:gap-3"
        >
          {/* Splits each line into words and animates them individually */}
          {line.split(" ").map((word, i) => (
            <span
              key={i}
              className="animated-word"
              dangerouslySetInnerHTML={{ __html: word }} // Allows rendering HTML inside words
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default AnimatedTitle;
