import svgPaths from "./svg-vymkof1gxm";
import imgImage2 from "figma:asset/94fb00e245a4b2b6d8fe73af614f2ca58b53c080.png";

function Logo() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-[60px] top-1/2 translate-y-[-50%]" data-name="logo">
      <div className="h-[56px] relative shrink-0 w-[31px]" data-name="image 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-0.48%] max-w-none top-0 w-[445.41%]" src={imgImage2} />
        </div>
      </div>
      <div className="font-['VinnytsiaSansBold:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#343a40] text-[14px] text-nowrap tracking-[-0.28px] whitespace-pre">
        <p className="mb-0">Геопортал Вінницької</p>
        <p>Територіальної Громади</p>
      </div>
    </div>
  );
}

function Menu() {
  return (
    <div className="absolute content-stretch flex gap-[48px] items-center leading-[20px] left-[590px] not-italic text-[#343a40] text-[16px] text-nowrap top-[calc(50%+0.5px)] translate-y-[-50%] whitespace-pre" data-name="menu">
      <p className="font-['VinnytsiaSansBold:Bold',sans-serif] relative shrink-0 text-center tracking-[-0.64px]">Аналітичні дані</p>
      <p className="font-['VinnytsiaSansReg:Book',sans-serif] relative shrink-0 tracking-[-0.32px]">Список проєктів</p>
    </div>
  );
}

function Language() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="language">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="language">
          <mask height="16" id="mask0_3_2980" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_3_2980)">
            <path d={svgPaths.pd658470} fill="var(--fill-0, #343A40)" id="language_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame21() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center pb-0 pt-[2px] px-0 relative shrink-0">
      <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#343a40] text-[14px] text-nowrap whitespace-pre">Українська</p>
    </div>
  );
}

function Tab() {
  return (
    <div className="absolute bg-[#f7f7f7] box-border content-stretch flex gap-[8px] items-center left-[1248px] px-[16px] py-[10px] rounded-[999px] top-[21px]" data-name="tab">
      <Language />
      <Frame21 />
    </div>
  );
}

function Visibility() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="visibility">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="visibility">
          <mask height="16" id="mask0_3_2976" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_3_2976)">
            <path d={svgPaths.p145d9d00} fill="var(--fill-0, #343A40)" id="visibility_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame22() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center pb-0 pt-[2px] px-0 relative shrink-0">
      <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#343a40] text-[14px] text-nowrap whitespace-pre">5 283</p>
    </div>
  );
}

function Tab1() {
  return (
    <div className="absolute box-border content-stretch flex gap-[8px] items-center left-[1157px] px-[16px] py-[10px] rounded-[999px] top-[21px]" data-name="tab">
      <Visibility />
      <Frame22 />
    </div>
  );
}

function Header() {
  return (
    <div className="bg-white h-[80px] relative shrink-0 w-[1440px]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#e3e3e3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Logo />
      <Menu />
      <Tab />
      <Tab1 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[8px] h-[28px] items-center relative shrink-0 w-full">
      <p className="font-['VinnytsiaSansBold:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#343a40] text-[24px] text-nowrap text-right tracking-[-0.96px] whitespace-pre">Фільтри</p>
    </div>
  );
}

