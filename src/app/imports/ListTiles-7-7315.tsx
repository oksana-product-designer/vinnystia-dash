import svgPaths from "./svg-6u61ml1bbt";
import imgImage2 from "figma:asset/94fb00e245a4b2b6d8fe73af614f2ca58b53c080.png";
import imgRectangle34660869 from "figma:asset/8871ace244410338c7a5474b4214d3427ac4098e.png";

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
    <div className="absolute content-stretch flex gap-[48px] items-center leading-[20px] left-[calc(50%+0.5px)] not-italic text-[#343a40] text-[16px] text-nowrap top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%] whitespace-pre" data-name="menu">
      <p className="font-['VinnytsiaSansReg:Book',sans-serif] relative shrink-0 tracking-[-0.32px]">Аналітичні дані</p>
      <p className="font-['VinnytsiaSansBold:Bold',sans-serif] relative shrink-0 tracking-[-0.64px]">Список проєктів</p>
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

function Frame28() {
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
      <Frame28 />
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

function Frame31() {
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
      <Frame31 />
    </div>
  );
}

function Header() {
  return (
    <div className="bg-white h-[80px] relative shrink-0 w-full" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#e3e3e3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Logo />
      <Menu />
      <Tab />
      <Tab1 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[8px] h-[28px] items-center relative shrink-0 w-full">
      <p className="font-['VinnytsiaSansBold:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#343a40] text-[24px] text-nowrap tracking-[-0.96px] whitespace-pre">Фільтри</p>
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
            <g filter="url(#filter0_dd_7_5936)" id="State layer">
              <path clipRule="evenodd" d={svgPaths.p2264d800} fill="var(--fill-0, #C95555)" fillRule="evenodd" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="28" id="filter0_dd_7_5936" width="28" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feMorphology in="SourceAlpha" operator="dilate" radius="1" result="effect1_dropShadow_7_5936" />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="1.5" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_7_5936" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />
              <feBlend in2="effect1_dropShadow_7_5936" mode="normal" result="effect2_dropShadow_7_5936" />
              <feBlend in="SourceGraphic" in2="effect2_dropShadow_7_5936" mode="normal" result="shape" />
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

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0">
      <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[12px] min-w-full not-italic relative shrink-0 text-[#49454f] text-[10px] text-center tracking-[-0.2px] w-[min-content]">Від</p>
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

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0">
      <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[12px] min-w-full not-italic relative shrink-0 text-[#49454f] text-[10px] text-center tracking-[-0.2px] w-[min-content]">До</p>
      <TextField3 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame24 />
      <Frame25 />
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

function Frame27() {
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
      <p className="font-['VinnytsiaSerif:Book',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#343a40] text-[18px] text-nowrap text-right whitespace-pre">Район</p>
      <Frame6 />
    </div>
  );
}

function InputText2() {
  return (
    <div className="box-border content-stretch flex items-center pb-0 pt-[2px] px-0 relative shrink-0" data-name="input-text">
      <div className="flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] justify-center leading-[0] not-italic opacity-50 relative shrink-0 text-[#343a40] text-[16px] text-nowrap tracking-[-0.32px]">
        <p className="leading-[16px] whitespace-pre">Пошук району</p>
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
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Checkbox">
      <Checkbox />
      <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#343a40] text-[14px] text-nowrap whitespace-pre">Центр</p>
      <p className="-webkit-box font-['VinnytsiaSansReg:Book',sans-serif] leading-[16px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(52,58,64,0.6)] text-nowrap text-right whitespace-pre">(90)</p>
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
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Checkbox">
      <Checkbox2 />
      <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#343a40] text-[14px] text-nowrap whitespace-pre">Поділля</p>
      <p className="-webkit-box font-['VinnytsiaSansReg:Book',sans-serif] leading-[16px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(52,58,64,0.6)] text-nowrap text-right whitespace-pre">(90)</p>
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
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Checkbox">
      <Checkbox4 />
      <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#343a40] text-[14px] text-nowrap whitespace-pre">Тяжилів</p>
      <p className="-webkit-box font-['VinnytsiaSansReg:Book',sans-serif] leading-[16px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(52,58,64,0.6)] text-nowrap text-right whitespace-pre">(90)</p>
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
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Checkbox">
      <Checkbox6 />
      <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#343a40] text-[14px] text-nowrap whitespace-pre">Вишенька</p>
      <p className="-webkit-box font-['VinnytsiaSansReg:Book',sans-serif] leading-[16px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(52,58,64,0.6)] text-nowrap text-right whitespace-pre">(90)</p>
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
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Checkbox">
      <Checkbox8 />
      <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#343a40] text-[14px] text-nowrap whitespace-pre">П’ятничани</p>
      <p className="-webkit-box font-['VinnytsiaSansReg:Book',sans-serif] leading-[16px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(52,58,64,0.6)] text-nowrap text-right whitespace-pre">(90)</p>
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
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Checkbox">
      <Checkbox10 />
      <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#343a40] text-[14px] text-nowrap whitespace-pre">Слов’янка</p>
      <p className="-webkit-box font-['VinnytsiaSansReg:Book',sans-serif] leading-[16px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(52,58,64,0.6)] text-nowrap text-right whitespace-pre">(90)</p>
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
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Checkbox">
      <Checkbox12 />
      <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#343a40] text-[14px] text-nowrap whitespace-pre">Дальнє Замостя</p>
      <p className="-webkit-box font-['VinnytsiaSansReg:Book',sans-serif] leading-[16px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(52,58,64,0.6)] text-nowrap text-right whitespace-pre">(90)</p>
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
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Checkbox">
      <Checkbox14 />
      <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#343a40] text-[14px] text-nowrap whitespace-pre">Комунальні підприємства</p>
      <p className="-webkit-box font-['VinnytsiaSansReg:Book',sans-serif] leading-[16px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(52,58,64,0.6)] text-nowrap text-right whitespace-pre">(90)</p>
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
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Checkbox">
      <Checkbox16 />
      <p className="basis-0 font-['VinnytsiaSansReg:Book',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#343a40] text-[14px]">Благоустрій міста та охорона навколишнього середовища</p>
      <p className="-webkit-box font-['VinnytsiaSansReg:Book',sans-serif] leading-[16px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(52,58,64,0.6)] text-nowrap text-right whitespace-pre">(90)</p>
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
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Checkbox">
      <Checkbox18 />
      <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#343a40] text-[14px] text-nowrap whitespace-pre">Громадська участь</p>
      <p className="-webkit-box font-['VinnytsiaSansReg:Book',sans-serif] leading-[16px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(52,58,64,0.6)] text-nowrap text-right whitespace-pre">(90)</p>
    </div>
  );
}

function Frame30() {
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
      <Frame30 />
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
      <p className="font-['VinnytsiaSerif:Book',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#343a40] text-[18px] text-nowrap text-right whitespace-pre">Напрямок</p>
      <Frame9 />
    </div>
  );
}

function InputText3() {
  return (
    <div className="box-border content-stretch flex items-center pb-0 pt-[2px] px-0 relative shrink-0" data-name="input-text">
      <div className="flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] justify-center leading-[0] not-italic opacity-50 relative shrink-0 text-[#343a40] text-[16px] text-nowrap tracking-[-0.32px]">
        <p className="leading-[16px] whitespace-pre">Пошук напрямку</p>
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

function Checkbox20() {
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

function Checkbox21() {
  return (
    <div className="relative shrink-0 w-full" data-name="Checkbox">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center pl-0 pr-[8px] py-0 relative w-full">
          <Checkbox20 />
          <p className="-webkit-box basis-0 font-['VinnytsiaSansReg:Book',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#343a40] text-[14px]">Освіта</p>
          <p className="-webkit-box font-['VinnytsiaSansReg:Book',sans-serif] leading-[16px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(52,58,64,0.6)] text-nowrap text-right whitespace-pre">(90)</p>
        </div>
      </div>
    </div>
  );
}

function Checkbox22() {
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

function Checkbox23() {
  return (
    <div className="relative shrink-0 w-full" data-name="Checkbox">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center pl-0 pr-[8px] py-0 relative w-full">
          <Checkbox22 />
          <p className="-webkit-box basis-0 font-['VinnytsiaSansReg:Book',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#343a40] text-[14px]">Транспорт, зв’язок, енергетика, інформаційні технології</p>
          <p className="-webkit-box font-['VinnytsiaSansReg:Book',sans-serif] leading-[16px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(52,58,64,0.6)] text-nowrap text-right whitespace-pre">(90)</p>
        </div>
      </div>
    </div>
  );
}

function Checkbox24() {
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

function Checkbox25() {
  return (
    <div className="relative shrink-0 w-full" data-name="Checkbox">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center pl-0 pr-[8px] py-0 relative w-full">
          <Checkbox24 />
          <p className="-webkit-box basis-0 font-['VinnytsiaSansReg:Book',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#343a40] text-[14px]">Культура і мистецтво</p>
          <p className="-webkit-box font-['VinnytsiaSansReg:Book',sans-serif] leading-[16px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(52,58,64,0.6)] text-nowrap text-right whitespace-pre">(90)</p>
        </div>
      </div>
    </div>
  );
}

function Checkbox26() {
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

function Checkbox27() {
  return (
    <div className="relative shrink-0 w-full" data-name="Checkbox">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center pl-0 pr-[8px] py-0 relative w-full">
          <Checkbox26 />
          <p className="-webkit-box basis-0 font-['VinnytsiaSansReg:Book',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#343a40] text-[14px]">Охорона здоров’я</p>
          <p className="-webkit-box font-['VinnytsiaSansReg:Book',sans-serif] leading-[16px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(52,58,64,0.6)] text-nowrap text-right whitespace-pre">(90)</p>
        </div>
      </div>
    </div>
  );
}

function Checkbox28() {
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

function Checkbox29() {
  return (
    <div className="relative shrink-0 w-full" data-name="Checkbox">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center pl-0 pr-[8px] py-0 relative w-full">
          <Checkbox28 />
          <p className="-webkit-box basis-0 font-['VinnytsiaSansReg:Book',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#343a40] text-[14px]">Архітектура і містобудування</p>
          <p className="-webkit-box font-['VinnytsiaSansReg:Book',sans-serif] leading-[16px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(52,58,64,0.6)] text-nowrap text-right whitespace-pre">(90)</p>
        </div>
      </div>
    </div>
  );
}

function Checkbox30() {
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

function Checkbox31() {
  return (
    <div className="relative shrink-0 w-full" data-name="Checkbox">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center pl-0 pr-[8px] py-0 relative w-full">
          <Checkbox30 />
          <p className="-webkit-box basis-0 font-['VinnytsiaSansReg:Book',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#343a40] text-[14px]">Туризм, дозвілля, молодь</p>
          <p className="-webkit-box font-['VinnytsiaSansReg:Book',sans-serif] leading-[16px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(52,58,64,0.6)] text-nowrap text-right whitespace-pre">(90)</p>
        </div>
      </div>
    </div>
  );
}

function Checkbox32() {
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

function Checkbox33() {
  return (
    <div className="relative shrink-0 w-full" data-name="Checkbox">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center pl-0 pr-[8px] py-0 relative w-full">
          <Checkbox32 />
          <p className="-webkit-box basis-0 font-['VinnytsiaSansReg:Book',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#343a40] text-[14px]">Фізкультура та спорт</p>
          <p className="-webkit-box font-['VinnytsiaSansReg:Book',sans-serif] leading-[16px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(52,58,64,0.6)] text-nowrap text-right whitespace-pre">(90)</p>
        </div>
      </div>
    </div>
  );
}

function Checkbox34() {
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

function Checkbox35() {
  return (
    <div className="relative shrink-0 w-full" data-name="Checkbox">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center pl-0 pr-[8px] py-0 relative w-full">
          <Checkbox34 />
          <p className="-webkit-box basis-0 font-['VinnytsiaSansReg:Book',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#343a40] text-[14px]">Комунальні підприємства</p>
          <p className="-webkit-box font-['VinnytsiaSansReg:Book',sans-serif] leading-[16px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(52,58,64,0.6)] text-nowrap text-right whitespace-pre">(90)</p>
        </div>
      </div>
    </div>
  );
}

function Checkbox36() {
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

function Checkbox37() {
  return (
    <div className="relative shrink-0 w-full" data-name="Checkbox">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center pl-0 pr-[8px] py-0 relative w-full">
          <Checkbox36 />
          <p className="-webkit-box basis-0 font-['VinnytsiaSansReg:Book',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#343a40] text-[14px]">Благоустрій міста та охорона навколишнього середовища</p>
          <p className="-webkit-box font-['VinnytsiaSansReg:Book',sans-serif] leading-[16px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(52,58,64,0.6)] text-nowrap text-right whitespace-pre">(90)</p>
        </div>
      </div>
    </div>
  );
}

function Checkbox38() {
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

function Checkbox39() {
  return (
    <div className="relative shrink-0 w-full" data-name="Checkbox">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center pl-0 pr-[8px] py-0 relative w-full">
          <Checkbox38 />
          <p className="-webkit-box basis-0 font-['VinnytsiaSansReg:Book',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#343a40] text-[14px]">Громадська участь</p>
          <p className="-webkit-box font-['VinnytsiaSansReg:Book',sans-serif] leading-[16px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(52,58,64,0.6)] text-nowrap text-right whitespace-pre">(90)</p>
        </div>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Checkbox21 />
      <Checkbox23 />
      <Checkbox25 />
      <Checkbox27 />
      <Checkbox29 />
      <Checkbox31 />
      <Checkbox33 />
      <Checkbox35 />
      <Checkbox37 />
      <Checkbox39 />
    </div>
  );
}

function Scrollbar1() {
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

function RadioButtons1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Radio buttons">
      <Frame10 />
      <TextField5 />
      <Frame29 />
      <Scrollbar1 />
    </div>
  );
}

function Selector1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[360px] items-start overflow-clip relative shrink-0 w-full" data-name="selector">
      <RadioButtons1 />
    </div>
  );
}

function Remove3() {
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
      <Remove3 />
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

function InputText4() {
  return (
    <div className="box-border content-stretch flex items-center pb-0 pt-[2px] px-0 relative shrink-0" data-name="input-text">
      <div className="flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] justify-center leading-[0] not-italic opacity-50 relative shrink-0 text-[#343a40] text-[16px] text-nowrap tracking-[-0.32px]">
        <p className="leading-[16px] whitespace-pre">Пошук програми</p>
      </div>
    </div>
  );
}

function Content4() {
  return (
    <div className="box-border content-stretch flex flex-col h-[40px] items-start justify-center px-[16px] py-0 relative shrink-0 w-[208px]" data-name="content">
      <InputText4 />
    </div>
  );
}

function IconsSearch24Px2() {
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

function StateLayer4() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <IconsSearch24Px2 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer4 />
    </div>
  );
}

function LeadingIcon2() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0 size-[40px]" data-name="leading-icon">
      <Container2 />
    </div>
  );
}

function TextField6() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative rounded-[999px] shrink-0 w-full" data-name="text field">
      <div aria-hidden="true" className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <Content4 />
      <LeadingIcon2 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[20px] shrink-0 w-full">
      <TextField6 />
    </div>
  );
}

function RadioButtons2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Radio buttons">
      <Frame13 />
      <Frame23 />
    </div>
  );
}

function Selector2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="selector">
      <RadioButtons2 />
    </div>
  );
}

function FilterBudgetAllOpen() {
  return (
    <div className="bg-[#f7f7f7] box-border content-stretch flex flex-col gap-[24px] items-start px-[24px] py-[32px] relative rounded-[16px] shrink-0 w-[312px]" data-name="Filter – Budget – All open">
      <Frame26 />
      <Frame27 />
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
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 264 1">
            <path d="M0 0.5H264" id="Vector 2" stroke="var(--stroke-0, #343A40)" strokeOpacity="0.2" />
          </svg>
        </div>
      </div>
      <Selector2 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px not-italic relative shrink-0">
      <p className="font-['VinnytsiaSansBold:Bold',sans-serif] leading-[28px] relative shrink-0 text-[#343a40] text-[24px] tracking-[-0.96px] w-full">Проєкти (2000)</p>
      <p className="[white-space-collapse:collapse] font-['VinnytsiaSansReg:Book',sans-serif] leading-[20px] overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-[rgba(52,58,64,0.6)] text-nowrap tracking-[-0.28px] w-full">Тут ви можете переглянути перелік проєктів, які було фінансовано з міського бюджету</p>
    </div>
  );
}

function Download() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="download">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="download">
          <mask height="24" id="mask0_5_3098" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_5_3098)">
            <path d={svgPaths.p16f45de0} fill="var(--fill-0, #C95555)" id="download_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TextField7() {
  return (
    <div className="bg-[rgba(201,85,85,0.1)] box-border content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative rounded-[999px] shrink-0" data-name="text field">
      <div aria-hidden="true" className="absolute border border-[rgba(201,85,85,0.5)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <Download />
      <div className="flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#c95555] text-[14px] text-nowrap tracking-[-0.14px]">
        <p className="leading-[16px] whitespace-pre">Скачати</p>
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="box-border content-stretch flex gap-[24px] items-end pb-[24px] pt-0 px-0 relative shrink-0 w-full">
      <Frame32 />
      <TextField7 />
    </div>
  );
}

function GridView() {
  return (
    <div className="absolute left-0 size-[24px] top-0" data-name="grid_view">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="grid_view">
          <mask height="24" id="mask0_5_3102" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_5_3102)">
            <path d={svgPaths.p2ee6af80} fill="var(--fill-0, white)" id="grid_view_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function MapIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="map icon">
      <GridView />
    </div>
  );
}

