import { useState, useRef, useEffect, useMemo } from 'react';
import { ProjectCard } from './ProjectCard';
import { mockProjects, districts, directions, Project } from '../mockProjectsData';
import svgFilterPaths from '../imports/svg-0mi2trieta';
import svgPaths from '../imports/svg-6u61ml1bbt';
import { ProjectsTable } from './ProjectsTable';
import { ProjectDetailsModal } from './ProjectDetailsModal';
import { translations, Language, getCategoryKey, getDistrictKey, getProgramKey } from '../translations';

const plusIconPath = "M0 4.67H4.67V0H5.67V4.67H10.33V5.67H5.67V10.33H4.67V5.67H0V4.67Z";
// Minus icon path for collapse button (centered to match plus icon)
const minusIconPath = "M0 4.67H10.33V5.67H0V4.67Z";

interface ProjectsListProps {
  initialSelectedDistrict?: string | null;
  language: Language;
}

export function ProjectsList({ initialSelectedDistrict, language }: ProjectsListProps) {
  const t = translations[language];
  const [selectedDistricts, setSelectedDistricts] = useState<string[]>(
    initialSelectedDistrict ? [initialSelectedDistrict] : []
  );
  const [selectedDirections, setSelectedDirections] = useState<string[]>([]);
  const [selectedPrograms, setSelectedPrograms] = useState<string[]>([]);
  const [yearFrom, setYearFrom] = useState(1991);
  const [yearTo, setYearTo] = useState(2025);
  const [budgetFrom, setBudgetFrom] = useState(50000);
  const [budgetTo, setBudgetTo] = useState(5000000);
  const [currentPage, setCurrentPage] = useState(1);
  const [districtSearch, setDistrictSearch] = useState('');
  const [directionSearch, setDirectionSearch] = useState('');
  const [programSearch, setProgramSearch] = useState('');
  const [projectSearch, setProjectSearch] = useState('');
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [isPeriodCollapsed, setIsPeriodCollapsed] = useState(false);
  const [isBudgetCollapsed, setIsBudgetCollapsed] = useState(false);
  const [isDistrictCollapsed, setIsDistrictCollapsed] = useState(false);
  const [isDirectionCollapsed, setIsDirectionCollapsed] = useState(false);
  const [isProgramCollapsed, setIsProgramCollapsed] = useState(false);
  const [isDistrictSearchFocused, setIsDistrictSearchFocused] = useState(false);
  const [isDirectionSearchFocused, setIsDirectionSearchFocused] = useState(false);
  const [isProgramDropdownOpen, setIsProgramDropdownOpen] = useState(false);
  const [projectSearchFocused, setProjectSearchFocused] = useState(false);
  const [hoveredProgram, setHoveredProgram] = useState<string | null>(null);
  const [programPopoverPosition, setProgramPopoverPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<"start" | "end" | null>(null);
  const [isDraggingBudget, setIsDraggingBudget] = useState<"start" | "end" | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);
  const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'expensive' | 'cheapest' | 'nameAZ' | 'nameZA'>('newest');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  // Loading states
  const [isLoadingData, setIsLoadingData] = useState(false);
  const [isLoadingViewChange, setIsLoadingViewChange] = useState(false);
  
  const sliderRef = useRef<HTMLDivElement>(null);
  const programDropdownRef = useRef<HTMLDivElement>(null);
  const sortDropdownRef = useRef<HTMLDivElement>(null);
  
  // Format budget for display
  const formatBudget = (value: number): string => {
    if (value >= 1000000) {
      const millions = value / 1000000;
      return millions % 1 === 0 ? `${millions} ${t.million}` : `${millions.toFixed(1)} ${t.million}`;
    } else {
      const thousands = value / 1000;
      return thousands % 1 === 0 ? `${thousands} ${t.thousand}` : `${thousands.toFixed(0)} ${t.thousand}`;
    }
  };
  
  // Handlers with loading delays
  const handleFilterChange = (callback: () => void) => {
    setIsLoadingData(true);
    setTimeout(() => {
      callback();
      setTimeout(() => setIsLoadingData(false), 350);
    }, 100);
  };

  const handleViewModeChange = (mode: 'grid' | 'list') => {
    if (mode === viewMode) return;
    setIsLoadingViewChange(true);
    setTimeout(() => {
      setViewMode(mode);
      setIsLoadingViewChange(false);
    }, 400);
  };

  const handlePageChange = (page: number) => {
    setIsLoadingData(true);
    setTimeout(() => {
      setCurrentPage(page);
      setTimeout(() => setIsLoadingData(false), 300);
    }, 200);
  };

  const handleSortChange = (sort: 'newest' | 'oldest' | 'expensive' | 'cheapest' | 'nameAZ' | 'nameZA') => {
    setIsLoadingData(true);
    setTimeout(() => {
      setSortBy(sort);
      setIsSortDropdownOpen(false);
      setCurrentPage(1);
      setTimeout(() => setIsLoadingData(false), 350);
    }, 150);
  };

  // Get unique programs from projects
  const programs = useMemo(() => {
    return Array.from(new Set(mockProjects.map(p => p.program))).sort();
  }, []);

  const filteredProjects = useMemo(() => {
    const filtered = mockProjects.filter(project => {
      const districtMatch = selectedDistricts.length === 0 || selectedDistricts.includes(project.district);
      const directionMatch = selectedDirections.length === 0 || selectedDirections.includes(project.direction);
      const programMatch = selectedPrograms.length === 0 || selectedPrograms.includes(project.program);
      const yearMatch = project.year >= yearFrom && project.year <= yearTo;
      const budgetMatch = project.budget >= budgetFrom && project.budget <= budgetTo;
      const searchMatch = projectSearch === '' || 
        project.title.toLowerCase().includes(projectSearch.toLowerCase()) ||
        project.description.toLowerCase().includes(projectSearch.toLowerCase()) ||
        project.program.toLowerCase().includes(projectSearch.toLowerCase());
      return districtMatch && directionMatch && programMatch && yearMatch && budgetMatch && searchMatch;
    });

    // Apply sorting
    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return b.year - a.year;
        case 'oldest':
          return a.year - b.year;
        case 'expensive':
          return b.budget - a.budget;
        case 'cheapest':
          return a.budget - b.budget;
        case 'nameAZ':
          return a.title.localeCompare(b.title, 'uk');
        case 'nameZA':
          return b.title.localeCompare(a.title, 'uk');
        default:
          return 0;
      }
    });

    return sorted;
  }, [mockProjects, selectedDistricts, selectedDirections, selectedPrograms, yearFrom, yearTo, budgetFrom, budgetTo, projectSearch, sortBy]);

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedProjects = filteredProjects.slice(startIndex, startIndex + itemsPerPage);

  const filteredDistricts = districts.filter(d => 
    d.toLowerCase().includes(districtSearch.toLowerCase())
  );

  const filteredDirections = directions.filter(d => 
    d.toLowerCase().includes(directionSearch.toLowerCase())
  );

  const toggleDistrict = (district: string) => {
    handleFilterChange(() => {
      setSelectedDistricts(prev => 
        prev.includes(district) 
          ? prev.filter(d => d !== district)
          : [...prev, district]
      );
      setCurrentPage(1);
    });
  };

  const toggleDirection = (direction: string) => {
    handleFilterChange(() => {
      setSelectedDirections(prev => 
        prev.includes(direction) 
          ? prev.filter(d => d !== direction)
          : [...prev, direction]
      );
      setCurrentPage(1);
    });
  };

  const toggleProgram = (program: string) => {
    handleFilterChange(() => {
      setSelectedPrograms(prev => 
        prev.includes(program) 
          ? prev.filter(p => p !== program)
          : [...prev, program]
      );
      setCurrentPage(1);
    });
  };

  const hasActiveFilters = selectedDistricts.length > 0 || selectedDirections.length > 0 || selectedPrograms.length > 0 || yearFrom !== 1991 || yearTo !== 2025 || budgetFrom !== 50000 || budgetTo !== 5000000;

  const clearFilters = () => {
    setSelectedDistricts([]);
    setSelectedDirections([]);
    setSelectedPrograms([]);
    setYearFrom(1991);
    setYearTo(2025);
    setBudgetFrom(50000);
    setBudgetTo(5000000);
    setDistrictSearch('');
    setDirectionSearch('');
    setProgramSearch('');
    setCurrentPage(1);
  };

  // Handle slider drag
  const handleSliderMouseDown = (handle: "start" | "end") => (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(handle);
  };

  const handleSliderMouseMove = (e: MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;

    const rect = sliderRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percentage = x / rect.width;
    const year = Math.round(1991 + percentage * (2025 - 1991));

    if (isDragging === "start" && year <= yearTo) {
      setYearFrom(year);
    } else if (isDragging === "end" && year >= yearFrom) {
      setYearTo(year);
    }
  };

  const handleSliderMouseUp = () => {
    setIsDragging(null);
  };

  // Handle budget slider drag
  const budgetSliderRef = useRef<HTMLDivElement>(null);
  
  const handleBudgetSliderMouseDown = (handle: "start" | "end") => (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDraggingBudget(handle);
  };

  const handleBudgetSliderMouseMove = (e: MouseEvent) => {
    if (!isDraggingBudget || !budgetSliderRef.current) return;

    const rect = budgetSliderRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percentage = x / rect.width;
    const budget = Math.round(50000 + percentage * (5000000 - 50000));

    if (isDraggingBudget === "start" && budget <= budgetTo) {
      setBudgetFrom(budget);
    } else if (isDraggingBudget === "end" && budget >= budgetFrom) {
      setBudgetTo(budget);
    }
  };

  const handleBudgetSliderMouseUp = () => {
    setIsDraggingBudget(null);
  };

  // Add/remove mouse event listeners
  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleSliderMouseMove);
      window.addEventListener("mouseup", handleSliderMouseUp);
      return () => {
        window.removeEventListener("mousemove", handleSliderMouseMove);
        window.removeEventListener("mouseup", handleSliderMouseUp);
      };
    }
  }, [isDragging, yearFrom, yearTo]);

  useEffect(() => {
    if (isDraggingBudget) {
      window.addEventListener("mousemove", handleBudgetSliderMouseMove);
      window.addEventListener("mouseup", handleBudgetSliderMouseUp);
      return () => {
        window.removeEventListener("mousemove", handleBudgetSliderMouseMove);
        window.removeEventListener("mouseup", handleBudgetSliderMouseUp);
      };
    }
  }, [isDraggingBudget, budgetFrom, budgetTo]);

  // Close program dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (programDropdownRef.current && !programDropdownRef.current.contains(event.target as Node)) {
        setIsProgramDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close sort dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sortDropdownRef.current && !sortDropdownRef.current.contains(event.target as Node)) {
        setIsSortDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="flex gap-[24px] w-full h-full min-h-0">
      {/* Sidebar */}
      <div className="bg-[#f7f7f7] box-border content-stretch flex flex-col gap-[24px] items-start px-[24px] py-[32px] rounded-[16px] shrink-0 w-full lg:w-[312px] overflow-y-auto self-start max-h-full">
        {/* Filters Title with Clear Button */}
        <div className="content-stretch flex gap-[8px] items-center justify-between relative shrink-0 w-full">
          <p className="font-['VinnytsiaSansBold:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#343a40] text-[24px] tracking-[-0.96px]">{t.filters}</p>
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="bg-white box-border content-stretch flex gap-[4px] items-center justify-center pl-[8px] pr-[12px] py-[6px] relative rounded-[999px] shrink-0 hover:bg-[#f7f7f7] transition-colors"
            >
              <div aria-hidden="true" className="absolute border border-[rgba(52,58,64,0.1)] border-solid inset-0 pointer-events-none rounded-[999px]" />
              <div className="relative shrink-0 size-[16px]">
                <div className="absolute left-[-2px] size-[24px] top-[-2px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <path d={svgFilterPaths.p5f5ce80} fill="#343A40" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#343a40] text-[14px] text-nowrap tracking-[-0.14px]">
                <p className="leading-[16px] whitespace-pre">Очистити</p>
              </div>
            </button>
          )}
        </div>

        {/* Period Section */}
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
          <button
            onClick={() => setIsPeriodCollapsed(!isPeriodCollapsed)}
            className="content-stretch flex items-center justify-between relative shrink-0 w-full group"
          >
            <p className="font-['VinnytsiaSerif:Book',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#343a40] text-[18px] text-nowrap whitespace-pre">{t.period}</p>
            <div className="bg-white box-border content-stretch flex items-center justify-center p-[4px] relative rounded-[999px] shrink-0 size-[24px]">
              <div className="relative shrink-0 size-[16px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
                  <path d={isPeriodCollapsed ? plusIconPath : minusIconPath} fill="#343A40" />
                </svg>
              </div>
            </div>
          </button>

          {!isPeriodCollapsed && (
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              {/* Slider */}
              <div className="relative shrink-0 w-full px-[8px] py-[8px]">
                <div
                  ref={sliderRef}
                  className="relative w-full h-[4px] bg-[#e3e3e3] rounded-[4px] cursor-pointer"
                >
                  {/* Active track */}
                  <div
                    className="absolute bg-[#c95555] h-[4px] rounded-[100px] top-0"
                    style={{
                      left: `${((yearFrom - 1991) / (2025 - 1991)) * 100}%`,
                      right: `${100 - ((yearTo - 1991) / (2025 - 1991)) * 100}%`,
                    }}
                  />
                  
                  {/* Start handle */}
                  <div
                    className="absolute flex items-center justify-center size-[48px] top-1/2 -translate-y-1/2 cursor-grab active:cursor-grabbing"
                    style={{
                      left: `calc(${((yearFrom - 1991) / (2025 - 1991)) * 100}% - 24px)`,
                    }}
                    onMouseDown={handleSliderMouseDown("start")}
                  >
                    <svg className="size-[28px]" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
                      <defs>
                        <filter id="shadow-proj-start" x="-50%" y="-50%" width="200%" height="200%">
                          <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.2"/>
                        </filter>
                      </defs>
                      <rect fill="#FFFBFE" height="20" rx="10" width="20" x="4" y="3" />
                      <circle cx="14" cy="13" r="10" fill="#C95555" filter="url(#shadow-proj-start)" />
                    </svg>
                  </div>
                  
                  {/* End handle */}
                  <div
                    className="absolute flex items-center justify-center size-[48px] top-1/2 -translate-y-1/2 cursor-grab active:cursor-grabbing"
                    style={{
                      left: `calc(${((yearTo - 1991) / (2025 - 1991)) * 100}% - 24px)`,
                    }}
                    onMouseDown={handleSliderMouseDown("end")}
                  >
                    <svg className="size-[28px]" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
                      <defs>
                        <filter id="shadow-proj-end" x="-50%" y="-50%" width="200%" height="200%">
                          <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.2"/>
                        </filter>
                      </defs>
                      <rect fill="#FFFBFE" height="20" rx="10" width="20" x="4" y="3" />
                      <circle cx="14" cy="13" r="10" fill="#C95555" filter="url(#shadow-proj-end)" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Year inputs */}
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0">
                  <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[12px] min-w-full not-italic relative shrink-0 text-[#49454f] text-[10px] text-center tracking-[-0.2px] w-[min-content]">{t.yearFrom}</p>
                  <div className="content-stretch flex flex-col gap-[10px] items-center relative rounded-[999px] shrink-0 w-[56px]">
                    <div aria-hidden="true" className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-[999px]" />
                    <input
                      type="number"
                      value={yearFrom}
                      onChange={(e) => setYearFrom(Math.min(Number(e.target.value), yearTo))}
                      className="w-full h-[28px] text-center font-['VinnytsiaSansReg:Book',sans-serif] text-[12px] text-[#343a40] tracking-[-0.24px] border-none outline-none bg-transparent"
                      min={1991}
                      max={yearTo}
                    />
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0">
                  <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[12px] min-w-full not-italic relative shrink-0 text-[#49454f] text-[10px] text-center tracking-[-0.2px] w-[min-content]">{t.yearTo}</p>
                  <div className="content-stretch flex flex-col gap-[10px] items-center relative rounded-[999px] shrink-0 w-[56px]">
                    <div aria-hidden="true" className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-[999px]" />
                    <input
                      type="number"
                      value={yearTo}
                      onChange={(e) => setYearTo(Math.max(Number(e.target.value), yearFrom))}
                      className="w-full h-[28px] text-center font-['VinnytsiaSansReg:Book',sans-serif] text-[12px] text-[#343a40] tracking-[-0.24px] border-none outline-none bg-transparent"
                      min={yearFrom}
                      max={2025}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="h-0 relative shrink-0 w-full">
          <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 264 1">
              <path d="M0 0.5H264" stroke="#343A40" strokeOpacity="0.2" />
            </svg>
          </div>
        </div>

        {/* Budget Section */}
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
          <button
            onClick={() => setIsBudgetCollapsed(!isBudgetCollapsed)}
            className="content-stretch flex items-center justify-between relative shrink-0 w-full group"
          >
            <p className="font-['VinnytsiaSerif:Book',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#343a40] text-[18px] text-nowrap whitespace-pre">{t.budgetRange}</p>
            <div className="bg-white box-border content-stretch flex items-center justify-center p-[4px] relative rounded-[999px] shrink-0 size-[24px]">
              <div className="relative shrink-0 size-[16px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
                  <path d={isBudgetCollapsed ? plusIconPath : minusIconPath} fill="#343A40" />
                </svg>
              </div>
            </div>
          </button>

          {!isBudgetCollapsed && (
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              {/* Slider */}
              <div className="relative shrink-0 w-full px-[8px] py-[8px]">
                <div
                  ref={budgetSliderRef}
                  className="relative w-full h-[4px] bg-[#e3e3e3] rounded-[4px] cursor-pointer"
                >
                  {/* Active track */}
                  <div
                    className="absolute bg-[#c95555] h-[4px] rounded-[100px] top-0"
                    style={{
                      left: `${((budgetFrom - 50000) / (5000000 - 50000)) * 100}%`,
                      right: `${100 - ((budgetTo - 50000) / (5000000 - 50000)) * 100}%`,
                    }}
                  />
                  
                  {/* Start handle */}
                  <div
                    className="absolute flex items-center justify-center size-[48px] top-1/2 -translate-y-1/2 cursor-grab active:cursor-grabbing"
                    style={{
                      left: `calc(${((budgetFrom - 50000) / (5000000 - 50000)) * 100}% - 24px)`,
                    }}
                    onMouseDown={handleBudgetSliderMouseDown("start")}
                  >
                    <svg className="size-[28px]" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
                      <defs>
                        <filter id="shadow-budget-start" x="-50%" y="-50%" width="200%" height="200%">
                          <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.2"/>
                        </filter>
                      </defs>
                      <rect fill="#FFFBFE" height="20" rx="10" width="20" x="4" y="3" />
                      <circle cx="14" cy="13" r="10" fill="#C95555" filter="url(#shadow-budget-start)" />
                    </svg>
                  </div>
                  
                  {/* End handle */}
                  <div
                    className="absolute flex items-center justify-center size-[48px] top-1/2 -translate-y-1/2 cursor-grab active:cursor-grabbing"
                    style={{
                      left: `calc(${((budgetTo - 50000) / (5000000 - 50000)) * 100}% - 24px)`,
                    }}
                    onMouseDown={handleBudgetSliderMouseDown("end")}
                  >
                    <svg className="size-[28px]" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
                      <defs>
                        <filter id="shadow-budget-end" x="-50%" y="-50%" width="200%" height="200%">
                          <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.2"/>
                        </filter>
                      </defs>
                      <rect fill="#FFFBFE" height="20" rx="10" width="20" x="4" y="3" />
                      <circle cx="14" cy="13" r="10" fill="#C95555" filter="url(#shadow-budget-end)" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Budget inputs */}
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0">
                  <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[12px] min-w-full not-italic relative shrink-0 text-[#49454f] text-[10px] text-center tracking-[-0.2px] w-[min-content]">{t.from}</p>
                  <div className="content-stretch flex flex-col gap-[10px] items-center relative rounded-[999px] shrink-0 w-[56px]">
                    <div aria-hidden="true" className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-[999px]" />
                    <input
                      type="number"
                      value={budgetFrom}
                      onChange={(e) => setBudgetFrom(Math.min(Number(e.target.value), budgetTo))}
                      className="w-full h-[28px] text-center font-['VinnytsiaSansReg:Book',sans-serif] text-[12px] text-[#343a40] tracking-[-0.24px] border-none outline-none bg-transparent"
                      min={50000}
                      max={budgetTo}
                    />
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0">
                  <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[12px] min-w-full not-italic relative shrink-0 text-[#49454f] text-[10px] text-center tracking-[-0.2px] w-[min-content]">{t.to}</p>
                  <div className="content-stretch flex flex-col gap-[10px] items-center relative rounded-[999px] shrink-0 w-[56px]">
                    <div aria-hidden="true" className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-[999px]" />
                    <input
                      type="number"
                      value={budgetTo}
                      onChange={(e) => setBudgetTo(Math.max(Number(e.target.value), budgetFrom))}
                      className="w-full h-[28px] text-center font-['VinnytsiaSansReg:Book',sans-serif] text-[12px] text-[#343a40] tracking-[-0.24px] border-none outline-none bg-transparent"
                      min={budgetFrom}
                      max={5000000}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="h-0 relative shrink-0 w-full">
          <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 264 1">
              <path d="M0 0.5H264" stroke="#343A40" strokeOpacity="0.2" />
            </svg>
          </div>
        </div>

        {/* District Filter */}
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
          <button
            onClick={() => setIsDistrictCollapsed(!isDistrictCollapsed)}
            className="content-stretch flex items-center justify-between relative shrink-0 w-full group"
          >
            <p className="font-['VinnytsiaSerif:Book',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#343a40] text-[18px] text-nowrap whitespace-pre">{t.districts}</p>
            <div className="bg-white box-border content-stretch flex items-center justify-center p-[4px] relative rounded-[999px] shrink-0 size-[24px]">
              <div className="relative shrink-0 size-[16px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
                  <path d={isDistrictCollapsed ? plusIconPath : minusIconPath} fill="#343A40" />
                </svg>
              </div>
            </div>
          </button>

          {!isDistrictCollapsed && (
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              {/* Search */}
              <div className="content-stretch flex gap-[10px] items-start relative rounded-[999px] shrink-0 w-full bg-[#f7f7f7] z-10 mb-[16px]">
                <div aria-hidden="true" className={`absolute border ${isDistrictSearchFocused || districtSearch ? 'border-[#c95555]' : 'border-[#e3e3e3]'} border-solid inset-0 pointer-events-none rounded-[999px] transition-colors`} />
                <input
                  type="text"
                  value={districtSearch}
                  onChange={(e) => setDistrictSearch(e.target.value)}
                  onFocus={() => setIsDistrictSearchFocused(true)}
                  onBlur={() => setIsDistrictSearchFocused(false)}
                  placeholder={t.searchDistricts}
                  className={`box-border content-stretch flex flex-col h-[40px] items-start justify-center px-[16px] py-0 relative shrink-0 flex-1 font-['VinnytsiaSansReg:Book',sans-serif] text-[14px] text-[#343a40] tracking-[-0.32px] border-none outline-none bg-transparent ${isDistrictSearchFocused || districtSearch ? 'opacity-70' : ''} ${isDistrictSearchFocused || districtSearch ? 'placeholder:opacity-70' : 'placeholder:opacity-50'}`}
                />
                <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0 size-[40px]">
                  <svg className="shrink-0 size-[24px]" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <path clipRule="evenodd" d={svgFilterPaths.p1f615a40} fill="#343A40" fillOpacity="0.5" fillRule="evenodd" />
                  </svg>
                </div>
              </div>

              {/* Districts List */}
              <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full max-h-[320px] overflow-y-auto">
                {filteredDistricts.map((district) => {
                  const count = mockProjects.filter(p => p.district === district).length;
                  
                  return (
                    <div key={district} className="relative shrink-0 w-full">
                      <label className="flex flex-row items-center size-full cursor-pointer">
                        <div className="box-border content-stretch flex gap-[8px] items-center pl-0 pr-[8px] py-0 relative w-full">
                          <div className="relative shrink-0 size-[24px]">
                            <input
                              type="checkbox"
                              checked={selectedDistricts.includes(district)}
                              onChange={() => toggleDistrict(district)}
                              className="hidden"
                            />
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                              {selectedDistricts.includes(district) ? (
                                <path d={svgFilterPaths.p7913d80} fill="#C95555" />
                              ) : (
                                <path d={svgFilterPaths.p542c300} fill="#737B8C" />
                              )}
                            </svg>
                          </div>
                          <p className="-webkit-box basis-0 font-['VinnytsiaSansReg:Book',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#343a40] text-[14px]">{t[getDistrictKey(district)]}</p>
                          <p className="-webkit-box font-['VinnytsiaSansReg:Book',sans-serif] leading-[16px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(52,58,64,0.6)] text-nowrap text-right whitespace-pre">({count})</p>
                        </div>
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="h-0 relative shrink-0 w-full">
          <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 264 1">
              <path d="M0 0.5H264" stroke="#343A40" strokeOpacity="0.2" />
            </svg>
          </div>
        </div>

        {/* Direction Filter */}
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
          <button
            onClick={() => setIsDirectionCollapsed(!isDirectionCollapsed)}
            className="content-stretch flex items-center justify-between relative shrink-0 w-full group"
          >
            <p className="font-['VinnytsiaSerif:Book',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#343a40] text-[18px] text-nowrap whitespace-pre">{t.directions}</p>
            <div className="bg-white box-border content-stretch flex items-center justify-center p-[4px] relative rounded-[999px] shrink-0 size-[24px]">
              <div className="relative shrink-0 size-[16px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
                  <path d={isDirectionCollapsed ? plusIconPath : minusIconPath} fill="#343A40" />
                </svg>
              </div>
            </div>
          </button>

          {!isDirectionCollapsed && (
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              {/* Search */}
              <div className="content-stretch flex gap-[10px] items-start relative rounded-[999px] shrink-0 w-full bg-[#f7f7f7] z-10 mb-[16px]">
                <div aria-hidden="true" className={`absolute border ${isDirectionSearchFocused || directionSearch ? 'border-[#c95555]' : 'border-[#e3e3e3]'} border-solid inset-0 pointer-events-none rounded-[999px] transition-colors`} />
                <input
                  type="text"
                  value={directionSearch}
                  onChange={(e) => setDirectionSearch(e.target.value)}
                  onFocus={() => setIsDirectionSearchFocused(true)}
                  onBlur={() => setIsDirectionSearchFocused(false)}
                  placeholder={t.searchDirections}
                  className={`box-border content-stretch flex flex-col h-[40px] items-start justify-center px-[16px] py-0 relative shrink-0 flex-1 font-['VinnytsiaSansReg:Book',sans-serif] text-[14px] text-[#343a40] tracking-[-0.32px] border-none outline-none bg-transparent ${isDirectionSearchFocused || directionSearch ? 'opacity-70' : ''} ${isDirectionSearchFocused || directionSearch ? 'placeholder:opacity-70' : 'placeholder:opacity-50'}`}
                />
                <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0 size-[40px]">
                  <svg className="shrink-0 size-[24px]" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <path clipRule="evenodd" d={svgFilterPaths.p1f615a40} fill="#343A40" fillOpacity="0.5" fillRule="evenodd" />
                  </svg>
                </div>
              </div>

              {/* Directions List */}
              <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full max-h-[320px] overflow-y-auto">
                {filteredDirections.map((direction) => {
                  const count = mockProjects.filter(p => p.direction === direction).length;
                  
                  return (
                    <div key={direction} className="relative shrink-0 w-full">
                      <label className="flex flex-row items-center size-full cursor-pointer">
                        <div className="box-border content-stretch flex gap-[8px] items-center pl-0 pr-[8px] py-0 relative w-full">
                          <div className="relative shrink-0 size-[24px]">
                            <input
                              type="checkbox"
                              checked={selectedDirections.includes(direction)}
                              onChange={() => toggleDirection(direction)}
                              className="hidden"
                            />
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                              {selectedDirections.includes(direction) ? (
                                <path d={svgFilterPaths.p7913d80} fill="#C95555" />
                              ) : (
                                <path d={svgFilterPaths.p542c300} fill="#737B8C" />
                              )}
                            </svg>
                          </div>
                          <p className="-webkit-box basis-0 font-['VinnytsiaSansReg:Book',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#343a40] text-[14px]">{t[getCategoryKey(direction)] || direction}</p>
                          <p className="-webkit-box font-['VinnytsiaSansReg:Book',sans-serif] leading-[16px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(52,58,64,0.6)] text-nowrap text-right whitespace-pre">({count})</p>
                        </div>
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="h-0 relative shrink-0 w-full">
          <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 264 1">
              <path d="M0 0.5H264" stroke="#343A40" strokeOpacity="0.2" />
            </svg>
          </div>
        </div>

        {/* Programs Section */}
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full overflow-visible">
          <button
            onClick={() => setIsProgramCollapsed(!isProgramCollapsed)}
            className="content-stretch flex items-center justify-between relative shrink-0 w-full group"
          >
            <p className="font-['VinnytsiaSerif:Book',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#343a40] text-[18px] text-nowrap whitespace-pre">{t.programs}</p>
            <div className="bg-white box-border content-stretch flex items-center justify-center p-[4px] relative rounded-[999px] shrink-0 size-[24px]">
              <div className="relative shrink-0 size-[16px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
                  <path d={isProgramCollapsed ? plusIconPath : minusIconPath} fill="#343A40" />
                </svg>
              </div>
            </div>
          </button>

          {!isProgramCollapsed && (
            <div ref={programDropdownRef} className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              {isProgramDropdownOpen && (
                <div className="absolute bg-white box-border shadow-[0px_4px_28px_0px_rgba(0,0,0,0.05)] rounded-[20px] top-0 left-0 w-full z-50">
                  {/* Search field with focus state */}
                  <div className="content-stretch flex gap-[10px] items-start relative rounded-[999px] shrink-0 w-full">
                    <div aria-hidden="true" className="absolute border border-[#c95555] border-solid inset-0 pointer-events-none rounded-[999px]" />
                    <input
                      type="text"
                      value={programSearch}
                      onChange={(e) => setProgramSearch(e.target.value)}
                      onFocus={() => setIsProgramDropdownOpen(true)}
                      placeholder={t.searchPrograms}
                      className="box-border content-stretch flex flex-col h-[40px] items-start justify-center px-[16px] py-0 relative shrink-0 flex-1 font-['VinnytsiaSansReg:Book',sans-serif] text-[14px] text-[#343a40] opacity-70 tracking-[-0.32px] border-none outline-none bg-transparent placeholder:opacity-70"
                    />
                    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0 size-[40px]">
                      <svg className="shrink-0 size-[24px]" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                        <path clipRule="evenodd" d={svgFilterPaths.p1f615a40} fill="#343A40" fillOpacity="0.5" fillRule="evenodd" />
                      </svg>
                    </div>
                  </div>

                  {/* Programs List Dropdown */}
                  <div className="h-[240px] relative shrink-0 w-full">
                    <div className="overflow-clip rounded-[inherit] size-full">
                      <div className="box-border content-stretch flex flex-col gap-[12px] h-[240px] items-start p-[8px] relative w-full overflow-y-auto">
                        {programs
                          .filter(program => program.toLowerCase().includes(programSearch.toLowerCase()))
                          .map((program) => {
                            const count = mockProjects.filter(p => p.program === program).length;
                            
                            return (
                              <div 
                                key={program} 
                                className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full"
                              >
                                <label className="flex gap-[8px] items-center size-full cursor-pointer">
                                  <div className="relative shrink-0 size-[24px]">
                                    <input
                                      type="checkbox"
                                      checked={selectedPrograms.includes(program)}
                                      onChange={() => toggleProgram(program)}
                                      className="hidden"
                                    />
                                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                                      {selectedPrograms.includes(program) ? (
                                        <path d={svgFilterPaths.p7913d80} fill="#C95555" />
                                      ) : (
                                        <path d={svgFilterPaths.p542c300} fill="#95989B" />
                                      )}
                                    </svg>
                                  </div>
                                  <p 
                                    className="basis-0 font-['VinnytsiaSansReg:Book',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#343a40] text-[14px] overflow-hidden"
                                    style={{
                                      display: '-webkit-box',
                                      WebkitLineClamp: 2,
                                      WebkitBoxOrient: 'vertical',
                                      lineClamp: 2
                                    }}
                                    onMouseEnter={(e) => {
                                      setHoveredProgram(program);
                                      setProgramPopoverPosition({ x: e.clientX, y: e.clientY });
                                    }}
                                    onMouseMove={(e) => {
                                      if (hoveredProgram === program) {
                                        setProgramPopoverPosition({ x: e.clientX, y: e.clientY });
                                      }
                                    }}
                                    onMouseLeave={() => setHoveredProgram(null)}
                                  >
                                    {t[getProgramKey(program)]}
                                  </p>
                                  <p className="-webkit-box font-['VinnytsiaSansReg:Book',sans-serif] leading-[16px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(52,58,64,0.6)] text-nowrap text-right whitespace-pre">({count})</p>
                                </label>
                              </div>
                            );
                          })}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Search field (unfocused state) */}
              <div className="content-stretch flex gap-[10px] items-start relative rounded-[999px] shrink-0 w-full">
                <div aria-hidden="true" className={`absolute border ${isProgramDropdownOpen ? 'border-[#c95555]' : 'border-[#e3e3e3]'} border-solid inset-0 pointer-events-none rounded-[999px]`} />
                <input
                  type="text"
                  value={programSearch}
                  onChange={(e) => setProgramSearch(e.target.value)}
                  onFocus={() => setIsProgramDropdownOpen(true)}
                  placeholder="Пошук програми"
                  className="box-border content-stretch flex flex-col h-[40px] items-start justify-center px-[16px] py-0 relative shrink-0 flex-1 font-['VinnytsiaSansReg:Book',sans-serif] text-[14px] text-[#343a40] tracking-[-0.32px] border-none outline-none bg-transparent placeholder:opacity-50"
                />
                <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0 size-[40px]">
                  <svg className="shrink-0 size-[24px]" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <path clipRule="evenodd" d={svgFilterPaths.p1f615a40} fill="#343A40" fillOpacity="0.5" fillRule="evenodd" />
                  </svg>
                </div>
              </div>

              {/* Selected Programs Display */}
              {selectedPrograms.length > 0 && (
                <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full mt-[4px]">
                  {selectedPrograms.map((program) => {
                    const count = mockProjects.filter(p => p.program === program).length;
                    
                    return (
                      <div 
                        key={program} 
                        className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full"
                      >
                        <div 
                          className="relative shrink-0 size-[24px] cursor-pointer"
                          onClick={() => toggleProgram(program)}
                        >
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                            <path d={svgFilterPaths.p7913d80} fill="#C95555" />
                          </svg>
                        </div>
                        <p 
                          className="basis-0 font-['VinnytsiaSansReg:Book',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#343a40] text-[14px] overflow-hidden cursor-pointer"
                          style={{
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            lineClamp: 2
                          }}
                          onClick={() => toggleProgram(program)}
                          onMouseEnter={(e) => {
                            setHoveredProgram(program);
                            setProgramPopoverPosition({ x: e.clientX, y: e.clientY });
                          }}
                          onMouseMove={(e) => {
                            if (hoveredProgram === program) {
                              setProgramPopoverPosition({ x: e.clientX, y: e.clientY });
                            }
                          }}
                          onMouseLeave={() => setHoveredProgram(null)}
                        >
                          {t[getProgramKey(program)]}
                        </p>
                        <p className="-webkit-box font-['VinnytsiaSansReg:Book',sans-serif] leading-[16px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(52,58,64,0.6)] text-nowrap text-right whitespace-pre">({count})</p>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Program Tooltip */}
      {hoveredProgram && (
        <div
          className="fixed bg-[#343a40] text-white px-[12px] py-[8px] rounded-[8px] z-[60] pointer-events-none max-w-[300px]"
          style={{
            left: `${programPopoverPosition.x + 10}px`,
            top: `${programPopoverPosition.y + 10}px`,
          }}
        >
          <p className="font-['VinnytsiaSansReg:Book',sans-serif] text-[12px] leading-[16px]">{hoveredProgram}</p>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col gap-[24px]">
        {/* Page Header */}
        <div className="bg-white rounded-[12px] p-[0px]">
          <div className="flex items-start justify-between mb-[16px]">
            <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px not-italic relative shrink-0">
              <p className="font-['VinnytsiaSansBold:Bold',sans-serif] leading-[28px] relative shrink-0 text-[#343a40] text-[24px] tracking-[-0.96px] w-full">{t.projects} ({filteredProjects.length})</p>
              <p className="[white-space-collapse:collapse] font-['VinnytsiaSansReg:Book',sans-serif] leading-[20px] overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-[rgba(52,58,64,0.6)] text-nowrap tracking-[-0.28px] w-full">{t.projectsListSubtitle}</p>
            </div>
            
            <button className="bg-[rgba(201,85,85,0.1)] box-border content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative rounded-[999px] shrink-0 hover:bg-[rgba(201,85,85,0.15)] transition-colors">
              <div aria-hidden="true" className="absolute border border-[rgba(201,85,85,0.5)] border-solid inset-0 pointer-events-none rounded-[999px]" />
              <div className="relative shrink-0 size-[24px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <g>
                    <mask height="24" id="mask0_5_3098" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
                      <rect fill="var(--fill-0, #D9D9D9)" height="24" width="24" />
                    </mask>
                    <g mask="url(#mask0_5_3098)">
                      <path d={svgPaths.p16f45de0} fill="var(--fill-0, #C95555)" />
                    </g>
                  </g>
                </svg>
              </div>
              <div className="flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#c95555] text-[14px] text-nowrap tracking-[-0.14px]">
                <p className="leading-[16px] whitespace-pre">{t.download}</p>
              </div>
            </button>
          </div>

          {/* Search and filters row */}
          <div className="flex items-center gap-[12px]">
            <div className="bg-[#f7f7f7] content-stretch flex flex-col gap-[10px] items-start relative rounded-[999px] shrink-0 flex-1 max-w-[696px]">
              <div aria-hidden="true" className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-[999px]" />
              <div className="relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full">
                <div className="flex flex-row items-center size-full">
                  <div className="box-border content-stretch flex gap-[8px] items-center px-[16px] py-0 relative w-full">
                    <svg className="shrink-0 size-[24px]" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <path clipRule="evenodd" d={svgPaths.p1f615a40} fill="#343A40" fillOpacity="0.5" fillRule="evenodd" />
                    </svg>
                    <input
                      type="text"
                      value={projectSearch}
                      onChange={(e) => {
                        setProjectSearch(e.target.value);
                        setCurrentPage(1);
                      }}
                      onFocus={() => setProjectSearchFocused(true)}
                      onBlur={() => setProjectSearchFocused(false)}
                      placeholder={t.searchProjects}
                      className="content-stretch flex flex-col h-[40px] items-start justify-center relative shrink-0 flex-1 font-['VinnytsiaSansReg:Book',sans-serif] text-[14px] text-[#343a40] tracking-[-0.16px] border-none outline-none bg-transparent placeholder:opacity-50"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* View Switcher */}
            <div className="bg-white content-stretch flex items-center relative rounded-[999px] shrink-0">
              <div aria-hidden="true" className="absolute border border-[rgba(52,58,64,0.2)] border-solid inset-0 pointer-events-none rounded-[999px]" />
              
              {/* Grid View Tab */}
              <button
                onClick={() => handleViewModeChange('grid')}
                disabled={isLoadingViewChange}
                className={`${
                  viewMode === 'grid' ? 'bg-[#c95555]' : 'bg-transparent'
                } box-border content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[999px] shrink-0 transition-colors hover:opacity-90 ${isLoadingViewChange ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {viewMode === 'grid' && (
                  <div aria-hidden="true" className="absolute border border-[rgba(201,85,85,0.1)] border-solid inset-0 pointer-events-none rounded-[999px]" />
                )}
                <div className="relative shrink-0 size-[24px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <g>
                      <mask height="24" id="mask0_5_3102" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
                        <rect fill="var(--fill-0, #D9D9D9)" height="24" width="24" />
                      </mask>
                      <g mask="url(#mask0_5_3102)">
                        <path d={svgPaths.p2ee6af80} fill={viewMode === 'grid' ? 'white' : '#343A40'} />
                      </g>
                    </g>
                  </svg>
                </div>
              </button>

              {/* List View Tab */}
              <button
                onClick={() => handleViewModeChange('list')}
                disabled={isLoadingViewChange}
                className={`${
                  viewMode === 'list' ? 'bg-[#c95555]' : 'bg-transparent'
                } box-border content-stretch flex gap-[8px] items-center justify-center pl-[12px] pr-[16px] py-[8px] relative rounded-[999px] shrink-0 transition-colors hover:opacity-90 ${isLoadingViewChange ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {viewMode === 'list' && (
                  <div aria-hidden="true" className="absolute border border-[rgba(201,85,85,0.1)] border-solid inset-0 pointer-events-none rounded-[999px]" />
                )}
                <div className="relative shrink-0 size-[24px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <g>
                      <mask height="24" id="mask0_5_3112" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
                        <rect fill="var(--fill-0, #D9D9D9)" height="24" width="24" />
                      </mask>
                      <g mask="url(#mask0_5_3112)">
                        <path d={svgPaths.p3c7b0900} fill={viewMode === 'list' ? 'white' : '#343A40'} />
                      </g>
                    </g>
                  </svg>
                </div>
              </button>
            </div>

            <div ref={sortDropdownRef} className="relative">
              <button
                onClick={() => setIsSortDropdownOpen(!isSortDropdownOpen)}
                className="box-border content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative rounded-[999px] shrink-0 border border-[rgba(52,58,64,0.2)] hover:bg-[#f7f7f7] transition-colors cursor-pointer"
              >
                <svg className="shrink-0 size-[24px]" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <g>
                    <mask height="24" id="mask0_5_3091" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
                      <rect fill="var(--fill-0, #D9D9D9)" height="24" width="24" />
                    </mask>
                    <g mask="url(#mask0_5_3091)">
                      <path d={svgPaths.p1f0e0d80} fill="var(--fill-0, #343A40)" />
                    </g>
                  </g>
                </svg>
                <div className="box-border content-stretch flex h-full items-center pb-0 pt-[2px] px-0 relative shrink-0 w-[92px]">
                  <div className="flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#343a40] text-[14px] text-nowrap tracking-[-0.14px]">
                    <p className="leading-[16px] whitespace-pre">{t.sortBy}</p>
                  </div>
                </div>
              </button>

              {/* Dropdown Menu */}
              {isSortDropdownOpen && (
                <div className="absolute top-[calc(100%+8px)] right-0 bg-white rounded-[12px] shadow-lg border border-[rgba(52,58,64,0.1)] overflow-hidden z-50 min-w-[200px]">
                  <button
                    onClick={() => handleSortChange('newest')}
                    className={`w-full text-left px-[16px] py-[12px] font-['VinnytsiaSansReg:Book',sans-serif] text-[14px] transition-colors ${
                      sortBy === 'newest' 
                        ? 'bg-[#f7f7f7] text-[#c95555]' 
                        : 'text-[#343a40] hover:bg-[#f7f7f7]'
                    }`}
                  >
                    {t.newest}
                  </button>
                  <button
                    onClick={() => handleSortChange('oldest')}
                    className={`w-full text-left px-[16px] py-[12px] font-['VinnytsiaSansReg:Book',sans-serif] text-[14px] transition-colors ${
                      sortBy === 'oldest' 
                        ? 'bg-[#f7f7f7] text-[#c95555]' 
                        : 'text-[#343a40] hover:bg-[#f7f7f7]'
                    }`}
                  >
                    {t.oldest}
                  </button>
                  <button
                    onClick={() => handleSortChange('expensive')}
                    className={`w-full text-left px-[16px] py-[12px] font-['VinnytsiaSansReg:Book',sans-serif] text-[14px] transition-colors ${
                      sortBy === 'expensive' 
                        ? 'bg-[#f7f7f7] text-[#c95555]' 
                        : 'text-[#343a40] hover:bg-[#f7f7f7]'
                    }`}
                  >
                    {t.expensive}
                  </button>
                  <button
                    onClick={() => handleSortChange('cheapest')}
                    className={`w-full text-left px-[16px] py-[12px] font-['VinnytsiaSansReg:Book',sans-serif] text-[14px] transition-colors ${
                      sortBy === 'cheapest' 
                        ? 'bg-[#f7f7f7] text-[#c95555]' 
                        : 'text-[#343a40] hover:bg-[#f7f7f7]'
                    }`}
                  >
                    {t.cheapest}
                  </button>
                  <button
                    onClick={() => handleSortChange('nameAZ')}
                    className={`w-full text-left px-[16px] py-[12px] font-['VinnytsiaSansReg:Book',sans-serif] text-[14px] transition-colors ${
                      sortBy === 'nameAZ' 
                        ? 'bg-[#f7f7f7] text-[#c95555]' 
                        : 'text-[#343a40] hover:bg-[#f7f7f7]'
                    }`}
                  >
                    {t.nameAZ}
                  </button>
                  <button
                    onClick={() => handleSortChange('nameZA')}
                    className={`w-full text-left px-[16px] py-[12px] font-['VinnytsiaSansReg:Book',sans-serif] text-[14px] transition-colors ${
                      sortBy === 'nameZA' 
                        ? 'bg-[#f7f7f7] text-[#c95555]' 
                        : 'text-[#343a40] hover:bg-[#f7f7f7]'
                    }`}
                  >
                    {t.nameZA}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Projects Grid - 3 columns */}
        <div className="relative flex-1 flex flex-col min-h-0 gap-[24px]">
          {(isLoadingData || isLoadingViewChange) && (
            <div className="absolute inset-0 bg-white/80 z-10 flex items-center justify-center rounded-[12px] min-h-[400px]">
              <div className="flex flex-col items-center gap-[16px]">
                <div className="w-[40px] h-[40px] border-4 border-[#e3e3e3] border-t-[#c95555] rounded-full animate-spin"></div>
                <p className="font-['VinnytsiaSansReg:Book',sans-serif] text-[14px] text-[#343a40] tracking-[-0.28px]">
                  Завантаження проєктів...
                </p>
              </div>
            </div>
          )}
          {viewMode === 'grid' ? (
            <>
              <div className="grid grid-cols-3 gap-[24px]">
              {displayedProjects.length > 0 ? (
                displayedProjects.map((project) => (
                  <div key={project.id} onClick={() => setSelectedProject(project)} className="cursor-pointer h-[520px]">
                    <ProjectCard {...project} language={language} />
                  </div>
                ))
              ) : (
                <div className="col-span-3 bg-white rounded-[12px] p-[60px] flex items-center justify-center">
                  <p className="font-['VinnytsiaSansReg:Book',sans-serif] text-[16px] text-[#343a40] opacity-50">
                    {t.noProjects}
                  </p>
                </div>
              )}
            </div>
            
            {/* Pagination for grid view */}
            {totalPages > 1 && (
          <div className="bg-white box-border content-stretch flex flex-col sm:flex-row items-center justify-between gap-[16px] p-[24px] rounded-[12px]">
            {/* Items per page */}
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
              <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[20px] not-italic text-[#343a40] text-[14px] text-nowrap whitespace-pre">{t.itemsPerPage}</p>
              <div className="content-stretch flex flex-col gap-[10px] items-center relative rounded-[999px] shrink-0">
                <div aria-hidden="true" className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-[999px]" />
                <div className="box-border content-stretch flex gap-[4px] items-center px-[8px] py-0 relative rounded-tl-[4px] rounded-tr-[4px] shrink-0">
                  <select
                    value={itemsPerPage}
                    onChange={(e) => {
                      setItemsPerPage(Number(e.target.value));
                      setCurrentPage(1);
                    }}
                    className="h-[28px] px-[4px] font-['VinnytsiaSansReg:Book',sans-serif] text-[12px] text-[#343a40] tracking-[-0.24px] border-none outline-none bg-transparent cursor-pointer"
                  >
                    <option value={6}>6</option>
                    <option value={12}>12</option>
                    <option value={24}>24</option>
                    <option value={48}>48</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Pagination controls */}
            <div className="content-stretch flex items-center gap-[8px]">
              <button
                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1 || isLoadingData}
                className="bg-white relative rounded-[999px] shrink-0 size-[38px] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#f7f7f7] transition-colors"
              >
                <div className="box-border content-stretch flex items-center justify-center overflow-clip px-[13px] py-[7px] relative rounded-[inherit] size-[38px]">
                  <svg className="shrink-0 size-[20px]" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <path d={svgPaths.p2e3b0b80} fill="#343A40" />
                  </svg>
                </div>
                <div aria-hidden="true" className="absolute border border-[rgba(52,58,64,0.14)] border-solid inset-0 pointer-events-none rounded-[999px]" />
              </button>
              
              {[...Array(Math.min(totalPages, 7))].map((_, i) => {
                let pageNum;
                if (totalPages <= 7) {
                  pageNum = i + 1;
                } else if (currentPage <= 4) {
                  pageNum = i + 1;
                } else if (currentPage >= totalPages - 3) {
                  pageNum = totalPages - 6 + i;
                } else {
                  pageNum = currentPage - 3 + i;
                }
                
                const isActive = currentPage === pageNum;
                
                return (
                  <button
                    key={i}
                    onClick={() => handlePageChange(pageNum)}
                    disabled={isLoadingData}
                    className="bg-white relative rounded-[999px] shrink-0 w-[38px] hover:bg-[#f7f7f7] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <div className="box-border content-stretch flex flex-col items-center justify-center overflow-clip px-[13px] py-[7px] relative rounded-[inherit] w-[38px]">
                      <div className="bg-white content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0">
                        <p className={`font-['VinnytsiaSansReg:Book',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap whitespace-pre ${isActive ? 'text-[#c95555]' : 'text-[#343a40]'}`}>
                          {pageNum}
                        </p>
                      </div>
                    </div>
                    <div aria-hidden="true" className={`absolute border ${isActive ? 'border-[#c95555]' : 'border-[rgba(52,58,64,0.14)]'} border-solid inset-0 pointer-events-none rounded-[999px]`} />
                  </button>
                );
              })}
              
              <button
                onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages || isLoadingData}
                className="bg-white relative rounded-[999px] shrink-0 size-[38px] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#f7f7f7] transition-colors"
              >
                <div className="box-border content-stretch flex items-center justify-center overflow-clip px-[13px] py-[7px] relative rounded-[inherit] size-[38px]">
                  <svg className="shrink-0 size-[20px] rotate-180" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <path d={svgPaths.p2e3b0b80} fill="#343A40" />
                  </svg>
                </div>
                <div aria-hidden="true" className="absolute border border-[rgba(52,58,64,0.14)] border-solid inset-0 pointer-events-none rounded-[999px]" />
              </button>
            </div>
          </div>
            )}
            </>
        ) : (
          <>
            <div className="bg-white rounded-[12px] overflow-hidden">
              <ProjectsTable projects={displayedProjects} onProjectClick={setSelectedProject} language={language} />
            </div>
            
            {/* Pagination for table view */}
            {totalPages > 1 && (
              <div className="bg-white box-border content-stretch flex flex-col sm:flex-row items-center justify-between gap-[16px] p-[24px] rounded-[12px]">
                {/* Items per page */}
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                  <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[20px] not-italic text-[#343a40] text-[14px] text-nowrap whitespace-pre">{t.itemsPerPage}</p>
                  <div className="content-stretch flex flex-col gap-[10px] items-center relative rounded-[999px] shrink-0">
                    <div aria-hidden="true" className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-[999px]" />
                    <div className="box-border content-stretch flex gap-[4px] items-center px-[8px] py-0 relative rounded-tl-[4px] rounded-tr-[4px] shrink-0">
                      <select
                        value={itemsPerPage}
                        onChange={(e) => {
                          setItemsPerPage(Number(e.target.value));
                          setCurrentPage(1);
                        }}
                        className="h-[28px] px-[4px] font-['VinnytsiaSansReg:Book',sans-serif] text-[12px] text-[#343a40] tracking-[-0.24px] border-none outline-none bg-transparent cursor-pointer"
                      >
                        <option value={6}>6</option>
                        <option value={12}>12</option>
                        <option value={24}>24</option>
                        <option value={48}>48</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Pagination controls */}
                <div className="content-stretch flex items-center gap-[8px]">
                  <button
                    onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1 || isLoadingData}
                    className="bg-white relative rounded-[999px] shrink-0 size-[38px] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#f7f7f7] transition-colors"
                  >
                    <div className="box-border content-stretch flex items-center justify-center overflow-clip px-[13px] py-[7px] relative rounded-[inherit] size-[38px]">
                      <svg className="shrink-0 size-[20px]" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                        <path d={svgPaths.p2e3b0b80} fill="#343A40" />
                      </svg>
                    </div>
                    <div aria-hidden="true" className="absolute border border-[rgba(52,58,64,0.14)] border-solid inset-0 pointer-events-none rounded-[999px]" />
                  </button>
                  
                  {[...Array(Math.min(totalPages, 7))].map((_, i) => {
                    let pageNum;
                    if (totalPages <= 7) {
                      pageNum = i + 1;
                    } else if (currentPage <= 4) {
                      pageNum = i + 1;
                    } else if (currentPage >= totalPages - 3) {
                      pageNum = totalPages - 6 + i;
                    } else {
                      pageNum = currentPage - 3 + i;
                    }
                    
                    const isActive = currentPage === pageNum;
                    
                    return (
                      <button
                        key={i}
                        onClick={() => handlePageChange(pageNum)}
                        disabled={isLoadingData}
                        className="bg-white relative rounded-[999px] shrink-0 w-[38px] hover:bg-[#f7f7f7] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <div className="box-border content-stretch flex flex-col items-center justify-center overflow-clip px-[13px] py-[7px] relative rounded-[inherit] w-[38px]">
                          <div className="bg-white content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0">
                            <p className={`font-['VinnytsiaSansReg:Book',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap whitespace-pre ${isActive ? 'text-[#c95555]' : 'text-[#343a40]'}`}>
                              {pageNum}
                            </p>
                          </div>
                        </div>
                        <div aria-hidden="true" className={`absolute border ${isActive ? 'border-[#c95555]' : 'border-[rgba(52,58,64,0.14)]'} border-solid inset-0 pointer-events-none rounded-[999px]`} />
                      </button>
                    );
                  })}
                  
                  <button
                    onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages || isLoadingData}
                    className="bg-white relative rounded-[999px] shrink-0 size-[38px] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#f7f7f7] transition-colors"
                  >
                    <div className="box-border content-stretch flex items-center justify-center overflow-clip px-[13px] py-[7px] relative rounded-[inherit] size-[38px]">
                      <svg className="shrink-0 size-[20px] rotate-180" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                        <path d={svgPaths.p2e3b0b80} fill="#343A40" />
                      </svg>
                    </div>
                    <div aria-hidden="true" className="absolute border border-[rgba(52,58,64,0.14)] border-solid inset-0 pointer-events-none rounded-[999px]" />
                  </button>
                </div>
              </div>
            )}
          </>
        )}
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <ProjectDetailsModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          language={language}
        />
      )}
    </div>
  );
}
