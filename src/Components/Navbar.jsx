import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-slate-950 text-white px-6 py-4 text-center shadow-md">
      <div className=" mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold tracking-wide ">
          💰 Expense Tracker
        </h1>

        </div>
    </nav>
  );
};

export default Navbar;