function Tab2() {
  return (
    <div className="bg-[#c95555] box-border content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[999px] shrink-0" data-name="tab">
      <div aria-hidden="true" className="absolute border border-[rgba(201,85,85,0.1)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <MapIcon />
    </div>
  );
}

function DensitySmall() {
  return (
    <div className="absolute left-1/2 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="density_small">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="density_small">
          <mask height="24" id="mask0_5_3112" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_5_3112)">
            <path d={svgPaths.p3c7b0900} fill="var(--fill-0, #343A40)" id="density_small_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ChartIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="chart icon">
      <DensitySmall />
    </div>
  );
}

function Tab3() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center pl-[12px] pr-[16px] py-[8px] relative rounded-[4px] shrink-0" data-name="tab">
      <ChartIcon />
    </div>
  );
}

function Tabs() {
  return (
    <div className="bg-white content-stretch flex items-center relative rounded-[999px] shrink-0" data-name="tabs">
      <div aria-hidden="true" className="absolute border border-[rgba(52,58,64,0.2)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <Tab2 />
      <Tab3 />
    </div>
  );
}

function IconsSearch24Px3() {
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

function InputText5() {
  return (
    <div className="box-border content-stretch flex items-center pb-0 pt-[2px] px-0 relative shrink-0" data-name="input-text">
      <div className="flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] justify-center leading-[0] not-italic opacity-50 relative shrink-0 text-[#343a40] text-[16px] text-nowrap tracking-[-0.16px]">
        <p className="leading-[16px] whitespace-pre">Пошук проєкту...</p>
      </div>
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-col h-[40px] items-start justify-center relative shrink-0" data-name="content">
      <InputText5 />
    </div>
  );
}

function StateLayer5() {
  return (
    <div className="relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[16px] py-0 relative w-full">
          <IconsSearch24Px3 />
          <Content5 />
        </div>
      </div>
    </div>
  );
}

function TextField8() {
  return (
    <div className="bg-[#f7f7f7] content-stretch flex flex-col gap-[10px] items-start relative rounded-[999px] self-stretch shrink-0 w-[696px]" data-name="text field">
      <div aria-hidden="true" className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <StateLayer5 />
    </div>
  );
}

function StateLayer6() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="state-layer">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="filter_list">
          <mask height="24" id="mask0_5_3091" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_5_3091)">
            <path d={svgPaths.p1f0e0d80} fill="var(--fill-0, #343A40)" id="filter_list_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function InputText6() {
  return (
    <div className="box-border content-stretch flex h-full items-center pb-0 pt-[2px] px-0 relative shrink-0 w-[92px]" data-name="input-text">
      <div className="flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#343a40] text-[14px] text-nowrap tracking-[-0.14px]">
        <p className="leading-[16px] whitespace-pre">Сортувати за</p>
      </div>
    </div>
  );
}

