import { useState, useEffect} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import ImageUpload from "./components/ImageUpload";
import ExtractedText from "./components/ExtractedText";
import Services from "./components/Services";

function App() {
  const [image, setImage] = useState(null);
  const [extractedText, setExtractedText] = useState("");
  const [loading, setLoading] = useState(false); 


    useEffect(() => {
      const fetchtext = async () => {
        setLoading(true);
          try {
            const formData = new FormData();
            formData.append("imgsrc", image);
              const response = await fetch('https://ocr-backned.onrender.com/extract', {
                  method: "POST",
                  body: formData,
              });
              const data = await response.json();
              if(!image){
                setExtractedText("Please select image");
              }else if(!data.text){
                setExtractedText("Extracting Please wait...")
              }else{
                setExtractedText(data.text);
              }
              setLoading(false);
          } catch (error) {
              console.error("Error fetching projects:", error);
              setLoading(false);
          }
      };
      fetchtext();
      
  }, [image]);

  

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            {/* Home Page (Image to Text Converter) */}
            <Route
              path="/"
              element={
                <div className="flex flex-col items-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white p-6">
                  <h1 className="text-4xl font-extrabold text-center mt-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 drop-shadow-lg">
                    Image to Text Converter
                  </h1>
                  
                  {/* Main Container */}
                  <div className="mt-10 w-full max-w-xl p-8 bg-white-400 bg-opacity-10 backdrop-blur-lg rounded-lg shadow-xl border border-gray-700">
                    
                    {/* Image Upload */}
                    <ImageUpload image={image} setImage={setImage} name="imgsrc" />

                    {/* Button in Same Width as Input Field */}
                    <div className="mt-6 flex flex-col items-center w-full">
                      <button
                        className={`w-full px-6 py-3 text-lg font-semibold rounded-lg transition-all duration-300 ${
                          image
                            ? "bg-blue-500 hover:bg-blue-600"
                            : "bg-gray-600 opacity-50 cursor-not-allowed"
                        } text-white shadow-md`}
                        
                        disabled={!image}
                      >
                        Extract Text
                      </button>
                    </div>

                    {/* Extracted Text Display */}
                    {loading ? (
                    <p className="text-2xl font-bold mb-6 text-white">Extracting...</p> // Show "Extracting..." while loading
                  ) : (
                    <div style={{ maxHeight: "500px", height: "auto", maxWidth: "100%" }}>
                  {extractedText && <ExtractedText text={extractedText} /> }
                  </div> // Show extracted text when ready
                  )}
                  </div>
                </div>
              }
            />

            {/* About Us Page */}
            <Route path="/about-us" element={<AboutUs />} />

            {/* Services Page */}
            <Route path="/services" element={<Services />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
