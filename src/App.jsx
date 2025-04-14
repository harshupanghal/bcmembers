import React, { useState } from "react";
import {
  FaUser,
  FaLink,
  FaVideo,
  FaFilePdf,
  FaGithub,
  FaImages,
  FaArrowLeft,
  FaArrowRight,
  FaTimes,
  FaCrown,
  FaInfo,
  FaServer,
  FaShieldAlt,
  FaCode,
} from "react-icons/fa";

const projectLink = "https://vaultify-hazel.vercel.app/";

const projectMembers = [
  { name: "Alok Jha", uid: "21BCS7839" },
  { name: "Dhruv", uid: "21BCS7844" },
  { name: "Anshul Thakur", uid: "21BCS7846", isLeader: true },
  { name: "Harsh", uid: "21BCS7850" },
  { name: "Aryan Thakur", uid: "21BCS2029" },
];

// Replace with your actual file URLs or public paths
const researchPaperPDF = "/research_paper.pdf";
const projectPresentationPDF =
  "http://www.africau.edu/images/default/sample.pdf";
const projectReportPDF = "http://www.africau.edu/images/default/sample.pdf";
const demoVideoSrc = "/vaultify_demo.mp4";

// Sample images for gallery - replace with your actual image URLs
const projectImages = [
  "/accept.jpg",
  "/workflow.png",
  "/archi.png",
  "/decryption.png",

];