function TextField9() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative rounded-[999px] shrink-0" data-name="text field">
      <div aria-hidden="true" className="absolute border border-[rgba(52,58,64,0.2)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <StateLayer6 />
      <div className="flex flex-row items-center self-stretch">
        <InputText6 />
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Tabs />
      <TextField8 />
      <TextField9 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] items-start leading-[16px] not-italic relative shrink-0 text-[#343a40] text-[14px] w-full">
      <p className="opacity-50 relative shrink-0 w-full">Код проєкту:</p>
      <p className="relative shrink-0 w-full">9876543210</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] items-start leading-[16px] not-italic relative shrink-0 text-[#343a40] text-[14px] w-full">
      <p className="opacity-50 relative shrink-0 w-full">Сфера діяльності:</p>
      <p className="relative shrink-0 w-full">Екологічні ініціативи та покращення міського середовища</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] items-start leading-[16px] not-italic relative shrink-0 text-[#343a40] text-[14px] w-full">
      <p className="opacity-50 relative shrink-0 w-full">Програма:</p>
      <p className="-webkit-box overflow-ellipsis overflow-hidden relative shrink-0 w-full">Програма «Муніципальний університет перепідготовки та підвищення кваліфікації посадових осіб місцевого самоврядування Вінницької міської ради»</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] items-start leading-[16px] not-italic relative shrink-0 text-[#343a40] text-[14px] w-full">
      <p className="opacity-50 relative shrink-0 w-full">Місцевість:</p>
      <p className="relative shrink-0 w-full">Квіткове містечко</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] items-start leading-[16px] not-italic relative shrink-0 text-[#343a40] text-[14px] w-full">
      <p className="opacity-50 relative shrink-0 w-full">Фінансування, грн:</p>
      <p className="relative shrink-0 w-full">750000</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['VinnytsiaSerif:Book',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#343a40] text-[18px] w-full">{`Ботанічний сад "Зелена Оаза"`}</p>
      <Frame17 />
      <Frame14 />
      <Frame18 />
      <Frame15 />
      <Frame16 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="bg-[#fbfbfb] relative rounded-[16px] shrink-0 w-[312px]">
      <div className="box-border content-stretch flex flex-col gap-[12px] items-center overflow-clip p-[16px] relative rounded-[inherit] w-[312px]">
        <div className="h-[160px] relative rounded-[8px] shrink-0 w-full">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
            <div className="absolute bg-[#d9d9d9] inset-0 rounded-[8px]" />
            <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgRectangle34660869} />
          </div>
        </div>
        <Frame21 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(52,58,64,0.14)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Body() {
  return (
    <div className="bg-white content-start flex flex-wrap gap-[24px] items-start relative rounded-[12px] shrink-0 w-[984px]" data-name="Body">
      {[...Array(12).keys()].map((_, i) => (
        <Frame22 key={i} />
      ))}
    </div>
  );
}

function InputText7() {
  return (
    <div className="box-border content-stretch flex items-center pb-0 pt-[2px] px-0 relative shrink-0" data-name="input-text">
      <div className="flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#343a40] text-[12px] text-nowrap tracking-[-0.24px]">
        <p className="leading-[16px] whitespace-pre">10</p>
      </div>
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex flex-col h-[28px] items-center justify-center relative shrink-0 w-[16px]" data-name="content">
      <InputText7 />
    </div>
  );
}

function KeyboardArrowDown() {
  return (
    <div className="absolute left-0 size-[16px] top-0" data-name="keyboard_arrow_down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="keyboard_arrow_down">
          <mask height="16" id="mask0_5_3087" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_5_3087)">
            <path d={svgPaths.p156e8100} fill="var(--fill-0, #343A40)" id="keyboard_arrow_down_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame35() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <KeyboardArrowDown />
    </div>
  );
}

