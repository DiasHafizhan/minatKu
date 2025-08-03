export default function Input(props: {type: string, name: string, placeholder: string}) {
  const {type, name, placeholder} = props
  return (
    <input
      type={type}
      name={name}
      id={name}
      placeholder={placeholder}
      className="px-3 py-4 border border-[#6c6d65] w-full rounded-xl mb-3"
    />
  );
}
