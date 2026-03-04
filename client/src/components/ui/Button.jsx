export default function Button({ children, href }) {
  return (
    <a
      href={href}
      className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition"
    >
      {children}
    </a>
  );
}