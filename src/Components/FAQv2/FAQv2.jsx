import { useState } from "react";
import { motion } from "framer-motion";
import { BiChevronDown } from "react-icons/bi";
import SectionTitle from "../SectionTitle/SectionTitle";

const faqs = [
  {
    question: "What is Learn Lounge?",
    answer:
      "Learn Lounge is a collaborative learning platform where students can create, submit, and evaluate assignments, promoting peer learning and knowledge sharing.",
  },
  {
    question: "Is Learn Lounge free to use?",
    answer:
      "Yes! Learn Lounge offers free access to core features. However, there may be premium features in the future.",
  },
  {
    question: "Who can use Learn Lounge?",
    answer:
      "Any student who wants to engage in group studies, assignment collaboration, and peer evaluation can use the platform.",
  },
  {
    question: "How do I create an assignment?",
    answer:
      "You can create an assignment by navigating to the Create Assignment page, filling in the necessary details, and submitting it.",
  },
  {
    question: "How does the peer evaluation system work?",
    answer:
      "Once an assignment is submitted, another student (not the creator) must evaluate it and provide feedback/marks.",
  },
  {
    question: "Can I evaluate my own assignment?",
    answer:
      "No, students cannot mark their own assignments. Another student must review and evaluate it.",
  },
  {
    question: "What happens if an assignment is not evaluated?",
    answer:
      "It will appear in the Pending Assignments section until another student reviews it.",
  },
];

export default function FAQv2() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-background rounded-lg shadow-lg shadow-primary/50 mt-24">
      <SectionTitle
        header={"💬 Frequently Asked Questions"}
        subHeader={
          "Get quick answers to your queries and make the most of your Learn Lounge experience."
        }
      ></SectionTitle>

      <div className="space-y-4 mt-12">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="p-4 bg-secondary rounded-xl shadow-md cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg text-text font-semibold">
                {faq.question}
              </h3>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <BiChevronDown size={20} />
              </motion.div>
            </div>
            {openIndex === index && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.3 }}
                className="mt-2 text-text"
              >
                {faq.answer}
              </motion.p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
