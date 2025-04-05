interface ButtonProps {
  type: "submit" | "button";
  onClick?: () => void;
  className?: string;
  title: string;
}

const Button = ({ type, onClick, className, title }: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`text-2xl border-none bg-secondBackground text-white hover:bg-[#06c3d4] p-3 transition rounded-md ${className}`}
    >
      {title}
    </button>
  );
};

export default Button;
