export default function TesLayout(props: any) {
  const { title, desc, subTitle, children } = props;
  return (
    <div className="flex flex-wrap mb-28">
      <div className="w-full md:w-[45%]">
        <p className="text-lg text-center md:text-left font-semibold mb-5">
          {subTitle}
        </p>
        <h2 className="text-4xl md:text-left font-semibold text-center md:max-w-[85%]">
          {title}
        </h2>
        <p className=" md:text-left max-w-[85%] md:max-w-[85%] mt-8">{desc}</p>
      </div>
      <div className="w-full mt-10 md:w-[55%] flex flex-wrap">{children}</div>
    </div>
  );
}
