
const FeatureCard = ({ title, description }) => {
  return (
    <div className="bg-secondary shadow-lg rounded-lg p-6 border-l-4 border-primary">
      <h3 className="text-xl font-semibold text-primary">{title}</h3>
      <p className="mt-2 text-text">{description}</p>
    </div>
  );
};

export default FeatureCard;
