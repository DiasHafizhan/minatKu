import { ReactNode } from "react";

export default function CardHome(props: {title: string, desc: string, children: ReactNode}) {
  const { title, desc, children } = props;

  return (
    <div className="w-full md:w-[30%] bg-[#D1E2FA]/50 flex flex-col justify-center items-center px-10 h-[250px]">
      <div className="w-[45px] h-[45px] flex justify-between items-center bg-white mb-5 rounded-full">
        {children}
      </div>
      <div className="text-center">
        <h3 className="mb-2 text-lg font-semibold">{title}</h3>
        <p className="text-base text-black/60">{desc}</p>
      </div>
    </div>
  );
}
