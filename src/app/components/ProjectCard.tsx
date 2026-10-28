import { ImageWithFallback } from './figma/ImageWithFallback';
import { translations, Language, getCategoryKey } from '../translations';

interface ProjectCardProps {
  title: string;
  code: string;
  category: string;
  description: string;
  program: string;
  location: string;
  budget: number;
  image: string;
  language: Language;
}

export function ProjectCard({ title, code, category, description, program, location, budget, image, language }: ProjectCardProps) {
  const t = translations[language];
  return (
    <div className="bg-[#fbfbfb] relative rounded-[16px] shrink-0 w-full h-full flex flex-col">
      <div className="box-border content-stretch flex flex-col gap-[12px] items-center overflow-clip p-[16px] relative rounded-[inherit] w-full flex-1">
        <div className="h-[160px] relative rounded-[8px] shrink-0 w-full overflow-hidden bg-gray-200">
          {image ? (
            <ImageWithFallback 
              alt={title}
              className="absolute max-w-none object-cover rounded-[8px] size-full"
              src={image}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
              <p className="text-gray-400 text-[14px]">Без зображення</p>
            </div>
          )}
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
          <p className="font-['VinnytsiaSerif:Book',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#343a40] text-[18px] w-full font-[VinnytsiaSansBold]">{title}</p>
          
          <div className="content-stretch flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] items-start leading-[16px] not-italic relative shrink-0 text-[#343a40] text-[14px] w-full">
            <p className="opacity-50 relative shrink-0 w-full">{t.projectCode}:</p>
            <p className="relative shrink-0 w-full">{code}</p>
          </div>
          
          <div className="content-stretch flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] items-start leading-[16px] not-italic relative shrink-0 text-[#343a40] text-[14px] w-full">
            <p className="opacity-50 relative shrink-0 w-full">{t.category}:</p>
            <p className="relative shrink-0 w-full">{t[getCategoryKey(category)]}</p>
          </div>
          
          <div className="content-stretch flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] items-start leading-[16px] not-italic relative shrink-0 text-[#343a40] text-[14px] w-full">
            <p className="opacity-50 relative shrink-0 w-full">{t.program}:</p>
            <p className="-webkit-box overflow-ellipsis overflow-hidden relative shrink-0 w-full">{program}</p>
          </div>
          
          <div className="content-stretch flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] items-start leading-[16px] not-italic relative shrink-0 text-[#343a40] text-[14px] w-full">
            <p className="opacity-50 relative shrink-0 w-full">{t.location}:</p>
            <p className="relative shrink-0 w-full">{location}</p>
          </div>
          
          <div className="content-stretch flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] items-start leading-[16px] not-italic relative shrink-0 text-[#343a40] text-[14px] w-full">
            <p className="opacity-50 relative shrink-0 w-full">{t.budget}, {language === 'uk' ? 'грн' : 'UAH'}:</p>
            <p className="relative shrink-0 w-full">{budget.toLocaleString(language === 'uk' ? 'uk-UA' : 'en-US')}</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(52,58,64,0.14)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}