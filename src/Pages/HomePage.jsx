import React from "react";
import HomeBanner from "../Components/HomeBanner";
import About from "./About";
import Team from "./Team";
import ContactForm from "./Contact";

import HomeVideo from "../Components/HomeVIdeo";
import HomeBanner2 from "./HomeBanner2";
import WhyVera from "../Components/WhyChoose";
import BlogPost from "../Components/Blog";

const HomePage = () => {
  return (
    <div>
      {/* <HomeVideo /> */}
      <HomeBanner2 />
      <HomeBanner />
      <About />
      <Team />
      <WhyVera />
      <BlogPost />
      <ContactForm />
    </div>
  );
};

export default HomePage;
