"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default  function Navlink () {
  const pathname = usePathname();

  const links = [
    { name: "Home", path: "/" },
    { name: "All Facilities", path: "/AllFacilities" },
    { name: "My Bookings", path: "/MyBookings" },
    { name: "Add Facility", path: "/AddFacility" },
    { name: "Manage My Facilities", path:"/ManageMyFacilities" },
  ];

  return (
    <>
      {links.map((link) => (
        <li key={link.path}>
          <Link
            href={link.path}
            className={
              pathname === link.path
                ? " w-fit border-b-2 border-b-[#23ece9] py-1 transition text-md font-bold bg-gradient-to-r from-[rgb(99,175,255)] to-[rgba(71,111,255,0.97)] bg-clip-text text-transparent "
                : "text-md font-bold bg-gradient-to-r from-[rgb(222,222,224)] to-[rgba(163,190,234,0.97)] bg-clip-text text-transparent "
            }
          >
            {link.name}
          </Link>
        </li>
      ))}
    </>
  );
}