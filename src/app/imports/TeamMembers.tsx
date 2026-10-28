function HeaderCell() {
  return (
    <div className="bg-[#f7f7f7] box-border content-stretch flex gap-[8px] items-center px-[12px] py-[16px] relative shrink-0 w-[104px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(10,10,10,0.1)] border-solid inset-0 pointer-events-none" />
      <p className="basis-0 font-['VinnytsiaSansBold:Bold',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#343a40] text-[12px] tracking-[-0.48px]">Код</p>
    </div>
  );
}

function HeaderCell1() {
  return (
    <div className="basis-0 bg-[#f7f7f7] grow min-h-px min-w-px relative shrink-0" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(10,10,10,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[12px] py-[16px] relative w-full">
          <p className="basis-0 font-['VinnytsiaSansBold:Bold',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#343a40] text-[12px] tracking-[-0.48px]">Назва</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell2() {
  return (
    <div className="bg-[#f7f7f7] box-border content-stretch flex gap-[8px] items-center px-[12px] py-[16px] relative shrink-0 w-[160px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(10,10,10,0.1)] border-solid inset-0 pointer-events-none" />
      <p className="basis-0 font-['VinnytsiaSansBold:Bold',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#343a40] text-[12px] tracking-[-0.48px]">Сфера діяльності</p>
    </div>
  );
}

function HeaderCell3() {
  return (
    <div className="basis-0 bg-[#f7f7f7] grow min-h-px min-w-px relative shrink-0" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(10,10,10,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[12px] py-[16px] relative w-full">
          <p className="basis-0 font-['VinnytsiaSansBold:Bold',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#343a40] text-[12px] tracking-[-0.48px]">Програма</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell4() {
  return (
    <div className="bg-[#f7f7f7] box-border content-stretch flex gap-[8px] items-center px-[12px] py-[16px] relative shrink-0 w-[112px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(10,10,10,0.1)] border-solid inset-0 pointer-events-none" />
      <p className="basis-0 font-['VinnytsiaSansBold:Bold',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#343a40] text-[12px] tracking-[-0.48px]">Місцевість</p>
    </div>
  );
}

function HeaderCell5() {
  return (
    <div className="bg-[#f7f7f7] box-border content-stretch flex gap-[8px] items-center px-[12px] py-[16px] relative shrink-0 w-[120px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(10,10,10,0.1)] border-solid inset-0 pointer-events-none" />
      <p className="basis-0 font-['VinnytsiaSansBold:Bold',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#343a40] text-[12px] text-right tracking-[-0.48px]">Фінансування</p>
    </div>
  );
}

function TableHeader() {
  return (
    <div className="relative shrink-0 w-full" data-name="Table Header">
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] w-full">
        <HeaderCell />
        <HeaderCell1 />
        <HeaderCell2 />
        <HeaderCell3 />
        <HeaderCell4 />
        <HeaderCell5 />
      </div>
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(52,58,64,0.1)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableCell() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] h-[64px] items-center px-[12px] py-[10px] relative shrink-0 w-[104px]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(10,10,10,0.1)] border-solid inset-0 pointer-events-none" />
      <p className="-webkit-box basis-0 font-['VinnytsiaSansReg:Book',sans-serif] grow leading-[12px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#5b5b5b] text-[12px] tracking-[-0.24px]">9876543210</p>
    </div>
  );
}

function TableCell1() {
  return (
    <div className="basis-0 bg-white grow h-[64px] min-h-px min-w-px relative shrink-0" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(10,10,10,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[64px] items-center px-[12px] py-[10px] relative w-full">
          <p className="-webkit-box basis-0 font-['VinnytsiaSansReg:Book',sans-serif] grow leading-[12px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#5b5b5b] text-[12px] tracking-[-0.24px]">{`Ботанічний сад "Зелена Оаза"`}</p>
        </div>
      </div>
    </div>
  );
}

function TableCell2() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] h-[64px] items-center px-[12px] py-[10px] relative shrink-0 w-[160px]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(10,10,10,0.1)] border-solid inset-0 pointer-events-none" />
      <p className="-webkit-box basis-0 font-['VinnytsiaSansReg:Book',sans-serif] grow leading-[12px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#5b5b5b] text-[12px] tracking-[-0.24px]">Екологічні ініціативи та покращення міського середовища</p>
    </div>
  );
}

