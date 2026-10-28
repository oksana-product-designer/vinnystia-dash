import svgPaths from "./svg-27cjfus5na";

function Frame14() {
  return (
    <div className="content-stretch flex gap-[8px] h-[28px] items-center relative shrink-0 w-full">
      <p className="font-['VinnytsiaSansBold:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#343a40] text-[24px] text-nowrap text-right tracking-[-0.96px] whitespace-pre">Фільтри</p>
    </div>
  );
}

function Tab() {
  return (
    <div className="basis-0 bg-[rgba(201,85,85,0.1)] grow min-h-px min-w-px relative rounded-[999px] shrink-0" data-name="tab">
      <div aria-hidden="true" className="absolute border border-[#c95555] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center pb-[8px] pt-[12px] px-[8px] relative w-full">
          <p className="font-['VinnytsiaSerif:Book',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#c95555] text-[16px] text-nowrap whitespace-pre">Бюджет</p>
        </div>
      </div>
    </div>
  );
}

function Tab1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="tab">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center pb-[8px] pl-[8px] pr-[16px] pt-[12px] relative w-full">
          <p className="font-['VinnytsiaSerif:Book',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#343a40] text-[16px] text-nowrap whitespace-pre">Проєкти</p>
        </div>
      </div>
    </div>
  );
}

function Tabs() {
  return (
    <div className="bg-white content-stretch flex items-center relative rounded-[999px] shrink-0 w-full" data-name="tabs">
      <div aria-hidden="true" className="absolute border border-[rgba(52,58,64,0.1)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <Tab />
      <Tab1 />
    </div>
  );
}

function Remove() {
  return (
    <div className="absolute inset-[45.83%_20.83%]" data-name="remove">
      <div className="absolute bottom-[-0.01%] left-0 right-0 top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 2">
          <g>
            <path d={svgPaths.p24d21cb0} fill="var(--fill-0, #343A40)" id="remove_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <Remove />
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] items-center p-[4px] relative rounded-[999px] shrink-0">
      <Frame1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['VinnytsiaSerif:Book',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#343a40] text-[18px] text-nowrap text-right whitespace-pre">Період</p>
      <Frame3 />
    </div>
  );
}

function InactiveTrack() {
  return (
    <div className="basis-0 grow h-[4px] min-h-px min-w-px overflow-clip relative rounded-[4px] shrink-0" data-name="Inactive track">
      <div className="absolute bg-[#e3e3e3] inset-0 rounded-[4px]" data-name="State layer" />
    </div>
  );
}

function ActiveTrack() {
  return (
    <div className="absolute bg-[#fffbfe] h-[4px] left-[15px] overflow-clip right-[12px] rounded-[100px] top-1/2 translate-y-[-50%]" data-name="Active track">
      <div className="absolute bg-[#c95555] inset-0 rounded-[100px]" data-name="State layer" />
    </div>
  );
}

function HandleContainer() {
  return (
    <div className="absolute left-[14px] size-[20px] top-[14px]" data-name="Handle container">
      <div className="absolute inset-[-15%_-20%_-25%_-20%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
          <g id="Handle container">
            <rect fill="var(--fill-0, #FFFBFE)" height="20" rx="10" width="20" x="4" y="3" />
            <g filter="url(#filter0_dd_4_6331)" id="State layer">
              <path clipRule="evenodd" d={svgPaths.p2264d800} fill="var(--fill-0, #C95555)" fillRule="evenodd" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="28" id="filter0_dd_4_6331" width="28" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feMorphology in="SourceAlpha" operator="dilate" radius="1" result="effect1_dropShadow_4_6331" />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="1.5" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_4_6331" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />
              <feBlend in2="effect1_dropShadow_4_6331" mode="normal" result="effect2_dropShadow_4_6331" />
              <feBlend in="SourceGraphic" in2="effect2_dropShadow_4_6331" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function BuildingBlocksHandle() {
  return (
    <div className="relative size-[48px]" data-name="Building Blocks/Handle">
      <HandleContainer />
    </div>
  );
}

function ProgressIndicator() {
  return (
    <div className="absolute h-[48px] left-0 right-0 top-1/2 translate-y-[-50%]" data-name="Progress indicator">
      <ActiveTrack />
      <div className="absolute flex items-center justify-center right-[-11px] size-[48px] top-1/2 translate-y-[-50%]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          {[...Array(2).keys()].map((_, i) => (
            <BuildingBlocksHandle key={i} />
          ))}
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[-8px] size-[48px] top-1/2 translate-y-[-50%]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]" />
      </div>
    </div>
  );
}

