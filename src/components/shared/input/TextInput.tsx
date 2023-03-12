import { Label } from "../font/Fonts";
import styles from "./input.module.scss";

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  label?: string;
  name?: string;
  placeholder?: string;
}

const TextInput: React.FC<InputProps> = ({
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
      <input
        className={styles.inputs}
        type="text"
        id={name}
        name={name}
        placeholder={placeholder}
        {...rest}
      />
    </div>
  );
};

export default TextInput;