function StateLayer7() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center px-[8px] py-0 relative rounded-tl-[4px] rounded-tr-[4px] shrink-0" data-name="state-layer">
      <Content6 />
      <Frame35 />
    </div>
  );
}

function TextField10() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center relative rounded-[999px] shrink-0" data-name="text field">
      <div aria-hidden="true" className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <StateLayer7 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <p className="-webkit-box font-['VinnytsiaSansReg:Book',sans-serif] leading-[20px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#343a40] text-[14px] text-nowrap whitespace-pre">Показувати на сторінці</p>
      <TextField10 />
    </div>
  );
}

function LucideIconsChevronLeft() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="lucide icons/chevron-left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="lucide icons/chevron-left">
          <path d={svgPaths.p2e3b0b80} fill="var(--fill-0, #343A40)" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function PaginationPrev() {
  return (
    <div className="bg-white relative rounded-[999px] shrink-0 size-[38px]" data-name="pagination-prev">
      <div className="box-border content-stretch flex items-center justify-center overflow-clip px-[13px] py-[7px] relative rounded-[inherit] size-[38px]">
        <LucideIconsChevronLeft />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(52,58,64,0.14)] border-solid inset-0 pointer-events-none rounded-[999px]" />
    </div>
  );
}

function TextText() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0" data-name="text/text">
      <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#c95555] text-[16px] text-nowrap whitespace-pre">1</p>
    </div>
  );
}

