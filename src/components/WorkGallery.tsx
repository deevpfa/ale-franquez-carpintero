import { useState } from "react";
import { Card } from "@/components/ui/card";
import { getRecentImages, getImagePath, getAllImages } from "@/data/worksImages";
import ImageGalleryModal from "./ImageGalleryModal";

const works = getRecentImages(12);
const allImages = getAllImages();

const WorkGallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleImageClick = (clickedWork: typeof works[0]) => {
    // Find the index of the clicked image in the complete images array
    const imageIndex = allImages.findIndex(img => img.id === clickedWork.id);
    setSelectedImageIndex(imageIndex >= 0 ? imageIndex : 0);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {works.map((work) => (
          <Card 
            key={work.id} 
            className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            onClick={() => handleImageClick(work)}
          >
            <div className="relative overflow-hidden">
              <img
                src={getImagePath(work.filename)}
                alt={work.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-sm bg-wood-medium/80 px-2 py-1 rounded-full">
                  {work.category}
                </span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-display font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                {work.title}
              </h3>
            </div>
          </Card>
        ))}
      </div>

      <ImageGalleryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        images={allImages}
        initialIndex={selectedImageIndex}
      />
    </>
  );
};

export default WorkGallery;