import { useState } from "react";

const ImageUpload = ({ image, setImage }) => {
  const [preview, setPreview] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="w-full max-w-md bg-gray-700 p-4 rounded-lg shadow-lg">
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="w-full text-white border rounded-md p-2"
      /> 
      {preview && (
        <div className="mt-4">
          <img
            src={preview}
            alt="Preview"
            className="w-full h-48 object-cover rounded-md"
          />
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