function Tab2() {
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

function Tab3() {
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
      <Tab2 />
      <Tab3 />
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

function Frame3() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <Remove />
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] items-center p-[4px] relative rounded-[999px] shrink-0">
      <Frame3 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['VinnytsiaSerif:Book',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#343a40] text-[18px] text-nowrap text-right whitespace-pre">Період</p>
      <Frame5 />
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
            <g filter="url(#filter0_dd_3_2971)" id="State layer">
              <path clipRule="evenodd" d={svgPaths.p2264d800} fill="var(--fill-0, #C95555)" fillRule="evenodd" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="28" id="filter0_dd_3_2971" width="28" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feMorphology in="SourceAlpha" operator="dilate" radius="1" result="effect1_dropShadow_3_2971" />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="1.5" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_3_2971" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />
              <feBlend in2="effect1_dropShadow_3_2971" mode="normal" result="effect2_dropShadow_3_2971" />
              <feBlend in="SourceGraphic" in2="effect2_dropShadow_3_2971" mode="normal" result="shape" />
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

function Frame17() {
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

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0">
      <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[12px] min-w-full not-italic relative shrink-0 text-[#49454f] text-[10px] text-center tracking-[-0.2px] w-[min-content]">End year</p>
      <TextField3 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame17 />
      <Frame18 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Slider />
      <Frame2 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame4 />
      <Frame6 />
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

function Frame7() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <Remove1 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] items-center p-[4px] relative rounded-[999px] shrink-0">
      <Frame7 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['VinnytsiaSerif:Book',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#343a40] text-[18px] text-nowrap text-right whitespace-pre">Напрямок</p>
      <Frame9 />
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

function Frame23() {
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
      <Frame10 />
      <TextField4 />
      <Frame23 />
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

function Frame11() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <Remove2 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] items-center p-[4px] relative rounded-[999px] shrink-0">
      <Frame11 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['VinnytsiaSerif:Book',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#343a40] text-[18px] text-nowrap text-right whitespace-pre">Програми</p>
      <Frame12 />
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

function Frame16() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[20px] shrink-0 w-full">
      <TextField5 />
    </div>
  );
}

function RadioButtons1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Radio buttons">
      <Frame13 />
      <Frame16 />
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

function FilterBudgetAllOpen() {
  return (
    <div className="bg-[#f7f7f7] box-border content-stretch flex flex-col gap-[24px] h-[852px] items-start px-[24px] py-[32px] relative rounded-[16px] shrink-0 w-[312px]" data-name="Filter – Budget – All open">
      <Frame19 />
      <Tabs />
      <Frame20 />
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
  );
}

function TextAndSupportingText() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center justify-center min-h-px min-w-px not-italic relative shrink-0" data-name="Text and supporting text">
      <p className="font-['VinnytsiaSansBold:Bold',sans-serif] leading-[28px] relative shrink-0 text-[#343a40] text-[24px] tracking-[-0.96px] w-full">Аналітичний графік бюджету громади</p>
      <p className="[white-space-collapse:collapse] font-['VinnytsiaSansReg:Book',sans-serif] leading-[20px] overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-[rgba(52,58,64,0.6)] text-nowrap tracking-[-0.28px] w-full">Бюджет вказується в мільйонах гривень, демонструючи розподіл бюджетних коштів за обраний період.</p>
    </div>
  );
}

function GlobeUk() {
  return (
    <div className="absolute left-0 size-[24px] top-0" data-name="globe_uk">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="globe_uk">
          <mask height="24" id="mask0_3_2943" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_3_2943)">
            <path d={svgPaths.p3a0136c0} fill="var(--fill-0, white)" id="globe_uk_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function MapIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="map icon">
      <GlobeUk />
    </div>
  );
}

function Tab4() {
  return (
    <div className="bg-[#c95555] box-border content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[999px] shrink-0" data-name="tab">
      <MapIcon />
    </div>
  );
}

function Leaderboard() {
  return (
    <div className="absolute left-0 size-[24px] top-0" data-name="leaderboard">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="leaderboard">
          <mask height="24" id="mask0_3_2952" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_3_2952)">
            <path d={svgPaths.p12104f00} fill="var(--fill-0, #343A40)" id="leaderboard_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ChartIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="chart icon">
      <Leaderboard />
    </div>
  );
}

function Tab5() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center pl-[12px] pr-[16px] py-[8px] relative rounded-[4px] shrink-0" data-name="tab">
      <ChartIcon />
    </div>
  );
}

function Tabs1() {
  return (
    <div className="bg-white content-stretch flex items-center relative rounded-[999px] shrink-0" data-name="tabs">
      <div aria-hidden="true" className="absolute border border-[rgba(52,58,64,0.2)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <Tab4 />
      <Tab5 />
    </div>
  );
}

function Header1() {
  return (
    <div className="content-stretch flex gap-[16px] items-end justify-center relative shrink-0 w-full" data-name="header">
      <TextAndSupportingText />
      <Tabs1 />
    </div>
  );
}

