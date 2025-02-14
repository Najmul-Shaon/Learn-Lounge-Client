import SectionTitle from "../SectionTitle/SectionTitle";

const HowItWorks = () => {
  const steps = [
    {
      icon: "📝",
      title: "Create an Assignment",
      description:
        "Start by creating an assignment with details and requirements.",
    },
    {
      icon: "📤",
      title: "Submit Your Work",
      description: "Submit your completed assignment for evaluation.",
    },
    {
      icon: "🔄",
      title: "Peer Evaluation",
      description:
        "Another student will review and provide feedback on your submission.",
    },
    {
      icon: "✅",
      title: "Receive Marks & Improve",
      description:
        "Get your scores, review feedback, and enhance your learning.",
    },
  ];

  return (
    <div className="bg-background py-12 px-4 mt-24">
      <div className="max-w-5xl mx-auto text-center">
        <div>
          <SectionTitle
            header={"🚀 How It Works"}
            subHeader={
              "Learn Lounge makes learning interactive and collaborative. Follow these simple steps to get started."
            }
          ></SectionTitle>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-secondary shadow-lg rounded-lg px-4 py-6 flex flex-col items-center transition hover:shadow-xl"
            >
              <div className="text-5xl">{step.icon}</div>
              <h3 className="mt-4 text-xl font-semibold text-primary">
                {step.title}
              </h3>
              <p className="mt-2 text-gray-600 text-center">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
