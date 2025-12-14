import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-amber-600 text-white py-4">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Umar Ahmed</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:underline">Home</Link>
            </li>
            <li>
              <Link to="/projects" className="hover:underline">Projects</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}