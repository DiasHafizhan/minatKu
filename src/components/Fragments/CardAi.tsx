export default function CardAi(props: {number: string, title: string, desc: string}) {
  const {number, title, desc} = props
  return (
    <div className="w-full md:w-1/4 mb-8">
      <div className="max-w-[40px] mx-auto">
        <h1 className="text-2xl md:text-4xl flex justify-center items-center font-bold text-white mb-4 md:mb-8 px-5 py-2 bg-[#1f5196] rounded-lg">
          {number}
        </h1>
      </div>
      <div className="text-center">
        <p className="text-xl font-semibold text-white mb-3">
          {title}
        </p>
        <p className="text-[#dadada] text-base">
          {desc}
        </p>
      </div>
    </div>
  );
}
