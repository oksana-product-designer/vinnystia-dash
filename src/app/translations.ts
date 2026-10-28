export type Language = 'uk' | 'en';

export interface Translations {
  // Navigation
  budget: string;
  projects: string;
  analyticsData: string;
  projectsList: string;
  
  // Header
  dashboardTitle: string;
  dashboardSubtitle: string;
  projectsListTitle: string;
  projectsListSubtitle: string;
  
  // View modes
  map: string;
  chart: string;
  grid: string;
  list: string;
  
  // Filters
  period: string;
  yearFrom: string;
  yearTo: string;
  categories: string;
  programs: string;
  searchCategories: string;
  searchPrograms: string;
  searchProjects: string;
  selectedCount: string;
  budgetRange: string;
  districts: string;
  directions: string;
  searchDistricts: string;
  searchDirections: string;
  filters: string;
  clearFilters: string;
  download: string;
  from: string;
  to: string;
  
  // Legend
  budgetScale: string;
  projectsCount: string;
  
  // Footer
  dataSource: string;
  dataSourceName: string;
  
  // Loading
  loadingData: string;
  
  // Pagination
  showing: string;
  of: string;
  itemsPerPage: string;
  
  // Sorting
  sortBy: string;
  newest: string;
  oldest: string;
  expensive: string;
  cheapest: string;
  nameAZ: string;
  nameZA: string;
  
  // Pagination & Messages
  itemsPerPage: string;
  noProjects: string;
  
  // Project details
  projectCode: string;
  category: string;
  description: string;
  program: string;
  location: string;
  budget: string;
  district: string;
  direction: string;
  year: string;
  closeModal: string;
  
  // Districts
  districts_center: string;
  districts_podillya: string;
  districts_tyazhyliv: string;
  districts_vyshenka: string;
  districts_pyatnychany: string;
  districts_slovyanka: string;
  districts_dalne_zamostya: string;
  districts_blyzhne_zamostya: string;
  districts_stare_misto: string;
  districts_vinnytski_hutory: string;
  districts_sverdlovskyi: string;
  districts_akademichnyi: string;
  
  // Categories
  cat_education: string;
  cat_transport: string;
  cat_culture: string;
  cat_healthcare: string;
  cat_architecture: string;
  cat_tourism: string;
  cat_sports: string;
  cat_utilities: string;
  cat_improvement: string;
  cat_civic: string;
  
  // Programs
  prog_municipal_university: string;
  prog_green_zones: string;
  prog_sports_culture: string;
  prog_energy_efficiency: string;
  prog_education: string;
  prog_transport: string;
  prog_road_repair: string;
  prog_public_services: string;
  prog_culture: string;
  prog_ecological_safety: string;
  prog_heritage: string;
  prog_improvement: string;
  prog_social_support: string;
  prog_resource_management: string;
  prog_youth: string;
  prog_utilities: string;
  prog_healthcare: string;
  prog_public_safety: string;
  prog_trade: string;
  
  // Budget formatting
  million: string;
  thousand: string;
  
  // Chart labels
  districtLabel: string;
  budgetScaleChart: string;
  projectsCountChart: string;
  millionUAH: string;
  projectsLabel: string;
  
  // Tooltips
  websiteViews: string;
}

