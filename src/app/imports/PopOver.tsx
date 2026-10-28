function Frame() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[6px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, #FBCA81)" id="Ellipse 5361" r="3" />
        </svg>
      </div>
      <p className="basis-0 font-['VinnytsiaSansReg:Book',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[10px] text-white">Старе місто</p>
    </div>
  );
}

export default function PopOver() {
  return (
    <div className="bg-[rgba(0,0,0,0.7)] relative rounded-[4px] shadow-[0px_2px_3px_0px_rgba(0,0,0,0.15)] size-full" data-name="pop-over">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start justify-center p-[8px] relative size-full">
          <Frame />
          <p className="font-['VinnytsiaSansReg:Book',sans-serif] h-[8px] leading-[20px] not-italic relative shrink-0 text-[0px] text-[12px] text-white w-[96px]">
            <span className="font-['VinnytsiaSansBold:Bold',sans-serif]">27 млн грн</span>{" "}
          </p>
          <p className="font-['VinnytsiaSansBold:Bold',sans-serif] h-[8px] leading-[20px] not-italic relative shrink-0 text-[12px] text-white w-full">24 проєкти</p>
          <div className="absolute bottom-[-6px] h-[6px] left-1/2 translate-x-[-50%] w-[12px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 6">
              <path d="M6 6L0 0H12L6 6Z" fill="var(--fill-0, black)" fillOpacity="0.7" id="Vector 3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}