import React, { useEffect, useState, memo } from 'react';
import { Card, CardMedia, Typography, Box } from '@mui/material';
import { VideocamOff } from '@mui/icons-material';
import Breadcrumb from '../components/Breadcrumb';
import video from '../assets/images/video1.mp4';

const VideoGallery = memo(() => {
  const [videoError, setVideoError] = useState({});
  const [isVisible, setIsVisible] = useState({});

  const videos = [
    { src: video, alt: 'Cosmic Journey Video', caption: 'Cosmic Journey' },
  ];

  // Lazy loading with IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.dataset.index;
            setIsVisible((prev) => ({ ...prev, [index]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.gallery-card').forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  // Set document title and log video paths
  useEffect(() => {
    document.title = 'Video Gallery | OM Astro Solution';
    videos.forEach((video, index) => {
      console.log(`Video ${index + 1} path:`, video.src);
    });
  }, []);

  const handleVideoError = (index) => {
    console.error(`Failed to load video at index ${index}: ${videos[index].src}`);
    setVideoError((prev) => ({ ...prev, [index]: true }));
  };

  const handleVideoClick = (e, index) => {
    // Prevent lightbox opening when interacting with video controls
    if (e.target.tagName === 'VIDEO') {
      e.stopPropagation(); // Allow video controls to work
    } else {
      console.log('Video clicked, but no lightbox implemented');
      // Add lightbox functionality here if needed
    }
  };

  return (
    <>
      <Breadcrumb title="Video Gallery" />
      <div className="py-8 md:py-12">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          {videos.length === 0 ? (
            <Box className="flex flex-col items-center justify-center h-96 bg-white rounded-xl shadow-lg animate-slide-in">
              <VideocamOff className="text-gray-400 !text-8xl mb-4" />
              <Typography variant="h6" className="text-gray-600">
                No videos available right now
              </Typography>
            </Box>
          ) : (
            <div className="grid grid-cols-1 gap-8 place-items-center">
              {videos.map((video, index) => (
                <div
                  key={index}
                  className="gallery-card animate-slide-in max-w-4xl w-full"
                  data-index={index}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <Card
                    className="relative rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-2"
                    style={{ background: 'transparent' }}
                    onClick={(e) => handleVideoClick(e, index)}
                  >
                    <CardMedia
                      component="video"
                      src={videoError[index] || !isVisible[index] ? '' : video.src}
                      poster={
                        videoError[index]
                          ? 'https://via.placeholder.com/600x500?text=Video+Not+Found'
                          : undefined
                      }
                      preload="metadata"
                      controls
                      className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={() => handleVideoError(index)}
                    />

                  </Card>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
});

export default VideoGallery;