export const translations: Record<Language, Translations> = {
  uk: {
    // Navigation
    budget: 'Бюджет',
    projects: 'Проєкти',
    analyticsData: 'Аналітичні дані',
    projectsList: 'Список проєктів',
    
    // Header
    dashboardTitle: 'Аналітичний графік бюджету громади',
    dashboardSubtitle: 'Бюджет вказується в мільйонах гривень, демонструючи розподіл бюджетних коштів за обраний період.',
    projectsListTitle: 'Проєкти громади',
    projectsListSubtitle: 'Перегляд та аналіз реалізованих та запланованих проєктів Вінницької міської територіальної громади',
    
    // View modes
    map: 'Карта',
    chart: 'Графік',
    grid: 'Сітка',
    list: 'Список',
    
    // Filters
    period: 'Період',
    yearFrom: 'Рік від',
    yearTo: 'Рік до',
    categories: 'Категорії',
    programs: 'Програми',
    searchCategories: 'Пошук категорій...',
    searchPrograms: 'Пошук програм...',
    searchProjects: 'Пошук проєктів...',
    selectedCount: 'Обрано',
    budgetRange: 'Діапазон бюджету',
    districts: 'Райони',
    directions: 'Напрямки',
    searchDistricts: 'Пошук районів...',
    searchDirections: 'Пошук напрямків...',
    filters: 'Фільтри',
    clearFilters: 'Очистити фільтри',
    download: 'Завантажити',
    from: 'від',
    to: 'до',
    
    // Legend
    budgetScale: 'Масштаб бюджету у млн грн:',
    projectsCount: 'Кількість проєктів:',
    
    // Footer
    dataSource: 'Джерело даних:',
    dataSourceName: 'Вінницька міська рада',
    
    // Loading
    loadingData: 'Завантаження даних...',
    
    // Pagination
    showing: 'Показано',
    of: 'з',
    itemsPerPage: 'на сторінці',
    
    // Sorting
    sortBy: 'Сортувати за',
    newest: 'Найновіші',
    oldest: 'Найстаріші',
    expensive: 'Найдорожчі',
    cheapest: 'Найдешевші',
    nameAZ: 'Назва А-Я',
    nameZA: 'Назва Я-А',
    
    // Pagination & Messages
    itemsPerPage: 'на сторінці',
    noProjects: 'Проєктів не знайдено',
    
    // Project details
    projectCode: 'Код проєкту',
    category: 'Категорія',
    description: 'Опис',
    program: 'Програма',
    location: 'Місцезнаходження',
    budget: 'Бюджет',
    district: 'Район',
    direction: 'Напрямок',
    year: 'Рік',
    closeModal: 'Закрити',
    
    // Districts
    districts_center: 'Центр',
    districts_podillya: 'Поділля',
    districts_tyazhyliv: 'Тяжилів',
    districts_vyshenka: 'Вишенька',
    districts_pyatnychany: "П'ятничани",
    districts_slovyanka: "Слов'янка",
    districts_dalne_zamostya: 'Дальнє Замостя',
    districts_blyzhne_zamostya: 'Ближнє Замостя',
    districts_stare_misto: 'Старе місто',
    districts_vinnytski_hutory: 'Вінницькі хутори',
    districts_sverdlovskyi: 'Свердловський',
    districts_akademichnyi: 'Академічний',
    
    // Categories
    cat_education: 'Освіта',
    cat_transport: 'Транспорт, зв\'язок, енергетика, інформаційні технології',
    cat_culture: 'Культура і мистецтво',
    cat_healthcare: 'Охорона здоров\'я',
    cat_architecture: 'Архітектура і містобудування',
    cat_tourism: 'Туризм, дозвілля, молодь',
    cat_sports: 'Фізкультура та спорт',
    cat_utilities: 'Комунальні підприємства',
    cat_improvement: 'Благоустрій міста та охорона навколишнього середовища',
    cat_civic: 'Громадська участь',
    
    // Programs
    prog_municipal_university: 'Програма «Муніципальний університет перепідготовки та підвищення кваліфікації посадових осіб місцевого самоврядування Вінницької міської ради»',
    prog_green_zones: 'Програма розвитку зелених зон',
    prog_sports_culture: 'Програма розвитку спорту та фізичної культури',
    prog_energy_efficiency: 'Програма енергоефективності та відновлюваної енергетики',
    prog_education: 'Програма розвитку освіти',
    prog_transport: 'Програма розвитку транспортної інфраструктури',
    prog_road_repair: 'Програма ремонту доріг',
    prog_public_services: 'Програма розвитку громадських послуг',
    prog_culture: 'Програма розвитку культури',
    prog_ecological_safety: 'Програма екологічної безпеки',
    prog_heritage: 'Програма збереження історичної спадщини',
    prog_improvement: 'Програма благоустрою',
    prog_social_support: 'Програма соціальної підтримки',
    prog_resource_management: 'Програма раціонального використання ресурсів',
    prog_youth: 'Програма розвитку молоді',
    prog_utilities: 'Програма розвитку комунального господарства',
    prog_healthcare: 'Програма охорони здоров\'я',
    prog_public_safety: 'Програма громадської безпеки',
    prog_trade: 'Програма розвитку торгівлі',
    
    // Budget formatting
    million: 'млн',
    thousand: 'тис',
    
    // Chart labels
    districtLabel: 'Район',
    budgetScaleChart: 'Масштаб бюджету у млн грн:',
    projectsCountChart: 'Кількість проєктів:',
    millionUAH: 'млн грн',
    projectsLabel: 'Проєкти',
    
    // Tooltips
    websiteViews: 'Переглядів сайту за весь час',
  },
  en: {
    // Navigation
    budget: 'Budget',
    projects: 'Projects',
    analyticsData: 'Analytics Data',
    projectsList: 'Projects List',
    
    // Header
    dashboardTitle: 'Community Budget Analytics Dashboard',
    dashboardSubtitle: 'Budget is shown in millions of hryvnias, demonstrating the distribution of budget funds for the selected period.',
    projectsListTitle: 'Community Projects',
    projectsListSubtitle: 'View and analyze implemented and planned projects of the Vinnytsia City Territorial Community',
    
    // View modes
    map: 'Map',
    chart: 'Chart',
    grid: 'Grid',
    list: 'List',
    
    // Filters
    period: 'Period',
    yearFrom: 'Year from',
    yearTo: 'Year to',
    categories: 'Categories',
    programs: 'Programs',
    searchCategories: 'Search categories...',
    searchPrograms: 'Search programs...',
    searchProjects: 'Search projects...',
    selectedCount: 'Selected',
    budgetRange: 'Budget Range',
    districts: 'Districts',
    directions: 'Directions',
    searchDistricts: 'Search districts...',
    searchDirections: 'Search directions...',
    filters: 'Filters',
    clearFilters: 'Clear filters',
    download: 'Download',
    from: 'from',
    to: 'to',
    
    // Legend
    budgetScale: 'Budget scale in mln UAH:',
    projectsCount: 'Number of projects:',
    
    // Footer
    dataSource: 'Data source:',
    dataSourceName: 'Vinnytsia City Council',
    
    // Loading
    loadingData: 'Loading data...',
    
    // Pagination
    showing: 'Showing',
    of: 'of',
    itemsPerPage: 'per page',
    
    // Sorting
    sortBy: 'Sort by',
    newest: 'Newest',
    oldest: 'Oldest',
    expensive: 'Most expensive',
    cheapest: 'Cheapest',
    nameAZ: 'Name A-Z',
    nameZA: 'Name Z-A',
    
    // Pagination & Messages
    itemsPerPage: 'per page',
    noProjects: 'No projects found',
    
    // Project details
    projectCode: 'Project Code',
    category: 'Category',
    description: 'Description',
    program: 'Program',
    location: 'Location',
    budget: 'Budget',
    district: 'District',
    direction: 'Direction',
    year: 'Year',
    closeModal: 'Close',
    
    // Districts
    districts_center: 'Center',
    districts_podillya: 'Podillya',
    districts_tyazhyliv: 'Tyazhyliv',
    districts_vyshenka: 'Vyshenka',
    districts_pyatnychany: 'Pyatnychany',
    districts_slovyanka: 'Slovyanka',
    districts_dalne_zamostya: 'Dalne Zamostya',
    districts_blyzhne_zamostya: 'Blyzhne Zamostya',
    districts_stare_misto: 'Stare Misto',
    districts_vinnytski_hutory: 'Vinnytski Hutory',
    districts_sverdlovskyi: 'Sverdlovskyi',
    districts_akademichnyi: 'Akademichnyi',
    
    // Categories
    cat_education: 'Education',
    cat_transport: 'Transport, Communications, Energy, Information Technology',
    cat_culture: 'Culture and Arts',
    cat_healthcare: 'Healthcare',
    cat_architecture: 'Architecture and Urban Planning',
    cat_tourism: 'Tourism, Leisure, Youth',
    cat_sports: 'Physical Culture and Sports',
    cat_utilities: 'Municipal Utilities',
    cat_improvement: 'City Improvement and Environmental Protection',
    cat_civic: 'Civic Participation',
    
    // Programs
    prog_municipal_university: 'Municipal University Program',
    prog_green_zones: 'Green Zones Program',
    prog_sports_culture: 'Sports and Culture Program',
    prog_energy_efficiency: 'Energy Efficiency Program',
    prog_education: 'Education Program',
    prog_transport: 'Transport Program',
    prog_road_repair: 'Road Repair Program',
    prog_public_services: 'Public Services Program',
    prog_culture: 'Culture Program',
    prog_ecological_safety: 'Ecological Safety Program',
    prog_heritage: 'Heritage Program',
    prog_improvement: 'Improvement Program',
    prog_social_support: 'Social Support Program',
    prog_resource_management: 'Resource Management Program',
    prog_youth: 'Youth Program',
    prog_utilities: 'Utilities Program',
    prog_healthcare: 'Healthcare Program',
    prog_public_safety: 'Public Safety Program',
    prog_trade: 'Trade Program',
    
    // Budget formatting
    million: 'mln',
    thousand: 'k',
    
    // Chart labels
    districtLabel: 'District',
    budgetScaleChart: 'Budget scale in mln UAH:',
    projectsCountChart: 'Number of projects:',
    millionUAH: 'mln UAH',
    projectsLabel: 'Projects',
    
    // Tooltips
    websiteViews: 'Website views all time',
  }
};

