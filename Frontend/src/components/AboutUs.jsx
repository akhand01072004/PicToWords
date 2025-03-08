import React from "react";
import Akhand from "../assets/akhand-profile.jpeg";
import Abhay from "../assets/abhay-profile.jpeg";

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-6">
      <h1 className="text-4xl font-bold mb-8 text-white">About Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
        {/* Developer 1: Akhand Pratap Singh Chauhan */}
        <div className="bg-gray-800 shadow-lg rounded-lg p-8 text-center w-full">
          <img
            src={Akhand}
            alt="Akhand Pratap Singh Chauhan"
            className="w-32 h-32 mx-auto rounded-full mb-4 border-4 border-blue-500"
          />
          <h2 className="text-2xl font-semibold text-white">Akhand Pratap Singh Chauhan</h2>
          <p className="text-gray-400">Frontend Developer</p>
          
          {/* Experience */}
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-yellow-400">Experience</h3>
            <p className="text-gray-300 text-sm mt-1">
              👨‍💻 SDE Intern at ITJOBXS  
              🎓 Pursuing MCA at Babu Banarasi Das University
            </p>
          </div>

          {/* Skills */}
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-green-400">Skills</h3>
            <p className="text-gray-300 text-sm mt-1">
              React.js, Tailwind CSS, MySQL, Java, C++
            </p>
          </div>

          <a
            href="https://www.linkedin.com/in/akhand-pratap-singh-697549225/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline mt-4 inline-block"
          >
            🔗 LinkedIn Profile
          </a>
        </div>

        {/* Developer 2: Abhay Kumar Tiwari */}
        <div className="bg-gray-800 shadow-lg rounded-lg p-8 text-center w-full">
          <img
            src={Abhay}
            alt="Abhay Kumar Tiwari"
            className="w-32 h-32 mx-auto rounded-full mb-4 border-4 border-green-500"
          />
          <h2 className="text-2xl font-semibold text-white">Abhay Kumar Tiwari</h2>
          <p className="text-gray-400">Backend Developer</p>
          
          {/* Experience */}
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-yellow-400">Experience</h3>
            <p className="text-gray-300 text-sm mt-1">
              🏢 Technical Support Executive C1 India Pvt Ltd
            </p>
          </div>

          {/* Skills */}
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-green-400">Skills</h3>
            <p className="text-gray-300 text-sm mt-1">
              MS Excel, Node.js, React.js, Java, MySQL, MongoDB
            </p>
          </div>

          <a
            href="https://www.linkedin.com/in/abhay-tiwari-b42579202/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline mt-4 inline-block"
          >
            🔗 LinkedIn Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