const LandingPage = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const openLightbox = (index) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImage((prev) =>
      prev === projectImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImage((prev) =>
      prev === 0 ? projectImages.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 py-12 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <header className="text-center mb-16">
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-600 mb-6">
            Vaultifyy
          </h1>
          <p className="text-xl text-cyan-200 max-w-2xl mx-auto">
            Encrypted IPFS Vault using MERN Stack and Blockchain
          </p>
        </header>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Project Link */}
            <div className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden border border-gray-700 transform transition duration-300 hover:border-cyan-700 hover:shadow-cyan-700/20">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-cyan-900/30 p-3 rounded-lg mr-4">
                    <FaLink className="text-cyan-400 text-xl" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-100">
                    Project Link
                  </h2>
                </div>
                <div className="flex items-center text-lg">
                  {/* Link to the project (dynamic) */}
                  <a
                    href={projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 transition mr-12"
                  >
                    {projectLink}
                  </a>

                  {/* GitHub Icon - static link */}
                  <a
                    href="https://github.com/harshupanghal/Vaultify"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 transition transform duration-300 hover:translate-x-1"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>
            </div>

            {/* PDF Documents */}
            <div className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden border border-gray-700 transform transition duration-300 hover:border-indigo-700 hover:shadow-indigo-700/20">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-indigo-900/30 p-3 rounded-lg mr-4">
                    <FaFilePdf className="text-indigo-400 text-xl" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-100">
                    Project Documents
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <a
                    href={researchPaperPDF}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 hover:bg-gray-600 rounded-lg p-4 text-center transition transform hover:-translate-y-1 flex flex-col items-center"
                  >
                    <FaFilePdf className="text-indigo-400 text-2xl mb-2" />
                    <span className="text-cyan-100">Research Paper</span>
                  </a>
                  <a
                    href={projectPresentationPDF}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 hover:bg-gray-600 rounded-lg p-4 text-center transition transform hover:-translate-y-1 flex flex-col items-center"
                  >
                    <FaFilePdf className="text-indigo-400 text-2xl mb-2" />
                    <span className="text-cyan-100">Project Presentation</span>
                  </a>
                  <a
                    href={projectReportPDF}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 hover:bg-gray-600 rounded-lg p-4 text-center transition transform hover:-translate-y-1 flex flex-col items-center"
                  >
                    <FaFilePdf className="text-indigo-400 text-2xl mb-2" />
                    <span className="text-cyan-100">Project Report</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Demo Video */}
            <div className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden border border-gray-700 transform transition duration-300 hover:border-purple-700 hover:shadow-purple-700/20">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-purple-900/30 p-3 rounded-lg mr-4">
                    <FaVideo className="text-purple-400 text-xl" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-100">
                    Demo Video
                  </h2>
                </div>
                <div className="rounded-lg overflow-hidden bg-black shadow-inner">
                  <video controls className="w-full h-auto">
                    <source src={demoVideoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>

            {/* Photo Gallery */}
            <div className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden border border-gray-700 transform transition duration-300 hover:border-cyan-700 hover:shadow-cyan-700/20">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-cyan-900/30 p-3 rounded-lg mr-4">
                    <FaImages className="text-cyan-400 text-xl" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-100">
                    Project Gallery
                  </h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {projectImages.map((img, index) => (
                    <div
                      key={index}
                      className="relative overflow-hidden rounded-lg aspect-square bg-gray-700 cursor-pointer transform transition hover:scale-105"
                      onClick={() => openLightbox(index)}
                    >
                      <img
                        src={img}
                        alt={`Project image ${index + 1}`}
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition flex items-center justify-center">
                        <div className="transition">
                          <FaImages className="text-white text-xl" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Project Description */}
            <div className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden border border-gray-700 transform transition duration-300 hover:border-indigo-700 hover:shadow-indigo-700/20 mb-12">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-indigo-900/30 p-3 rounded-lg mr-4">
                    <FaInfo className="text-indigo-400 text-xl" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-100">
                    Project Overview
                  </h2>
                </div>
                <div className="space-y-6 text-cyan-100">
                  <p className="leading-relaxed">
                    This project implements a crypted IPFS vault using the MERN
                    (MongoDB, Express.js, React.js, Node.js) stack along with
                    blockchain technology. The vault allows users to securely
                    store files on the IPFS network while encrypting the data
                    and managing access through blockchain-based and JWT
                    authentication.
                  </p>

                  <div>
                    <h3 className="text-xl font-semibold text-indigo-300 mb-3">
                      Features
                    </h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        User authentication using blockchain technology for
                        enhanced security.
                      </li>
                      <li>
                        Upload encrypted files to the IPFS network and store
                        their encrypted hashes on the blockchain.
                      </li>
                      <li>
                        View and manage uploaded files within the web interface.
                      </li>
                      <li>
                        User-friendly interface built with React.js for seamless
                        interaction.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-indigo-300 mb-3">
                      Technologies Used
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start">
                        <div className="bg-cyan-900/20 p-2 rounded mr-3 mt-1">
                          <FaServer className="text-cyan-400" />
                        </div>
                        <div>
                          <h4 className="font-medium text-cyan-200">
                            MongoDB, Express.js & Node.js
                          </h4>
                          <p className="text-sm text-gray-400">
                            Database and server-side technology for storage and
                            logic.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="bg-purple-900/20 p-2 rounded mr-3 mt-1">
                          <FaCode className="text-purple-400" />
                        </div>
                        <div>
                          <h4 className="font-medium text-cyan-200">
                            React.js
                          </h4>
                          <p className="text-sm text-gray-400">
                            JavaScript library for building the user interface.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="bg-blue-900/20 p-2 rounded mr-3 mt-1">
                          <FaImages className="text-blue-400" />
                        </div>
                        <div>
                          <h4 className="font-medium text-cyan-200">IPFS</h4>
                          <p className="text-sm text-gray-400">
                            Peer-to-peer network for storing and sharing
                            encrypted files.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="bg-indigo-900/20 p-2 rounded mr-3 mt-1">
                          <FaShieldAlt className="text-indigo-400" />
                        </div>
                        <div>
                          <h4 className="font-medium text-cyan-200">
                            Blockchain
                          </h4>
                          <p className="text-sm text-gray-400">
                            Used for authentication and storing file metadata
                            securely.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Team Members */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden border border-gray-700 transform transition duration-300 hover:border-purple-700 hover:shadow-purple-700/20 sticky top-8">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-purple-900/30 p-3 rounded-lg mr-4">
                    <FaUser className="text-purple-400 text-xl" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-100">
                    Project Members
                  </h2>
                </div>
                <ul className="divide-y divide-gray-700">
                  {projectMembers.map((member, index) => (
                    <li key={index} className="py-4 first:pt-0 last:pb-0">
                      <div className="flex flex-col">
                        <div className="flex items-center">
                          <span className="font-semibold text-cyan-100 text-lg">
                            {member.name}
                          </span>
                          {member.isLeader && (
                            <div className="ml-6 flex items-center bg-indigo-900/30 text-indigo-300 text-xs px-2 py-1 rounded">
                              <FaCrown className="mr-1 text-yellow-400" />
                              <span>Project Leader</span>
                            </div>
                          )}
                        </div>
                        <span className="text-gray-400 text-sm mt-1">
                          {member.uid}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <footer className="mt-16 text-center pt-8 border-t border-gray-700">
          <p className="text-cyan-700">© Made by Team BcMembers</p>
        </footer>
      </div>

      {/* Lightbox for Gallery */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl w-full">
            <img
              src={projectImages[currentImage]}
              alt={`Gallery image ${currentImage + 1}`}
              className="max-h-screen w-full object-contain"
            />
            <button
              className="absolute top-2 right-2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition"
              onClick={closeLightbox}
            >
              <FaTimes size={20} />
            </button>
            <button
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition"
              onClick={prevImage}
            >
              <FaArrowLeft size={20} />
            </button>
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition"
              onClick={nextImage}
            >
              <FaArrowRight size={20} />
            </button>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full">
              {currentImage + 1} / {projectImages.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
