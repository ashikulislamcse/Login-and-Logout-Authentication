import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-slate-200">
      <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
        <Link to="/">
          <h1 className="font-bold">MERN AUTH</h1>
        </Link>
        <ul className="flex gap-5 font-bold text-lg">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/signup">
            <li>Signup</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
