"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';



const HomePage = () => {
  const [showAchievements, setShowAchievements] = useState(false);
  const [showArticles, setShowArticles] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');


  const [isClient, setIsClient] = useState(false)
 
 
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    setIsClient(true)
  }, []);
 
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900 p-6">
      <header className="bg-gradient-to-r from-green-400 to-blue-500 text-white p-6 shadow-md flex justify-between items-center animate-fadeIn">
        <div className="flex items-center gap-6">
          <Image src="/images/1.webp" alt="Dr. Yaw Boafo" width={50} height={50} className="rounded-full" />
          <h1 className="text-3xl font-bold">Dr. Yaw Boafo</h1>
        </div>
        <nav>
          <ul className="flex gap-6 text-lg font-semibold">
            <li className="hover:underline">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:underline">
              <Link href="profile">Profile</Link>
            </li>
            <li className="hover:underline">
              <Link href="#climate-change">Climate Change</Link>
            </li>
          </ul>
        </nav>
      </header>
      
      <main className="flex-1 p-8 space-y-8">
        <section id="about" className="bg-white rounded-lg shadow-lg p-6" data-aos="fade-down">
          <h2 className="text-2xl font-semibold mb-6 border-b-2 border-gray-200 pb-2">About Dr. Yaw Boafo</h2>
          <Image src="/images/1.webp" alt="Dr. Yaw Boafo" width={200} height={200} className="rounded-full mx-auto mb-6" />
          <p className="text-justify leading-relaxed">Dr. Yaw Boafo is a renowned expert in climate change, with extensive experience in environmental research and advocacy. His work focuses on raising awareness about the impacts of climate change and promoting sustainable practices.</p>
        </section>

        <section id="achievements" className="bg-white rounded-lg shadow-lg p-6" data-aos="zoom-out-left">
          <h2 className="text-2xl font-semibold mb-4 cursor-pointer" onClick={() => setShowAchievements(!showAchievements)}>
            Achievements {showAchievements ? '▲' : '▼'}
          </h2>
          {showAchievements && (
            <ul className="list-disc pl-6 leading-relaxed animate-fadeIn">
              <li>Published over 50 research papers on climate change</li>
              <li>Keynote speaker at international climate change conferences</li>
              <li>Advisor to governmental and non-governmental organizations on environmental policies</li>
            </ul>
          )}
        </section>

        <section id="articles" className="bg-white rounded-lg shadow-lg p-6" data-aos="zoom-in-down">
          <h2 className="text-2xl font-semibold mb-4 cursor-pointer" onClick={() => setShowArticles(!showArticles)}>
            Insights and Articles {showArticles ? '▲' : '▼'}
          </h2>
          {showArticles && (
            <div className="leading-relaxed animate-fadeIn">
              <p><strong>Article 1:</strong> <Link href="/articles/article-1" className="text-blue-500 underline">The Impact of Climate Change on Coastal Communities</Link></p>
              <p><strong>Article 2:</strong> <Link href="/articles/article-2" className="text-blue-500 underline">Sustainable Practices to Combat Climate Change</Link></p>
              {/* Add additional articles as needed */}
            </div>
          )}
        </section>

        <section id="testimonials" className="bg-white rounded-lg shadow-lg p-6" data-aos="zoom-in-up">
          <h2 className="text-2xl font-semibold mb-4">Testimonials</h2>
          <blockquote className="bg-gray-100 p-6 rounded-lg shadow-inner italic">
            <p>"Dr. Yaw Boafo's insights into climate change have been invaluable to our organization." - Environmental NGO</p>
          </blockquote>
        </section>

        <section id="videos" className="bg-white rounded-lg shadow-lg p-6" data-aos="zoom-out-up">
          <h2 className="text-2xl font-semibold mb-4">Watch Dr. Boafo's Talk</h2>
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="rounded-lg shadow-md"></iframe>
        </section>

        <section id="timeline" className="bg-white rounded-lg shadow-lg p-6" data-aos="zoom-out-down">
          <h2 className="text-2xl font-semibold mb-4">Career Timeline</h2>
          <ul className="list-disc pl-6 leading-relaxed">
            <li>2005: PhD in Environmental Science</li>
            <li>2010: Published first research paper on climate change</li>
            <li>2015: Keynote speaker at Climate Change Summit</li>
            <li>2020: Advisor to governmental environmental policy</li>
          </ul>
        </section>

        <section id="contact" className="bg-white rounded-lg shadow-lg p-6" data-aos="zoom-out-right">
          <h2 className="text-2xl font-semibold mb-4">Contact Dr. Boafo</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 p-3 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-300"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 p-3 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-300"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-1 p-3 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-300"
              ></textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">Submit</button>
          </form>
        </section>

        <section id="newsletter" className="bg-white rounded-lg shadow-lg p-6" data-aos="fade-up"
     data-aos-anchor-placement="bottom-center">
          <h2 className="text-2xl font-semibold mb-4">Newsletter Signup</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="mt-1 p-3 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-300"
              />
            </div>
            <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">Subscribe</button>
          </form>
        </section>

        <section id="blog" className="bg-white rounded-lg shadow-lg p-6" data-aos="fade-down"
     data-aos-anchor-placement="bottom-center">
          <h2 className="text-2xl font-semibold mb-4">Blog</h2>
          <div className="bg-gray-100 p-4 rounded-lg shadow-inner">
            <p><strong>Latest Blog Post:</strong> <Link href="/blog/latest-post" className="text-blue-500 underline">Understanding Climate Change</Link></p>
            {/* Add additional blog posts as needed */}
          </div>
        </section>

        <section id="events" className="bg-white rounded-lg shadow-lg p-6" data-aos="zoom-up"
     data-aos-anchor-placement="bottom-center">
          <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
          <ul className="list-disc pl-6 leading-relaxed">
            <li>Webinar on Sustainable Practices - March 30, 2025</li>
            <li>Climate Change Summit - April 15, 2025</li>
            <li>Environmental Policy Workshop - May 10, 2025</li>
            {/* Add additional events as needed */}
          </ul>
        </section>

        <section id="social" className="bg-white rounded-lg shadow-lg p-6" data-aos="flip-up"
     data-aos-anchor-placement="bottom-center">
          <h2 className="text-2xl font-semibold mb-4">Connect with Dr. Boafo</h2>
          <div className="flex gap-4">
            <a href="https://twitter.com" className="hover:text-blue-400">Twitter</a>
            <a href="https://facebook.com" className="hover:text-blue-600">Facebook</a>
            <a href="https://linkedin.com" className="hover:text-blue-800">LinkedIn</a>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white p-4 flex justify-between items-center">
        <p>&copy; {new Date().getFullYear()} Dr. Yaw Boafo</p>
        <div className="flex gap-4">
          <a href="https://twitter.com" className="hover:text-blue-400">Twitter</a>
          <a href="https://facebook.com" className="hover:text-blue-600">Facebook</a>
          <a href="https://linkedin.com" className="hover:text-blue-800">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