function PaginationItem() {
  return (
    <div className="bg-white relative rounded-[999px] shrink-0 w-[38px]" data-name="pagination-item">
      <div className="box-border content-stretch flex flex-col items-center justify-center overflow-clip px-[13px] py-[7px] relative rounded-[inherit] w-[38px]">
        <TextText />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c95555] border-solid inset-0 pointer-events-none rounded-[999px]" />
    </div>
  );
}

function TextText1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0" data-name="text/text">
      <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#343a40] text-[16px] text-nowrap whitespace-pre">2</p>
    </div>
  );
}

function PaginationItem1() {
  return (
    <div className="bg-white relative rounded-[999px] shrink-0 w-[38px]" data-name="pagination-item">
      <div className="box-border content-stretch flex flex-col items-center justify-center overflow-clip px-[13px] py-[7px] relative rounded-[inherit] w-[38px]">
        <TextText1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(52,58,64,0.14)] border-solid inset-0 pointer-events-none rounded-[999px]" />
    </div>
  );
}

function TextText2() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0" data-name="text/text">
      <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#343a40] text-[16px] text-nowrap whitespace-pre">3</p>
    </div>
  );
}

function PaginationItem2() {
  return (
    <div className="bg-white relative rounded-[999px] shrink-0 w-[38px]" data-name="pagination-item">
      <div className="box-border content-stretch flex flex-col items-center justify-center overflow-clip px-[13px] py-[7px] relative rounded-[inherit] w-[38px]">
        <TextText2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(52,58,64,0.14)] border-solid inset-0 pointer-events-none rounded-[999px]" />
    </div>
  );
}

