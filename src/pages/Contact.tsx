import React from "react";
import { ContactComponent } from "../components/ContactComponent";
import TitleComponent from "../components/TitleComponent";
import { HeaderComponent } from "../components/HeaderComponent";

function ContactPage() {
  const title: string = "Contact Page";
  return (
    <>
      <HeaderComponent />
      <TitleComponent data={title} />
      <ContactComponent />
    </>
  );
}

export default ContactPage;
