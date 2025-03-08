import React from "react";

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6 flex items-center">
        🚀 Our Services
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
        {/* Service 1: Text Extraction */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
          <span className="text-5xl">📄</span>
          <h2 className="text-xl font-semibold mt-4">Text Extraction</h2>
          <p className="text-gray-300 mt-2">
            Extract text from images with high accuracy and efficiency.
          </p>
        </div>

        {/* Service 2: AI-Powered OCR */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
          <span className="text-5xl">🤖</span>
          <h2 className="text-xl font-semibold mt-4">AI-Powered OCR</h2>
          <p className="text-gray-300 mt-2">
            Our advanced AI models process text quickly and accurately.
          </p>
        </div>

        {/* Service 3: Secure & Fast */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
          <span className="text-5xl">🔒</span>
          <h2 className="text-xl font-semibold mt-4">Secure & Fast</h2>
          <p className="text-gray-300 mt-2">
            We ensure a secure and seamless text extraction experience.
          </p>
        </div>
      </div>

      {/* Motivational Message */}
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold text-yellow-400">
          💡 Help Us Grow!
        </h2>
        <p className="text-gray-300 mt-2 max-w-md">
          Engage with us more so we can expand and provide even better services!  
          Your support drives our innovation. 🌍✨
        </p>
      </div>
    </div>
  );
};

export default Services;
