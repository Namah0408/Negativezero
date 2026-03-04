import { navigation } from "../../constants/navigation";

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-black/70 backdrop-blur z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo + Name */}
        <div className="flex items-center gap-3">
          <img
            src="/logos/logo.png"
            alt="Negative Zero Logo"
            className="h-8 w-auto"
          />
          <h1 className="font-bold text-xl tracking-wide">
            NegativeZero
          </h1>
        </div>

        {/* Navigation */}
        <div className="space-x-6">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="hover:text-gray-400 transition"
            >
              {item.name}
            </a>
          ))}
        </div>

      </div>
    </nav>
  );
}