function TextText3() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0" data-name="text/text">
      <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#343a40] text-[16px] text-nowrap whitespace-pre">4</p>
    </div>
  );
}

function PaginationItem3() {
  return (
    <div className="bg-white relative rounded-[999px] shrink-0 w-[38px]" data-name="pagination-item">
      <div className="box-border content-stretch flex flex-col items-center justify-center overflow-clip px-[13px] py-[7px] relative rounded-[inherit] w-[38px]">
        <TextText3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(52,58,64,0.14)] border-solid inset-0 pointer-events-none rounded-[999px]" />
    </div>
  );
}

function TextText4() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0" data-name="text/text">
      <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#343a40] text-[16px] text-nowrap whitespace-pre">5</p>
    </div>
  );
}

function PaginationItem4() {
  return (
    <div className="bg-white relative rounded-[999px] shrink-0 w-[38px]" data-name="pagination-item">
      <div className="box-border content-stretch flex flex-col items-center justify-center overflow-clip px-[13px] py-[7px] relative rounded-[inherit] w-[38px]">
        <TextText4 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(52,58,64,0.14)] border-solid inset-0 pointer-events-none rounded-[999px]" />
    </div>
  );
}

function TextText5() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0" data-name="text/text">
      <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#343a40] text-[16px] text-nowrap whitespace-pre">6</p>
    </div>
  );
}

