import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DefaultGallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Function to fetch image data
    const fetchImages = async () => {
      try {
        const response = await axios.get('https://advocategvadmin.advgvdeshmukh.com/galleryseletc.php');
        if (response.data.success) {
          setImages(response.data.data); // Assuming 'data' contains the image links
        } else {
          console.error('Failed to fetch images:', response.data.message);
        }
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
      {images.map((image, index) => (
        <div
          key={index}
          className="relative overflow-hidden rounded-lg border-2 border-blue-500 dark:border-gray-700"            data-aos="zoom-in" data-aos-duration="1000"

        >
          <img
            className="h-60 w-full object-cover"
            src={`https://advocategvadmin.advgvdeshmukh.com/${image.imgfilepath}`} // Correctly constructing the URL
            alt={`Gallery image ${index + 1}`}
          />
        </div>
      ))}
    </div>
  );
}

export default DefaultGallery;
