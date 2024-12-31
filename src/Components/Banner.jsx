import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the CSS

const BannerCarousel = () => {
  const [images, setImages] = useState([]);

  // Fetch the banner images from the provided API
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('https://advocategvadmin.advgvdeshmukh.com/bannerselct.php');
        const result = await response.json();

        if (result.success) {
          setImages(result.data); // Assuming data is an array of image objects
        } else {
          console.error("Failed to fetch images:", result.message);
        }
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="relative">
      {/* Image Carousel */}
      <Carousel
       showArrows={false}
       autoPlay
       infiniteLoop
       showThumbs={false}
       showStatus={false}
       transitionTime={1000}
       className="w-full h-[800px]"
      >
        {images.length > 0 ? (
          images.map((image, index) => (
            <div key={index}>
              <img
                src={`https://advocategvadmin.advgvdeshmukh.com//uploads/${image.banner_image}`} // Assuming 'banner_image' is the image field
                alt={`Banner Image ${index + 1}`}
                className="w-full h-[800px] object-cover"
              />
            </div>
          ))
        ) : (
          <div className="flex justify-center items-center h-[800px] bg-[#0b1727]">
            <p className="text-white">Loading images...</p>
          </div>
        )}
      </Carousel>

      {/* Overlay Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0b1727] bg-opacity-50">
        <h1 className="text-white text-center text-3xl md:text-4xl lg:text-5xl font-bold p-6">
          Expert Legal Services Across Civil, Property, Corporate, Criminal, and Special Litigation Matters.
        </h1>
        <p className="text-white text-center text-xl md:text-3xl lg:text-3xl font-semibold p-6">
          Providing tailored legal solutions for individuals, businesses, and organizations across diverse legal areas.
        </p>
      </div>
    </div>
  );
};

export default BannerCarousel;
