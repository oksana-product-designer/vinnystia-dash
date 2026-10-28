import svgPaths from "./svg-33gtf8ulqr";

function Frame22() {
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

function Frame2() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <Remove />
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] items-center p-[4px] relative rounded-[999px] shrink-0">
      <Frame2 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['VinnytsiaSerif:Book',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#343a40] text-[18px] text-nowrap text-right whitespace-pre">Період</p>
      <Frame4 />
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
            <g filter="url(#filter0_dd_14_874)" id="State layer">
              <path clipRule="evenodd" d={svgPaths.p2264d800} fill="var(--fill-0, #C95555)" fillRule="evenodd" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="28" id="filter0_dd_14_874" width="28" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feMorphology in="SourceAlpha" operator="dilate" radius="1" result="effect1_dropShadow_14_874" />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="1.5" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_14_874" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />
              <feBlend in2="effect1_dropShadow_14_874" mode="normal" result="effect2_dropShadow_14_874" />
              <feBlend in="SourceGraphic" in2="effect2_dropShadow_14_874" mode="normal" result="shape" />
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

function Frame20() {
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

function Frame21() {
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
      <Frame20 />
      <Frame21 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Slider />
      <Frame />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame3 />
      <Frame5 />
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

function Frame6() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <Remove1 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] items-center p-[4px] relative rounded-[999px] shrink-0">
      <Frame6 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['VinnytsiaSerif:Book',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#343a40] text-[18px] text-nowrap text-right whitespace-pre">Бюджет</p>
      <Frame7 />
    </div>
  );
}

function InactiveTrack1() {
  return (
    <div className="basis-0 grow h-[4px] min-h-px min-w-px overflow-clip relative rounded-[4px] shrink-0" data-name="Inactive track">
      <div className="absolute bg-[#e3e3e3] inset-0 rounded-[4px]" data-name="State layer" />
    </div>
  );
}

function ActiveTrack1() {
  return (
    <div className="absolute bg-[#fffbfe] h-[4px] left-[15px] overflow-clip right-[12px] rounded-[100px] top-1/2 translate-y-[-50%]" data-name="Active track">
      <div className="absolute bg-[#c95555] inset-0 rounded-[100px]" data-name="State layer" />
    </div>
  );
}

function HandleContainer1() {
  return (
    <div className="absolute left-[14px] size-[20px] top-[14px]" data-name="Handle container">
      <div className="absolute inset-[-15%_-20%_-25%_-20%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
          <g id="Handle container">
            <rect fill="var(--fill-0, #FFFBFE)" height="20" rx="10" width="20" x="4" y="3" />
            <g filter="url(#filter0_dd_14_874)" id="State layer">
              <path clipRule="evenodd" d={svgPaths.p2264d800} fill="var(--fill-0, #C95555)" fillRule="evenodd" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="28" id="filter0_dd_14_874" width="28" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feMorphology in="SourceAlpha" operator="dilate" radius="1" result="effect1_dropShadow_14_874" />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="1.5" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_14_874" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />
              <feBlend in2="effect1_dropShadow_14_874" mode="normal" result="effect2_dropShadow_14_874" />
              <feBlend in="SourceGraphic" in2="effect2_dropShadow_14_874" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function BuildingBlocksHandle1() {
  return (
    <div className="relative size-[48px]" data-name="Building Blocks/Handle">
      <HandleContainer1 />
    </div>
  );
}

function ProgressIndicator1() {
  return (
    <div className="absolute h-[48px] left-0 right-0 top-1/2 translate-y-[-50%]" data-name="Progress indicator">
      <ActiveTrack1 />
      <div className="absolute flex items-center justify-center right-[-11px] size-[48px] top-1/2 translate-y-[-50%]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          {[...Array(2).keys()].map((_, i) => (
            <BuildingBlocksHandle1 key={i} />
          ))}
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[-8px] size-[48px] top-1/2 translate-y-[-50%]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]" />
      </div>
    </div>
  );
}

function Slider1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Slider">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex items-center justify-center p-[8px] relative w-full">
          <InactiveTrack1 />
          <ProgressIndicator1 />
        </div>
      </div>
    </div>
  );
}

function InputText2() {
  return (
    <div className="box-border content-stretch flex items-center pb-0 pt-[2px] px-0 relative shrink-0" data-name="input-text">
      <div className="flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#343a40] text-[12px] text-nowrap tracking-[-0.24px]">
        <p className="leading-[16px] whitespace-pre">50 тис</p>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-[28px] items-center justify-center min-h-px min-w-px relative shrink-0" data-name="content">
      <InputText2 />
    </div>
  );
}

function StateLayer2() {
  return (
    <div className="relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center px-[12px] py-0 relative w-full">
          <Content2 />
        </div>
      </div>
    </div>
  );
}

function TextField4() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center relative rounded-[999px] shrink-0 w-[56px]" data-name="text field">
      <div aria-hidden="true" className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <StateLayer2 />
    </div>
  );
}

function TextField5() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-tl-[4px] rounded-tr-[4px] shrink-0" data-name="text-field">
      <TextField4 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0">
      <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[12px] min-w-full not-italic relative shrink-0 text-[#49454f] text-[10px] text-center tracking-[-0.2px] w-[min-content]">Від</p>
      <TextField5 />
    </div>
  );
}

