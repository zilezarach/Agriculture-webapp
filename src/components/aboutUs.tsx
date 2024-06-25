import React from "react";

import Image from "next/image";

const aboutUs = () => {
    return (
        <section id="about-us">
            <div className="relative py-16 bg-cover bg-center">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-1/2 text-center md:text-left">
                  <h2 className="text-3xl font-bold mb-4 text-green-800 no-underline hover:underline">About us</h2>
                  <p className="text-xl mb-4 text-black font-bold">
                    The Agricultural Information Resource Center (AIRC) is a Semi-Autonomous Government Agency (SAGA) in the minstry of Agriculture Livestock and Fisheries, State Department of Agriculture.
                  </p>
                  <p className="text-lg mb-4 text-black underline decoration-4">The Primary role of AIRC is to: </p>
                  <p className="text-lg mb-3 text-black font-bold"> - Collect, repackage and disseminate agricultural Information on diffrent mass media platforms which include: Video, Radio, Publications and Web based channels to farmers and to other stake holders in the sector.</p>
                  <p className="text-lg mb-3 text-black font-bold"> - Carry out training programs that focus on communication skills, e-extension and other development workers.</p>
                  <h1 className="text-3xl font-bold mb-4 text-green-800 no-underline hover:underline">Vision</h1>
                  <p className="text-lg mb-4 text-black font-bold">To be the source of Agricultural Information and extension skills in Africa and beyond.</p>
                  <h1 className="text-3xl font-bold mb-4 text-green-800 no-underline hover:underline">Mission</h1>
                  <p className="text-lg mb-4 text-black font-bold">To Provide quality Agricultural Information to the farming community and other stakeholders using intergrated information platforms.</p>
                </div>
            </div>
            </div>
        </section>
    )
}


export default aboutUs;