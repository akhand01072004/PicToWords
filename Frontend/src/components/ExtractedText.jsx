import { useState } from "react";

const ExtractedText = ({ text }) => {
  const [copied, setCopied] = useState(false);

  // Function to copy text
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset "Copied!" after 2 seconds
  };

  // Function to reload the page (Restart)
  const handleRestart = () => {
    window.location.reload(); // Reloads the entire page
  };

  return (
    <div className="mt-6 w-full max-w-md bg-gray-700 p-4 rounded-lg shadow-lg">
      <h2 className="text-lg font-semibold mb-2 text-white">Extracted Text:</h2>

      <textarea
        className="w-full h-32 p-2 border rounded-md text-white bg-gray-800"
        readOnly
        value={text}
      />

      <div className="flex space-x-4 mt-4">
        {/* Copy Button */}
        <button
          onClick={handleCopy}
          className="flex-1 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
        >
          {copied ? "Copied!" : "Copy Text"}
        </button>

        {/* Restart Button */}
        <button
          onClick={handleRestart}
          className="flex-1 px-4 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition duration-300"
        >
          Restart
        </button>
      </div>
    </div>
  );
};

export default ExtractedText;
