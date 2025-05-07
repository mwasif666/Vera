import React from "react";
import HomeBanner from "../Components/HomeBanner";
import About from "./About";
import Team from "./Team";
import ContactForm from "./Contact";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <div>
      <HomeBanner />
      <About />
      <Team />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default HomePage;
