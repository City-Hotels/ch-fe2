import { FaChevronDown } from "react-icons/fa";
import { Label } from "../shared/font headers/Fonts";
import styles from "./inputs.module.scss";

interface SelectProps extends React.HTMLProps<HTMLSelectElement> {
  label?: string;
  name?: string;
  placeholder?: string;
}

const SelectInput: React.FC<SelectProps> = ({
  label,
  name,
  placeholder,
  ...rest
}) => {
  return (
    <div>
      <Label htmlFor={name} className="py-3">
        {label}
      </Label>
      <div className={styles.select__wrapper}>
        <select
          className={styles.select}
          id={name}
          name={name}
          placeholder={placeholder}
          {...rest}
        ></select>
        <div className={styles.select__caret}>
          <FaChevronDown className="w-4" />
        </div>
      </div>
    </div>
  );
};

export default SelectInput;
