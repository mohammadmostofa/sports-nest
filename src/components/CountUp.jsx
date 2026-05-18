"use client";

import React from "react";
import Marquee from "react-fast-marquee";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const CountUpPage = () => {
  const stats = [
  {
    id: 1,
    number: 1200,
    label: "Active Players",
    suffix: "+",
  },
  {
    id: 2,
    number: 850,
    label: "Total Matches",
    suffix: "+",
  },
  {
    id: 3,
    number: 450,
    label: "Training Sessions",
    suffix: "+",
  },
  {
    id: 4,
    number: 95,
    label: "Registered Teams",
    suffix: "+",
  },
  {
    id: 5,
    number: 320,
    label: "Stadium Bookings",
    suffix: "+",
  },
  {
    id: 6,
    number: 40,
    label: "Tournament Hosted",
    suffix: "+",
  },
  {
    id: 7,
    number: 5000,
    label: "Happy Athletes",
    suffix: "+",
    isK: true,
  },
  {
    id: 8,
    number: 75,
    label: "Expert Coaches",
    suffix: "+",
  },
  {
    id: 9,
    number: 28,
    label: "Winning Awards",
    suffix: "+",
  },
  {
    id: 10,
    number: 15000,
    label: "Monthly Visitors",
    suffix: "k+",
    isK: true,
  },
  {
    id: 11,
    number: 980,
    label: "Successful Bookings",
    suffix: "+",
  },
  {
    id: 12,
    number: 65,
    label: "Sports Facilities",
    suffix: "+",
  },
  {
    id: 13,
    number: 30,
    label: "Partner Clubs",
    suffix: "+",
  },
  {
    id: 14,
    number: 12,
    label: "Countries Reached",
    suffix: "+",
  },
  {
    id: 15,
    number: 10,
    label: "Years of Experience",
    suffix: "+",
  },
];

  return (
    <section className="relative  py-20 px-6 overflow-hidden ">
      
      <div className="absolute top-0 left-0 w-72 h-72 bg-orange-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-violet-500/10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Our <span className="text-[#0f90f4]">Achievements</span>
          </h2>

          <p className="text-white mt-4 max-w-2xl mx-auto">
            Trusted by thousands of athletes and sports enthusiasts worldwide.
            We deliver seamless sports experiences with premium facilities and
            modern booking solutions.
          </p>
        </div>

        {/* Stats */}

<Marquee
  pauseOnHover={true}
  speed={50}
  gradient={false}
>
  <div className="flex gap-6 px-4 overflow-hidden ">

    {stats.map((stat, index) => (
      <motion.div
        key={stat.id}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: index * 0.15,
        }}
        viewport={{ once: true }}
        className="group relative min-w-[280px] bg-white/10 backdrop-blur-md border
         border-white/10 rounded-2xl p-8 text-center overflow-hidden hover:border-[#e0823d]/50
         transition-all duration-300"
      >

        {/* Hover Glow */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-[#e0823d]/10 to-violet-500/10"></div>

        {/* Number */}
        <h2 className="relative text-5xl font-extrabold text-white mb-3">
          <span className="text-[#45d8eb]">
            <CountUp
              end={stat.isK ? stat.number / 1000 : stat.number}
              duration={2.5}
              enableScrollSpy
              scrollSpyOnce
            />
          </span>
          {stat.suffix}
        </h2>

        {/* Label */}
        <p className="relative text-shadow-gray-100 text-sm md:text-base tracking-wide">
          {stat.label}
        </p>

        {/* Bottom Border */}
        <div className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full
         bg-gradient-to-r from-[#1d0056] to-violet-500 transition-all duration-500"></div>

      </motion.div>
    ))}

  </div>
</Marquee>
      </div>
    </section>
  );
};

export default CountUpPage;