// Helper function to get district translation key
export function getDistrictKey(districtName: string): keyof Translations {
  const districtMap: Record<string, keyof Translations> = {
    'Центр': 'districts_center',
    'Поділля': 'districts_podillya',
    'Тяжилів': 'districts_tyazhyliv',
    'Вишенька': 'districts_vyshenka',
    "П'ятничани": 'districts_pyatnychany',
    "Слов'янка": 'districts_slovyanka',
    'Дальнє Замостя': 'districts_dalne_zamostya',
    'Ближнє Замостя': 'districts_blyzhne_zamostya',
    'Старе місто': 'districts_stare_misto',
    'Вінницькі хутори': 'districts_vinnytski_hutory',
    'Свердловський': 'districts_sverdlovskyi',
    'Академічний': 'districts_akademichnyi',
  };
  return districtMap[districtName] || 'district' as keyof Translations;
}

// Helper function to get category translation key
export function getCategoryKey(categoryName: string): keyof Translations {
  const categoryMap: Record<string, keyof Translations> = {
    'Освіта': 'cat_education',
    'Транспорт, зв\'язок, енергетика, інформаційні технології': 'cat_transport',
    'Культура і мистецтво': 'cat_culture',
    'Охорона здоров\'я': 'cat_healthcare',
    'Архітектура і містобудування': 'cat_architecture',
    'Туризм, дозвілля, молодь': 'cat_tourism',
    'Фізкультура та спорт': 'cat_sports',
    'Комунальні підприємства': 'cat_utilities',
    'Благоустрій міста та охорона навколишнього середовища': 'cat_improvement',
    'Громадська участь': 'cat_civic',
  };
  return categoryMap[categoryName] || 'category' as keyof Translations;
}

