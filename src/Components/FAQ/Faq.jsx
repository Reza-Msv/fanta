import { useState } from "react";
import { faqData } from "../../constants/constants";

const Faq = () => {
  const [active, setActive] = useState(null);

  const handleClick = (index) => {
    setActive(index === active ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto mt-20 mb-28 py-4">
      <h1 className="text-3xl font-bold text-center pb-8">
        Frequently Asked Questions
      </h1>
      {faqData.map((item, index) => (
        <div className="mb-4 py-4 border-b border-gray-300" key={item.id}>
          <div
            className="flex justify-between items-center cursor-pointer py-4"
            onClick={() => handleClick(index)}
          >
            <h3 className="text-xl font-semibold text-gray-800">
              {item.question}
            </h3>
            <span>{active === index ? "-" : "+"}</span>
          </div>
          {active === index && <p className="text-gray-600  ">{item.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default Faq;
