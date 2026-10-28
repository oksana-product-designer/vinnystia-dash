import { useState, useRef, useEffect, useMemo } from "react";
import svgPaths from "./imports/svg-vymkof1gxm";
import svgFilterPaths from "./imports/svg-0mi2trieta";
import svgProjectFilterPaths from "./imports/svg-kar1fn8xpu";
import imgImage2 from "figma:asset/94fb00e245a4b2b6d8fe73af614f2ca58b53c080.png";
import { programsData } from "./mockData";
import { BarChartComponent } from "./components/BarChart";
import { ProjectsList } from "./components/ProjectsList";
import { translations, Language, getCategoryKey, getDistrictKey, getProgramKey } from "./translations";
import PopOver from "./imports/PopOver-53-233";

// Plus icon path for expand button
const plusIconPath = "M0 4.67H4.67V0H5.67V4.67H10.33V5.67H5.67V10.33H4.67V5.67H0V4.67Z";
// Minus icon path for collapse button (centered to match plus icon)
const minusIconPath = "M0 4.67H10.33V5.67H0V4.67Z";

// Mock district data with new SVG paths from updated design
const districtsData = [
  { id: "leninsky", name: "Ближнє Замостя", budget: 70, path: svgPaths.p3a53fb00, color: "#E88854" },
  { id: "zamostyansky", name: "Дальнє Замостя", budget: 56, path: svgPaths.p36f00870, color: "#F7BD78" },
  { id: "stary_misto", name: "Старе місто", budget: 44, path: svgPaths.p3dba1800, color: "#EFA366" },
  { id: "vishenkivsky", name: "Вишенька", budget: 49, path: svgPaths.p1014280, color: "#F3B06F" },
  { id: "pyat", name: "П'ятничани", budget: 36, path: svgPaths.p2799480, color: "#E06E42" },
  { id: "sabarne", name: "Слов'янка", budget: 64, path: svgPaths.pd6dda80, color: "#FBCA81" },
  { id: "podilsky", name: "Поділля", budget: 31, path: svgPaths.p36a4c300, color: "#FFEAC1" },
  { id: "sosnivka", name: "Вінницькі хутори", budget: 39, path: svgPaths.p3199d280, color: "#EB965D" },
  { id: "sverdlovsky", name: "Свердловський", budget: 27, path: svgPaths.p25a90400, color: "#DC6139" },
  { id: "akademichny", name: "Академічний", budget: 18, path: svgPaths.p2322e780, color: "#D44727" },
  { id: "tsentralny", name: "Центр", budget: 52, path: svgPaths.p3deb9670, color: "#FFD78A" },
  { id: "tyazhilopromyslovy", name: "Тяжилів", budget: 42, path: svgPaths.p1afefd00, color: "#E47B4B" },
];

const categories = [
  "Освіта",
  "Транспорт, зв'язок, енергетика, інформаційні технології",
  "Культура і мистецтво",
  "Охорона здоров'я",
  "Архітектура і містобудування",
  "Туризм, дозвілля, молодь",
  "Фізкультура та спорт",
  "Комунальні підприємства",
  "Благоустрій міста та охорона навколишнього середовища",
  "Громадська участь",
];

