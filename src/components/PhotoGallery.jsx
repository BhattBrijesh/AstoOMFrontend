import React, { useEffect, useState, useCallback, memo } from 'react';
import { Card, CardMedia, Typography, IconButton, Box } from '@mui/material';
import { ImageNotSupported, Close, ChevronLeft, ChevronRight } from '@mui/icons-material';
import Breadcrumb from '../components/Breadcrumb';
import img1 from '../assets/images/banner4.jpeg';
import img5 from '../assets/images/banner5.jpeg';
import img6 from '../assets/images/banner6.jpeg';
import img4 from '../assets/images/banner1.jpeg';
import img2 from '../assets/images/banner7.jpeg';
import img3 from '../assets/images/banner8.jpeg';

import img7 from '../assets/images/galleryimg1.jpeg';
import img8 from '../assets/images/banner75.png';
import img9 from '../assets/images/banner71.jpeg';

const PhotoGallery = memo(() => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [imageError, setImageError] = useState({});

  const photos = [
    { src: img1, alt: 'Cosmic Galaxy', caption: 'Explore the cosmos' },
    { src: img2, alt: 'Stellar Nebula', caption: 'Stellar beauty' },
    { src: img3, alt: 'Mystic Stars', caption: 'Mystic horizons' },
    { src: img4, alt: 'Celestial Sky', caption: 'Celestial wonders' },
    { src: img5, alt: 'Galactic View', caption: 'Galactic dreams' },
    { src: img6, alt: 'Infinite Space', caption: 'Infinite skies' },
    { src: img7, alt: 'Infinite Space', caption: 'Infinite skies' },
    { src: img8, alt: 'Infinite Space', caption: 'Infinite skies' },
    { src: img9, alt: 'Infinite Space', caption: 'Infinite skies' },
  ];

  // Set document title and log image paths
  useEffect(() => {
    document.title = 'Photo Gallery | Astro Om Solution';
    photos.forEach((photo, index) => {

    });
  }, []);

  const openLightbox = useCallback((index) => {

    setSelectedImageIndex(index);
  }, [photos]);

  const closeLightbox = useCallback(() => {

    setSelectedImageIndex(null);
  }, []);

  const goToPrevious = useCallback(() => {
    setSelectedImageIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  }, [photos.length]);

  const goToNext = useCallback(() => {
    setSelectedImageIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  }, [photos.length]);

  const handleImageError = useCallback((index) => {
    console.error(`Failed to load image at index ${index}: ${photos[index].src}`);
    setImageError((prev) => ({ ...prev, [index]: true }));
  }, [photos]);

  return (
    <div className="font-sans min-h-screen bg-transparent">
      <Breadcrumb title="Photo Gallery" />

      {/* Gallery Section */}
      <div className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-1 sm:px-2 lg:px-2">
          {photos.length === 0 ? (
            <Box className="flex flex-col items-center justify-center h-96 bg-white/80 rounded-xl shadow-lg">
              <ImageNotSupported className="text-gray-400 !text-8xl mb-4" />
              <Typography variant="h6" className="text-gray-600">
                No photos available right now
              </Typography>
            </Box>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {photos.map((photo, index) => (
                <div
                  key={index}
                >
                  <Card
                    className="relative rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-2"
                  >
                    <CardMedia
                      component="img"
                      image={
                        imageError[index]
                          ? 'https://via.placeholder.com/600x500?text=Image+Not+Found'
                          : photo.src
                      }
                      alt={photo.alt}
                      loading="lazy" // Native lazy loading
                      className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110 cursor-pointer"
                      onClick={() => openLightbox(index)}
                      onError={() => handleImageError(index)}
                    />
                  </Card>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-lg flex items-center justify-center z-50"
          onClick={closeLightbox}
        >
          <Box
            className="relative max-w-[90vw] w-full mx-4 md:mx-8"
            onClick={(e) => e.stopPropagation()}
          >
            <CardMedia
              component="img"
              image={
                imageError[selectedImageIndex]
                  ? 'https://via.placeholder.com/1200x800?text=Image+Not+Found'
                  : photos[selectedImageIndex]?.src
              }
              alt={photos[selectedImageIndex]?.alt}
              className="w-full h-auto max-h-[85vh] object-contain rounded-xl shadow-2xl"
              onError={() => handleImageError(selectedImageIndex)}
            />
            <Typography className="text-white text-center mt-4 text-xl font-medium">
              {photos[selectedImageIndex]?.caption}
            </Typography>
            <IconButton
              className="absolute top-4 right-4 bg-white/80 text-black rounded-full hover:bg-white transition-all duration-300"
              onClick={closeLightbox}
            >
              <Close />
            </IconButton>
            <IconButton
              className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 text-black rounded-full hover:bg-white transition-all duration-300"
              onClick={goToPrevious}
            >
              <ChevronLeft />
            </IconButton>
            <IconButton
              className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 text-black rounded-full hover:bg-white transition-all duration-300"
              onClick={goToNext}
            >
              <ChevronRight />
            </IconButton>
          </Box>
        </div>
      )}

      {/* Custom Animation Styles */}
      <style>
        {`
          @keyframes slideIn {
            from { opacity: 0; transform: translateY(50px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-slide-in {
            animation: slideIn 0.8s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
});

export default PhotoGallery;