function Slider() {
  return (
    <div className="relative shrink-0 w-full" data-name="Slider">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex items-center justify-center p-[8px] relative w-full">
          <InactiveTrack />
          <ProgressIndicator />
        </div>
      </div>
    </div>
  );
}

function InputText() {
  return (
    <div className="box-border content-stretch flex items-center pb-0 pt-[2px] px-0 relative shrink-0" data-name="input-text">
      <div className="flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#343a40] text-[12px] text-nowrap tracking-[-0.24px]">
        <p className="leading-[16px] whitespace-pre">1991</p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-[28px] items-center justify-center min-h-px min-w-px relative shrink-0" data-name="content">
      <InputText />
    </div>
  );
}

function StateLayer() {
  return (
    <div className="relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center px-[12px] py-0 relative w-full">
          <Content />
        </div>
      </div>
    </div>
  );
}

function TextField() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center relative rounded-[999px] shrink-0 w-[56px]" data-name="text field">
      <div aria-hidden="true" className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <StateLayer />
    </div>
  );
}

function TextField1() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-tl-[4px] rounded-tr-[4px] shrink-0" data-name="text-field">
      <TextField />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0">
      <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[12px] min-w-full not-italic relative shrink-0 text-[#49454f] text-[10px] text-center tracking-[-0.2px] w-[min-content]">Start year</p>
      <TextField1 />
    </div>
  );
}

function InputText1() {
  return (
    <div className="box-border content-stretch flex items-center pb-0 pt-[2px] px-0 relative shrink-0" data-name="input-text">
      <div className="flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#343a40] text-[12px] text-nowrap tracking-[-0.24px]">
        <p className="leading-[16px] whitespace-pre">2025</p>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-[28px] items-center justify-center min-h-px min-w-px relative shrink-0" data-name="content">
      <InputText1 />
    </div>
  );
}

function StateLayer1() {
  return (
    <div className="relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center px-[12px] py-0 relative w-full">
          <Content1 />
        </div>
      </div>
    </div>
  );
}

function TextField2() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center relative rounded-[999px] shrink-0 w-[56px]" data-name="text field">
      <div aria-hidden="true" className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <StateLayer1 />
    </div>
  );
}

function TextField3() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-tl-[4px] rounded-tr-[4px] shrink-0" data-name="text-field">
      <TextField2 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0">
      <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[12px] min-w-full not-italic relative shrink-0 text-[#49454f] text-[10px] text-center tracking-[-0.2px] w-[min-content]">End year</p>
      <TextField3 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame12 />
      <Frame13 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Slider />
      <Frame />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame2 />
      <Frame4 />
    </div>
  );
}

function Remove1() {
  return (
    <div className="absolute inset-[45.83%_20.83%]" data-name="remove">
      <div className="absolute bottom-[-0.01%] left-0 right-0 top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 2">
          <g>
            <path d={svgPaths.p24d21cb0} fill="var(--fill-0, #343A40)" id="remove_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <Remove1 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] items-center p-[4px] relative rounded-[999px] shrink-0">
      <Frame5 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['VinnytsiaSerif:Book',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#343a40] text-[18px] text-nowrap text-right whitespace-pre">Напрямок</p>
      <Frame6 />
    </div>
  );
}

function InputText2() {
  return (
    <div className="box-border content-stretch flex items-center pb-0 pt-[2px] px-0 relative shrink-0" data-name="input-text">
      <div className="flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] justify-center leading-[0] not-italic opacity-50 relative shrink-0 text-[#343a40] text-[16px] text-nowrap tracking-[-0.32px]">
        <p className="leading-[16px] whitespace-pre">Пошук напрямку</p>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="box-border content-stretch flex flex-col h-[40px] items-start justify-center px-[16px] py-0 relative shrink-0 w-[208px]" data-name="content">
      <InputText2 />
    </div>
  );
}

function IconsSearch24Px() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons/search_24px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icons/search_24px">
          <path clipRule="evenodd" d={svgPaths.p1f615a40} fill="var(--fill-0, #343A40)" fillOpacity="0.5" fillRule="evenodd" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer2() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <IconsSearch24Px />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer2 />
    </div>
  );
}

function LeadingIcon() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0 size-[40px]" data-name="leading-icon">
      <Container />
    </div>
  );
}

function TextField4() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative rounded-[999px] shrink-0 w-full" data-name="text field">
      <div aria-hidden="true" className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <Content2 />
      <LeadingIcon />
    </div>
  );
}

