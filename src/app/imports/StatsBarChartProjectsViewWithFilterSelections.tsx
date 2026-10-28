import svgPaths from "./svg-jwo2xlntnw";
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

function Frame23() {
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
      <Frame23 />
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

function Frame24() {
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
      <Frame24 />
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

function CloseSmall() {
  return (
    <div className="absolute left-[-2px] size-[24px] top-[-2px]" data-name="close_small">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="close_small">
          <mask height="24" id="mask0_3_2883" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_3_2883)">
            <path d={svgPaths.p5f5ce80} fill="var(--fill-0, #343A40)" id="close_small_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame22() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <CloseSmall />
    </div>
  );
}

function TextField() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[4px] items-center justify-center pl-[8px] pr-[12px] py-[6px] relative rounded-[999px] shrink-0" data-name="text field">
      <div aria-hidden="true" className="absolute border border-[rgba(52,58,64,0.1)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <Frame22 />
      <div className="flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#343a40] text-[14px] text-nowrap tracking-[-0.14px]">
        <p className="leading-[16px] whitespace-pre">Очистити</p>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <p className="basis-0 font-['VinnytsiaSansBold:Bold',sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#343a40] text-[24px] tracking-[-0.96px]">Фільтри</p>
      <TextField />
    </div>
  );
}

function Tab2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="tab">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center pb-[8px] pl-[16px] pr-[8px] pt-[12px] relative w-full">
          <p className="font-['VinnytsiaSerif:Book',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#343a40] text-[16px] text-nowrap whitespace-pre">Бюджет</p>
        </div>
      </div>
    </div>
  );
}

function Tab3() {
  return (
    <div className="basis-0 bg-[rgba(201,85,85,0.1)] grow min-h-px min-w-px relative rounded-[999px] shrink-0" data-name="tab">
      <div aria-hidden="true" className="absolute border border-[#c95555] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center pb-[8px] pt-[12px] px-[8px] relative w-full">
          <p className="font-['VinnytsiaSerif:Book',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#c95555] text-[16px] text-nowrap whitespace-pre">Проєкти</p>
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

function Frame8() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <Remove />
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] items-center p-[4px] relative rounded-[999px] shrink-0">
      <Frame8 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['VinnytsiaSerif:Book',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#343a40] text-[18px] text-nowrap text-right whitespace-pre">Період</p>
      <Frame10 />
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
    <div className="absolute bg-[#fffbfe] h-[4px] left-[156px] overflow-clip right-[12px] rounded-[100px] top-1/2 translate-y-[-50%]" data-name="Active track">
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
            <g filter="url(#filter0_dd_5_639)" id="State layer">
              <path clipRule="evenodd" d={svgPaths.p2264d800} fill="var(--fill-0, #C95555)" fillRule="evenodd" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="28" id="filter0_dd_5_639" width="28" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feMorphology in="SourceAlpha" operator="dilate" radius="1" result="effect1_dropShadow_5_639" />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="1.5" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_5_639" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />
              <feBlend in2="effect1_dropShadow_5_639" mode="normal" result="effect2_dropShadow_5_639" />
              <feBlend in="SourceGraphic" in2="effect2_dropShadow_5_639" mode="normal" result="shape" />
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
      <div className="absolute flex items-center justify-center right-[85px] size-[48px] top-1/2 translate-y-[-50%]">
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
        <p className="leading-[16px] whitespace-pre">2016</p>
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

function TextField1() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center relative rounded-[999px] shrink-0 w-[56px]" data-name="text field">
      <div aria-hidden="true" className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <StateLayer />
    </div>
  );
}

function TextField2() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-tl-[4px] rounded-tr-[4px] shrink-0" data-name="text-field">
      <TextField1 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0">
      <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[12px] min-w-full not-italic relative shrink-0 text-[#49454f] text-[10px] text-center tracking-[-0.2px] w-[min-content]">Від</p>
      <TextField2 />
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

function TextField3() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center relative rounded-[999px] shrink-0 w-[56px]" data-name="text field">
      <div aria-hidden="true" className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <StateLayer1 />
    </div>
  );
}

