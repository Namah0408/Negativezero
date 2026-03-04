export default function Card({ children }) {
  return (
    <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
      {children}
    </div>
  );
}