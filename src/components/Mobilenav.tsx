import React from "react";
import { useState } from "react";
const MobileNav = async () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-500"
      ></button>
    </div>
  );
};