function Checkbox() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="checkbox">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="checkbox">
          <path d={svgPaths.p542c300} fill="var(--fill-0, #737B8C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Checkbox1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Checkbox">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center pl-0 pr-[8px] py-0 relative w-full">
          <Checkbox />
          <p className="-webkit-box basis-0 font-['VinnytsiaSansReg:Book',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#343a40] text-[14px]">Освіта</p>
        </div>
      </div>
    </div>
  );
}

function Checkbox2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="checkbox">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="checkbox">
          <path d={svgPaths.p542c300} fill="var(--fill-0, #737B8C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Checkbox3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Checkbox">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center pl-0 pr-[8px] py-0 relative w-full">
          <Checkbox2 />
          <p className="-webkit-box basis-0 font-['VinnytsiaSansReg:Book',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#343a40] text-[14px]">Транспорт, зв’язок, енергетика, інформаційні технології</p>
        </div>
      </div>
    </div>
  );
}

function Checkbox4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="checkbox">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="checkbox">
          <path d={svgPaths.p542c300} fill="var(--fill-0, #737B8C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Checkbox5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Checkbox">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center pl-0 pr-[8px] py-0 relative w-full">
          <Checkbox4 />
          <p className="-webkit-box basis-0 font-['VinnytsiaSansReg:Book',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#343a40] text-[14px]">Культура і мистецтво</p>
        </div>
      </div>
    </div>
  );
}

function Checkbox6() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="checkbox">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="checkbox">
          <path d={svgPaths.p542c300} fill="var(--fill-0, #737B8C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Checkbox7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Checkbox">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center pl-0 pr-[8px] py-0 relative w-full">
          <Checkbox6 />
          <p className="-webkit-box basis-0 font-['VinnytsiaSansReg:Book',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#343a40] text-[14px]">Охорона здоров’я</p>
        </div>
      </div>
    </div>
  );
}

function Checkbox8() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="checkbox">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="checkbox">
          <path d={svgPaths.p542c300} fill="var(--fill-0, #737B8C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Checkbox9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Checkbox">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center pl-0 pr-[8px] py-0 relative w-full">
          <Checkbox8 />
          <p className="-webkit-box basis-0 font-['VinnytsiaSansReg:Book',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#343a40] text-[14px]">Архітектура і містобудування</p>
        </div>
      </div>
    </div>
  );
}

function Checkbox10() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="checkbox">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="checkbox">
          <path d={svgPaths.p542c300} fill="var(--fill-0, #737B8C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Checkbox11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Checkbox">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center pl-0 pr-[8px] py-0 relative w-full">
          <Checkbox10 />
          <p className="-webkit-box basis-0 font-['VinnytsiaSansReg:Book',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#343a40] text-[14px]">Туризм, дозвілля, молодь</p>
        </div>
      </div>
    </div>
  );
}

function Checkbox12() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="checkbox">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="checkbox">
          <path d={svgPaths.p542c300} fill="var(--fill-0, #737B8C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Checkbox13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Checkbox">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center pl-0 pr-[8px] py-0 relative w-full">
          <Checkbox12 />
          <p className="-webkit-box basis-0 font-['VinnytsiaSansReg:Book',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#343a40] text-[14px]">Фізкультура та спорт</p>
        </div>
      </div>
    </div>
  );
}

function Checkbox14() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="checkbox">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="checkbox">
          <path d={svgPaths.p542c300} fill="var(--fill-0, #737B8C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Checkbox15() {
  return (
    <div className="relative shrink-0 w-full" data-name="Checkbox">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center pl-0 pr-[8px] py-0 relative w-full">
          <Checkbox14 />
          <p className="-webkit-box basis-0 font-['VinnytsiaSansReg:Book',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#343a40] text-[14px]">Комунальні підприємства</p>
        </div>
      </div>
    </div>
  );
}

function Checkbox16() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="checkbox">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="checkbox">
          <path d={svgPaths.p542c300} fill="var(--fill-0, #737B8C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Checkbox17() {
  return (
    <div className="relative shrink-0 w-full" data-name="Checkbox">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center pl-0 pr-[8px] py-0 relative w-full">
          <Checkbox16 />
          <p className="-webkit-box basis-0 font-['VinnytsiaSansReg:Book',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#343a40] text-[14px]">Благоустрій міста та охорона навколишнього середовища</p>
        </div>
      </div>
    </div>
  );
}

