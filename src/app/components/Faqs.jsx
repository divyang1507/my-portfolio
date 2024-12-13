import React from "react";
import Accordion from "./Accordion";
import Marquee from "./Marquee";
const Faqs = () => {
  const FAQS = [
    {
      title: "How long does it take to rebrand my company?",
      answer:
        "The timeline for a rebrand (strategy and design) depends on the project scope, the size of the brand, its goals, and how deep we go with the strategy. On average, it could take anywhere from 3 to 8 weeks.",
    },
    {
      title: "How long does it take build a website?",
      answer:
        "The time required to build a website depends on several factors, such as complexity, strategy, number of pages, development, and specific integrations. Generally, the project can take anywhere from 3 to 12 weeks.",
    },
    {
      title: "What’s your process?",
      answer:
        "Learn, strategy, Create. Do you want to know more? My work process →",
    },
    {
      title: "How much does it cost?",
      answer:
        "I don't have a price list. The projects I work on are all unique and different, as are the services I offer. This implies that the prices are also customized according to the scope of work. To get an idea of the price of the services you need, jump on a call with me.",
    },
  ];
  return (
    <>
      <Marquee marqueeName="FAQs" />
      <section className="w-[90%] mx-auto">
        {FAQS.map((e, id) => {
          return (
            <div key={id}>
              <Accordion title={e.title} answer={e.answer} />
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Faqs;