function InputText3() {
  return (
    <div className="box-border content-stretch flex items-center pb-0 pt-[2px] px-0 relative shrink-0" data-name="input-text">
      <div className="flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#343a40] text-[12px] text-nowrap tracking-[-0.24px]">
        <p className="leading-[16px] whitespace-pre">5 млн</p>
      </div>
    </div>
  );
}

function Content3() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-[28px] items-center justify-center min-h-px min-w-px relative shrink-0" data-name="content">
      <InputText3 />
    </div>
  );
}

function StateLayer3() {
  return (
    <div className="relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center px-[12px] py-0 relative w-full">
          <Content3 />
        </div>
      </div>
    </div>
  );
}

function TextField6() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center relative rounded-[999px] shrink-0 w-[56px]" data-name="text field">
      <div aria-hidden="true" className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <StateLayer3 />
    </div>
  );
}

function TextField7() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-tl-[4px] rounded-tr-[4px] shrink-0" data-name="text-field">
      <TextField6 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0">
      <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[12px] min-w-full not-italic relative shrink-0 text-[#49454f] text-[10px] text-center tracking-[-0.2px] w-[min-content]">До</p>
      <TextField7 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame25 />
      <Frame26 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Slider1 />
      <Frame1 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame8 />
      <Frame9 />
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

function Frame10() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <Remove2 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] items-center p-[4px] relative rounded-[999px] shrink-0">
      <Frame10 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['VinnytsiaSerif:Book',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#343a40] text-[18px] text-nowrap text-right whitespace-pre">Район</p>
      <Frame11 />
    </div>
  );
}

function InputText4() {
  return (
    <div className="box-border content-stretch flex items-center pb-0 pt-[2px] px-0 relative shrink-0" data-name="input-text">
      <div className="flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] justify-center leading-[0] not-italic opacity-50 relative shrink-0 text-[#343a40] text-[16px] text-nowrap tracking-[-0.32px]">
        <p className="leading-[16px] whitespace-pre">Пошук району</p>
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

function StateLayer4() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <IconsSearch24Px />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer4 />
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

function TextField8() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative rounded-[999px] shrink-0 w-full" data-name="text field">
      <div aria-hidden="true" className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <Content4 />
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

function Frame28() {
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
      <Frame12 />
      <TextField8 />
      <Frame28 />
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

function Frame13() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <Remove3 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] items-center p-[4px] relative rounded-[999px] shrink-0">
      <Frame13 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['VinnytsiaSerif:Book',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#343a40] text-[18px] text-nowrap text-right whitespace-pre">Напрямок</p>
      <Frame14 />
    </div>
  );
}

function InputText5() {
  return (
    <div className="box-border content-stretch flex items-center pb-0 pt-[2px] px-0 relative shrink-0" data-name="input-text">
      <div className="flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] justify-center leading-[0] not-italic opacity-50 relative shrink-0 text-[#343a40] text-[16px] text-nowrap tracking-[-0.32px]">
        <p className="leading-[16px] whitespace-pre">Пошук напрямку</p>
      </div>
    </div>
  );
}

function Content5() {
  return (
    <div className="box-border content-stretch flex flex-col h-[40px] items-start justify-center px-[16px] py-0 relative shrink-0 w-[208px]" data-name="content">
      <InputText5 />
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

function StateLayer5() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <IconsSearch24Px1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer5 />
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

function TextField9() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative rounded-[999px] shrink-0 w-full" data-name="text field">
      <div aria-hidden="true" className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <Content5 />
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

function Frame27() {
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
      <Frame15 />
      <TextField9 />
      <Frame27 />
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

function Remove4() {
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

function Frame16() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <Remove4 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] items-center p-[4px] relative rounded-[999px] shrink-0">
      <Frame16 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['VinnytsiaSerif:Book',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#343a40] text-[18px] text-nowrap text-right whitespace-pre">Програми</p>
      <Frame17 />
    </div>
  );
}

function InputText6() {
  return (
    <div className="box-border content-stretch flex items-center pb-0 pt-[2px] px-0 relative shrink-0" data-name="input-text">
      <div className="flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] justify-center leading-[0] not-italic opacity-50 relative shrink-0 text-[#343a40] text-[16px] text-nowrap tracking-[-0.32px]">
        <p className="leading-[16px] whitespace-pre">Пошук програми</p>
      </div>
    </div>
  );
}

function Content6() {
  return (
    <div className="box-border content-stretch flex flex-col h-[40px] items-start justify-center px-[16px] py-0 relative shrink-0 w-[208px]" data-name="content">
      <InputText6 />
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

function StateLayer6() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <IconsSearch24Px2 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer6 />
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

function TextField10() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative rounded-[999px] shrink-0 w-full" data-name="text field">
      <div aria-hidden="true" className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <Content6 />
      <LeadingIcon2 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[20px] shrink-0 w-full">
      <TextField10 />
    </div>
  );
}

function RadioButtons2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Radio buttons">
      <Frame18 />
      <Frame19 />
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

export default function FilterBudgetAllOpen() {
  return (
    <div className="bg-[#f7f7f7] relative rounded-[16px] size-full" data-name="Filter – Budget – All open">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start px-[24px] py-[32px] relative size-full">
          <Frame22 />
          <Frame23 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 264 1">
                <path d="M0 0.5H264" id="Vector 2" stroke="var(--stroke-0, #343A40)" strokeOpacity="0.2" />
              </svg>
            </div>
          </div>
          <Frame24 />
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
      </div>
    </div>
  );
}