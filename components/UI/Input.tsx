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
        className="bg-customBackground w-[450px] outline-none placeholder:text-gray-400 placeholder:text-2xl p-3 border-gray-300 border-2 rounded-md focus:border-gray-400 focus:border-3"
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
}

export default Input;
