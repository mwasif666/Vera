import React from "react";
import styles from "../Styles/About.module.css";

const About = () => {
  return (
    <section className={styles.aboutUs} aria-label="About our company">
      <h1>
        We are a one-stop destination that encompasses all aspects of self-care.
        We seamlessly merge the best of salons, barbershops, and spas, creating
        a modern, inclusive space for all.
      </h1>
    </section>
  );
};

export default About;