function Map() {
  return (
    <div className="absolute h-[574.025px] left-[calc(50%-0.2px)] top-[calc(50%-0.09px)] translate-x-[-50%] translate-y-[-50%] w-[887.594px]" data-name="map">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 888 575">
        <g id="map">
          <g id="Vector" opacity="0.7">
            <path d={svgPaths.p36a4c300} fill="var(--fill-0, #FFEAC1)" />
            <path d={svgPaths.p1367280} stroke="var(--stroke-0, #343A40)" strokeOpacity="0.14" strokeWidth="2" />
          </g>
          <g id="Vector_2" opacity="0.7">
            <path d={svgPaths.p1afefd00} fill="var(--fill-0, #E47B4B)" />
            <path d={svgPaths.p2fcd0b80} stroke="var(--stroke-0, #343A40)" strokeOpacity="0.14" strokeWidth="2" />
          </g>
          <g id="Vector_3" opacity="0.7">
            <path d={svgPaths.p3199d280} fill="var(--fill-0, #EB965D)" />
            <path d={svgPaths.p278d7000} stroke="var(--stroke-0, #343A40)" strokeOpacity="0.14" strokeWidth="2" />
          </g>
          <g id="Vector_4" opacity="0.7">
            <path d={svgPaths.p25a90400} fill="var(--fill-0, #DC6139)" />
            <path d={svgPaths.p36946880} stroke="var(--stroke-0, #343A40)" strokeOpacity="0.14" strokeWidth="2" />
          </g>
          <g id="Vector_5" opacity="0.7">
            <path d={svgPaths.p3deb9670} fill="var(--fill-0, #FFD78A)" />
            <path d={svgPaths.p1fce6780} stroke="var(--stroke-0, #343A40)" strokeOpacity="0.14" strokeWidth="2" />
          </g>
          <g id="Vector_6" opacity="0.7">
            <path d={svgPaths.p2322e780} fill="var(--fill-0, #D44727)" />
            <path d={svgPaths.p1dcbff80} stroke="var(--stroke-0, #343A40)" strokeOpacity="0.14" strokeWidth="2" />
          </g>
          <g id="Vector_7" opacity="0.7">
            <mask fill="white" id="path-13-inside-1_3_3869">
              <path d={svgPaths.p3a53fb00} />
            </mask>
            <path d={svgPaths.p3a53fb00} fill="var(--fill-0, #E88854)" mask="url(#path-13-inside-1_3_3869)" stroke="var(--stroke-0, #343A40)" strokeOpacity="0.14" strokeWidth="4" />
          </g>
          <g id="Vector_8" opacity="0.7">
            <path d={svgPaths.p36f00870} fill="var(--fill-0, #F7BD78)" />
            <path d={svgPaths.p16e9c600} stroke="var(--stroke-0, #343A40)" strokeOpacity="0.14" strokeWidth="2" />
          </g>
          <g id="Vector_9" opacity="0.7">
            <path d={svgPaths.p3dba1800} fill="var(--fill-0, #EFA366)" />
            <path d={svgPaths.p1b512a80} stroke="var(--stroke-0, #343A40)" strokeOpacity="0.14" strokeWidth="2" />
          </g>
          <g id="Vector_10" opacity="0.7">
            <path d={svgPaths.p1014280} fill="var(--fill-0, #F3B06F)" />
            <path d={svgPaths.p1bfbf880} stroke="var(--stroke-0, #343A40)" strokeOpacity="0.14" strokeWidth="2" />
          </g>
          <g id="Vector_11" opacity="0.7">
            <path d={svgPaths.p2799480} fill="var(--fill-0, #E06E42)" />
            <path d={svgPaths.p2e23d580} stroke="var(--stroke-0, #343A40)" strokeOpacity="0.14" strokeWidth="2" />
          </g>
          <g id="Vector_12" opacity="0.7">
            <path d={svgPaths.pd6dda80} fill="var(--fill-0, #FBCA81)" />
            <path d={svgPaths.p3ba32800} stroke="var(--stroke-0, #343A40)" strokeOpacity="0.14" strokeWidth="2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame14() {
  return (
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
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex font-['VinnytsiaSansReg:Book',sans-serif] gap-[4px] items-center leading-[12px] not-italic relative shrink-0 text-[#343a40] text-[10px] text-center w-full">
      <p className="relative shrink-0 w-[16px]">17</p>
      <p className="relative shrink-0 w-[16px]">{`22 `}</p>
      <p className="relative shrink-0 w-[16px]">25</p>
      <p className="relative shrink-0 w-[16px]">27</p>
      <p className="relative shrink-0 w-[16px]">31</p>
      <p className="relative shrink-0 w-[16px]">34</p>
      <p className="relative shrink-0 w-[16px]">36</p>
      <p className="relative shrink-0 w-[16px]">39</p>
      <p className="relative shrink-0 w-[16px]">44</p>
      <p className="relative shrink-0 w-[16px]">49</p>
      <p className="relative shrink-0 w-[16px]">56</p>
      <p className="relative shrink-0 w-[16px]">70</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <Frame14 />
      <Frame15 />
    </div>
  );
}

function Legend() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[16px] items-start p-[16px] relative rounded-[8px] shrink-0" data-name="legend">
      <div aria-hidden="true" className="absolute border border-[rgba(52,58,64,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[16px] min-w-full not-italic relative shrink-0 text-[#343a40] text-[14px] tracking-[-0.28px] w-[min-content]">Масштаб бюджету у млн грн:</p>
      <Frame8 />
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[600px] items-start relative shrink-0 w-full" data-name="Content">
      <Map />
      <Legend />
    </div>
  );
}