function PaginationItem5() {
  return (
    <div className="bg-white relative rounded-[999px] shrink-0 w-[38px]" data-name="pagination-item">
      <div className="box-border content-stretch flex flex-col items-center justify-center overflow-clip px-[13px] py-[7px] relative rounded-[inherit] w-[38px]">
        <TextText5 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(52,58,64,0.14)] border-solid inset-0 pointer-events-none rounded-[999px]" />
    </div>
  );
}

function TextText6() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0" data-name="text/text">
      <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#343a40] text-[16px] text-nowrap whitespace-pre">...</p>
    </div>
  );
}

function PaginationItem6() {
  return (
    <div className="bg-white relative rounded-[999px] shrink-0 w-[38px]" data-name="pagination-item">
      <div className="box-border content-stretch flex flex-col items-center justify-center overflow-clip px-[13px] py-[7px] relative rounded-[inherit] w-[38px]">
        <TextText6 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(52,58,64,0.14)] border-solid inset-0 pointer-events-none rounded-[999px]" />
    </div>
  );
}

function TextText7() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0" data-name="text/text">
      <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#343a40] text-[16px] text-nowrap whitespace-pre">11</p>
    </div>
  );
}

function PaginationItem7() {
  return (
    <div className="bg-white relative rounded-[999px] shrink-0 w-[38px]" data-name="pagination-item">
      <div className="box-border content-stretch flex flex-col items-center justify-center overflow-clip px-[13px] py-[7px] relative rounded-[inherit] w-[38px]">
        <TextText7 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(52,58,64,0.14)] border-solid inset-0 pointer-events-none rounded-[999px]" />
    </div>
  );
}

