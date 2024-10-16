import ContactForm from "@/components/ContactForm";
import StrategicPartnerships from "@/components/StrategicPartnerships";
import React from "react";

const Page = () => {
  return (
    <div>
      <StrategicPartnerships bottomSpacing={true} />
      <ContactForm />
    </div>
  );
};

export default Page;