function TextField4() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-tl-[4px] rounded-tr-[4px] shrink-0" data-name="text-field">
      <TextField3 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0">
      <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[12px] min-w-full not-italic relative shrink-0 text-[#49454f] text-[10px] text-center tracking-[-0.2px] w-[min-content]">До</p>
      <TextField4 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame19 />
      <Frame20 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Slider />
      <Frame2 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame9 />
      <Frame11 />
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

function Frame12() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <Remove1 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] items-center p-[4px] relative rounded-[999px] shrink-0">
      <Frame12 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['VinnytsiaSerif:Book',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#343a40] text-[18px] text-nowrap text-right whitespace-pre">Напрямок</p>
      <Frame13 />
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

function TextField5() {
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
          <p className="-webkit-box font-['VinnytsiaSansReg:Book',sans-serif] leading-[16px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(52,58,64,0.6)] text-nowrap text-right whitespace-pre">(90)</p>
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
          <p className="-webkit-box font-['VinnytsiaSansReg:Book',sans-serif] leading-[16px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(52,58,64,0.6)] text-nowrap text-right whitespace-pre">(90)</p>
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
          <p className="-webkit-box font-['VinnytsiaSansReg:Book',sans-serif] leading-[16px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(52,58,64,0.6)] text-nowrap text-right whitespace-pre">(90)</p>
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
          <p className="-webkit-box font-['VinnytsiaSansReg:Book',sans-serif] leading-[16px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(52,58,64,0.6)] text-nowrap text-right whitespace-pre">(90)</p>
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
          <path d={svgPaths.p7913d80} fill="var(--fill-0, #C95555)" id="Vector" />
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
          <p className="-webkit-box font-['VinnytsiaSansReg:Book',sans-serif] leading-[16px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(52,58,64,0.6)] text-nowrap text-right whitespace-pre">(90)</p>
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
          <p className="-webkit-box font-['VinnytsiaSansReg:Book',sans-serif] leading-[16px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(52,58,64,0.6)] text-nowrap text-right whitespace-pre">(90)</p>
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
          <p className="-webkit-box font-['VinnytsiaSansReg:Book',sans-serif] leading-[16px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(52,58,64,0.6)] text-nowrap text-right whitespace-pre">(90)</p>
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
          <p className="-webkit-box font-['VinnytsiaSansReg:Book',sans-serif] leading-[16px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(52,58,64,0.6)] text-nowrap text-right whitespace-pre">(90)</p>
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
          <p className="-webkit-box font-['VinnytsiaSansReg:Book',sans-serif] leading-[16px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(52,58,64,0.6)] text-nowrap text-right whitespace-pre">(90)</p>
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
          <p className="-webkit-box font-['VinnytsiaSansReg:Book',sans-serif] leading-[16px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(52,58,64,0.6)] text-nowrap text-right whitespace-pre">(90)</p>
        </div>
      </div>
    </div>
  );
}

function Frame25() {
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
      <Frame14 />
      <TextField5 />
      <Frame25 />
      <Scrollbar />
    </div>
  );
}

function Selector() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[400px] items-start overflow-clip relative shrink-0 w-full" data-name="selector">
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

function Frame15() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <Remove2 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] items-center p-[4px] relative rounded-[999px] shrink-0">
      <Frame15 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['VinnytsiaSerif:Book',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#343a40] text-[18px] text-nowrap text-right whitespace-pre">Програми</p>
      <Frame16 />
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

function TextField6() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative rounded-[999px] shrink-0 w-full" data-name="text field">
      <div aria-hidden="true" className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <Content3 />
      <LeadingIcon1 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[20px] shrink-0 w-full">
      <TextField6 />
    </div>
  );
}

