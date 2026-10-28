import { Project } from '../mockProjectsData';
import { translations, Language, getCategoryKey } from '../translations';

interface ProjectsTableProps {
  projects: Project[];
  onProjectClick?: (project: Project) => void;
  language: Language;
}

function HeaderCell({ text, width, align = 'left' }: { text: string; width?: string; align?: 'left' | 'right' }) {
  const widthClass = width || 'basis-0 grow min-h-px min-w-px';
  const isFlexible = !width;
  
  return (
    <div className={`bg-[#f7f7f7] ${isFlexible ? widthClass : `shrink-0 ${width}`} relative`} data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(10,10,10,0.1)] border-solid inset-0 pointer-events-none" />
      {isFlexible ? (
        <div className="flex flex-row items-center size-full">
          <div className="box-border content-stretch flex gap-[8px] items-center px-[12px] py-[16px] relative w-full">
            <p className={`basis-0 font-['VinnytsiaSansBold:Bold',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#343a40] text-[12px] tracking-[-0.48px] ${align === 'right' ? 'text-right' : ''}`}>{text}</p>
          </div>
        </div>
      ) : (
        <div className="box-border content-stretch flex gap-[8px] items-center px-[12px] py-[16px] relative">
          <p className={`basis-0 font-['VinnytsiaSansBold:Bold',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#343a40] text-[12px] tracking-[-0.48px] ${align === 'right' ? 'text-right' : ''}`}>{text}</p>
        </div>
      )}
    </div>
  );
}

function TableHeader({ language }: { language: Language }) {
  const t = translations[language];
  return (
    <div className="relative shrink-0 w-full" data-name="Table Header">
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] w-full">
        <HeaderCell text={t.projectCode} width="w-[104px]" />
        <HeaderCell text={language === 'uk' ? 'Назва' : 'Title'} />
        <HeaderCell text={t.category} width="w-[160px]" />
        <HeaderCell text={t.program} />
        <HeaderCell text={t.location} width="w-[112px]" />
        <HeaderCell text={t.budget} width="w-[120px]" align="right" />
      </div>
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(52,58,64,0.1)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableCell({ text, width, align = 'left' }: { text: string; width?: string; align?: 'left' | 'right' }) {
  const widthClass = width || 'basis-0 grow min-h-px min-w-px';
  const isFlexible = !width;
  
  return (
    <div className={`bg-white ${isFlexible ? widthClass : `shrink-0 ${width}`} h-[64px] relative`} data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(10,10,10,0.1)] border-solid inset-0 pointer-events-none" />
      {isFlexible ? (
        <div className="flex flex-row items-center size-full">
          <div className="box-border content-stretch flex gap-[8px] h-[64px] items-center px-[12px] py-[10px] relative w-full">
            <p className={`line-clamp-3 basis-0 font-['VinnytsiaSansReg:Book',sans-serif] grow leading-[12px] min-h-px min-w-px not-italic relative shrink-0 text-[#5b5b5b] text-[12px] tracking-[-0.24px] ${align === 'right' ? 'text-right' : ''}`}>{text}</p>
          </div>
        </div>
      ) : (
        <div className="box-border content-stretch flex gap-[8px] h-[64px] items-center px-[12px] py-[10px] relative">
          <p className={`line-clamp-3 basis-0 font-['VinnytsiaSansReg:Book',sans-serif] grow leading-[12px] min-h-px min-w-px not-italic relative shrink-0 text-[#5b5b5b] text-[12px] tracking-[-0.24px] ${align === 'right' ? 'text-right' : ''}`}>{text}</p>
        </div>
      )}
    </div>
  );
}

function TableRow({ project, onClick, language }: { project: Project; onClick?: () => void; language: Language }) {
  const t = translations[language];
  return (
    <div 
      className={`content-stretch flex items-center relative shrink-0 w-full ${onClick ? 'cursor-pointer hover:bg-gray-50 transition-colors' : ''}`}
      data-name="Table Row"
      onClick={onClick}
    >
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <TableCell text={project.code} width="w-[104px]" />
      <TableCell text={project.title} />
      <TableCell text={t[getCategoryKey(project.description)]} width="w-[160px]" />
      <TableCell text={project.program} />
      <TableCell text={project.location} width="w-[112px]" />
      <TableCell text={`${project.budget.toLocaleString(language === 'uk' ? 'uk-UA' : 'en-US')} ${language === 'uk' ? 'грн' : 'UAH'}`} width="w-[120px]" align="right" />
    </div>
  );
}

function TableBody({ projects, onProjectClick, language }: { projects: Project[]; onProjectClick?: (project: Project) => void; language: Language }) {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Table Body">
      {projects.map((project) => (
        <TableRow 
          key={project.id} 
          project={project}
          onClick={onProjectClick ? () => onProjectClick(project) : undefined}
          language={language}
        />
      ))}
    </div>
  );
}

export function ProjectsTable({ projects, onProjectClick, language }: ProjectsTableProps) {
  const t = translations[language];
  if (projects.length === 0) {
    return (
      <div className="bg-white rounded-[12px] p-[60px] flex items-center justify-center">
        <p className="font-['VinnytsiaSansReg:Book',sans-serif] text-[16px] text-[#343a40] opacity-50">
          {t.noProjects}
        </p>
      </div>
    );
  }

  return (
    <div className="relative rounded-[16px] flex-1 flex flex-col min-h-0" data-name="ProjectsTable">
      <div className="content-stretch flex flex-col items-start overflow-hidden relative rounded-[inherit] flex-1 min-h-0">
        <TableHeader language={language} />
        <div className="flex-1 overflow-y-auto w-full min-h-0">
          <TableBody projects={projects} onProjectClick={onProjectClick} language={language} />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}