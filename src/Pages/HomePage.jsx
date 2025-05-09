import React from "react";
import HomeBanner from "../Components/HomeBanner";
import About from "./About";
import Team from "./Team";
import ContactForm from "./Contact";

const HomePage = () => {
  return (
    <div>
      <HomeBanner />
      <About />
      <Team />
      <ContactForm />
    </div>
  );
};

export default HomePage;
