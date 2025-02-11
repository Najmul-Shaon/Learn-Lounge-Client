
const FeatureCard = ({ title, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-primary">
      <h3 className="text-xl font-semibold text-primary">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
