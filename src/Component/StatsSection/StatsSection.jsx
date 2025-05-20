import React, { useState } from "react";
import RequestCallBackModal from "../RequestCallBackModal";


export default function StatsSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="py-30 bg-white text-center relative">
      <div className="absolute top-[-30px] left-1/2 transform -translate-x-1/2">
        <button
          onClick={openModal}
          className="bg-blue-500 text-white px-6 py-2 rounded-md shadow hover:bg-blue-600 transition"
        >
          Request Call Back
        </button>
      </div>
      <div className="mb-16">
        <h4 className="text-blue-500 tracking-widest font-semibold mb-2 uppercase">
          Start To Success
        </h4>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Achieve Your Goals With Vereda
        </h2>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-12 px-4">
        <div className="rounded-full p-10 w-[250px] h-[250px] flex flex-col justify-center items-center bg-[radial-gradient(circle,_rgba(210,255,237,1)_0%,_rgba(255,255,255,0)_80%)]">
          <h3 className="text-3xl font-bold">15+</h3>
          <p className="text-gray-600 mt-2 text-center">
            Years of Language Education Experience
          </p>
        </div>
        <div className="rounded-full p-10 w-[250px] h-[250px] flex flex-col justify-center items-center bg-[radial-gradient(circle,_rgba(255,238,196,1)_0%,_rgba(255,255,255,0)_80%)]">
          <h3 className="text-3xl font-bold">3084+</h3>
          <p className="text-gray-600 mt-2 text-center">
            Learners Enrolled in Vereda Programs
          </p>
        </div>
        <div className="rounded-full p-10 w-[250px] h-[250px] flex flex-col justify-center items-center bg-[radial-gradient(circle,_rgba(228,219,255,1)_0%,_rgba(255,255,255,0)_80%)]">
          <h3 className="text-3xl font-bold">100+</h3>
          <p className="text-gray-600 mt-2 text-center">
            Qualified Teachers And Language Experts
          </p>
        </div>
      </div>

      {isModalOpen && <RequestCallBackModal onClose={closeModal} />}
    </section>
  );
}