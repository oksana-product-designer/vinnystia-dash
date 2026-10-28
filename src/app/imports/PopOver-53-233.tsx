export default function PopOver() {
  return (
    <div className="bg-[rgba(0,0,0,0.7)] relative rounded-[4px] shadow-[0px_2px_3px_0px_rgba(0,0,0,0.15)] size-full" data-name="pop-over">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center justify-center p-[8px] relative size-full">
          <p className="font-['VinnytsiaSansReg:Book',sans-serif] leading-[16px] not-italic relative shrink-0 text-[10px] text-center text-nowrap text-white whitespace-pre">Переглядів сайту за весь час</p>
          <div className="absolute flex h-[6px] items-center justify-center left-[calc(50%+0.5px)] top-[-6px] translate-x-[-50%] w-[12px]">
            <div className="flex-none scale-y-[-100%]">
              <div className="h-[6px] relative w-[12px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 6">
                  <path d="M6 6L0 0H12L6 6Z" fill="var(--fill-0, black)" fillOpacity="0.7" id="Vector 3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}