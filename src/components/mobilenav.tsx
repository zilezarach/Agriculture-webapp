import React, { useState } from "react"


const mobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-gray-500"></button>
    </div>
  )
}
