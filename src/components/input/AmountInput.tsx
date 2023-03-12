import { FaChevronDown } from "react-icons/fa";
import { Label } from "../shared/font headers/Fonts";
import styles from "./inputs.module.scss";

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  label?: string;
  name?: string;
  placeholder?: string;
}

const AmountInput: React.FC<InputProps> = ({
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
      <div className={styles.input_wrapper}>
        <div className={styles.input_prepend}>
          $
        </div>
        <input
          className={styles.inputs_no_border}
          id={name}
          name={name}
          placeholder={placeholder}
          {...rest}
        />
      </div>
    </div>
  );
};

export default AmountInput;