function Checkbox18() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="checkbox">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="checkbox">
          <path d={svgPaths.p542c300} fill="var(--fill-0, #737B8C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Checkbox19() {
  return (
    <div className="relative shrink-0 w-full" data-name="Checkbox">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center pl-0 pr-[8px] py-0 relative w-full">
          <Checkbox18 />
          <p className="-webkit-box basis-0 font-['VinnytsiaSansReg:Book',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#343a40] text-[14px]">Громадська участь</p>
        </div>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Checkbox1 />
      <Checkbox3 />
      <Checkbox5 />
      <Checkbox7 />
      <Checkbox9 />
      <Checkbox11 />
      <Checkbox13 />
      <Checkbox15 />
      <Checkbox17 />
      <Checkbox19 />
    </div>
  );
}

function Scrollbar() {
  return (
    <div className="absolute h-[320px] right-0 top-[96px] w-[4px]" data-name="scrollbar">
      <div className="absolute bottom-0 flex items-center justify-center right-0 top-0 w-[4px]">
        <div className="flex-none h-[4px] rotate-[270deg] w-[320px]">
          <div className="bg-white rounded-[4px] size-full" data-name="track" />
        </div>
      </div>
      <div className="absolute flex h-[120px] items-center justify-center left-0 top-0 w-[4px]" style={{ "--transform-inner-width": "120", "--transform-inner-height": "4" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="bg-[#c95555] h-[4px] rounded-[100px] w-[120px]" data-name="thumb" />
        </div>
      </div>
    </div>
  );
}

function RadioButtons() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Radio buttons">
      <Frame7 />
      <TextField4 />
      <Frame16 />
      <Scrollbar />
    </div>
  );
}

function Selector() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[360px] items-start overflow-clip relative shrink-0 w-full" data-name="selector">
      <RadioButtons />
    </div>
  );
}

function Remove2() {
  return (
    <div className="absolute inset-[45.83%_20.83%]" data-name="remove">
      <div className="absolute bottom-[-0.01%] left-0 right-0 top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 2">
          <g>
            <path d={svgPaths.p24d21cb0} fill="var(--fill-0, #343A40)" id="remove_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <Remove2 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] items-center p-[4px] relative rounded-[999px] shrink-0">
      <Frame8 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['VinnytsiaSerif:Book',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#343a40] text-[18px] text-nowrap text-right whitespace-pre">Програми</p>
      <Frame9 />
    </div>
  );
}

function InputText3() {
  return (
    <div className="box-border content-stretch flex items-center pb-0 pt-[2px] px-0 relative shrink-0" data-name="input-text">
      <div className="flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] justify-center leading-[0] not-italic opacity-50 relative shrink-0 text-[#343a40] text-[16px] text-nowrap tracking-[-0.32px]">
        <p className="leading-[16px] whitespace-pre">Пошук програми</p>
      </div>
    </div>
  );
}

function Content3() {
  return (
    <div className="box-border content-stretch flex flex-col h-[40px] items-start justify-center px-[16px] py-0 relative shrink-0 w-[208px]" data-name="content">
      <InputText3 />
    </div>
  );
}

function IconsSearch24Px1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons/search_24px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icons/search_24px">
          <path clipRule="evenodd" d={svgPaths.p1f615a40} fill="var(--fill-0, #343A40)" fillOpacity="0.5" fillRule="evenodd" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer3() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <IconsSearch24Px1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer3 />
    </div>
  );
}

function LeadingIcon1() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0 size-[40px]" data-name="leading-icon">
      <Container1 />
    </div>
  );
}

function TextField5() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative rounded-[999px] shrink-0 w-full" data-name="text field">
      <div aria-hidden="true" className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <Content3 />
      <LeadingIcon1 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[20px] shrink-0 w-full">
      <TextField5 />
    </div>
  );
}

function RadioButtons1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Radio buttons">
      <Frame10 />
      <Frame11 />
    </div>
  );
}

function Selector1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="selector">
      <RadioButtons1 />
    </div>
  );
}

export default function FilterBudgetAllOpenDefault() {
  return (
    <div className="bg-[#f7f7f7] relative rounded-[16px] size-full" data-name="Filter – Budget – All open (Default)">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start px-[24px] py-[32px] relative size-full">
          <Frame14 />
          <Tabs />
          <Frame15 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 264 1">
                <path d="M0 0.5H264" id="Vector 2" stroke="var(--stroke-0, #343A40)" strokeOpacity="0.2" />
              </svg>
            </div>
          </div>
          <Selector />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 264 1">
                <path d="M0 0.5H264" id="Vector 2" stroke="var(--stroke-0, #343A40)" strokeOpacity="0.2" />
              </svg>
            </div>
          </div>
          <Selector1 />
        </div>
      </div>
    </div>
  );
}