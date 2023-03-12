import { AiOutlineSearch } from "react-icons/ai";
import { Label } from "../shared/font/Fonts";
import styles from "./inputs.module.scss";

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  label?: string;
  name?: string;
  placeholder?: string;
}

const SearchInput: React.FC<InputProps> = ({
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
          <AiOutlineSearch />
        </div>
        <input
          className={styles.search}
          id={name}
          name={name}
          placeholder={placeholder}
          {...rest}
        />
      </div>
    </div>
  );
};

export default SearchInput;
