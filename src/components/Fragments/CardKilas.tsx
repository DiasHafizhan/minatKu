import { GraduationCap } from "lucide-react";

export default function CardKilas(props: any) {
  const {title, desc, children} = props

  return (
    <div className="border border-white w-full md:w-[49%] p-5 rounded-xl text-white">
      {children}
      <h3 className="text-xl font-bold my-2">{title}</h3>
      <p className="">
        {desc}
      </p>
    </div>
  );
}