// Helper function to get program translation key
export function getProgramKey(programName: string): keyof Translations {
  const programMap: Record<string, keyof Translations> = {
    'Програма «Муніципальний університет перепідготовки та підвищення кваліфікації посадових осіб місцевого самоврядування Вінницької міської ради»': 'prog_municipal_university',
    'Програма розвитку зелених зон': 'prog_green_zones',
    'Програма розвитку спорту та фізичної культури': 'prog_sports_culture',
    'Програма енергоефективності та відновлюваної енергетики': 'prog_energy_efficiency',
    'Програма розвитку освіти': 'prog_education',
    'Програма розвитку транспортної інфраструктури': 'prog_transport',
    'Програма ремонту доріг': 'prog_road_repair',
    'Програма розвитку громадських послуг': 'prog_public_services',
    'Програма розвитку громадських послг': 'prog_public_services', // typo variant
    'Програма розвитку культури': 'prog_culture',
    'Програма екологічної безпеки': 'prog_ecological_safety',
    'Програма збереження історичної спадщини': 'prog_heritage',
    'Програма благоустрою': 'prog_improvement',
    'Програма соціальної підтримки': 'prog_social_support',
    'Програма раціонального використання ресурсів': 'prog_resource_management',
    'Програма розвитку молоді': 'prog_youth',
    'Програма розвитку комунального господарства': 'prog_utilities',
    'Програма охорони здоров\'я': 'prog_healthcare',
    'Програма громадської безпеки': 'prog_public_safety',
    'Програма громадської езпеки': 'prog_public_safety', // typo variant
    'Програма розвитку торгівлі': 'prog_trade',
  };
  return programMap[programName] || 'program' as keyof Translations;
}