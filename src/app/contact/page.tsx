import React from "react";
import Contact from "../../components/Contact";
import Hero from "../../components/Hero";

const contact = () => {
  return (
    <div>
      <Hero
        heading="Kontakt"
        message="Wypełnij ten formularz dla kontaktu z autorami."
      />
      <Contact />
    </div>
  );
};

export default contact;
