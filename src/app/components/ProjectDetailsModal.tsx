import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Project } from "../mockProjectsData";
import { useState } from "react";
import { translations, Language, getCategoryKey } from '../translations';

interface ProjectDetailsModalProps {
  project: Project;
  onClose: () => void;
  language: Language;
}

export function ProjectDetailsModal({ project, onClose, language }: ProjectDetailsModalProps) {
  const t = translations[language];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Only use the single project image if it exists
  const images = project.image ? [project.image] : [];
  const hasImages = images.length > 0;

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-[24px] shadow-[0px_12px_32px_8px_rgba(0,0,0,0.2)] w-full max-w-[644px] max-h-[90vh] overflow-y-auto relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 bg-white/30 backdrop-blur-sm rounded-full p-2 hover:bg-white/50 transition-colors"
          aria-label="Закрити"
        >
          <X className="w-6 h-6 text-white" />
        </button>

        {/* Image or Placeholder */}
        <div className="relative h-[272px] w-full bg-gray-200">
          {hasImages ? (
            <>
              <img
                src={images[currentImageIndex]}
                alt={project.title}
                className="w-full h-full object-cover"
              />

              {/* Previous Button - only show if multiple images */}
              {images.length > 1 && (
                <button
                  onClick={handlePrevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-sm rounded-full w-[38px] h-[38px] flex items-center justify-center hover:bg-white/50 transition-colors border-2 border-white/25"
                  aria-label="Попереднє зображення"
                >
                  <ChevronLeft className="w-5 h-5 text-white" />
                </button>
              )}

              {/* Next Button - only show if multiple images */}
              {images.length > 1 && (
                <button
                  onClick={handleNextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-sm rounded-full w-[38px] h-[38px] flex items-center justify-center hover:bg-white/50 transition-colors border-2 border-white/25"
                  aria-label="Наступне зображення"
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>
              )}

              {/* Pagination Dots - only show if multiple images */}
              {images.length > 1 && (
                <div className="absolute left-1/2 -translate-x-1/2 bottom-4 flex gap-5">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full border border-gray-800/50 transition-colors ${
                        index === currentImageIndex ? 'bg-[#C95555]' : 'bg-white'
                      }`}
                      aria-label={`Зображення ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-gray-400 text-[18px]">Без зображення</p>
            </div>
          )}
        </div>

        {/* Project Details */}
        <div className="p-6 flex flex-col gap-4">
          {/* Title */}
          <h2 className="font-['VinnytsiaSerif:Book',sans-serif] font-[VinnytsiaSansBold] text-[#343a40] text-[32px] leading-[32px] tracking-[-1.28px]">
            {project.title}
          </h2>

          {/* Code */}
          <div className="flex flex-col gap-2">
            <p className="font-['VinnytsiaSansReg:Book',sans-serif] text-[#343a40] opacity-70 text-[16px] leading-[24px]">
              {t.projectCode}:
            </p>
            <p className="font-['VinnytsiaSansReg:Book',sans-serif] text-[#343a40] text-[16px] leading-[24px]">
              {project.code}
            </p>
          </div>

          {/* Category/Description */}
          <div className="flex flex-col gap-2">
            <p className="font-['VinnytsiaSansReg:Book',sans-serif] text-[#343a40] opacity-70 text-[16px] leading-[24px]">
              {t.category}:
            </p>
            <p className="font-['VinnytsiaSansReg:Book',sans-serif] text-[#343a40] text-[16px] leading-[24px]">
              {t[getCategoryKey(project.description)]}
            </p>
          </div>

          {/* Program */}
          <div className="flex flex-col gap-2">
            <p className="font-['VinnytsiaSansReg:Book',sans-serif] text-[#343a40] opacity-70 text-[16px] leading-[24px]">
              {t.program}:
            </p>
            <p className="font-['VinnytsiaSansReg:Book',sans-serif] text-[#343a40] text-[16px] leading-[24px]">
              {project.program}
            </p>
          </div>

          {/* District */}
          <div className="flex flex-col gap-2">
            <p className="font-['VinnytsiaSansReg:Book',sans-serif] text-[#343a40] opacity-70 text-[16px] leading-[24px]">
              {t.districts}:
            </p>
            <p className="font-['VinnytsiaSansReg:Book',sans-serif] text-[#343a40] text-[16px] leading-[24px]">
              {project.district}
            </p>
          </div>

          {/* Location */}
          <div className="flex flex-col gap-2">
            <p className="font-['VinnytsiaSansReg:Book',sans-serif] text-[#343a40] opacity-70 text-[16px] leading-[24px]">
              {t.location}:
            </p>
            <p className="font-['VinnytsiaSansReg:Book',sans-serif] text-[#343a40] text-[16px] leading-[24px]">
              {project.location}
            </p>
          </div>

          {/* Year */}
          <div className="flex flex-col gap-2">
            <p className="font-['VinnytsiaSansReg:Book',sans-serif] text-[#343a40] opacity-70 text-[16px] leading-[24px]">
              {language === 'uk' ? 'Рік' : 'Year'}:
            </p>
            <p className="font-['VinnytsiaSansReg:Book',sans-serif] text-[#343a40] text-[16px] leading-[24px]">
              {project.year}
            </p>
          </div>

          {/* Budget */}
          <div className="flex flex-col gap-2">
            <p className="font-['VinnytsiaSansReg:Book',sans-serif] text-[#343a40] opacity-70 text-[16px] leading-[24px]">
              {t.budget}, {language === 'uk' ? 'грн' : 'UAH'}:
            </p>
            <p className="font-['VinnytsiaSansReg:Book',sans-serif] text-[#343a40] text-[16px] leading-[24px]">
              {project.budget.toLocaleString(language === 'uk' ? 'uk-UA' : 'en-US')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}