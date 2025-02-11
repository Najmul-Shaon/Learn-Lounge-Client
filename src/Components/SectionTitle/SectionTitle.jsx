const SectionTitle = ({ header, subHeader }) => {
  return (
    <div className="text-center">
      <h3 className="text-3xl font-bold text-primary">{header}</h3>
      <p className="mt-4 text-lg max-w-2xl mx-auto">{subHeader}</p>
    </div>
  );
};

export default SectionTitle;
