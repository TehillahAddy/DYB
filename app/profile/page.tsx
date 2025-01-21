"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';
import Parallax from 'parallax-js';
import ScrollMagic from 'scrollmagic';
import Tilt from 'react-parallax-tilt';
import WOW from 'wow.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'wow.js/css/libs/animate.css';

const Profile = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({ duration: 1000 });

    // Initialize WOW.js
    new WOW().init();

    // Initialize Parallax
    const scene = document.getElementById('scene');
    if (scene) {
      new Parallax(scene);
    }

    // Initialize GSAP
    gsap.to('.profile-header', { duration: 2, y: 20 });

    // Initialize ScrollMagic
    const controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
      triggerElement: '.profile-info',
    })
      .setClassToggle('.profile-info', 'fade-in')
      .addTo(controller);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-black p-4">
      <header className="bg-gray-900 text-white p-4 profile-header wow fadeInDown">
        <h1 className="text-2xl font-bold">Dr. Yaw Boafo</h1>
        <nav>
          <ul className="flex gap-4">
            <li className="hover:bg-gray-700 p-2 rounded">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:bg-gray-700 p-2 rounded">
              <Link href="/profile">Profile</Link>
            </li>
            <li className="hover:bg-gray-700 p-2 rounded">
              <Link href="/climate-change">Climate Change</Link>
            </li>
          </ul>
        </nav>
      </header>
      
      <main className="flex-1 p-6">
        <motion.div className="bg-white rounded-lg shadow-lg p-4 profile-info" data-aos="fade-up" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
          <h2 className="text-xl font-semibold mb-4">Profile Information</h2>
          <p><strong>Name:</strong> Dr. Yaw Boafo</p>
          <p><strong>Email:</strong> dr.yaw.boafo@example.com</p>
          <p><strong>Role:</strong> Senior Climate Change Advocate</p>
          {/* Add additional profile information as needed */}
        </motion.div>

        <Tilt className="mt-8" tiltMaxAngleX={25} tiltMaxAngleY={25}>
          <div className="bg-gray-200 rounded-lg shadow-lg p-4" id="scene">
            <p className="text-center">Interactive Tilt Effect</p>
          </div>
        </Tilt>
      </main>
    </div>
  );
};

export default Profile;
