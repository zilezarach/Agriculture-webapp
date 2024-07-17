import Image from "next/image";
import Link from "next/link";
import { MdOutlineFacebook } from "react-icons/md";
import { FaTwitter, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMailOpenSharp } from "react-icons/io5";


const Footer = () => {
  return (
    <div className="footer">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-lg font-bold mb-4 text-white no-underline hover:underline">Address</h2>
          <p className="mb-2 text-white">The director</p>
          <p className="mb-2 text-white">AIRC P.O.BOX 66730-00800</p>
          <p className="mb-2 text-white">Nairobi</p>
          <p className="mb-2 text-white">Tel +254722705439/+254712717101</p>
          <p className="mb-2 text-white">E-mail: agrinfodata@gmail.com</p>
          <p className="mb-2 text-white">www.airc.go.ke</p>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-4 text-white no-underline hover:underline">Our Partners</h2>
          <ul>
            <li className="mb-2"><a href="https://kilimo.go.ke/" className=" text-white hover:text-lime-400">Kilimo</a></li>
            <li className="mb-2"><a href="https://www.karlo.org" className="text-white hover:text-lime-400">KALRO</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-4 text-white no-underline hover:underline">Our Socials</h2>
          <ul>
            <li className="mb-2"><a href="https://www.facebook.com/airc.videounit/" className="text-white hover:text-lime-400"><MdOutlineFacebook /> Facebook</a></li>
            <li className="mb-2"><a href="https://x.com" className="text-white hover:text-lime-400"><FaXTwitter />Twitter</a></li>
            <li className="mb-2"><a href="http://www.youtube.com/@aircvideounit" className="text-white hover:text-lime-400"><FaYoutube /> Youtube</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-4 text-white no-underline hover:underline">For Staff</h2>
          <ul>
            <li className="mb-2"><a href="" className="text-white hover:text-lime-400"><IoMailOpenSharp />Access the Mail</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}













export default Footer;