function Checkbox20() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="checkbox">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="checkbox">
          <path d={svgPaths.p7913d80} fill="var(--fill-0, #C95555)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Checkbox21() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Checkbox">
      <Checkbox20 />
      <p className="-webkit-box basis-0 font-['VinnytsiaSansReg:Book',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#343a40] text-[14px]">Програма надання фінансової підтримки інститутам громадянського суспільства на реалізацію проектів на території Вінницької міської територіальної громади</p>
      <p className="-webkit-box font-['VinnytsiaSansReg:Book',sans-serif] leading-[16px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(52,58,64,0.6)] text-nowrap text-right whitespace-pre">(90)</p>
    </div>
  );
}

function RadioButtons1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Radio buttons">
      <Frame17 />
      <Frame18 />
      <Checkbox21 />
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

function FilterProjectsSelected() {
  return (
    <div className="bg-[#f7f7f7] box-border content-stretch flex flex-col gap-[24px] items-start px-[24px] py-[32px] relative rounded-[16px] shrink-0 w-[312px]" data-name="Filter – Projects – Selected">
      <Frame21 />
      <Tabs />
      <Frame3 />
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
          <mask height="24" id="mask0_5_2154" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_5_2154)">
            <path d={svgPaths.p3a0136c0} fill="var(--fill-0, #343A40)" id="globe_uk_2" />
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
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center pl-[16px] pr-[12px] py-[8px] relative rounded-[4px] shrink-0" data-name="tab">
      <MapIcon />
    </div>
  );
}

