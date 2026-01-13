import { ChevronDown } from "lucide-react";

interface CurrencySelectorProps {
  currentCurrency: string;
  onClick: () => void;
}

export const CurrencySelector = ({
  currentCurrency,
  onClick,
}: CurrencySelectorProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="currency-selector flex items-center gap-1"
    >
      <span>{currentCurrency}</span>
      <ChevronDown size={16} />
    </button>
  );
};
