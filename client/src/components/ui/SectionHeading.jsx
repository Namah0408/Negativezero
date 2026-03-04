export default function SectionHeading({ title, subtitle }) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold mb-4">{title}</h2>
      <p className="text-gray-400">{subtitle}</p>
    </div>
  );
}