function Leaderboard() {
  return (
    <div className="absolute left-0 size-[24px] top-0" data-name="leaderboard">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="leaderboard">
          <mask height="24" id="mask0_5_2148" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_5_2148)">
            <path d={svgPaths.p12104f00} fill="var(--fill-0, white)" id="leaderboard_2" />
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
    <div className="bg-[#c95555] box-border content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[999px] shrink-0" data-name="tab">
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

function YAxisLabel() {
  return (
    <div className="box-border content-stretch flex flex-col h-full items-start justify-center pb-[24px] pt-0 px-0 relative shrink-0" data-name="_Y-axis label">
      <div className="flex h-[110px] items-center justify-center relative shrink-0 w-[18px]" style={{ "--transform-inner-width": "101.953125", "--transform-inner-height": "18" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[18px] not-italic relative text-[#3c4d5d] text-[12px] text-center text-nowrap whitespace-pre">Кількість проєктів</p>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="box-border content-stretch flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] h-full items-end justify-between leading-[0] not-italic pl-0 pr-[4px] py-0 relative shrink-0 text-[#3c4d5d] text-[12px] text-right">
      <div className="basis-0 flex flex-col grow justify-center min-h-px min-w-px relative shrink-0 w-[40px]">
        <p className="leading-[18px]">60</p>
      </div>
      <div className="basis-0 flex flex-col grow justify-center min-h-px min-w-px relative shrink-0 w-[40px]">
        <p className="leading-[18px]">50</p>
      </div>
      <div className="basis-0 flex flex-col grow justify-center min-h-px min-w-px relative shrink-0 w-[40px]">
        <p className="leading-[18px]">40</p>
      </div>
      <div className="basis-0 flex flex-col grow justify-center min-h-px min-w-px relative shrink-0 w-[40px]">
        <p className="leading-[18px]">30</p>
      </div>
      <div className="basis-0 flex flex-col grow justify-center min-h-px min-w-px relative shrink-0 w-[40px]">
        <p className="leading-[18px]">20</p>
      </div>
      <div className="basis-0 flex flex-col grow justify-center min-h-px min-w-px relative shrink-0 w-[40px]">
        <p className="leading-[18px]">10</p>
      </div>
    </div>
  );
}

function Divider() {
  return (
    <div className="h-[77.536px] relative w-full" data-name="Divider">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 870 78">
        <g id="Divider">
          <line id="Divider_2" stroke="var(--stroke-0, #343A40)" strokeLinecap="round" strokeOpacity="0.1" x1="0.5" x2="869.5" y1="38.2679" y2="38.2679" />
        </g>
      </svg>
    </div>
  );
}

function Divider1() {
  return (
    <div className="h-[77.536px] relative w-full" data-name="Divider">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 870 78">
        <g id="Divider">
          <line id="Divider_2" stroke="var(--stroke-0, #343A40)" strokeLinecap="round" strokeOpacity="0.1" x1="0.5" x2="869.5" y1="38.268" y2="38.268" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-start justify-end relative size-full">
      <div className="basis-0 flex grow h-[870px] items-center justify-center min-h-px min-w-px relative shrink-0" style={{ "--transform-inner-width": "105", "--transform-inner-height": "77.53125" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg] w-full">
          <Divider />
        </div>
      </div>
      <div className="basis-0 flex grow h-[870px] items-center justify-center min-h-px min-w-px relative shrink-0" style={{ "--transform-inner-width": "105", "--transform-inner-height": "77.53125" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg] w-full">
          {[...Array(5).keys()].map((_, i) => (
            <Divider1 key={i} />
          ))}
        </div>
      </div>
      <div className="basis-0 flex grow h-[870px] items-center justify-center min-h-px min-w-px relative shrink-0" style={{ "--transform-inner-width": "105", "--transform-inner-height": "77.53125" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg] w-full" />
      </div>
      <div className="basis-0 flex grow h-[870px] items-center justify-center min-h-px min-w-px relative shrink-0" style={{ "--transform-inner-width": "105", "--transform-inner-height": "77.53125" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg] w-full" />
      </div>
      <div className="basis-0 flex grow h-[870px] items-center justify-center min-h-px min-w-px relative shrink-0" style={{ "--transform-inner-width": "105", "--transform-inner-height": "77.53125" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg] w-full" />
      </div>
      <div className="basis-0 flex grow h-[870px] items-center justify-center min-h-px min-w-px relative shrink-0" style={{ "--transform-inner-width": "105", "--transform-inner-height": "77.53125" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg] w-full" />
      </div>
    </div>
  );
}

function ChartBar() {
  return (
    <div className="absolute bottom-0 left-0 top-[24px] w-[32px]" data-name="Chart bar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 380">
        <g id="Chart bar">
          <path d={svgPaths.p301ec800} fill="var(--fill-0, #C95555)" id="Series 3" />
        </g>
      </svg>
    </div>
  );
}

function Bar() {
  return (
    <div className="h-full relative shrink-0 w-[32px]" data-name="Bar">
      <ChartBar />
    </div>
  );
}

function ChartBar1() {
  return (
    <div className="absolute bottom-0 left-0 top-[24px] w-[32px]" data-name="Chart bar">
      <div className="absolute bottom-0 left-[-0.85%] right-0 top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 380">
          <g id="Chart bar">
            <path d={svgPaths.p3d666d40} fill="var(--fill-0, #C95555)" id="Series 3" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Bar1() {
  return (
    <div className="h-full relative shrink-0 w-[32px]" data-name="Bar">
      <ChartBar1 />
    </div>
  );
}

function ChartBar2() {
  return (
    <div className="absolute bottom-0 left-0 right-0 top-[40px]" data-name="Chart bar">
      <div className="absolute bottom-0 left-[0.45px] top-[42.58%] w-[32px]" data-name="Series 3">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 209">
          <path d={svgPaths.p1750cd00} fill="var(--fill-0, #C95555)" id="Series 3" />
        </svg>
      </div>
    </div>
  );
}

function Bar2() {
  return (
    <div className="h-full relative shrink-0 w-[32px]" data-name="Bar">
      <ChartBar2 />
    </div>
  );
}

function ChartBar3() {
  return (
    <div className="absolute bottom-0 left-0 right-0 top-[40px]" data-name="Chart bar">
      <div className="absolute bottom-0 left-[0.18px] top-[45.05%] w-[32px]" data-name="Series 3">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 200">
          <path d={svgPaths.p251b0880} fill="var(--fill-0, #C95555)" id="Series 3" />
        </svg>
      </div>
    </div>
  );
}

function Bar3() {
  return (
    <div className="h-full relative shrink-0 w-[32px]" data-name="Bar">
      <ChartBar3 />
    </div>
  );
}

function ChartBar4() {
  return (
    <div className="absolute bottom-0 left-0 right-0 top-[16px]" data-name="Chart bar">
      <div className="absolute bottom-0 left-[-0.09px] top-[52.06%] w-[32px]" data-name="Series 3">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 186">
          <path d={svgPaths.p2c9a1800} fill="var(--fill-0, #C95555)" id="Series 3" />
        </svg>
      </div>
    </div>
  );
}

function Bar4() {
  return (
    <div className="h-full relative shrink-0 w-[32px]" data-name="Bar">
      <ChartBar4 />
    </div>
  );
}

function ChartBar5() {
  return (
    <div className="absolute bottom-0 left-0 right-0 top-[16px]" data-name="Chart bar">
      <div className="absolute bottom-0 left-[-0.36px] top-[53.61%] w-[32px]" data-name="Series 3">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 180">
          <path d={svgPaths.p3be1c480} fill="var(--fill-0, #C95555)" id="Series 3" />
        </svg>
      </div>
    </div>
  );
}

function Bar5() {
  return (
    <div className="h-full relative shrink-0 w-[32px]" data-name="Bar">
      <ChartBar5 />
    </div>
  );
}

function ChartBar6() {
  return (
    <div className="absolute bottom-0 left-0 right-0 top-[48px]" data-name="Chart bar">
      <div className="absolute bottom-0 left-[0.36px] top-[69.38%] w-[32px]" data-name="Series 3">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 109">
          <path d={svgPaths.p12382f80} fill="var(--fill-0, #C95555)" id="Series 3" />
        </svg>
      </div>
    </div>
  );
}

function Bar6() {
  return (
    <div className="h-full relative shrink-0 w-[32px]" data-name="Bar">
      <ChartBar6 />
    </div>
  );
}

function ChartBar7() {
  return (
    <div className="absolute bottom-0 left-0 right-0 top-[48px]" data-name="Chart bar">
      <div className="absolute bottom-0 left-[0.09px] top-[71.63%] w-[32px]" data-name="Series 3">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 101">
          <path d={svgPaths.p3717a3a0} fill="var(--fill-0, #C95555)" id="Series 3" />
        </svg>
      </div>
    </div>
  );
}

function Bar7() {
  return (
    <div className="h-full relative shrink-0 w-[32px]" data-name="Bar">
      <ChartBar7 />
    </div>
  );
}

function ChartBar8() {
  return (
    <div className="absolute bottom-0 left-0 right-0 top-[80px]" data-name="Chart bar">
      <div className="absolute bottom-0 left-[-0.18px] top-[74.38%] w-[32px]" data-name="Series 3">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 83">
          <path d={svgPaths.p11035400} fill="var(--fill-0, #C95555)" id="Series 3" />
        </svg>
      </div>
    </div>
  );
}

function Bar8() {
  return (
    <div className="h-full relative shrink-0 w-[32px]" data-name="Bar">
      <ChartBar8 />
    </div>
  );
}

function ChartBar9() {
  return (
    <div className="absolute bottom-0 left-0 right-0 top-[80px]" data-name="Chart bar">
      <div className="absolute bottom-0 left-[-0.45px] top-[77.47%] w-[32px]" data-name="Series 3">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 73">
          <path d={svgPaths.p3cd84800} fill="var(--fill-0, #C95555)" id="Series 3" />
        </svg>
      </div>
    </div>
  );
}

function Bar9() {
  return (
    <div className="h-full relative shrink-0 w-[32px]" data-name="Bar">
      <ChartBar9 />
    </div>
  );
}

function ChartBar10() {
  return (
    <div className="absolute bottom-0 left-0 right-0 top-[80px]" data-name="Chart bar">
      <div className="absolute bottom-0 left-0 top-[86%] w-[32px]" data-name="Series 3">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 46">
          <path d={svgPaths.p279ca580} fill="var(--fill-0, #C95555)" id="Series 3" />
        </svg>
      </div>
    </div>
  );
}

function Bar10() {
  return (
    <div className="h-full relative shrink-0 w-[32px]" data-name="Bar">
      <ChartBar10 />
    </div>
  );
}

function Chart() {
  return (
    <div className="basis-0 content-stretch flex grow h-full items-end justify-between min-h-px min-w-px overflow-clip relative shrink-0" data-name="Chart">
      <Bar />
      <Bar1 />
      <Bar2 />
      <Bar3 />
      <Bar4 />
      <Bar5 />
      <Bar6 />
      <Bar7 />
      <Bar8 />
      <Bar9 />
      {[...Array(2).keys()].map((_, i) => (
        <Bar10 key={i} />
      ))}
    </div>
  );
}

function ChartData() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative size-full" data-name="_Chart data">
      <Chart />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[838px] items-start justify-end relative w-[404px]">
      <div className="basis-0 flex grow items-center justify-center min-h-px min-w-px relative shrink-0 w-full" style={{ "--transform-inner-width": "404", "--transform-inner-height": "838" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg] size-full">
          <ChartData />
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="basis-0 content-stretch flex grow items-start justify-end min-h-px min-w-px relative shrink-0 w-full">
      <Frame4 />
      <div className="basis-0 flex grow h-full items-center justify-center min-h-px min-w-px relative shrink-0" style={{ "--transform-inner-width": "630", "--transform-inner-height": "465.21875" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg] size-full">
          <Frame5 />
        </div>
      </div>
      <div className="absolute flex h-[404px] items-center justify-center left-[59px] top-[8px] w-[838px]" style={{ "--transform-inner-width": "404", "--transform-inner-height": "838" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <Frame7 />
        </div>
      </div>
    </div>
  );
}

function XAxis() {
  return (
    <div className="relative shrink-0 w-full" data-name="_X-axis">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between pl-[40px] pr-0 py-0 relative w-full">
          <div className="flex h-[50.392px] items-center justify-center relative shrink-0 w-[75.282px]" style={{ "--transform-inner-width": "80", "--transform-inner-height": "12" } as React.CSSProperties}>
            <div className="flex-none rotate-[30deg]">
              <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[12px] not-italic relative text-[#3c4d5d] text-[12px] w-[80px]">Центр</p>
            </div>
          </div>
          <div className="flex h-[50.392px] items-center justify-center relative shrink-0 w-[75.282px]" style={{ "--transform-inner-width": "80", "--transform-inner-height": "12" } as React.CSSProperties}>
            <div className="flex-none rotate-[30deg]">
              <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[12px] not-italic relative text-[#3c4d5d] text-[12px] w-[80px]">Поділля</p>
            </div>
          </div>
          <div className="flex h-[50.392px] items-center justify-center relative shrink-0 w-[75.282px]" style={{ "--transform-inner-width": "80", "--transform-inner-height": "12" } as React.CSSProperties}>
            <div className="flex-none rotate-[30deg]">
              <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[12px] not-italic relative text-[#3c4d5d] text-[12px] w-[80px]">Тяжилів</p>
            </div>
          </div>
          <div className="flex h-[50.392px] items-center justify-center relative shrink-0 w-[75.282px]" style={{ "--transform-inner-width": "80", "--transform-inner-height": "12" } as React.CSSProperties}>
            <div className="flex-none rotate-[30deg]">
              <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[12px] not-italic relative text-[#3c4d5d] text-[12px] w-[80px]">Вишенька</p>
            </div>
          </div>
          <div className="flex h-[50.392px] items-center justify-center relative shrink-0 w-[75.282px]" style={{ "--transform-inner-width": "80", "--transform-inner-height": "12" } as React.CSSProperties}>
            <div className="flex-none rotate-[30deg]">
              <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[12px] not-italic relative text-[#3c4d5d] text-[12px] w-[80px]">П’ятничани</p>
            </div>
          </div>
          <div className="flex h-[50.392px] items-center justify-center relative shrink-0 w-[75.282px]" style={{ "--transform-inner-width": "80", "--transform-inner-height": "12" } as React.CSSProperties}>
            <div className="flex-none rotate-[30deg]">
              <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[12px] not-italic relative text-[#3c4d5d] text-[12px] w-[80px]">Слов’янка</p>
            </div>
          </div>
          <div className="flex h-[60.785px] items-center justify-center relative shrink-0 w-[81.282px]" style={{ "--transform-inner-width": "80", "--transform-inner-height": "24" } as React.CSSProperties}>
            <div className="flex-none rotate-[30deg]">
              <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[12px] not-italic relative text-[#3c4d5d] text-[12px] w-[80px]">Дальнє Замостя</p>
            </div>
          </div>
          <div className="flex h-[60.785px] items-center justify-center relative shrink-0 w-[81.282px]" style={{ "--transform-inner-width": "80", "--transform-inner-height": "24" } as React.CSSProperties}>
            <div className="flex-none rotate-[30deg]">
              <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[12px] not-italic relative text-[#3c4d5d] text-[12px] w-[80px]">Ближнє Замостя</p>
            </div>
          </div>
          <div className="flex h-[50.392px] items-center justify-center relative shrink-0 w-[75.282px]" style={{ "--transform-inner-width": "80", "--transform-inner-height": "12" } as React.CSSProperties}>
            <div className="flex-none rotate-[30deg]">
              <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[12px] not-italic relative text-[#3c4d5d] text-[12px] w-[80px]">Старе місто</p>
            </div>
          </div>
          <div className="flex h-[60.785px] items-center justify-center relative shrink-0 w-[81.282px]" style={{ "--transform-inner-width": "80", "--transform-inner-height": "24" } as React.CSSProperties}>
            <div className="flex-none rotate-[30deg]">
              <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[12px] not-italic relative text-[#3c4d5d] text-[12px] w-[80px]">Вінницькі хутори</p>
            </div>
          </div>
          <div className="flex h-[60.785px] items-center justify-center relative shrink-0 w-[81.282px]" style={{ "--transform-inner-width": "80", "--transform-inner-height": "24" } as React.CSSProperties}>
            <div className="flex-none rotate-[30deg]">
              <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[12px] not-italic relative text-[#3c4d5d] text-[12px] w-[80px]">Свердловський мік</p>
            </div>
          </div>
          <div className="flex h-[50.392px] items-center justify-center relative shrink-0 w-[75.282px]" style={{ "--transform-inner-width": "80", "--transform-inner-height": "12" } as React.CSSProperties}>
            <div className="flex-none rotate-[30deg]">
              <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[12px] not-italic relative text-[#3c4d5d] text-[12px] w-[80px]">Академічний</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function XAxis1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="X-axis">
      <XAxis />
    </div>
  );
}

function XAxisLabel() {
  return (
    <div className="box-border content-stretch flex items-start justify-center pb-0 pt-[8px] px-0 relative shrink-0 w-full" data-name="_X-axis label">
      <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#3c4d5d] text-[12px] text-center text-nowrap whitespace-pre">Район</p>
    </div>
  );
}

function Content4() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-end justify-end min-h-px min-w-px relative shrink-0" data-name="Content">
      <Frame6 />
      <XAxis1 />
      <XAxisLabel />
    </div>
  );
}

function Axis() {
  return (
    <div className="absolute content-stretch flex gap-[4px] inset-0 items-start" data-name="Axis">
      <YAxisLabel />
      <Content4 />
    </div>
  );
}

function LineAndBarChart() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Line and bar chart">
      <Axis />
    </div>
  );
}

function Content5() {
  return (
    <div className="h-[600px] relative shrink-0 w-full" data-name="Content">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] h-[600px] items-start p-[24px] relative w-full">
          <LineAndBarChart />
        </div>
      </div>
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
      <Content5 />
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
    <div className="relative shrink-0 w-full" data-name="Dashboard">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[24px] items-start px-[60px] py-[40px] relative w-full">
          <FilterProjectsSelected />
          <Body />
        </div>
      </div>
    </div>
  );
}

export default function StatsBarChartProjectsViewWithFilterSelections() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Stats – Bar Chart – Projects view with filter selections">
      <Header />
      <Dashboard />
    </div>
  );
}