const programs = [
  "Програма «Муніципальни�� університет перепідготовки та підвищення кваліфікації посадових осіб місцевого самоврядування Вінницької міської ради»",
  "Програма надання фінансової підтримки інститутам громадянського суспільства на реалізацію проектів на території Вінницької міської територіальної громади",
  "Програма інноваційного розвитку муніципального управління на 2017-2026 рр.",
  "Програма «Нагородження відзнаками міського рівня, організація і проведення урочистих та інших заходів у населених пункт��х, що входять до Вінницької міської територіальної громади на 2021-2025 роки»",
  "Програма запобігання виникненню надзв��чайних ситуацій природного, техногенного, соціального характеру та надзвичайних ситуацій в умовах воєнного стану, ліквідації їх наслідків на 2020-2027 роки",
  "Програма використання соціальної реклами для інформування громадськості та профілактики негативних явищ у суспільстві на 2021-2025 роки",
  "Програма висвітлення діяльності Вінницької міської ради, її виконавчих органів, фінансової підтримки (дотації) комунальним підприємствам засобів масової інформації у 2021-2028 рр.",
  "Програма охорони навколишнього природного середовища Вінницької міської територіальної громади на 2021-2025 роки",
  "Програма заходів забезпечення обороноздатності військових частин та інших військових формувань Вінницького гарнізону, територіальної оборони та мобілізаційної підготовки на т��риторії Вінницької міської територіальної громади на 2021-2025 роки",
  "Комплексна програма підтримки КП «Аеропорт Вінниця», що обслуговує внутрішні та міжнародні перевезення в регіоні, на 2020-2025 роки",
  "Програма «Муніципальне житло Вінницької міської територіальної громади» в новій редакції",
  "Програма для забезпечення виконання рішень суду на 2021-2025 роки",
  "Програма будівництва сонячних електростанцій для власного споживання електроенергії об'єктами комунальної власності Вінницької міської територіальної громади на 2023 – 2027 роки",
  "Програма реалізації стратегії просторового розвитку Вінницької міської територіальної громади на 2022-2025 роки",
  "Програма державного моніторингу у галузі охорони атмосферного повітря агломерації «Вінниця» на 2021-2025 роки",
  "Програма розвитку органів самоорганізації населення Вінницької міської територіальної громади на 2022–2028 роки",
  "Комплексна програма «Основні напрямки соціальної політики Вінницької міської територіальної громади на 2022-2026 роки»",
  "Програма підтримки Захисників і Захисниць України, членів їх родин та родин загиблих (померлих), безвісти зниклих за особливих обставин Захисників та Захисниць України на 2023-2026 роки",
  "Програма поліпшення техногенної та пожежної безпеки у Вінницькій міській територіальній громаді, матеріально-технічного забезпечення підрозділів Головного управління ДСНС України у Вінницькій області на 2022-2026 рр.",
  "Комплексна програма співпраці виконавчих органів Вінницької міської ради та ГУ ДПС у Вінницькій області з питань забезпечення контролю за дотриманням зобов'язань щодо платежів підприємств, установ, організацій, СГ, фізичних осіб до бюджету Вінницької міської територіальної громади на 2022-2026 роки",
  "Програма «На варті міського порядку» на території Вінницької міської територіальної громади на 2023-2027 рр.",
  "Програма розвитку аграрного сектору та забезпечення продовольчої безпеки Вінницької міської територіальної громади на 2023-2025 роки",
  "Програма розроблення містобудівної та іншої документації загальноміського перспективного значення на 2023-2025 роки",
  "Програма розвитку та підтримки об'єднань співвласників багатоквартирних будинків Вінницької міської територіальної громади на 2024-2028 роки",
  "Програма інформатизації та цифрової трансформації на 2024-2026 роки",
  "Програма розвитку фізичної культури та спорту у Вінницькій міській територіальній громаді на 2024-2026 роки",
  "Комплексна програма заходів із забезпечення діяльності громадських формувань з охорони громадського порядку у населених пунктах, що входять до Вінницької міської територіальної громади на 2024-2026 роки",
  "Програма розвитку туризму та промоції Вінницької міської територіальної громади на 2024-2026 роки",
  "Програма «Місто молодих» на 2024 - 2026 роки",
  "Комплексна програма національно-патріотичного виховання дітей та молоді Вінницької міської територіальної громади на 2024-2026 роки",
  "Програма сприяння залученню інвестицій у Вінницьку міську територіальну громаду на 2024-2026 роки",
  "Програма «Громада відкритих можливостей для людей похилого віку Вінницької міської територіальної громади на 2021-2026 роки",
  "Програма «Громада за рівність» щодо забезпечення рівних прав та можливостей жінок і чоловіків на період до 2026 року»",
  "Програма підвищення ефективності роботи органів місцевого самоврядування і комунальних підприємств Вінницької міської територіальної громади на 2021-2025 роки",
  "Програма збереження культурної спадщини та розвитку історичного середовища Вінницької міської територіальної громади на 2024- 2026 роки",
  "Програма організаційного забезпечення діяльності судів на території Вінницької міської територіальної громади на 2024-2026 роки",
  "Програма розвитку малого та середнього підприємництва Вінницької міської територіальної громади на 2024–2026 роки",
  "Програма розвитку безбар'єрного простору Вінницької міської територіальної громади на 2024-2027 роки",
  "Програма розвитку та підтримки інженерної інфраструктури Вінницької міської територіальної громади на 2025-2030 роки",
  "Програма утримання та розвитку територій заг��льного користування Вінницької міської територіальної громади, створення сприятливих умов для життєдіяльності її мешканців на 2025-2029 роки",
  "Програма розвитку та утримання житлово господарства Вінницької міської територіальної громади на 2025-2030 рр.",
  "Програма розвитку велосипедного руху Вінницької міської територіальної громади на 2024-2026 роки",
  "Програма соціального захисту сімей з дітьми, які опинились у складних життєвих обставинах, та дітей-сиріт, дітей, позбавлених батьківського піклування, у Вінницькій міській територіальній громаді на 2025-2027 роки",
  "Програм�� підтримки книговидання про Вінницю на 2025-2027 роки",
  "Програма сприяння функціонуванню української мови як державної у Вінницькій міській територіальній громаді на 2024-2028 роки",
  "Комплексна Програма розвитку міського пасажирського транспорту та організації дорожнього руху Вінницької міської територіальної громади на 2025-2029 роки",
  "Програма «Здоров'я вінничан на 2022 -2025 роки»",
  "Комплексна програма співпраці Вінницької міської ради, Управління Державної казначейської служби України у м. Вінниці Вінницької області, розпорядників та одержувачів бюджетних коштів в сфері казначейського обслуговування бюджету Вінницької міської територіальної громади на 2022-2026 роки",
  "Програма археологічних досліджень на території населених пунктів, що входять до складу В��нницької міської територіальної громади, на 2022-2025 роки",
  "Програма розвитку культури і мистецтва на 2022-2026 роки",
  "Програма розвитку освіти Вінницької міської територіальної громади на 2025-2027 роки",
  "Комплексна правоохоронна програма на 2022-2026 роки",
  "Програма утримання та розвитку парків та рекреаційних зон Вінницької міської територіальної громади на 2025-2027 роки",
  "Програми відновлення та п��дтримки підприємництва на території Вінницької міської територіальної громади на 2025 – 2028 роки",
];

