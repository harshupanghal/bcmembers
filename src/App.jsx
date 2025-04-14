import React, { useState, useRef, useEffect, useCallback } from "react";
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
  FaSearch,
  FaDownload,
  FaInfoCircle
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

// Enhanced project images with metadata
const projectImages = [
  { 
    src: "/accept.jpg", 
    alt: "Acceptance workflow", 
    caption: "User acceptance flow diagram",
    thumbnail: "/accept.jpg"  // Using same image as thumbnail, ideally use optimized version
  },
  { 
    src: "/workflow.png", 
    alt: "Project workflow", 
    caption: "End-to-end encryption workflow"
  },
  { 
    src: "/archi.png", 
    alt: "Architecture diagram", 
    caption: "Vaultify system architecture" 
  },
  { 
    src: "/decryption.png", 
    alt: "Decryption process", 
    caption: "Secure decryption flow" 
  }
];

const LandingPage = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isImageError, setIsImageError] = useState(false);
  
  const lightboxRef = useRef(null);
  const imageRef = useRef(null);
  
  // Reset zoom when changing images
  useEffect(() => {
    setZoomLevel(1);
    setIsLoading(true);
    setIsImageError(false);
  }, [currentImage]);
  
  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      
      switch(e.key) {
        case "ArrowRight":
          nextImage(e);
          break;
        case "ArrowLeft":
          prevImage(e);
          break;
        case "Escape":
          closeLightbox();
          break;
        case "+":
          setZoomLevel(prev => Math.min(prev + 0.2, 3));
          break;
        case "-":
          setZoomLevel(prev => Math.max(prev - 0.2, 0.5));
          break;
        default:
          break;
      }
    };
    
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, currentImage]);
  
  // Memoize navigation functions
  const openLightbox = useCallback((index) => {
    setCurrentImage(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    document.body.style.overflow = ''; // Restore scrolling
  }, []);

  const nextImage = useCallback((e) => {
    e?.stopPropagation();
    setCurrentImage((prev) => 
      prev === projectImages.length - 1 ? 0 : prev + 1
    );
  }, []);

  const prevImage = useCallback((e) => {
    e?.stopPropagation();
    setCurrentImage((prev) => 
      prev === 0 ? projectImages.length - 1 : prev - 1
    );
  }, []);
  
  // Touch gestures for mobile
  const touchStartX = useRef(null);
  
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  
  const handleTouchEnd = (e) => {
    if (!touchStartX.current) return;
    
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    
    // Swipe threshold of 50px
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextImage(e);
      } else {
        prevImage(e);
      }
    }
    
    touchStartX.current = null;
  };
  
  // Image loading handlers
  const handleImageLoad = () => {
    setIsLoading(false);
  };
  
  const handleImageError = () => {
    setIsLoading(false);
    setIsImageError(true);
  };
  
  // Download current image
  const downloadImage = (e) => {
    e.stopPropagation();
    
    const link = document.createElement('a');
    link.href = projectImages[currentImage].src;
    link.download = `vaultify-image-${currentImage + 1}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
  <div className="p-4 sm:p-6 md:p-8">
    <div className="flex items-center mb-4 sm:mb-6">
      <div className="bg-cyan-900/30 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4 flex-shrink-0">
        <FaLink className="text-cyan-400 text-lg sm:text-xl" />
      </div>
      <h2 className="text-xl sm:text-2xl font-bold text-gray-100">
        Project Link
      </h2>
    </div>
    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-0">
      {/* Link to the project with truncation on mobile */}
      <div className="overflow-hidden w-full sm:w-auto">
        <a
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:text-cyan-300 transition sm:mr-8 text-base sm:text-lg break-all sm:break-normal"
          aria-label="Visit Vaultify project website"
        >
          <span className="hidden sm:inline">{projectLink}</span>
          <span className="sm:hidden">{projectLink.length > 30 ? `${projectLink.substring(0, 30)}...` : projectLink}</span>
        </a>
      </div>

      {/* GitHub Icon with better tap target for mobile */}
      <div className="flex justify-start sm:justify-center">
        <a
          href="https://github.com/harshupanghal/Vaultify"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:text-cyan-300 transition transform duration-300 hover:translate-x-1 p-2 -ml-2 sm:p-0 sm:m-0"
          aria-label="View source code on GitHub"
        >
          <FaGithub className="text-xl sm:text-lg" />
        </a>
      </div>
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

            {/* Enhanced Photo Gallery */}
            <div className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden border border-gray-700 transform transition duration-300 hover:border-cyan-700 hover:shadow-cyan-700/20">
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="bg-cyan-900/30 p-3 rounded-lg mr-4">
                      <FaImages className="text-cyan-400 text-xl" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-100">
                      Project Gallery
                    </h2>
                  </div>
                  <span className="text-sm text-gray-400">
                    {projectImages.length} images
                  </span>
                </div>
                
                {/* Responsive Masonry-style Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-max">
                  {projectImages.map((img, index) => (
                    <div
                      key={index}
                      className={`relative overflow-hidden rounded-lg cursor-pointer 
                                transition transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-700/20
                                ${index === 0 ? 'sm:col-span-2 sm:row-span-2' : ''}`}
                      onClick={() => openLightbox(index)}
                      role="button"
                      tabIndex={0}
                      aria-label={`View ${img.alt || `image ${index + 1}`}`}
                      onKeyDown={(e) => e.key === 'Enter' && openLightbox(index)}
                    >
                      <div className="relative pb-[75%]">
                        <img
                          src={img.thumbnail || img.src}
                          alt={img.alt || `Project image ${index + 1}`}
                          loading="lazy"
                          className="absolute inset-0 w-full h-full object-cover transition duration-500"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = '/placeholder-image.jpg'; // Fallback image
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                          {img.caption && (
                            <p className="text-white text-sm font-medium truncate">
                              {img.caption}
                            </p>
                          )}
                          <div className="flex justify-between items-center mt-2">
                            <span className="text-xs text-gray-300">
                              {index + 1}/{projectImages.length}
                            </span>
                            <div className="bg-black/40 p-1.5 rounded-full">
                              <FaSearch className="text-white text-xs" />
                            </div>
                          </div>
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

      {/* Enhanced Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
          ref={lightboxRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          role="dialog"
          aria-modal="true"
          aria-label="Image Gallery"
        >
          <div className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center">
            {/* Loader */}
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-cyan-500"></div>
              </div>
            )}
            
            {/* Error State */}
            {isImageError && (
              <div className="bg-red-900/50 text-white p-6 rounded-lg text-center">
                <FaTimes className="text-3xl mx-auto mb-2" />
                <p>Failed to load image</p>
              </div>
            )}
            
            {/* Image Container with Zoom */}
            <div 
              className="relative overflow-hidden transition-all duration-300 ease-out"
              style={{ 
                transform: `scale(${zoomLevel})`,
                transition: 'transform 0.3s ease-out'
              }}
            >
              <img
                src={projectImages[currentImage].src}
                alt={projectImages[currentImage].alt || `Gallery image ${currentImage + 1}`}
                className={`max-h-[80vh] w-auto object-contain transition-opacity duration-300 ${
                  isLoading ? 'opacity-0' : 'opacity-100'
                }`}
                ref={imageRef}
                onLoad={handleImageLoad}
                onError={handleImageError}
              />
            </div>
            
            {/* Caption */}
            {/* <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-6 py-3 rounded-full backdrop-blur-sm max-w-md text-center">
              <p>{projectImages[currentImage].caption || `Image ${currentImage + 1}`}</p>
              <div className="text-xs text-gray-300 mt-1">
                {currentImage + 1} / {projectImages.length}
              </div>
            </div> */}
            
            {/* Controls Toolbar */}
            {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4">
              <button
                className="bg-black/70 backdrop-blur-sm text-white p-3 rounded-full hover:bg-gray-700 transition"
                onClick={(e) => {
                  e.stopPropagation();
                  setZoomLevel(prev => Math.max(prev - 0.2, 0.5));
                }}
                aria-label="Zoom out"
              >
                <FaSearch className="text-xs" />-
              </button>
              
              <button
                className="bg-black/70 backdrop-blur-sm text-white p-3 rounded-full hover:bg-gray-700 transition"
                onClick={(e) => {
                  e.stopPropagation();
                  setZoomLevel(1); // Reset zoom
                }}
                aria-label="Reset zoom"
              >
                <FaInfoCircle />
              </button>
              
              <button
                className="bg-black/70 backdrop-blur-sm text-white p-3 rounded-full hover:bg-gray-700 transition"
                onClick={(e) => {
                  e.stopPropagation();
                  setZoomLevel(prev => Math.min(prev + 0.2, 3));
                }}
                aria-label="Zoom in"
              >
                <FaSearch className="text-xs" />+
              </button>
              
              <button
                className="bg-black/70 backdrop-blur-sm text-white p-3 rounded-full hover:bg-gray-700 transition"
                onClick={downloadImage}
                aria-label="Download image"
              >
                <FaDownload />
              </button>
            </div> */}
            
            {/* Close button */}
            <button
              className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-white p-3 rounded-full hover:bg-gray-700 transition"
              onClick={closeLightbox}
              aria-label="Close gallery"
            >
              <FaTimes size={20} />
            </button>
            
            {/* Navigation buttons */}
            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/70 backdrop-blur-sm text-white p-4 rounded-full hover:bg-gray-700 transition"
              onClick={prevImage}
              aria-label="Previous image"
            >
              <FaArrowLeft size={20} />
            </button>
            
            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/70 backdrop-blur-sm text-white p-4 rounded-full hover:bg-gray-700 transition"
              onClick={nextImage}
              aria-label="Next image"
            >
              <FaArrowRight size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
