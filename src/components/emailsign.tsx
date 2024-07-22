import React from "react";
import Image from "next/image";
const Email = () => {

  return (
    <div className=" flex items-center justify-center bg-green-600 p-3">
      <form className="bg-white rounded shadow-md p-10 ">
        <Image src="/logo.png" width={200} height={250} alt="logo" className="flex items-center mb-3" />
        <h2 className="no-underline hover:underline font-black mb-6">Sign In to Company Email</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-3 font-bold text-green-600">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            className="px-2 py-3 w-full border text-black"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-3 font-bold text-green-600">Password:</label>
          <input
            type="password"
            id="email"
            name="password"
            className="px-2 py-3 w-full border text-black"
          />
        </div>
        <button className=" font-bold mb-3 px-2 py-3 rounded flex items-center bg-green-600 hover:bg-indigo-600">Sign In</button>
      </form>
    </div>
  )
}



export default Email;
