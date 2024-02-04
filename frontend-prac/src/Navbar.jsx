import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="navbar" >
        <Link>
          <div>Home</div>
        </Link>
        <Link>
          <div>About</div>
        </Link>
        <Link>
          <div>Contact Us</div>
        </Link>
    </nav>
  );
}
