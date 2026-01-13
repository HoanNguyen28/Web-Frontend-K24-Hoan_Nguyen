import { ChevronDown } from "lucide-react";

interface LanguageSelectorProps {
  label: string;          
  flagSrc: string;         
  onClick?: () => void;    
}

export const LanguageSelector = ({
  label,
  flagSrc,
  onClick,
}: LanguageSelectorProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center gap-2 px-2 py-1 rounded hover:bg-gray-100"
    >
      <img
        src={flagSrc}
        alt={label}
        className="w-5 h-5 rounded-sm"
      />

      <span className="text-sm font-medium">{label}</span>

      <ChevronDown size={16} className="opacity-70" />
    </button>
  );
};