export default function App() {
  const [pageView, setPageView] = useState<"analytics" | "projects-list">("analytics");
  const [viewMode, setViewMode] = useState<"budget" | "projects">("budget");
  const [dataViewType, setDataViewType] = useState<"map" | "chart">("map");
  const [hoveredDistrict, setHoveredDistrict] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [startYear, setStartYear] = useState(1991);
  const [endYear, setEndYear] = useState(2025);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedPrograms, setSelectedPrograms] = useState<string[]>([]);
  const [searchCategory, setSearchCategory] = useState("");
  const [searchProgram, setSearchProgram] = useState("");
  const [isPeriodCollapsed, setIsPeriodCollapsed] = useState(false);
  const [isCategoryCollapsed, setIsCategoryCollapsed] = useState(false);
  const [isProgramCollapsed, setIsProgramCollapsed] = useState(false);
  const [isProgramDropdownOpen, setIsProgramDropdownOpen] = useState(false);
  const [isCategorySearchFocused, setIsCategorySearchFocused] = useState(false);
  const [hoveredProgram, setHoveredProgram] = useState<string | null>(null);
  const [programPopoverPosition, setProgramPopoverPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<"start" | "end" | null>(null);
  const [selectedDistrictForProjects, setSelectedDistrictForProjects] = useState<string | null>(null);
  const [language, setLanguage] = useState<Language>('uk');
  const [isWebsiteViewsHovered, setIsWebsiteViewsHovered] = useState(false);
  
  // Loading states
  const [isLoadingData, setIsLoadingData] = useState(false);
  const [isLoadingViewChange, setIsLoadingViewChange] = useState(false);
  const [isLoadingChartChange, setIsLoadingChartChange] = useState(false);
  
  const sliderRef = useRef<HTMLDivElement>(null);
  const programDropdownRef = useRef<HTMLDivElement>(null);

  // Get current translations
  const t = translations[language];

  // Handlers with loading delays
  const handleViewModeChange = (mode: "budget" | "projects") => {
    if (mode === viewMode) return;
    setIsLoadingViewChange(true);
    setTimeout(() => {
      setViewMode(mode);
      setIsLoadingViewChange(false);
    }, 600);
  };

  const handleDataViewTypeChange = (type: "map" | "chart") => {
    if (type === dataViewType) return;
    setIsLoadingChartChange(true);
    setTimeout(() => {
      setDataViewType(type);
      setIsLoadingChartChange(false);
    }, 500);
  };

  const handleFilterChange = (callback: () => void) => {
    setIsLoadingData(true);
    setTimeout(() => {
      callback();
      setTimeout(() => setIsLoadingData(false), 400);
    }, 100);
  };

  const handlePageViewChange = (view: "analytics" | "projects-list") => {
    if (view === pageView) return;
    setIsLoadingViewChange(true);
    setTimeout(() => {
      setPageView(view);
      setIsLoadingViewChange(false);
    }, 700);
  };

  const handleDistrictClick = (districtId: string) => {
    // Find the district name from the district ID
    const district = districtsData.find(d => d.id === districtId);
    if (district) {
      setSelectedDistrictForProjects(district.name);
      handlePageViewChange("projects-list");
    }
  };

  // Calculate data based on filters
  const filteredData = useMemo(() => {
    const result: any = {
      categories: {},
      programs: {},
      districts: {}
    };

    // Initialize districts
    districtsData.forEach(district => {
      result.districts[district.id] = { budget: 0, projects: 0 };
    });

    // Filter programs based on selected categories and year range
    const relevantPrograms = programsData.filter(program => {
      // Filter by selected categories (if any)
      if (selectedCategories.length > 0) {
        return program.categories.some(cat => selectedCategories.includes(cat));
      }
      return true;
    }).filter(program => {
      // Filter by selected programs (if any)
      if (selectedPrograms.length > 0) {
        return selectedPrograms.includes(program.name);
      }
      return true;
    });

    // Aggregate data
    relevantPrograms.forEach(program => {
      // For each program, aggregate across years
      let programBudget = 0;
      let programProjects = 0;

      for (let year = startYear; year <= endYear; year++) {
        const yearData = program.yearlyData[year];
        if (yearData) {
          programBudget += yearData.budget;
          programProjects += yearData.projects;

          // Aggregate by district
          Object.keys(yearData.districts).forEach(districtId => {
            const districtData = yearData.districts[districtId];
            if (result.districts[districtId]) {
              result.districts[districtId].budget += districtData.budget;
              result.districts[districtId].projects += districtData.projects;
            }
          });
        }
      }

      // Store program totals
      result.programs[program.name] = {
        budget: programBudget,
        projects: programProjects
      };

      // Aggregate by category
      program.categories.forEach(category => {
        if (!result.categories[category]) {
          result.categories[category] = { budget: 0, projects: 0 };
        }
        result.categories[category].budget += programBudget;
        result.categories[category].projects += programProjects;
      });
    });

    return result;
  }, [startYear, endYear, selectedCategories, selectedPrograms]);

  // Calculate counts for all programs (for dropdown)
  const allProgramCounts = useMemo(() => {
    const counts: any = {};
    
    programsData.forEach(program => {
      // Filter by selected categories and year range only
      if (selectedCategories.length > 0 && !program.categories.some(cat => selectedCategories.includes(cat))) {
        return;
      }

      let programBudget = 0;
      let programProjects = 0;

      for (let year = startYear; year <= endYear; year++) {
        const yearData = program.yearlyData[year];
        if (yearData) {
          programBudget += yearData.budget;
          programProjects += yearData.projects;
        }
      }

      counts[program.name] = {
        budget: programBudget,
        projects: programProjects
      };
    });

    return counts;
  }, [startYear, endYear, selectedCategories]);

  // Calculate counts for all categories
  const allCategoryCounts = useMemo(() => {
    const counts: any = {};
    
    categories.forEach(category => {
      counts[category] = { budget: 0, projects: 0 };
    });

    programsData.forEach(program => {
      // Filter by selected programs only (not by categories, as we're calculating category counts)
      if (selectedPrograms.length > 0 && !selectedPrograms.includes(program.name)) {
        return;
      }

      let programBudget = 0;
      let programProjects = 0;

      for (let year = startYear; year <= endYear; year++) {
        const yearData = program.yearlyData[year];
        if (yearData) {
          programBudget += yearData.budget;
          programProjects += yearData.projects;
        }
      }

      program.categories.forEach(category => {
        if (counts[category]) {
          counts[category].budget += programBudget;
          counts[category].projects += programProjects;
        }
      });
    });

    return counts;
  }, [startYear, endYear, selectedPrograms]);

  const toggleCategory = (category: string) => {
    handleFilterChange(() => {
      setSelectedCategories(prev =>
        prev.includes(category)
          ? prev.filter(c => c !== category)
          : [...prev, category]
      );
    });
  };

  const toggleProgram = (program: string) => {
    handleFilterChange(() => {
      setSelectedPrograms(prev =>
        prev.includes(program)
          ? prev.filter(p => p !== program)
          : [...prev, program]
      );
    });
  };

  const clearFilters = () => {
    setStartYear(1991);
    setEndYear(2025);
    setSelectedCategories([]);
    setSelectedPrograms([]);
    setSearchCategory("");
    setSearchProgram("");
  };

  const hasActiveFilters = startYear !== 1991 || endYear !== 2025 || selectedCategories.length > 0 || selectedPrograms.length > 0;

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

    if (isDragging === "start" && year <= endYear) {
      setStartYear(year);
    } else if (isDragging === "end" && year >= startYear) {
      setEndYear(year);
    }
  };

  const handleSliderMouseUp = () => {
    setIsDragging(null);
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
  }, [isDragging]);

  // Close program dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (programDropdownRef.current && !programDropdownRef.current.contains(event.target as Node)) {
        setIsProgramDropdownOpen(false);
      }
    };

    if (isProgramDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [isProgramDropdownOpen]);

  const handleDistrictHover = (districtId: string | null, event?: React.MouseEvent) => {
    setHoveredDistrict(districtId);
    if (event && districtId) {
      setMousePosition({ x: event.clientX, y: event.clientY });
    }
  };

  const hoveredData = hoveredDistrict
    ? districtsData.find(d => d.id === hoveredDistrict)
    : null;

  const filteredCategories = categories.filter(cat =>
    cat.toLowerCase().includes(searchCategory.toLowerCase())
  );

  // Calculate min and max values for color scaling
  const districtValues = useMemo(() => {
    const values = Object.keys(filteredData.districts).map(districtId => {
      const data = filteredData.districts[districtId];
      return viewMode === "budget" ? data.budget : data.projects;
    });
    
    const min = Math.min(...values);
    const max = Math.max(...values);
    
    return { min, max, values };
  }, [filteredData, viewMode]);

  // Function to get color based on value
  const getDistrictColor = (districtId: string) => {
    const data = filteredData.districts[districtId];
    const value = viewMode === "budget" ? data.budget : data.projects;
    
    if (districtValues.max === districtValues.min) {
      return "#F7BD78"; // Default color if all values are the same
    }
    
    // Normalize value between 0 and 1
    const normalized = (value - districtValues.min) / (districtValues.max - districtValues.min);
    
    // Color gradient from light to dark orange/red
    const colors = [
      "#FFEAC1", "#FFD78A", "#FBCA81", "#F7BD78", 
      "#F3B06F", "#EFA366", "#EB965D", "#E88854",
      "#E47B4B", "#E06E42", "#DC6139", "#D44727"
    ];
    
    const index = Math.floor(normalized * (colors.length - 1));
    return colors[index];
  };

  return (
    <div className="bg-white h-screen w-full flex flex-col overflow-hidden">
      {/* Header */}
      <div className="bg-white h-[80px] relative shrink-0 w-full border-b border-[#e3e3e3]">
        <div className="max-w-[1440px] mx-auto h-full relative">
          <div className="absolute content-stretch flex gap-[12px] items-center left-[60px] top-1/2 translate-y-[-50%]">
            <div className="h-[56px] relative shrink-0 w-[31px]">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="Logo" className="absolute h-full left-[-0.48%] max-w-none top-0 w-[445.41%]" src={imgImage2} />
              </div>
            </div>
            <div className="font-['VinnytsiaSansBold:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#343a40] text-[14px] text-nowrap tracking-[-0.28px] whitespace-pre">
              <p className="mb-0">Геопортал Вінницької</p>
              <p>Територіальної Громади</p>
            </div>
          </div>

          <div className="hidden lg:flex absolute content-stretch gap-[48px] items-center leading-[20px] left-[40%] not-italic text-[#343a40] text-[16px] text-nowrap top-[calc(50%+0.5px)] translate-y-[-50%] whitespace-pre">
            <button 
              onClick={() => handlePageViewChange("analytics")}
              disabled={isLoadingViewChange}
              className={`relative shrink-0 text-center tracking-[-0.64px] ${pageView === "analytics" ? "font-['VinnytsiaSansBold:Bold',sans-serif]" : "font-['VinnytsiaSansReg:Book',sans-serif] tracking-[-0.32px]"} ${isLoadingViewChange ? "opacity-50" : ""}`}
            >
              {t.analyticsData}
            </button>
            <button 
              onClick={() => handlePageViewChange("projects-list")}
              disabled={isLoadingViewChange}
              className={`relative shrink-0 tracking-[-0.32px] ${pageView === "projects-list" ? "font-['VinnytsiaSansBold:Bold',sans-serif] tracking-[-0.64px]" : "font-['VinnytsiaSansReg:Book',sans-serif]"} ${isLoadingViewChange ? "opacity-50" : ""}`}
            >
              {t.projectsList}
            </button>
          </div>

          <div className="absolute right-[60px] top-1/2 -translate-y-1/2 flex gap-[12px] items-center">
            <div 
              className="hidden sm:flex box-border content-stretch gap-[8px] items-center px-[16px] py-[10px] rounded-[999px] relative cursor-pointer"
              onMouseEnter={() => setIsWebsiteViewsHovered(true)}
              onMouseLeave={() => setIsWebsiteViewsHovered(false)}
            >
              <svg className="shrink-0 size-[16px]" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <path d={svgPaths.p145d9d00} fill="#343A40" />
              </svg>
              <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#343a40] text-[14px] text-nowrap whitespace-pre">5 283</p>
              
              {isWebsiteViewsHovered && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-max z-50">
                  <div className="bg-[rgba(0,0,0,0.7)] relative rounded-[4px] shadow-[0px_2px_3px_0px_rgba(0,0,0,0.15)]">
                    <div className="flex flex-col items-center justify-center">
                      <div className="content-stretch flex flex-col gap-[8px] items-center justify-center p-[8px] relative">
                        <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[16px] not-italic relative shrink-0 text-[10px] text-center text-nowrap text-white whitespace-pre">{t.websiteViews}</p>
                        <div className="absolute flex h-[6px] items-center justify-center left-[calc(50%+0.5px)] top-[-6px] translate-x-[-50%] w-[12px]">
                          <div className="flex-none scale-y-[-100%]">
                            <div className="h-[6px] relative w-[12px]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 6">
                                <path d="M6 6L0 0H12L6 6Z" fill="var(--fill-0, black)" fillOpacity="0.7" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <button 
              onClick={() => setLanguage(language === 'uk' ? 'en' : 'uk')}
              className="bg-[#f7f7f7] hover:bg-[#e8e8e8] box-border content-stretch flex gap-[8px] items-center px-[16px] py-[10px] rounded-[999px] transition-colors cursor-pointer"
            >
              <svg className="shrink-0 size-[16px]" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <path d={svgPaths.pd658470} fill="#343A40" />
              </svg>
              <p className="hidden sm:inline font-['VinnytsiaSansReg:Book',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#343a40] text-[14px] text-nowrap whitespace-pre">
                {language === 'uk' ? 'Українська' : 'English'}
              </p>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="box-border content-stretch flex flex-col lg:flex-row gap-[24px] items-start px-[20px] md:px-[40px] lg:px-[60px] py-[20px] md:py-[40px] w-full max-w-[1440px] mx-auto flex-1 min-h-0 overflow-auto">
        {pageView === "projects-list" ? (
          <ProjectsList initialSelectedDistrict={selectedDistrictForProjects} language={language} />
        ) : (
          <>
        {/* Sidebar */}
        <div className="bg-[#f7f7f7] box-border content-stretch flex flex-col gap-[24px] items-start px-[24px] py-[32px] rounded-[16px] shrink-0 w-full lg:w-[312px] overflow-visible">
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

          {/* Toggle Tabs */}
          <div className="bg-white content-stretch flex items-center relative rounded-[999px] shrink-0 w-full overflow-hidden">
            <div aria-hidden="true" className="absolute border border-[rgba(52,58,64,0.1)] border-solid inset-0 pointer-events-none rounded-[999px]" />
            <button
              onClick={() => handleViewModeChange("budget")}
              disabled={isLoadingViewChange}
              className={`basis-0 grow min-h-px min-w-px relative rounded-[999px] shrink-0 transition-colors ${
                viewMode === "budget" ? "bg-[rgba(201,85,85,0.1)]" : ""
              } ${isLoadingViewChange ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              {viewMode === "budget" && <div aria-hidden="true" className="absolute border border-[#c95555] border-solid inset-0 pointer-events-none rounded-[999px]" />}
              <div className="flex flex-row items-center justify-center size-full">
                <div className="box-border content-stretch flex gap-[8px] items-center justify-center pb-[8px] pt-[12px] px-[8px] relative w-full">
                  <p className={`font-['VinnytsiaSerif:Book',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap whitespace-pre ${
                    viewMode === "budget" ? "text-[#c95555]" : "text-[#343a40]"
                  }`}>{t.budget}</p>
                </div>
              </div>
            </button>
            <button
              onClick={() => handleViewModeChange("projects")}
              disabled={isLoadingViewChange}
              className={`basis-0 grow min-h-px min-w-px relative rounded-[999px] shrink-0 transition-colors ${
                viewMode === "projects" ? "bg-[rgba(201,85,85,0.1)]" : ""
              } ${isLoadingViewChange ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              {viewMode === "projects" && <div aria-hidden="true" className="absolute border border-[#c95555] border-solid inset-0 pointer-events-none rounded-[999px]" />}
              <div className="flex flex-row items-center justify-center size-full">
                <div className="box-border content-stretch flex gap-[8px] items-center justify-center pb-[8px] pt-[12px] px-[8px] relative w-full">
                  <p className={`font-['VinnytsiaSerif:Book',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap whitespace-pre ${
                    viewMode === "projects" ? "text-[#c95555]" : "text-[#343a40]"
                  }`}>{t.projects}</p>
                </div>
              </div>
            </button>
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
                        left: `${((startYear - 1991) / (2025 - 1991)) * 100}%`,
                        right: `${100 - ((endYear - 1991) / (2025 - 1991)) * 100}%`,
                      }}
                    />
                    
                    {/* Start handle */}
                    <div
                      className="absolute flex items-center justify-center size-[48px] top-1/2 -translate-y-1/2 cursor-grab active:cursor-grabbing"
                      style={{
                        left: `calc(${((startYear - 1991) / (2025 - 1991)) * 100}% - 24px)`,
                      }}
                      onMouseDown={handleSliderMouseDown("start")}
                    >
                      <svg className="size-[28px]" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
                        <rect fill="#FFFBFE" height="20" rx="10" width="20" x="4" y="3" />
                        <circle cx="14" cy="13" r="10" fill="#C95555" filter="url(#shadow)" />
                      </svg>
                    </div>
                    
                    {/* End handle */}
                    <div
                      className="absolute flex items-center justify-center size-[48px] top-1/2 -translate-y-1/2 cursor-grab active:cursor-grabbing"
                      style={{
                        left: `calc(${((endYear - 1991) / (2025 - 1991)) * 100}% - 24px)`,
                      }}
                      onMouseDown={handleSliderMouseDown("end")}
                    >
                      <svg className="size-[28px]" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
                        <rect fill="#FFFBFE" height="20" rx="10" width="20" x="4" y="3" />
                        <circle cx="14" cy="13" r="10" fill="#C95555" filter="url(#shadow)" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Year inputs */}
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                  <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0">
                    <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[12px] min-w-full not-italic relative shrink-0 text-[#49454f] text-[10px] text-center tracking-[-0.2px] w-[min-content]">Від</p>
                    <div className="content-stretch flex flex-col gap-[10px] items-center relative rounded-[999px] shrink-0 w-[56px]">
                      <div aria-hidden="true" className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-[999px]" />
                      <input
                        type="number"
                        value={startYear}
                        onChange={(e) => setStartYear(Math.min(Number(e.target.value), endYear))}
                        className="w-full h-[28px] text-center font-['VinnytsiaSansReg:Book',sans-serif] text-[12px] text-[#343a40] tracking-[-0.24px] border-none outline-none bg-transparent"
                        min={1991}
                        max={endYear}
                      />
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0">
                    <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[12px] min-w-full not-italic relative shrink-0 text-[#49454f] text-[10px] text-center tracking-[-0.2px] w-[min-content]">До</p>
                    <div className="content-stretch flex flex-col gap-[10px] items-center relative rounded-[999px] shrink-0 w-[56px]">
                      <div aria-hidden="true" className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-[999px]" />
                      <input
                        type="number"
                        value={endYear}
                        onChange={(e) => setEndYear(Math.max(Number(e.target.value), startYear))}
                        className="w-full h-[28px] text-center font-['VinnytsiaSansReg:Book',sans-serif] text-[12px] text-[#343a40] tracking-[-0.24px] border-none outline-none bg-transparent"
                        min={startYear}
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

          {/* Categories Section */}
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
            <button
              onClick={() => setIsCategoryCollapsed(!isCategoryCollapsed)}
              className="content-stretch flex items-center justify-between relative shrink-0 w-full group"
            >
              <p className="font-['VinnytsiaSerif:Book',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#343a40] text-[18px] text-nowrap whitespace-pre">{t.categories}</p>
              <div className="bg-white box-border content-stretch flex items-center justify-center p-[4px] relative rounded-[999px] shrink-0 size-[24px]">
                <div className="relative shrink-0 size-[16px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
                    <path d={isCategoryCollapsed ? plusIconPath : minusIconPath} fill="#343A40" />
                  </svg>
                </div>
              </div>
            </button>

            {!isCategoryCollapsed && (
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                {/* Search - Fixed at top */}
                <div className="content-stretch flex gap-[10px] items-start relative rounded-[999px] shrink-0 w-full bg-[#f7f7f7] z-10 mb-[16px]">
                  <div aria-hidden="true" className={`absolute border ${isCategorySearchFocused || searchCategory ? 'border-[#c95555]' : 'border-[#e3e3e3]'} border-solid inset-0 pointer-events-none rounded-[999px] transition-colors`} />
                  <input
                    type="text"
                    value={searchCategory}
                    onChange={(e) => setSearchCategory(e.target.value)}
                    onFocus={() => setIsCategorySearchFocused(true)}
                    onBlur={() => setIsCategorySearchFocused(false)}
                    placeholder={t.searchCategories}
                    className={`box-border content-stretch flex flex-col h-[40px] items-start justify-center px-[16px] py-0 relative shrink-0 flex-1 font-['VinnytsiaSansReg:Book',sans-serif] text-[16px] text-[#343a40] tracking-[-0.32px] border-none outline-none bg-transparent ${isCategorySearchFocused || searchCategory ? 'opacity-70' : ''} ${isCategorySearchFocused || searchCategory ? 'placeholder:opacity-70' : 'placeholder:opacity-50'}`}
                  />
                  <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0 size-[40px]">
                    <svg className="shrink-0 size-[24px]" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <path clipRule="evenodd" d={svgFilterPaths.p1f615a40} fill="#343A40" fillOpacity="0.5" fillRule="evenodd" />
                    </svg>
                  </div>
                </div>

                {/* Categories List - Scrollable */}
                <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full max-h-[320px] overflow-y-auto">
                  {filteredCategories.slice(0, 10).map((category) => {
                    const count = allCategoryCounts[category]?.projects || 0;
                    
                    return (
                      <div key={category} className="relative shrink-0 w-full">
                        <label className="flex flex-row items-center size-full cursor-pointer">
                          <div className="box-border content-stretch flex gap-[8px] items-center pl-0 pr-[8px] py-0 relative w-full">
                            <div className="relative shrink-0 size-[24px]">
                              <input
                                type="checkbox"
                                checked={selectedCategories.includes(category)}
                                onChange={() => toggleCategory(category)}
                                className="hidden"
                              />
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                                {selectedCategories.includes(category) ? (
                                  <path d={svgFilterPaths.p7913d80} fill="#C95555" />
                                ) : (
                                  <path d={svgFilterPaths.p542c300} fill="#737B8C" />
                                )}
                              </svg>
                            </div>
                            <p className="-webkit-box basis-0 font-['VinnytsiaSansReg:Book',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#343a40] text-[14px]">{t[getCategoryKey(category)]}</p>
                            {viewMode === "projects" && (
                              <p className="-webkit-box font-['VinnytsiaSansReg:Book',sans-serif] leading-[16px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(52,58,64,0.6)] text-nowrap text-right whitespace-pre">({count})</p>
                            )}
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
                  <div className="absolute bg-white box-border shadow-[0px_4px_28px_0px_rgba(0,0,0,0.05)] rounded-[16px] top-0 left-0 w-full z-50">
                    {/* Search field with focus state */}
                    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
                      <div aria-hidden="true" className="absolute border-[#d0d1d2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                      <input
                        type="text"
                        value={searchProgram}
                        onChange={(e) => setSearchProgram(e.target.value)}
                        onFocus={() => setIsProgramDropdownOpen(true)}
                        placeholder={t.searchPrograms}
                        className="box-border content-stretch flex flex-col h-[40px] items-start justify-center px-[16px] py-0 relative shrink-0 flex-1 font-['VinnytsiaSansReg:Book',sans-serif] text-[14px] text-[#343a40] tracking-[-0.28px] border-none outline-none bg-transparent placeholder:opacity-70"
                      />
                      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px] p-[8px]">
                        <svg className="shrink-0 size-[24px]" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                          <path clipRule="evenodd" d={svgFilterPaths.p1f615a40} fill="#343A40" fillOpacity="0.5" fillRule="evenodd" />
                        </svg>
                      </div>
                    </div>

                    {/* Programs List Dropdown */}
                    <div className="h-[240px] relative shrink-0 w-full">
                      <div className="overflow-clip rounded-[inherit] size-full">
                        <div className="box-border content-stretch flex flex-col gap-[12px] h-[240px] items-start p-[8px] relative w-full overflow-y-auto scrollbar-thin scrollbar-thumb-[#c95555] scrollbar-track-transparent">
                          {programs
                            .filter(program => program.toLowerCase().includes(searchProgram.toLowerCase()))
                            .map((program) => {
                              const count = allProgramCounts[program]?.projects || 0;
                              
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
                                      className="flex-1 font-['VinnytsiaSansReg:Book',sans-serif] leading-[20px] not-italic relative text-[#343a40] text-[14px] line-clamp-2"
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
                                      {program}
                                    </p>
                                    {viewMode === "projects" && (
                                      <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(52,58,64,0.6)] text-nowrap text-right whitespace-pre">({count})</p>
                                    )}
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
                <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
                  <div aria-hidden="true" className={`absolute border ${isProgramDropdownOpen ? 'border-[#c95555]' : 'border-[#d0d1d2]'} border-[0px_0px_1px] border-solid inset-0 pointer-events-none`} />
                  <input
                    type="text"
                    value={searchProgram}
                    onChange={(e) => setSearchProgram(e.target.value)}
                    onFocus={() => setIsProgramDropdownOpen(true)}
                    placeholder={t.searchPrograms}
                    className="box-border content-stretch flex flex-col h-[40px] items-start justify-center px-[16px] py-0 relative shrink-0 flex-1 font-['VinnytsiaSansReg:Book',sans-serif] text-[14px] text-[#343a40] tracking-[-0.28px] border-none outline-none bg-transparent placeholder:opacity-70"
                  />
                  <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px] p-[8px]">
                    <svg className="shrink-0 size-[24px]" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <path clipRule="evenodd" d={svgFilterPaths.p1f615a40} fill="#343A40" fillOpacity="0.5" fillRule="evenodd" />
                    </svg>
                  </div>
                </div>

                {/* Selected Programs Display */}
                {selectedPrograms.length > 0 && (
                  <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full mt-[4px]">
                    {selectedPrograms.map((program) => {
                      const count = filteredData.programs[program]?.projects || 0;
                      
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
                            className="flex-1 font-['VinnytsiaSansReg:Book',sans-serif] leading-[20px] not-italic relative text-[#343a40] text-[14px] cursor-pointer line-clamp-2"
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
                            {t[getProgramKey(program)] || program}
                          </p>
                          {viewMode === "projects" && (
                            <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(52,58,64,0.6)] text-nowrap text-right whitespace-pre">({count})</p>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Map Content */}
        <div className="basis-0 bg-white box-border content-stretch flex flex-col gap-[24px] grow items-start min-h-px min-w-0 px-[24px] py-[32px] relative rounded-[12px] shrink-0">
          {/* Header */}
          <div className="content-stretch flex flex-col sm:flex-row gap-[16px] items-start sm:items-end justify-between relative shrink-0 w-full">
            <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-0 not-italic relative shrink-0">
              <p className="font-['VinnytsiaSansBold:Bold',sans-serif] leading-[28px] relative shrink-0 text-[#343a40] text-[20px] md:text-[24px] tracking-[-0.96px] w-full">{t.dashboardTitle}</p>
              <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[20px] relative shrink-0 text-[14px] text-[rgba(52,58,64,0.6)] tracking-[-0.28px] w-full break-words">{t.dashboardSubtitle}</p>
            </div>

            <div className="bg-white content-stretch flex items-center relative rounded-[999px] shrink-0">
              <div aria-hidden="true" className="absolute border border-[rgba(52,58,64,0.2)] border-solid inset-0 pointer-events-none rounded-[999px]" />
              <button 
                onClick={() => handleDataViewTypeChange("map")}
                disabled={isLoadingChartChange}
                className={`box-border content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[999px] shrink-0 transition-colors ${
                  dataViewType === "map" ? "bg-[#c95555] hover:bg-[#b04040]" : "hover:bg-[#f7f7f7]"
                } ${isLoadingChartChange ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                <svg className="shrink-0 size-[24px]" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <path d={svgPaths.p3a0136c0} fill={dataViewType === "map" ? "white" : "#343A40"} />
                </svg>
              </button>
              <button 
                onClick={() => handleDataViewTypeChange("chart")}
                disabled={isLoadingChartChange}
                className={`box-border content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[999px] shrink-0 transition-colors ${
                  dataViewType === "chart" ? "bg-[#c95555] hover:bg-[#b04040]" : "hover:bg-[#f7f7f7]"
                } ${isLoadingChartChange ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                <svg className="shrink-0 size-[24px]" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <path d={svgPaths.p12104f00} fill={dataViewType === "chart" ? "white" : "#343A40"} />
                </svg>
              </button>
            </div>
          </div>

          {/* Map or Chart View */}
          <div className="relative w-full">
            {(isLoadingChartChange || isLoadingViewChange || isLoadingData) && (
              <div className="absolute inset-0 bg-white/80 z-10 flex items-center justify-center rounded-[8px]">
                <div className="flex flex-col items-center gap-[16px]">
                  <div className="w-[40px] h-[40px] border-4 border-[#e3e3e3] border-t-[#c95555] rounded-full animate-spin"></div>
                  <p className="font-['VinnytsiaSansReg:Book',sans-serif] text-[14px] text-[#343a40] tracking-[-0.28px]">
                    {t.loadingData}
                  </p>
                </div>
              </div>
            )}
            {dataViewType === "map" ? (
              <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
                {/* Legend */}
                <div className="bg-white box-border content-stretch flex flex-col gap-[16px] items-start p-[16px] relative rounded-[8px] shrink-0">
                  <div aria-hidden="true" className="absolute border border-[rgba(52,58,64,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[16px] min-w-full not-italic relative shrink-0 text-[#343a40] text-[14px] tracking-[-0.28px] w-[min-content]">
                    {viewMode === "budget" ? t.budgetScale : t.projectsCount}
                  </p>
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
                    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                      <div className="bg-[#ffeac1] h-[6px] shrink-0 w-[16px]" />
                      <div className="bg-[#ffd78a] h-[6px] shrink-0 w-[16px]" />
                      <div className="bg-[#fbca81] h-[6px] shrink-0 w-[16px]" />
                      <div className="bg-[#f7bd78] h-[6px] shrink-0 w-[16px]" />
                      <div className="bg-[#f3b06f] h-[6px] shrink-0 w-[16px]" />
                      <div className="bg-[#efa366] h-[6px] shrink-0 w-[16px]" />
                      <div className="bg-[#eb965d] h-[6px] shrink-0 w-[16px]" />
                      <div className="bg-[#e88854] h-[6px] shrink-0 w-[16px]" />
                      <div className="bg-[#e47b4b] h-[6px] shrink-0 w-[16px]" />
                      <div className="bg-[#e06e42] h-[6px] shrink-0 w-[16px]" />
                      <div className="bg-[#dc6139] h-[6px] shrink-0 w-[16px]" />
                      <div className="bg-[#d44727] h-[6px] shrink-0 w-[16px]" />
                    </div>
                    <div className="content-stretch flex font-['VinnytsiaSansReg:Book',sans-serif] gap-[4px] items-center leading-[12px] not-italic relative shrink-0 text-[#343a40] text-[10px] w-full justify-between">
                      <p className="relative shrink-0">{Math.round(districtValues.min)}</p>
                      <p className="relative shrink-0">{Math.round(districtValues.max)}</p>
                    </div>
                  </div>
                </div>

                <div className="relative w-full h-[calc(100vh-450px)] min-h-[300px] max-h-[575px] flex items-center justify-center overflow-hidden">
                <svg className="w-full h-full max-w-[888px]" viewBox="0 0 888 575" preserveAspectRatio="xMidYMid meet">
                  <g>
                    {districtsData.map((district) => (
                      <g
                        key={district.id}
                        opacity={hoveredDistrict === district.id ? 1 : 0.7}
                        onMouseEnter={(e) => handleDistrictHover(district.id, e)}
                        onMouseMove={(e) => setMousePosition({ x: e.clientX, y: e.clientY })}
                        onMouseLeave={() => handleDistrictHover(null)}
                        onClick={() => handleDistrictClick(district.id)}
                        className="cursor-pointer transition-opacity"
                      >
                        <path
                          d={district.path}
                          fill={hoveredDistrict === district.id ? "#FFC266" : getDistrictColor(district.id)}
                          stroke="#343A40"
                          strokeOpacity="0.14"
                          strokeWidth="2"
                        />
                      </g>
                    ))}
                  </g>
                </svg>
              </div>
            </div>
          ) : (
            <div className="relative w-full h-[calc(100vh-400px)] min-h-[400px] max-h-[700px]">
              <BarChartComponent
                data={districtsData.map(district => ({
                  name: district.name,
                  value: viewMode === "budget"
                    ? Math.round(filteredData.districts[district.id]?.budget || 0)
                    : filteredData.districts[district.id]?.projects || 0,
                  budget: Math.round(filteredData.districts[district.id]?.budget || 0),
                  projects: filteredData.districts[district.id]?.projects || 0
                }))}
                viewMode={viewMode}
                language={language}
              />
            </div>
          )}
          </div>

          {/* Footer */}
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 984 1">
                <path d="M0 0.5H984" stroke="#343A40" strokeOpacity="0.2" />
              </svg>
            </div>
          </div>

          <div className="content-stretch flex flex-col sm:flex-row gap-[16px] items-start sm:items-center relative shrink-0 w-full">
            <div className="basis-0 box-border content-stretch flex font-['VinnytsiaSansReg:Book',sans-serif] gap-[8px] grow items-center leading-[0] min-h-px min-w-0 not-italic px-0 py-[12px] relative shrink-0 text-[#3c4d5d] text-[14px] tracking-[-0.28px]">
              <div className="flex flex-col justify-center opacity-60 relative shrink-0">
                <p className="leading-[16px] text-nowrap whitespace-nowrap">{t.dataSource}</p>
              </div>
              <div className="flex flex-col justify-center relative shrink-0">
                <p className="[text-underline-position:from-font] decoration-solid leading-[16px] text-nowrap underline whitespace-nowrap">{t.dataSourceName}</p>
              </div>
            </div>
            <div className="h-[40px] relative shrink-0 w-[180px] hidden sm:block">
              <div className="absolute content-stretch flex gap-[9.567px] items-center left-[calc(50%-0.01px)] top-1/2 translate-x-[-50%] translate-y-[-50%]">
                <div className="content-stretch flex flex-col items-start relative shrink-0">
                  <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#3c4d5d] text-[15.307px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                    LiveCharts
                  </p>
                  <div className="content-stretch flex gap-[1.594px] h-[2px] items-start relative shrink-0 w-full">
                    <div className="basis-0 bg-[#3c4d5d] grow h-full min-h-px min-w-px rounded-[0.319px] shrink-0" />
                    <div className="basis-0 bg-[#3c4d5d] grow h-full min-h-px min-w-px rounded-[0.319px] shrink-0" />
                    <div className="basis-0 bg-[#3c4d5d] grow h-full min-h-px min-w-px rounded-[0.319px] shrink-0" />
                    <div className="basis-0 bg-[#3c4d5d] grow h-full min-h-px min-w-px rounded-[0.319px] shrink-0" />
                    <div className="basis-0 bg-[#3c4d5d] grow h-full min-h-px min-w-px rounded-[0.319px] shrink-0" />
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <div className="bg-[#3c4d5d] h-full shrink-0 w-[0.638px]" />
                </div>
                <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[#3c4d5d] text-[8px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Powered by LaSoft
                  <br aria-hidden="true" />
                  Innovation Lab
                </p>
              </div>
            </div>
          </div>
        </div>
        </>
        )}
      </div>

      {/* Popover */}
      {hoveredData && (
        <div
          className="fixed bg-[rgba(0,0,0,0.7)] rounded-[4px] shadow-[0px_2px_3px_0px_rgba(0,0,0,0.15)] pointer-events-none z-50"
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y - 70}px`,
            transform: 'translateX(-50%)',
          }}
        >
          <div className="flex flex-col justify-center">
            <div className="box-border content-stretch flex flex-col gap-[8px] items-start justify-center p-[8px] relative">
              {/* District name with color indicator */}
              <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
                <div className="relative shrink-0 size-[6px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
                    <circle cx="3" cy="3" fill={hoveredData.color} r="3" />
                  </svg>
                </div>
                <p className="basis-0 font-['VinnytsiaSansReg:Book',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[10px] text-white whitespace-nowrap">{t[getDistrictKey(hoveredData.name)]}</p>
              </div>

              {/* Budget and Projects info - always show both */}
              <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                <p className="font-['VinnytsiaSansBold:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
                  {Math.round(filteredData.districts[hoveredData.id]?.budget || 0)} {t.million} {language === 'uk' ? 'грн' : 'UAH'}
                </p>
                <p className="font-['VinnytsiaSansBold:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
                  {filteredData.districts[hoveredData.id]?.projects || 0} {language === 'uk' ? 'проєкти' : 'projects'}
                </p>
              </div>

              {/* Arrow pointing down */}
              <div className="absolute bottom-[-6px] h-[6px] left-1/2 translate-x-[-50%] w-[12px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 6">
                  <path d="M6 6L0 0H12L6 6Z" fill="black" fillOpacity="0.7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Global Popover for hovered program - positioned above cursor */}
      {hoveredProgram && (
        <div 
          className="fixed bg-[rgba(0,0,0,0.7)] box-border content-stretch flex flex-col gap-[6px] items-start justify-center p-[8px] rounded-[4px] shadow-[0px_2px_3px_0px_rgba(0,0,0,0.15)] w-[264px] z-[9999] pointer-events-none"
          style={{
            left: `${programPopoverPosition.x}px`,
            bottom: `${window.innerHeight - programPopoverPosition.y + 10}px`,
            transform: 'translateX(-50%)'
          }}
        >
          <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[16px] min-w-full not-italic relative shrink-0 text-[12px] text-white w-[min-content]">{hoveredProgram}</p>
          <div className="absolute bottom-[-6px] h-[6px] left-1/2 translate-x-[-50%] w-[12px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 6">
              <path d="M6 6L0 0H12L6 6Z" fill="black" fillOpacity="0.7" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}
