export default function Footer() {
  return (
    <footer className="py-10 text-center border-t border-zinc-800">
      <p className="text-gray-500">
        © {new Date().getFullYear()} NegativeZero. All rights reserved.
      </p>
    </footer>
  );
}