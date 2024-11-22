
// "use client"
// import React from 'react';
// import { Player } from '@lottiefiles/react-lottie-player';

// const projectData = [
//   {
//     id: 1,
//     title: "ATM",
//     lottieSrc: "/lottie/atm.json",
//     videoSrc: "/videos/atm-video.webm",
//     link: "https://github.com/Ummay480/atm",
//   },
//   // Repeat for other projects
// ];

// const ProjectWithAnimation: React.FC = () => {
//   console.log("ProjectWithAnimation rendering..."); // Debugging message

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
//       {projectData.map((project) => (
//         <div key={project.id} className="relative w-full h-[400px] bg-[#121212] rounded-xl overflow-hidden shadow-lg">
//           {/* Debug Placeholder */}
//           <p>Debug: Rendering {project.title}</p>

//           {/* Lottie Animation */}
//           <div className="absolute top-0 left-0 w-full h-full">
//             <Player
//               autoplay
//               loop
//               src={project.lottieSrc}
//               style={{ width: "100%", height: "100%", background: "transparent" }}
//             />
//           </div>

//           {/* Video Section */}
//           <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
//             <video autoPlay loop muted playsInline className="w-full h-full object-cover">
//               <source src={project.videoSrc} type="video/webm" />
//               <source src={project.videoSrc} type="video/mp4" />
//             </video>
//           </div>

//           {/* Project Title and Button */}
//           <div className="absolute inset-0 flex justify-center items-center flex-col text-white p-4 bg-black bg-opacity-50">
//             <span className="text-lg font-bold">{project.title}</span>
//             <a
//               href={project.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="mt-2 px-4 py-2 bg-yellow-500 text-black rounded-md hover:bg-yellow-600"
//             >
//               Visit
//             </a>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProjectWithAnimation;
