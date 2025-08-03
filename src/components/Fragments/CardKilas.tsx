import { ReactNode } from "react";

export default function CardKilas(props: {title: string, children: ReactNode}) {
  const { title, children } = props;

  return (
    <div className="w-full md:w-[13%] bg-white flex flex-col justify-center items-center h-[100px] rounded-lg shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
      <div className="w-[45px]">{children}</div>
      <h3 className="mb-2 text-lg font-semibold">{title}</h3>
    </div>
  );
}
