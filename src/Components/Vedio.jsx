import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Featurvedio() {
  const [videos, setVideos] = useState([]);
  const [activeVideo, setActiveVideo] = useState('');

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get('https://advocategvadmin.advgvdeshmukh.com/vedioselect.php');
        if (response.data.success) {
          const videoList = response.data.data;
          setVideos(videoList);

          // Set the first video as active if available
          if (videoList.length > 0) {
            setActiveVideo(`https://advocategvadmin.advgvdeshmukh.com/${videoList[0].file_path}`);
          }
        } else {
          console.error('Failed to fetch videos:', response.data.message);
        }
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, []);

  // Handle video click
  const handleVideoClick = (videoPath) => {
    setActiveVideo(`https://advocategvadmin.advgvdeshmukh.com/${videoPath}`);
  };

  return (
    <div className="grid gap-4">
      <div>
        {/* Display the active video */}
        {activeVideo && (
          <video
          data-aos="zoom-in" data-aos-duration="1000"

            key={activeVideo} // Force the video element to reload by using the activeVideo as the key
            className="h-auto w-full max-w-full rounded-lg object-cover object-center border-4 border-blue-500 dark:border-gray-700 md:h-[480px] border-xl"
            controls
            autoPlay // Automatically play the video when it becomes active
          >
            <source src={activeVideo} type="video/mp4" />
          </video>
        )}
      </div>
      <div className="grid grid-cols-5 gap-4">
        {videos.map((video, index) => (
          <div
          data-aos="zoom-in" data-aos-duration="1000"

            key={index}
            onClick={() => handleVideoClick(video.file_path)}
            className="cursor-pointer border-2 border-blue-500 dark:border-gray-700  rounded-lg"
          >
            <video
              className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[96px]"
              src={`https://advocategvadmin.advgvdeshmukh.com/${video.file_path}`}
              muted
              controls={false} // Remove controls from thumbnail videos
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Featurvedio;
