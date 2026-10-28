// Mock data structure for realistic budget and project tracking

export interface ProgramData {
  name: string;
  categories: string[];
  yearlyData: {
    [year: number]: {
      budget: number; // in millions UAH
      projects: number;
      districts: {
        [districtId: string]: {
          budget: number;
          projects: number;
        };
      };
    };
  };
}

// Helper function to generate random data for a year
const generateYearData = (baseProjects: number, baseBudget: number, districts: string[]) => {
  const yearData: any = {
    budget: baseBudget + Math.random() * 10,
    projects: baseProjects + Math.floor(Math.random() * 5),
    districts: {}
  };
  
  // Distribute across districts
  districts.forEach(districtId => {
    yearData.districts[districtId] = {
      budget: (baseBudget / districts.length) * (0.5 + Math.random()),
      projects: Math.floor((baseProjects / districts.length) * (0.5 + Math.random() * 1.5))
    };
  });
  
  return yearData;
};

const allDistricts = [
  "leninsky", "zamostyansky", "stary_misto", "vishenkivsky", 
  "pyat", "sabarne", "podilsky", "sosnivka", 
  "sverdlovsky", "akademichny", "tsentralny", "tyazhilopromyslovy"
];

// Generate realistic program data
export const programsData: ProgramData[] = [
  {
    name: "Програма «Муніципальний університет перепідготовки та підвищення кваліфікації посадових осіб місцевого самоврядування Вінницької міської ради»",
    categories: ["Освіта"],
    yearlyData: (() => {
      const data: any = {};
      for (let year = 1991; year <= 2025; year++) {
        data[year] = generateYearData(3, 2.5, ["tsentralny", "leninsky"]);
      }
      return data;
    })()
  },
  {
    name: "Програма надання фінансової підтримки інститутам громадянського суспільства на реалізацію проектів на території Вінницької міської територіальної громади",
    categories: ["Громадська участь"],
    yearlyData: (() => {
      const data: any = {};
      for (let year = 2000; year <= 2025; year++) {
        data[year] = generateYearData(12, 8.5, allDistricts);
      }
      return data;
    })()
  },
  {
    name: "Програма інноваційного розвитку муніципального управління на 2017-2026 рр.",
    categories: ["Транспорт, зв'язок, енергетика, інформаційні технології"],
    yearlyData: (() => {
      const data: any = {};
      for (let year = 2017; year <= 2025; year++) {
        data[year] = generateYearData(8, 15.2, ["tsentralny", "leninsky", "zamostyansky", "sverdlovsky"]);
      }
      return data;
    })()
  },
  {
    name: "Програма «Нагородження відзнаками міського рівня, організація і проведення урочистих та інших заходів у населених пунктах, що входять до Вінницької міської територіальної громади на 2021-2025 роки»",
    categories: ["Культура і мистецтво", "Громадська участь"],
    yearlyData: (() => {
      const data: any = {};
      for (let year = 2021; year <= 2025; year++) {
        data[year] = generateYearData(24, 5.3, allDistricts);
      }
      return data;
    })()
  },
  {
    name: "Програма запобігання виникненню надзвичайних ситуацій природного, техногенного, соціального характеру та надзвичайних ситуацій в умовах воєнного стану, ліквідації їх наслідків на 2020-2027 роки",
    categories: ["Благоустрій міста та охорона навколишнього середовища"],
    yearlyData: (() => {
      const data: any = {};
      for (let year = 2020; year <= 2025; year++) {
        data[year] = generateYearData(6, 12.8, allDistricts);
      }
      return data;
    })()
  },
  {
    name: "Програма використання соціальної реклами для інформування громадськості та профілактики негативних явищ у суспільстві на 2021-2025 роки",
    categories: ["Громадська участь"],
    yearlyData: (() => {
      const data: any = {};
      for (let year = 2021; year <= 2025; year++) {
        data[year] = generateYearData(18, 3.2, allDistricts);
      }
      return data;
    })()
  },
  {
    name: "Програма висвітлення діяльності Вінницької міської ради, її виконавчих органів, фінансової підтримки (дотації) комунальним підприємствам засобів масової інформації у 2021-2028 рр.",
    categories: ["Громадська участь", "Комунальні підприємства"],
    yearlyData: (() => {
      const data: any = {};
      for (let year = 2021; year <= 2025; year++) {
        data[year] = generateYearData(14, 6.7, ["tsentralny", "leninsky"]);
      }
      return data;
    })()
  },
  {
    name: "Програма охорони навколишнього природного середовища Вінницької міської територіальної громади на 2021-2025 роки",
    categories: ["Благоустрій міста та охорона навколишнього середовища"],
    yearlyData: (() => {
      const data: any = {};
      for (let year = 2021; year <= 2025; year++) {
        data[year] = generateYearData(32, 45.6, allDistricts);
      }
      return data;
    })()
  },
  {
    name: "Програма заходів забезпечення обороноздатності військових частин та інших військових формувань Вінницького гарнізону, територіальної оборони та мобілізаційної підготовки на території Вінницької міської територіальної громади на 2021-2025 роки",
    categories: ["Громадська участь"],
    yearlyData: (() => {
      const data: any = {};
      for (let year = 2021; year <= 2025; year++) {
        data[year] = generateYearData(4, 28.3, ["leninsky", "sverdlovsky", "tyazhilopromyslovy"]);
      }
      return data;
    })()
  },
  {
    name: "Комплексна програма підтримки КП «Аеропорт Вінниця», що обслуговує внутрішні та міжнародні перевезення в регіоні, на 2020-2025 роки",
    categories: ["Транспорт, зв'язок, енергетика, інформаційні технології"],
    yearlyData: (() => {
      const data: any = {};
      for (let year = 2020; year <= 2025; year++) {
        data[year] = generateYearData(2, 18.4, ["vishenkivsky"]);
      }
      return data;
    })()
  },
  {
    name: "Програма «Муніципальне житло Вінницької міської територіальної громади» в новій редакції",
    categories: ["Архітектура і містобудування"],
    yearlyData: (() => {
      const data: any = {};
      for (let year = 1995; year <= 2025; year++) {
        data[year] = generateYearData(26, 52.3, allDistricts);
      }
      return data;
    })()
  },
  {
    name: "Програма для забезпечення виконання рішень суду на 2021-2025 роки",
    categories: ["Громадська участь"],
    yearlyData: (() => {
      const data: any = {};
      for (let year = 2021; year <= 2025; year++) {
        data[year] = generateYearData(8, 4.2, ["tsentralny"]);
      }
      return data;
    })()
  },
  {
    name: "Програма будівництва сонячних електростанцій для власного споживання електроенергії об'єктами комунальної власності Вінницької міської територіальної громади на 2023 – 2027 роки",
    categories: ["Транспорт, зв'язок, енергетика, інформаційні технології", "Благоустрій міста та охорона навколишнього середовища"],
    yearlyData: (() => {
      const data: any = {};
      for (let year = 2023; year <= 2025; year++) {
        data[year] = generateYearData(15, 34.7, ["leninsky", "zamostyansky", "sabarne", "tyazhilopromyslovy"]);
      }
      return data;
    })()
  },
  {
    name: "Програма реалізації стратегії просторового розвитку Вінницької міської територіальної громади на 2022-2025 роки",
    categories: ["Архітектура і містобудування"],
    yearlyData: (() => {
      const data: any = {};
      for (let year = 2022; year <= 2025; year++) {
        data[year] = generateYearData(11, 23.1, allDistricts);
      }
      return data;
    })()
  },
  {
    name: "Програма державного моніторингу у галузі охорони атмосферного повітря агломерації «Вінниця» на 2021-2025 роки",
    categories: ["Благоустрій міста та охорона навколишнього середовища"],
    yearlyData: (() => {
      const data: any = {};
      for (let year = 2021; year <= 2025; year++) {
        data[year] = generateYearData(5, 7.8, allDistricts);
      }
      return data;
    })()
  },
  {
    name: "Програма розвитку органів самоорганізації населення Вінницької міської територіальної громади на 2022–2028 роки",
    categories: ["Громадська участь"],
    yearlyData: (() => {
      const data: any = {};
      for (let year = 2022; year <= 2025; year++) {
        data[year] = generateYearData(42, 9.4, allDistricts);
      }
      return data;
    })()
  },
  {
    name: "Комплексна програма «Основні напрямки соціальної політики Вінницької міської територіальної громади на 2022-2026 роки»",
    categories: ["Громадська участь"],
    yearlyData: (() => {
      const data: any = {};
      for (let year = 2022; year <= 2025; year++) {
        data[year] = generateYearData(67, 78.9, allDistricts);
      }
      return data;
    })()
  },
  {
    name: "Програма підтримки Захисників і Захисниць України, членів їх родин та родин загиблих (померлих), безвісти зниклих за особливих обставин Захисників та Захисниць України на 2023-2026 роки",
    categories: ["Громадська участь"],
    yearlyData: (() => {
      const data: any = {};
      for (let year = 2023; year <= 2025; year++) {
        data[year] = generateYearData(28, 45.2, allDistricts);
      }
      return data;
    })()
  },
  {
    name: "Програма поліпшення техногенної та пожежної безпеки у Вінницькій міській територіальній громаді, матеріально-технічного забезпечення підрозділів Головного управління ДСНС України у Вінницькій області на 2022-2026 рр.",
    categories: ["Благоустрій міста та охорона навколишнього середовища"],
    yearlyData: (() => {
      const data: any = {};
      for (let year = 2022; year <= 2025; year++) {
        data[year] = generateYearData(9, 16.7, allDistricts);
      }
      return data;
    })()
  },
  {
    name: "Комплексна програма співпраці виконавчих органів Вінницької міської ради та ГУ ДПС у Вінницькій області з питань забезпечення контролю за дотриманням зобов'язань щодо платежів підприємств, установ, організацій, СГ, фізичних осіб до бюджету Вінницької міської територіальної громади на 2022-2026 роки",
    categories: ["Громадська участь"],
    yearlyData: (() => {
      const data: any = {};
      for (let year = 2022; year <= 2025; year++) {
        data[year] = generateYearData(4, 2.1, ["tsentralny"]);
      }
      return data;
    })()
  },
  {
    name: "Програма «На варті міського порядку» на території Вінницької міської територіальної громади на 2023-2027 рр.",
    categories: ["Громадська участь"],
    yearlyData: (() => {
      const data: any = {};
      for (let year = 2023; year <= 2025; year++) {
        data[year] = generateYearData(16, 12.3, allDistricts);
      }
      return data;
    })()
  },
  {
    name: "Програма розвитку аграрного сектору та забезпечення продовольчої безпеки Вінницької міської територіальної громади на 2023-2025 роки",
    categories: ["Громадська участь"],
    yearlyData: (() => {
      const data: any = {};
      for (let year = 2023; year <= 2025; year++) {
        data[year] = generateYearData(7, 8.9, ["pyat", "sabarne", "akademichny"]);
      }
      return data;
    })()
  },
  {
    name: "Програма розроблення містобудівної та іншої документації загальноміського перспективного значення на 2023-2025 роки",
    categories: ["Архітектура і містобудування"],
    yearlyData: (() => {
      const data: any = {};
      for (let year = 2023; year <= 2025; year++) {
        data[year] = generateYearData(5, 11.2, ["tsentralny", "stary_misto"]);
      }
      return data;
    })()
  },
  {
    name: "Програма розвитку та підтримки об'єднань співвласників багатоквартирних будинків Вінницької міської територіальної громади на 2024-2028 роки",
    categories: ["Архітектура і містобудування", "Комунальні підприємства"],
    yearlyData: (() => {
      const data: any = {};
      for (let year = 2024; year <= 2025; year++) {
        data[year] = generateYearData(86, 34.5, allDistricts);
      }
      return data;
    })()
  },
  {
    name: "Програма інформатизації та цифрової трансформації на 2024-2026 роки",
    categories: ["Транспорт, зв'язок, енергетика, інформаційні технології"],
    yearlyData: (() => {
      const data: any = {};
      for (let year = 2024; year <= 2025; year++) {
        data[year] = generateYearData(22, 67.8, allDistricts);
      }
      return data;
    })()
  },
  {
    name: "Програма розвитку фізичної культури та спорту у Вінницькій міській територіальній громаді на 2024-2026 роки",
    categories: ["Фізкультура та спорт"],
    yearlyData: (() => {
      const data: any = {};
      for (let year = 2024; year <= 2025; year++) {
        data[year] = generateYearData(48, 89.3, allDistricts);
      }
      return data;
    })()
  },
  {
    name: "Комплексна програма заходів із забезпечення діяльності громадських формувань з охорони громадського порядку у населених пунктах, що входять до Вінницької міської територіальної громади на 2024-2026 роки",
    categories: ["Громадська участь"],
    yearlyData: (() => {
      const data: any = {};
      for (let year = 2024; year <= 2025; year++) {
        data[year] = generateYearData(19, 7.6, allDistricts);
      }
      return data;
    })()
  },
  {
    name: "Програма розвитку туризму та промоції Вінницької міської територіальної громади на 2024-2026 роки",
    categories: ["Туризм, дозвілля, молодь"],
    yearlyData: (() => {
      const data: any = {};
      for (let year = 2024; year <= 2025; year++) {
        data[year] = generateYearData(31, 24.7, ["tsentralny", "stary_misto", "podilsky"]);
      }
      return data;
    })()
  },
  {
    name: "Програма «Місто молодих» на 2024 - 2026 роки",
    categories: ["Туризм, дозвілля, молодь", "Освіта"],
    yearlyData: (() => {
      const data: any = {};
      for (let year = 2024; year <= 2025; year++) {
        data[year] = generateYearData(53, 18.9, allDistricts);
      }
      return data;
    })()
  },
  {
    name: "Комплексна програма національно-патріотичного виховання дітей та молоді Вінницької міської територіальної громади на 2024-2026 роки",
    categories: ["Освіта", "Культура і мистецтво"],
    yearlyData: (() => {
      const data: any = {};
      for (let year = 2024; year <= 2025; year++) {
        data[year] = generateYearData(38, 12.4, allDistricts);
      }
      return data;
    })()
  },
  {
    name: "Програма сприяння залученню інвестицій у Вінницьку міську територіальну громаду на 2024-2026 роки",
    categories: ["Громадська участь"],
    yearlyData: (() => {
      const data: any = {};
      for (let year = 2024; year <= 2025; year++) {
        data[year] = generateYearData(6, 5.3, ["tsentralny"]);
      }
      return data;
    })()
  },
  {
    name: "Програма «Громада відкритих можливостей для людей похилого віку Вінницької міської територіальної громади на 2021-2026 роки",
    categories: ["Громадська участь"],
    yearlyData: (() => {
      const data: any = {};
      for (let year = 2021; year <= 2025; year++) {
        data[year] = generateYearData(44, 15.6, allDistricts);
      }
      return data;
    })()
  },
  {
    name: "Програма «Громада за рівність» щодо забезпечення рівних прав та можливостей жінок і чоловіків на період до 2026 року»",
    categories: ["Громадська участь"],
    yearlyData: (() => {
      const data: any = {};
      for (let year = 2020; year <= 2025; year++) {
        data[year] = generateYearData(29, 8.7, allDistricts);
      }
      return data;
    })()
  },
  {
    name: "Програма підвищення ефективності роботи органів місцевого самоврядування і комунальних підприємств Вінницької міської територіальної громади на 2021-2025 роки",
    categories: ["Комунальні підприємства"],
    yearlyData: (() => {
      const data: any = {};
      for (let year = 2021; year <= 2025; year++) {
        data[year] = generateYearData(14, 32.1, allDistricts);
      }
      return data;
    })()
  },
  {
    name: "Програма збереження культурної спадщини та розвитку історичного середовища Вінницької міської територіальної громади на 2024- 2026 роки",
    categories: ["Культура і мистецтво"],
    yearlyData: (() => {
      const data: any = {};
      for (let year = 2024; year <= 2025; year++) {
        data[year] = generateYearData(27, 43.2, ["tsentralny", "stary_misto", "podilsky"]);
      }
      return data;
    })()
  },
  {
    name: "Програма організаційного забезпечення діяльності судів на території Вінницької міської територіальної громади на 2024-2026 роки",
    categories: ["Громадська участь"],
    yearlyData: (() => {
      const data: any = {};
      for (let year = 2024; year <= 2025; year++) {
        data[year] = generateYearData(3, 6.8, ["tsentralny"]);
      }
      return data;
    })()
  },
  {
    name: "Програма розвитку малого та середнього підприємництва Вінницької міської територіальної громади на 2024–2026 роки",
    categories: ["Громадська участь"],
    yearlyData: (() => {
      const data: any = {};
      for (let year = 2024; year <= 2025; year++) {
        data[year] = generateYearData(37, 21.5, allDistricts);
      }
      return data;
    })()
  },
  {
    name: "Програма розвитку безбар'єрного простору Вінницької міської територіальної громади на 2024-2027 роки",
    categories: ["Архітектура і містобудування", "Благоустрій міста та охорона навколишнього середовища"],
    yearlyData: (() => {
      const data: any = {};
      for (let year = 2024; year <= 2025; year++) {
        data[year] = generateYearData(41, 56.4, allDistricts);
      }
      return data;
    })()
  },
  {
    name: "Програма розвитку та підтримки інженерної інфраструктури Вінницької міської територіальної громади на 2025-2030 роки",
    categories: ["Транспорт, зв'язок, енергетика, інформаційні технології", "Комунальні підприємства"],
    yearlyData: (() => {
      const data: any = {};
      for (let year = 2025; year <= 2025; year++) {
        data[year] = generateYearData(62, 124.7, allDistricts);
      }
      return data;
    })()
  },
  {
    name: "Програма утримання та розвитку територій загального користування Вінницької міської територіальної громади, створення сприятливих умов для життєдіяльності її мешканців на 2025-2029 роки",
    categories: ["Благоустрій міста та охорона навколишнього середовища"],
    yearlyData: (() => {
      const data: any = {};
      for (let year = 2025; year <= 2025; year++) {
        data[year] = generateYearData(95, 187.3, allDistricts);
      }
      return data;
    })()
  },
  {
    name: "Програма розвитку та утримання житлово господарства Вінницької міської територіальної громади на 2025-2030 рр.",
    categories: ["Архітектура і містобудування", "Комунальні підприємства"],
    yearlyData: (() => {
      const data: any = {};
      for (let year = 2025; year <= 2025; year++) {
        data[year] = generateYearData(73, 98.6, allDistricts);
      }
      return data;
    })()
  },
  {
    name: "Програма розвитку велосипедного руху Вінницької міської територіальної громади на 2024-2026 роки",
    categories: ["Транспорт, зв'язок, енергетика, інформаційні технології", "Фізкультура та спорт"],
    yearlyData: (() => {
      const data: any = {};
      for (let year = 2024; year <= 2025; year++) {
        data[year] = generateYearData(18, 23.4, allDistricts);
      }
      return data;
    })()
  },
  {
    name: "Програма соціального захисту сімей з дітьми, які опинились у складних життєвих обставинах, та дітей-сиріт, дітей, позбавлених батьківського піклування, у Вінницькій міській територіальній громаді на 2025-2027 роки",
    categories: ["Громадська участь"],
    yearlyData: (() => {
      const data: any = {};
      for (let year = 2025; year <= 2025; year++) {
        data[year] = generateYearData(51, 37.8, allDistricts);
      }
      return data;
    })()
  },
  {
    name: "Програма підтримки книговидання про Вінницю на 2025-2027 роки",
    categories: ["Культура і мистецтво"],
    yearlyData: (() => {
      const data: any = {};
      for (let year = 2025; year <= 2025; year++) {
        data[year] = generateYearData(12, 3.8, ["tsentralny", "stary_misto"]);
      }
      return data;
    })()
  },
  {
    name: "Програма сприяння функціонуванню української мови як державної у Вінницькій міській територіальній громаді на 2024-2028 роки",
    categories: ["Культура і мистецтво", "Освіта"],
    yearlyData: (() => {
      const data: any = {};
      for (let year = 2024; year <= 2025; year++) {
        data[year] = generateYearData(34, 9.2, allDistricts);
      }
      return data;
    })()
  },
  {
    name: "Комплексна Програма розвитку міського пасажирського транспорту та організації дорожнього руху Вінницької міської територіальної громади на 2025-2029 роки",
    categories: ["Транспорт, зв'язок, енергетика, інформаційні технології"],
    yearlyData: (() => {
      const data: any = {};
      for (let year = 2025; year <= 2025; year++) {
        data[year] = generateYearData(47, 245.6, allDistricts);
      }
      return data;
    })()
  },
  {
    name: "Програма «Здоров'я вінничан на 2022 -2025 роки»",
    categories: ["Охорона здоров'я"],
    yearlyData: (() => {
      const data: any = {};
      for (let year = 2022; year <= 2025; year++) {
        data[year] = generateYearData(78, 156.9, allDistricts);
      }
      return data;
    })()
  },
  {
    name: "Комплексна програма співпраці Вінницької міської ради, Управління Державної казначейської служби України у м. Вінниці Вінницької області, розпорядників та одержувачів бюджетних коштів в сфері казначейського обслуговування бюджету Вінницької міської територіальної громади на 2022-2026 роки",
    categories: ["Громадська участь"],
    yearlyData: (() => {
      const data: any = {};
      for (let year = 2022; year <= 2025; year++) {
        data[year] = generateYearData(5, 4.1, ["tsentralny"]);
      }
      return data;
    })()
  },
  {
    name: "Програма археологічних досліджень на території населених пунктів, що входять до складу Вінницької міської територіальної громади, на 2022-2025 роки",
    categories: ["Культура і мистецтво"],
    yearlyData: (() => {
      const data: any = {};
      for (let year = 2022; year <= 2025; year++) {
        data[year] = generateYearData(9, 7.3, ["tsentralny", "stary_misto", "podilsky"]);
      }
      return data;
    })()
  },
  {
    name: "Програма розвитку культури і мистецтва на 2022-2026 роки",
    categories: ["Культура і мистецтво"],
    yearlyData: (() => {
      const data: any = {};
      for (let year = 2022; year <= 2025; year++) {
        data[year] = generateYearData(124, 134.5, allDistricts);
      }
      return data;
    })()
  },
  {
    name: "Програма розвитку освіти Вінницької міської територіальної громади на 2025-2027 роки",
    categories: ["Освіта"],
    yearlyData: (() => {
      const data: any = {};
      for (let year = 2025; year <= 2025; year++) {
        data[year] = generateYearData(186, 567.8, allDistricts);
      }
      return data;
    })()
  },
  {
    name: "Комплексна правоохоронна програма на 2022-2026 роки",
    categories: ["Громадська участь"],
    yearlyData: (() => {
      const data: any = {};
      for (let year = 2022; year <= 2025; year++) {
        data[year] = generateYearData(11, 18.7, allDistricts);
      }
      return data;
    })()
  },
  {
    name: "Програма утримання та розвитку парків та рекреаційних зон Вінницької міської територіальної громади на 2025-2027 роки",
    categories: ["Благоустрій міста та охорона навколишнього середовища", "Туризм, дозвілля, молодь"],
    yearlyData: (() => {
      const data: any = {};
      for (let year = 2025; year <= 2025; year++) {
        data[year] = generateYearData(64, 78.9, allDistricts);
      }
      return data;
    })()
  },
  {
    name: "Програми відновлення та підтримки підприємництва на території Вінницької міської територіальної громади на 2025 – 2028 роки",
    categories: ["Громадська участь"],
    yearlyData: (() => {
      const data: any = {};
      for (let year = 2025; year <= 2025; year++) {
        data[year] = generateYearData(42, 29.4, allDistricts);
      }
      return data;
    })()
  }
];
