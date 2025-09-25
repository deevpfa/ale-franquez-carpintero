import { Card } from "@/components/ui/card";
import { getRecentImages, getImagePath } from "@/data/worksImages";

const works = getRecentImages(12);

const WorkGallery = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {works.map((work) => (
        <Card key={work.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
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
  );
};

export default WorkGallery;