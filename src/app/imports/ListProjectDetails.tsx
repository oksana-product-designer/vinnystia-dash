import svgPaths from "./svg-cafpiizt81";
import imgFrame2131328737 from "figma:asset/8871ace244410338c7a5474b4214d3427ac4098e.png";

function LucideIconsChevronLeft() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="lucide icons/chevron-left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="lucide icons/chevron-left">
          <path d={svgPaths.p2e3b0b80} fill="var(--fill-0, white)" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function PaginationPrev() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.3)] left-[16px] rounded-[999px] size-[38px] top-1/2 translate-y-[-50%]" data-name="pagination-prev">
      <div className="box-border content-stretch flex items-center justify-center overflow-clip px-[13px] py-[7px] relative rounded-[inherit] size-[38px]">
        <LucideIconsChevronLeft />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[rgba(255,255,255,0.25)] border-solid inset-0 pointer-events-none rounded-[999px]" />
    </div>
  );
}

function LucideIconsChevronRight() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="lucide icons/chevron-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="lucide icons/chevron-right">
          <path d={svgPaths.p704a2f0} fill="var(--fill-0, white)" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function PaginationNext() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.3)] right-[16px] rounded-[999px] size-[38px] top-1/2 translate-y-[-50%]" data-name="pagination-next">
      <div className="box-border content-stretch flex flex-col items-center justify-center overflow-clip px-[13px] py-[7px] relative rounded-[inherit] size-[38px]">
        <LucideIconsChevronRight />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[rgba(255,255,255,0.25)] border-solid inset-0 pointer-events-none rounded-[999px]" />
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute h-[12px] left-1/2 top-[244px] translate-x-[-50%] w-[72px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72 12">
        <g id="Frame 2131328738">
          <g id="Ellipse 5364">
            <circle cx="6" cy="6" fill="var(--fill-0, #C95555)" r="6" />
            <circle cx="6" cy="6" r="5.5" stroke="var(--stroke-0, #343A40)" strokeOpacity="0.5" />
          </g>
          <g id="Ellipse 5365">
            <circle cx="26" cy="6" fill="var(--fill-0, white)" r="6" />
            <circle cx="26" cy="6" r="5.5" stroke="var(--stroke-0, #343A40)" strokeOpacity="0.5" />
          </g>
          <g id="Ellipse 5366">
            <circle cx="46" cy="6" fill="var(--fill-0, white)" r="6" />
            <circle cx="46" cy="6" r="5.5" stroke="var(--stroke-0, #343A40)" strokeOpacity="0.5" />
          </g>
          <g id="Ellipse 5367">
            <circle cx="66" cy="6" fill="var(--fill-0, white)" r="6" />
            <circle cx="66" cy="6" r="5.5" stroke="var(--stroke-0, #343A40)" strokeOpacity="0.5" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame9() {
  return (
    <div className="h-[272px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#d9d9d9] inset-0" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgFrame2131328737} />
      </div>
      <PaginationPrev />
      <PaginationNext />
      <Frame10 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] gap-[8px] items-start leading-[24px] not-italic relative shrink-0 text-[#343a40] text-[16px] w-full">
      <p className="opacity-70 relative shrink-0 w-full">Код проєкту:</p>
      <p className="relative shrink-0 w-full">9876543210</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] gap-[8px] items-start leading-[24px] not-italic relative shrink-0 text-[#343a40] text-[16px] w-full">
      <p className="opacity-70 relative shrink-0 w-full">Сфера діяльності:</p>
      <p className="relative shrink-0 w-full">Екологічні ініціативи та покращення міського середовища</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] gap-[8px] items-start leading-[24px] not-italic relative shrink-0 text-[#343a40] text-[16px] w-full">
      <p className="opacity-70 relative shrink-0 w-full">Програма:</p>
      <p className="relative shrink-0 w-full">Програма «Муніципальний університет перепідготовки та підвищення кваліфікації посадових осіб місцевого самоврядування Вінницької міської ради»</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] gap-[8px] items-start leading-[24px] not-italic relative shrink-0 text-[#343a40] text-[16px] w-full">
      <p className="opacity-70 relative shrink-0 w-full">Район:</p>
      <p className="relative shrink-0 w-full">Поділля</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] gap-[8px] items-start leading-[24px] not-italic relative shrink-0 text-[#343a40] text-[16px] w-full">
      <p className="opacity-70 relative shrink-0 w-full">Місцевість:</p>
      <p className="relative shrink-0 w-full">Квіткове містечко</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] gap-[8px] items-start leading-[24px] not-italic relative shrink-0 text-[#343a40] text-[16px] w-full">
      <p className="opacity-70 relative shrink-0 w-full">Рік:</p>
      <p className="relative shrink-0 w-full">2025</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col font-['VinnytsiaSansReg:Book',sans-serif] gap-[8px] items-start leading-[24px] not-italic relative shrink-0 text-[#343a40] text-[16px] w-full">
      <p className="opacity-70 relative shrink-0 w-full">Фінансування, грн:</p>
      <p className="relative shrink-0 w-full">750000</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">
          <p className="font-['VinnytsiaSansBold:Bold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#343a40] text-[32px] tracking-[-1.28px] w-full">{`Ботанічний сад "Зелена Оаза"`}</p>
          <Frame3 />
          <Frame />
          <Frame4 />
          <Frame5 />
          <Frame1 />
          <Frame6 />
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col items-start left-1/2 overflow-clip rounded-[24px] shadow-[0px_12px_32px_8px_rgba(0,0,0,0.2)] top-[calc(50%+4px)] translate-x-[-50%] translate-y-[-50%] w-[644px]">
      <Frame9 />
      <Frame7 />
    </div>
  );
}

function Close() {
  return (
    <div className="absolute right-[284px] size-[40px] top-[64px]" data-name="close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g>
          <mask height="40" id="mask0_16_127" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="40" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="40" id="Bounding box" width="40" />
          </mask>
          <g mask="url(#mask0_16_127)">
            <path d={svgPaths.p3c47f180} fill="var(--fill-0, white)" id="close_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default function ListProjectDetails() {
  return (
    <div className="bg-white relative size-full" data-name="List – Project Details">
      <div className="absolute bg-[rgba(0,0,0,0.6)] h-[1024px] left-0 top-0 w-[1440px]" />
      <Frame8 />
      <Close />
    </div>
  );
}