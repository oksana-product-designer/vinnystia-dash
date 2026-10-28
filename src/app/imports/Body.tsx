import svgPaths from "./svg-2d2kwgypk7";

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

function Tab() {
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

function Tab1() {
  return (
    <div className="bg-[#c95555] box-border content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[999px] shrink-0" data-name="tab">
      <ChartIcon />
    </div>
  );
}

function Tabs() {
  return (
    <div className="bg-white content-stretch flex items-center relative rounded-[999px] shrink-0" data-name="tabs">
      <div aria-hidden="true" className="absolute border border-[rgba(52,58,64,0.2)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <Tab />
      <Tab1 />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex gap-[16px] items-end justify-center relative shrink-0 w-full" data-name="header">
      <TextAndSupportingText />
      <Tabs />
    </div>
  );
}

function YAxisLabel() {
  return (
    <div className="box-border content-stretch flex flex-col h-full items-start justify-center pb-[24px] pt-0 px-0 relative shrink-0" data-name="_Y-axis label">
      <div className="flex h-[173px] items-center justify-center relative shrink-0 w-[18px]" style={{ "--transform-inner-width": "161.734375", "--transform-inner-height": "18" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[18px] not-italic relative text-[#3c4d5d] text-[12px] text-center text-nowrap whitespace-pre">Масштаб бюджету у млн грн</p>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="box-border content-stretch flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] h-full items-end leading-[0] not-italic pl-0 pr-[4px] py-0 relative shrink-0 text-[#3c4d5d] text-[12px] text-right">
      <div className="basis-0 flex flex-col grow justify-center min-h-px min-w-px relative shrink-0 w-[40px]">
        <p className="leading-[18px]">100</p>
      </div>
      <div className="basis-0 flex flex-col grow justify-center min-h-px min-w-px relative shrink-0 w-[40px]">
        <p className="leading-[18px]">90</p>
      </div>
      <div className="basis-0 flex flex-col grow justify-center min-h-px min-w-px relative shrink-0 w-[40px]">
        <p className="leading-[18px]">80</p>
      </div>
      <div className="basis-0 flex flex-col grow justify-center min-h-px min-w-px relative shrink-0 w-[40px]">
        <p className="leading-[18px]">70</p>
      </div>
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
    <div className="h-[46.522px] relative w-full" data-name="Divider">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 870 47">
        <g id="Divider">
          <line id="Divider_2" stroke="var(--stroke-0, #343A40)" strokeLinecap="round" strokeOpacity="0.1" x1="0.5" x2="869.5" y1="22.7608" y2="22.7608" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-start justify-end relative size-full">
      <div className="basis-0 flex grow h-[870px] items-center justify-center min-h-px min-w-px relative shrink-0" style={{ "--transform-inner-width": "108.59375", "--transform-inner-height": "46.515625" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg] w-full">
          {[...Array(10).keys()].map((_, i) => (
            <Divider key={i} />
          ))}
        </div>
      </div>
      <div className="basis-0 flex grow h-[870px] items-center justify-center min-h-px min-w-px relative shrink-0" style={{ "--transform-inner-width": "108.59375", "--transform-inner-height": "46.515625" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg] w-full" />
      </div>
      <div className="basis-0 flex grow h-[870px] items-center justify-center min-h-px min-w-px relative shrink-0" style={{ "--transform-inner-width": "108.59375", "--transform-inner-height": "46.515625" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg] w-full" />
      </div>
      <div className="basis-0 flex grow h-[870px] items-center justify-center min-h-px min-w-px relative shrink-0" style={{ "--transform-inner-width": "108.59375", "--transform-inner-height": "46.515625" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg] w-full" />
      </div>
      <div className="basis-0 flex grow h-[870px] items-center justify-center min-h-px min-w-px relative shrink-0" style={{ "--transform-inner-width": "108.59375", "--transform-inner-height": "46.515625" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg] w-full" />
      </div>
      <div className="basis-0 flex grow h-[870px] items-center justify-center min-h-px min-w-px relative shrink-0" style={{ "--transform-inner-width": "108.59375", "--transform-inner-height": "46.515625" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg] w-full" />
      </div>
      <div className="basis-0 flex grow h-[870px] items-center justify-center min-h-px min-w-px relative shrink-0" style={{ "--transform-inner-width": "108.59375", "--transform-inner-height": "46.515625" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg] w-full" />
      </div>
      <div className="basis-0 flex grow h-[870px] items-center justify-center min-h-px min-w-px relative shrink-0" style={{ "--transform-inner-width": "108.59375", "--transform-inner-height": "46.515625" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg] w-full" />
      </div>
      <div className="basis-0 flex grow h-[870px] items-center justify-center min-h-px min-w-px relative shrink-0" style={{ "--transform-inner-width": "108.59375", "--transform-inner-height": "46.515625" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg] w-full" />
      </div>
      <div className="basis-0 flex grow h-[870px] items-center justify-center min-h-px min-w-px relative shrink-0" style={{ "--transform-inner-width": "108.59375", "--transform-inner-height": "46.515625" } as React.CSSProperties}>
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
          <path d={svgPaths.p234ab980} fill="var(--fill-0, #C95555)" id="Series 3" opacity="0.3" />
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
            <path d={svgPaths.p2ea85e00} fill="var(--fill-0, #C95555)" id="Series 3" opacity="0.3" />
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
      <div className="absolute bottom-0 left-0 top-[25.56%] w-[32px]" data-name="Series 3">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 271">
          <path d={svgPaths.pa918700} fill="var(--fill-0, #C95555)" id="Series 3" opacity="0.3" />
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
    <div className="absolute bottom-0 left-[0.18px] right-[-0.18px] top-[40px]" data-name="Chart bar">
      <div className="absolute bottom-0 left-0 top-[25.56%] w-[32px]" data-name="Series 3">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 271">
          <path d={svgPaths.pa918700} fill="var(--fill-0, #C95555)" id="Series 3" />
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
      <div className="absolute bottom-0 left-0 top-[43.99%] w-[32px]" data-name="Series 3">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 218">
          <path d={svgPaths.p241e9100} fill="var(--fill-0, #C95555)" id="Series 3" opacity="0.3" />
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
    <div className="absolute bottom-0 left-0 right-0 top-[48px]" data-name="Chart bar">
      <div className="absolute bottom-0 left-0 top-[65.39%] w-[32px]" data-name="Series 3">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 124">
          <path d={svgPaths.p1038f80} fill="var(--fill-0, #C95555)" id="Series 3" opacity="0.3" />
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
    <div className="absolute bottom-0 left-0 right-0 top-[80px]" data-name="Chart bar">
      <div className="absolute bottom-0 left-0 top-[70.72%] w-[32px]" data-name="Series 3">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 95">
          <path d={svgPaths.p12456700} fill="var(--fill-0, #C95555)" id="Series 3" opacity="0.3" />
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
    <div className="absolute bottom-0 left-0 right-0 top-[80px]" data-name="Chart bar">
      <div className="absolute bottom-0 left-0 top-[86%] w-[32px]" data-name="Series 3">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 46">
          <path d={svgPaths.p279ca580} fill="var(--fill-0, #C95555)" id="Series 3" opacity="0.3" />
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

function Chart() {
  return (
    <div className="basis-0 content-stretch flex grow h-full items-end justify-between min-h-px min-w-px overflow-clip relative shrink-0" data-name="Chart">
      <Bar />
      <Bar1 />
      <Bar2 />
      <Bar3 />
      {[...Array(2).keys()].map((_, i) => (
        <Bar4 key={i} />
      ))}
      {[...Array(2).keys()].map((_, i) => (
        <Bar5 key={i} />
      ))}
      {[...Array(2).keys()].map((_, i) => (
        <Bar6 key={i} />
      ))}
      {[...Array(2).keys()].map((_, i) => (
        <Bar7 key={i} />
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

function PopOver() {
  return (
    <div className="bg-[rgba(0,0,0,0.7)] box-border content-stretch flex flex-col gap-[6px] items-start justify-center p-[8px] relative rounded-[4px] shadow-[0px_2px_3px_0px_rgba(0,0,0,0.15)]" data-name="pop-over">
      <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[16px] not-italic relative shrink-0 text-[10px] text-nowrap text-white whitespace-pre">{`69 млн грн `}</p>
      <div className="absolute bottom-[-6px] h-[6px] left-[calc(50%+0.5px)] translate-x-[-50%] w-[12px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 6">
          <path d="M6 6L0 0H12L6 6Z" fill="var(--fill-0, black)" fillOpacity="0.7" id="Vector 3" />
        </svg>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[838px] items-start justify-end relative w-[404px]">
      <div className="basis-0 flex grow items-center justify-center min-h-px min-w-px relative shrink-0 w-full" style={{ "--transform-inner-width": "404", "--transform-inner-height": "838" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg] size-full">
          <ChartData />
        </div>
      </div>
      <div className="absolute flex h-[71px] items-center justify-center left-[calc(50%+91.5px)] top-[calc(50%-182.5px)] translate-x-[-50%] translate-y-[-50%] w-[23px]" style={{ "--transform-inner-width": "68.578125", "--transform-inner-height": "32" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <PopOver />
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="basis-0 content-stretch flex grow items-start justify-end min-h-px min-w-px relative shrink-0 w-full">
      <Frame2 />
      <div className="basis-0 flex grow h-full items-center justify-center min-h-px min-w-px relative shrink-0" style={{ "--transform-inner-width": "1086", "--transform-inner-height": "465.21875" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg] size-full">
          <Frame3 />
        </div>
      </div>
      <div className="absolute bottom-[21.22px] flex h-[404px] items-center justify-center left-[59px] w-[838px]" style={{ "--transform-inner-width": "404", "--transform-inner-height": "838" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <Frame5 />
        </div>
      </div>
    </div>
  );
}

function XAxis() {
  return (
    <div className="relative shrink-0 w-full" data-name="_X-axis">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between pl-[64px] pr-0 py-0 relative w-full">
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

function Content() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-end justify-end min-h-px min-w-px relative shrink-0" data-name="Content">
      <Frame4 />
      <XAxis1 />
      <XAxisLabel />
    </div>
  );
}

function Axis() {
  return (
    <div className="absolute content-stretch flex gap-[4px] inset-0 items-start" data-name="Axis">
      <YAxisLabel />
      <Content />
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

function Content1() {
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

export default function Body() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-start relative rounded-[12px] size-full" data-name="Body">
      <Header />
      <Content1 />
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