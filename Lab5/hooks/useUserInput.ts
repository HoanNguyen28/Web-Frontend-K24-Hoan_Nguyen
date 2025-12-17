import { useState } from "react";

export function useUserInput(initialValue = "") {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const showAlert = () => {
    if (!value.trim()) {
      alert("Vui lòng nhập nội dung!");
      return;
    }
    alert(`Giá trị hiện tại: ${value}`);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      showAlert();
    }
  };

  return {
    value,
    handleChange,
    handleKeyDown,
    showAlert,
  };
}
