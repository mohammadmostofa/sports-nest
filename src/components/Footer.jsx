import Link from "next/link";
import {FaFacebook,FaInstagram,FaTwitter,FaLinkedin} from "react-icons/fa";


const FooterPage = () => {
  return (
    <div>
          
          <footer className=" pt-10 bg-slate-950 text-white border-t border-white/10 flex flex-col justify-center font-[--var-bebas] items-center">

  <div className=" px-5 py-14 grid grid-cols-1 md:grid-cols-2 md:pl-25 lg:grid-cols-4 J gap-10">

    {/* div 1 */}
    <div>
      <h2 className="text-2xl font-bold mb-4">
        SportsLest
      </h2>

      <p className="text-sm text-gray-400 leading-7">
        Seamless sports venue booking platform for modern athletes.
        Find your ground, book instantly, and enjoy the game without hassle.
      </p>
    </div>

    {/* div 2 */}
    <div>
      <h3 className="text-xl font-semibold mb-4">
        Quick Links
      </h3>

      <ul className="space-y-3 text-gray-400 text-sm">
        <li>
          <Link href="/" className="hover:text-blue-400 transition">
            Home
          </Link>
        </li>

        <li>
          <Link href="/AllFacilities" className="hover:text-blue-400 transition">
            All Facilities
          </Link>
        </li>

        <li>
          <a href="/myBookings" className="hover:text-blue-400 transition">
            My Bookings
          </a>
        </li>

        <li>
          <a href="/ManageMyFacilities" className="hover:text-blue-400 transition">
            Manage My Facilities
          </a>
        </li>
      </ul>
    </div>

    {/* div 3 */}
    <div>
      <h3 className="text-xl font-semibold mb-4">
        Contact Info
      </h3>

      <ul className="space-y-4 text-sm text-gray-400">
        <li>Email:mohammadmostofa.dev@gmail.com</li>
        <li>Phone: +880 01784562127</li>
        <li>Location: Sylhet, Bangladesh</li>
      </ul>
    </div>

    {/* div 4 */}
    <div>
      <h3 className="text-xl font-semibold mb-4">
        Follow Us
      </h3>

      <div className="flex items-center gap-4 text-2xl">

        <a
          href="https://facebook.com"
          target="_blank"
          className="hover:text-blue-500 transition"
        >
          <FaFacebook />
        </a>

        <a
          href="https://instagram.com"
          target="_blank"
          className="hover:text-pink-500 transition"
        >
          <FaInstagram />
        </a>

        <a
          href="https://twitter.com"
          target="_blank"
          className="hover:text-sky-400 transition"
        >
          <FaTwitter />
        </a>

        <a
          href="https://linkedin.com"
          target="_blank"
          className="hover:text-blue-400 transition"
        >
          <FaLinkedin />
        </a>

      </div>
    </div>

  </div>

  {/* copyright */}
  <div className="border-t border-white/10 py-5 text-center text-sm text-white">
      © {new Date().getFullYear()} Sports. All rights reserved by Mohammad Mostofa.

  </div>
</footer>

    </div>
  );
};

export default FooterPage;