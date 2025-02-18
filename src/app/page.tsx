import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          'url("https://cdn.pixabay.com/photo/2016/11/23/14/45/coding-1853305_1280.jpg")',
      }} // Use any background image URL
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
      {/* Overlay for readability */}
      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-extrabold text-white mb-8 animate__animated animate__fadeIn animate__delay-1s">
          Welcome to the NaC Docs Page
        </h1>

        <div className="space-x-6">
          <Link
            href="/docs"
            className="px-8 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-transform transform hover:scale-105 shadow-lg hover:shadow-xl animate__animated animate__bounceIn"
          >
            Docs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