function LucideIconsChevronRight() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="lucide icons/chevron-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="lucide icons/chevron-right">
          <path d={svgPaths.p704a2f0} fill="var(--fill-0, #343A40)" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function PaginationNext() {
  return (
    <div className="bg-white relative rounded-[999px] shrink-0 size-[38px]" data-name="pagination-next">
      <div className="box-border content-stretch flex flex-col items-center justify-center overflow-clip px-[13px] py-[7px] relative rounded-[inherit] size-[38px]">
        <LucideIconsChevronRight />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(52,58,64,0.14)] border-solid inset-0 pointer-events-none rounded-[999px]" />
    </div>
  );
}

function PageItems() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative rounded-[4px] shrink-0" data-name="page items">
      <PaginationPrev />
      <PaginationItem />
      <PaginationItem1 />
      <PaginationItem2 />
      <PaginationItem3 />
      <PaginationItem4 />
      <PaginationItem5 />
      <PaginationItem6 />
      <PaginationItem7 />
      <PaginationNext />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[984px]">
      <Frame34 />
      <PageItems />
    </div>
  );
}

function Frame19() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame33 />
      <Frame20 />
      <Body />
      <Frame36 />
    </div>
  );
}

function Dashboard() {
  return (
    <div className="relative shrink-0 w-full" data-name="Dashboard">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[24px] items-start px-[60px] py-[40px] relative w-full">
          <FilterBudgetAllOpen />
          <Frame19 />
        </div>
      </div>
    </div>
  );
}

export default function ListTiles() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="List – Tiles">
      <Header />
      <Dashboard />
    </div>
  );
}