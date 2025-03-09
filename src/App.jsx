import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import Story from "./components/Story";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

/**
 * App component that serves as the root of the application.
 * It includes the main sections: Navbar, Hero, About, Features, Story, Contact, and Footer.
 *
 * @component
 * @returns {JSX.Element} The main application structure
 */
const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      {/* Navigation bar at the top */}
      <Navbar />

      {/* Main sections of the application */}
      <Hero />
      <About />
      <Features />
      <Story />
      <Contact />

      {/* Footer section */}
      <Footer />
    </main>
  );
};

export default App;
