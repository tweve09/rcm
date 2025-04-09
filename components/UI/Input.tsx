interface InputProps {
  type: "text" | "email" | "password" | "number" | "search";
  name: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
function Input({ type, name, placeholder, value, onChange }: InputProps) {
  return (
    <div className="mb-8">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="bg-customBackground w-full max-w-md outline-none placeholder:text-gray-400 placeholder:text-2xl py-3 px-4 border-gray-400 border-2 rounded-md hover:border-gray-500 transition-all duration-200 ease-in-out focus:border-secondBackground focus:ring-2 focus:ring-green-200 focus:ring-opacity-50"
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
}

export default Input;
