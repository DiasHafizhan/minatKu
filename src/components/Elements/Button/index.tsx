import { ReactNode } from "react";

export default function Button(props: {children: ReactNode}) {
  const { children } = props;

  return (
    <button className="py-3 text-lg font-semibold rounded-xl cursor-pointer w-full bg-[#181C14] transition duration-300 ease-in-out hover:bg-[#181C14] my-6">
      {children}
    </button>
  );
}
