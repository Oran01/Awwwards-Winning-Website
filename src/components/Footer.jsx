import { FaDiscord, FaGithub, FaTwitch, FaTwitter } from "react-icons/fa";

/**
 * Social media links array containing URLs and corresponding icons.
 * @constant {Array<Object>}
 */
const links = [
  { href: "https://discord.com", icon: <FaDiscord /> },
  { href: "https://twitter.com", icon: <FaTwitter /> },
  { href: "https://github.com", icon: <FaGithub /> },
  { href: "https://twitch.com", icon: <FaTwitch /> },
];

/**
 * Footer component that displays a copyright notice, social media links, and a privacy policy link.
 *
 * @component
 * @returns {JSX.Element} The website footer
 */
const Footer = () => {
  return (
    <footer className="w-screen bg-violet-300 py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between pag-4 px-4 md:flex-row">
        {/* Copyright text */}
        <p className="text-center text-sm md:text-left">
          &copy; Nova 2024. All rights reserved
        </p>

        {/* Social media icons */}
        <div className="flex justify-center gap-4 md:justify-start">
          {links.map((link) => (
            <a
              key={link} // Ensuring a unique key for each link
              href={link.href}
              target="__blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Privacy policy link */}
        <a
          href="#privacy-policy"
          className="text-center text-sm hover:underline md:text-right"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
