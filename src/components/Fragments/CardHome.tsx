export default function CardHome(props: any) {
  const { title, desc, children, classname } = props;

  return (
    <div className={`flex w-full ${classname} pb-10`}>
      {children}
      <div className="">
        <h3 className="mb-2 text-lg font-semibold">{title}</h3>
        <p className="text-base text-[#cac5c5]">
          {desc}
        </p>
      </div>
    </div>
  );
}
