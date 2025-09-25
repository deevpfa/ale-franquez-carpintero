import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getImagePath, type WorkImage } from "@/data/worksImages";

interface ImageGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: WorkImage[];
  initialIndex: number;
}

const ImageGalleryModal = ({ isOpen, onClose, images, initialIndex }: ImageGalleryModalProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen) return;
      
      switch (event.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowLeft":
          goToPrevious();
          break;
        case "ArrowRight":
          goToNext();
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentIndex]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setIsZoomed(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setIsZoomed(false);
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  if (!isOpen) return null;

  const currentImage = images[currentIndex];

  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
      {/* Close Button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={onClose}
        className="absolute top-4 right-4 z-10 text-white hover:bg-white/10 rounded-full"
      >
        <X className="h-6 w-6" />
      </Button>

      {/* Zoom Button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleZoom}
        className="absolute top-4 left-4 z-10 text-white hover:bg-white/10 rounded-full"
      >
        {isZoomed ? <ZoomOut className="h-6 w-6" /> : <ZoomIn className="h-6 w-6" />}
      </Button>

      {/* Previous Button */}
      {images.length > 1 && (
        <Button
          variant="ghost"
          size="icon"
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/10 rounded-full"
        >
          <ChevronLeft className="h-8 w-8" />
        </Button>
      )}

      {/* Next Button */}
      {images.length > 1 && (
        <Button
          variant="ghost"
          size="icon"
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/10 rounded-full"
        >
          <ChevronRight className="h-8 w-8" />
        </Button>
      )}

      {/* Main Image */}
      <div className="relative w-full h-full flex items-center justify-center p-4">
        <img
          src={getImagePath(currentImage.filename)}
          alt={currentImage.title}
          className={`max-w-full max-h-full object-contain transition-transform duration-300 ${
            isZoomed ? "scale-150" : "scale-100"
          }`}
          style={{
            cursor: isZoomed ? "zoom-out" : "zoom-in"
          }}
          onClick={toggleZoom}
        />
      </div>

      {/* Image Info */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
        <div className="text-center text-white">
          <h3 className="text-xl font-display font-semibold mb-2">
            {currentImage.title}
          </h3>
          <div className="flex items-center justify-center gap-4 text-sm opacity-90">
            <span className="bg-wood-medium/80 px-3 py-1 rounded-full">
              {currentImage.category}
            </span>
            <span>{new Date(currentImage.date).getFullYear()}</span>
            <span>{currentIndex + 1} de {images.length}</span>
          </div>
        </div>
      </div>

      {/* Thumbnail Navigation */}
      {images.length > 1 && (
        <div className="absolute bottom-20 left-0 right-0 flex justify-center">
          <div className="flex gap-2 max-w-full overflow-x-auto px-4 scrollbar-hide">
            {images.map((image, index) => (
              <button
                key={image.id}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsZoomed(false);
                }}
                className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                  index === currentIndex
                    ? "border-white scale-110"
                    : "border-white/30 hover:border-white/60"
                }`}
              >
                <img
                  src={getImagePath(image.filename)}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Click outside to close */}
      <div
        className="absolute inset-0 -z-10"
        onClick={onClose}
      />
    </div>
  );
};

export default ImageGalleryModal;