function Resource() {
  return (
    <div className="basis-0 box-border content-stretch flex font-['VinnytsiaSansReg:Book',sans-serif] gap-[8px] grow items-center leading-[0] min-h-px min-w-px not-italic px-0 py-[12px] relative shrink-0 text-[#3c4d5d] text-[14px] text-nowrap tracking-[-0.28px]" data-name="resource">
      <div className="flex flex-col justify-center opacity-60 relative shrink-0">
        <p className="leading-[16px] text-nowrap whitespace-pre">Джерело даних:</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="[text-underline-position:from-font] decoration-solid leading-[16px] text-nowrap underline whitespace-pre">Вінницька міська рада</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[1.594px] h-[2px] items-start relative shrink-0 w-full">
      <div className="basis-0 bg-[#3c4d5d] grow h-full min-h-px min-w-px rounded-[0.319px] shrink-0" />
      <div className="basis-0 bg-[#3c4d5d] grow h-full min-h-px min-w-px rounded-[0.319px] shrink-0" />
      <div className="basis-0 bg-[#3c4d5d] grow h-full min-h-px min-w-px rounded-[0.319px] shrink-0" />
      <div className="basis-0 bg-[#3c4d5d] grow h-full min-h-px min-w-px rounded-[0.319px] shrink-0" />
      <div className="basis-0 bg-[#3c4d5d] grow h-full min-h-px min-w-px rounded-[0.319px] shrink-0" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#3c4d5d] text-[15.307px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        LiveCharts
      </p>
      <Frame />
    </div>
  );
}

function LiveChartsLogoRaw() {
  return (
    <div className="absolute content-stretch flex gap-[9.567px] items-center left-[calc(50%-0.01px)] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="LiveCharts logo RAW">
      <Frame1 />
      <div className="flex flex-row items-center self-stretch">
        <div className="bg-[#3c4d5d] h-full shrink-0 w-[0.638px]" />
      </div>
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[#3c4d5d] text-[8px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Powered by LaSoft
        <br aria-hidden="true" />
        Innovation Lab
      </p>
    </div>
  );
}

function LivechartLogo() {
  return (
    <div className="h-[40px] relative shrink-0 w-[180px]" data-name="livechart logo">
      <LiveChartsLogoRaw />
    </div>
  );
}

function Footer() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="footer">
      <Resource />
      <LivechartLogo />
    </div>
  );
}

function Body() {
  return (
    <div className="basis-0 bg-white content-stretch flex flex-col gap-[24px] grow h-[720px] items-start min-h-px min-w-px relative rounded-[12px] shrink-0" data-name="Body">
      <Header1 />
      <Content4 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 984 1">
            <path d="M0 0.5H984" id="Vector 3" stroke="var(--stroke-0, #343A40)" strokeOpacity="0.2" />
          </svg>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function Dashboard() {
  return (
    <div className="box-border content-stretch flex gap-[24px] items-start px-[60px] py-[40px] relative shrink-0 w-[1440px]" data-name="Dashboard">
      <FilterBudgetAllOpen />
      <Body />
    </div>
  );
}

export default function StatsMapBudgetDefault() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Stats – Map – Budget – Default">
      <Header />
      <Dashboard />
    </div>
  );
}