import { useNavigate } from "react-router";

const Button = ({ 
  color = 'bg-red-500',
  hoverColor = 'hover:bg-red-600', 
  text,
  link,
}) => {
  const navigate = useNavigate();
  
  const baseClasses = `
    px-4 py-2 rounded-2xl font-medium 
    transition-all duration-150 shadow-md
    hover:-translate-y-1 active:translate-y-1
    cursor-pointer text-white
    ${color} ${hoverColor}
  `;

  return (
    <button
      onClick={() => navigate(link)}
      className={baseClasses}
    >
      {text}
    </button>
  );
};

export default Button;