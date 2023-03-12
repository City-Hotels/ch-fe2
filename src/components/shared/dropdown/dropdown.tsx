import React, { useState } from "react";
import styles from "./dropdown.module.scss";
import type DropdownProps from "./dropdown.props";

const Dropdown: React.FC<DropdownProps> = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
    onSelect(event.target.value);
  };

  return (
    <select
      className={styles.drop}
      value={selectedOption}
      onChange={handleOptionChange}
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};
export default Dropdown;