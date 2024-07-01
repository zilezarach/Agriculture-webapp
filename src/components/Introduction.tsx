'use client'
import Type from "@/content/type"
import React, { useState } from "react";
import Image from "next/legacy/image";
import {Button} from "@/components/ui/button";
import Link from "next/link";
const Introduction = () => {
    return (
        <section>
            <div className="relative h-screen flex items-center justify-center overflow-hidden bg-cover bg-center" style={{backgroundImage: "url('/agriN.jpg')"}}>
              <div className="absolute inset-0 bg-black opacity-70 "></div>
              <div className="relative container mx-auto px-4 z-10">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="text-center md:text-left mb-8 md:mb-0 md:w-2/3"><h1 className=" text-2xl md:text-4xl font-bold text-white overflow-hidden"><Type/></h1></div>
                    <div className="w-full md:w-1/3 flex justify-center md:justify-end">
                            <Image
                                src="/farmerb.png"
                                alt="farmerb"
                                width={500}
                                height={700}
                                layout="intrinsic"
                                objectFit="contain"
                            />
                    </div>
                </div>
              </div>
              <div className="relative z-10 flex justify-center mb-8">
                <Button  asChild className="mx-2 bg-green-500 text-white hover:bg-green-700 font-bold">
                    <Link href="/contact">Contact Us</Link>
                </Button>
                <Button variant="secondary" asChild className="mx-2  bg-orange-500 text-white hover:bg-green-700 font-bold">
                    <Link href="/services">Services</Link>
                </Button>
              </div>
            </div>
        </section>
    )
}


















export default Introduction;