import React, { useState } from "react";
import studentImg from "../assets/heroImage.png";
import RequestCallBackModal from "./RequestCallBackModal"; // Assuming your modal component is in this file

export default function HomeSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <style jsx>{`
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .rotating-circle {
          animation: rotate 20s linear infinite;
          transform-origin: center;
        }

        @media (max-width: 640px) {
          .circles-container {
            display: none;
          }
        }
      `}</style>

      <section className="w-full bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 grid lg:grid-cols-2 gap-6 md:gap-8 items-center">
          <div className="text-center lg:text-left">
            <p className="text-xs sm:text-sm tracking-widest text-purple-600 font-semibold mb-3 sm:mb-4">
              ONLINE EDUCATION
            </p>

            <h1 className="font-extrabold leading-tight text-gray-900">
              <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                Up Your Skills
              </span>
              <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                To Advance Your
              </span>
              <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                Career&nbsp;Path
              </span>
            </h1>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600 max-w-md mx-auto lg:mx-0">
              Digital Training Program By India's Leading Experts. Join Many
              Learners Today, Acquire A Tech Skill.
            </p>

            <div className="mt-6 sm:mt-8 flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
              <a
                href="#get-started"
                className="px-6 sm:px-8 py-2 sm:py-3 bg-purple-600 text-white font-medium rounded hover:bg-purple-700 transition text-sm sm:text-base"
              >
                Get Started
              </a>
              <button
                onClick={openModal}
                className="px-6 sm:px-8 py-2 sm:py-3 bg-purple-600 text-white font-medium rounded hover:bg-purple-700 transition text-sm sm:text-base"
              >
                Request Call Back
              </button>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end mt-8 lg:mt-0">
            <img
              src={studentImg}
              alt="Student"
              className="relative z-10 w-48 sm:w-56 md:w-72 lg:w-96 xl:w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-none"
            />

            <div className="circles-container hidden sm:block">
              <svg
                viewBox="0 0 700 700"
                className="absolute inset-0 w-[120%] sm:w-full h-auto translate-x-1/4 sm:translate-x-0"
                fill="none"
              >
                <circle
                  cx="350"
                  cy="350"
                  r="360"
                  stroke="#FF0000"
                  strokeWidth="2"
                  strokeDasharray="4 6"
                  className="rotating-circle"
                />
                <circle
                  cx="350"
                  cy="340"
                  r="250"
                  stroke="#0000FF"
                  strokeWidth="2"
                  strokeDasharray="4 6"
                  className="rotating-circle"
                />
                <circle
                  cx="350"
                  cy="350"
                  r="150"
                  stroke="#FFFF00"
                  strokeWidth="2"
                  strokeDasharray="4 6"
                  className="rotating-circle"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {isModalOpen && <RequestCallBackModal onClose={closeModal} />}
    </>
  );
}