import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <header class="bg-blue-800 py-4">
        <nav class="container mx-auto flex justify-between items-center">
          <h1 class="text-white text-2xl">FITNESS TRACKER</h1>
          <div>
            <Link className="special" to="/">
              Home
            </Link>
            <Link className="special" to="/login">
              Log in
            </Link>
            <Link className="special" to="/signup">
              Sign Up
            </Link>
            <Link className="special" to="/contact">
              Contact US
            </Link>
            <Link className="special" to="/dash">
              Dashboard
            </Link>
            <Link className="special" to="/faq">
              FAQ
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}