function TableCell3() {
  return (
    <div className="basis-0 bg-white grow h-[64px] min-h-px min-w-px relative shrink-0" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(10,10,10,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[64px] items-center px-[12px] py-[10px] relative w-full">
          <p className="line-clamp-3 basis-0 font-['VinnytsiaSansReg:Book',sans-serif] grow leading-[12px] min-h-px min-w-px not-italic relative shrink-0 text-[#5b5b5b] text-[12px] tracking-[-0.24px]">Програма надання фінансової підтримки інститутам громадянського суспільства на реалізацію проектів на території Вінницької міської територіальної громади</p>
        </div>
      </div>
    </div>
  );
}

function TableCell4() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] h-[64px] items-center px-[12px] py-[10px] relative shrink-0 w-[112px]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(10,10,10,0.1)] border-solid inset-0 pointer-events-none" />
      <p className="-webkit-box basis-0 font-['VinnytsiaSansReg:Book',sans-serif] grow leading-[12px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#5b5b5b] text-[12px] tracking-[-0.24px]">Квіткове містечко</p>
    </div>
  );
}

function TableCell5() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] h-[64px] items-center px-[12px] py-[10px] relative shrink-0 w-[120px]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(10,10,10,0.1)] border-solid inset-0 pointer-events-none" />
      <p className="-webkit-box basis-0 font-['VinnytsiaSansReg:Book',sans-serif] grow leading-[12px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#5b5b5b] text-[12px] text-right tracking-[-0.24px]">750000 грн</p>
    </div>
  );
}

function TableRow() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <TableCell />
      <TableCell1 />
      <TableCell2 />
      <TableCell3 />
      <TableCell4 />
      <TableCell5 />
    </div>
  );
}

function TableCell6() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] h-[64px] items-center px-[12px] py-[10px] relative shrink-0 w-[104px]" data-name="Table Cell">
      <p className="-webkit-box basis-0 font-['VinnytsiaSansReg:Book',sans-serif] grow leading-[12px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#5b5b5b] text-[12px] tracking-[-0.24px]">9876543210</p>
    </div>
  );
}

function TableCell7() {
  return (
    <div className="basis-0 bg-white grow h-[64px] min-h-px min-w-px relative shrink-0" data-name="Table Cell">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[64px] items-center px-[12px] py-[10px] relative w-full">
          <p className="-webkit-box basis-0 font-['VinnytsiaSansReg:Book',sans-serif] grow leading-[12px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#5b5b5b] text-[12px] tracking-[-0.24px]">{`Ботанічний сад "Зелена Оаза"`}</p>
        </div>
      </div>
    </div>
  );
}

function TableCell8() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] h-[64px] items-center px-[12px] py-[10px] relative shrink-0 w-[160px]" data-name="Table Cell">
      <p className="-webkit-box basis-0 font-['VinnytsiaSansReg:Book',sans-serif] grow leading-[12px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#5b5b5b] text-[12px] tracking-[-0.24px]">Екологічні ініціативи та покращення міського середовища</p>
    </div>
  );
}

function TableCell9() {
  return (
    <div className="basis-0 bg-white grow h-[64px] min-h-px min-w-px relative shrink-0" data-name="Table Cell">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[64px] items-center px-[12px] py-[10px] relative w-full">
          <p className="line-clamp-3 basis-0 font-['VinnytsiaSansReg:Book',sans-serif] grow leading-[12px] min-h-px min-w-px not-italic relative shrink-0 text-[#5b5b5b] text-[12px] tracking-[-0.24px]">Програма надання фінансової підтримки інститутам громадянського суспільства на реалізацію проектів на території Вінницької міської територіальної громади</p>
        </div>
      </div>
    </div>
  );
}

function TableCell10() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] h-[64px] items-center px-[12px] py-[10px] relative shrink-0 w-[112px]" data-name="Table Cell">
      <p className="-webkit-box basis-0 font-['VinnytsiaSansReg:Book',sans-serif] grow leading-[12px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#5b5b5b] text-[12px] tracking-[-0.24px]">Квіткове містечко</p>
    </div>
  );
}

function TableCell11() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] h-[64px] items-center px-[12px] py-[10px] relative shrink-0 w-[120px]" data-name="Table Cell">
      <p className="-webkit-box basis-0 font-['VinnytsiaSansReg:Book',sans-serif] grow leading-[12px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#5b5b5b] text-[12px] text-right tracking-[-0.24px]">750000 грн</p>
    </div>
  );
}

function TableRow1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <TableCell6 />
      <TableCell7 />
      <TableCell8 />
      <TableCell9 />
      <TableCell10 />
      <TableCell11 />
    </div>
  );
}

function TableBody() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Table Body">
      {[...Array(11).keys()].map((_, i) => (
        <TableRow key={i} />
      ))}
      <TableRow1 />
    </div>
  );
}

export default function TeamMembers() {
  return (
    <div className="relative rounded-[16px] size-full" data-name="TeamMembers">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <TableHeader />
        <TableBody />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}