import AmountInput from "@/components/input/AmountInput";
import InputText from "@/components/input/inputText";
import SearchInput from "@/components/input/SearchInput";
import Checkbox from "@/components/shared/checkbox/Checkbox";
import Dropdown from "@/components/shared/dropdown/dropdown";
import SelectInput from "@/components/shared/dropdown/SelectInput";
import Main from "@/layout/main/Main";

export default function InputTest() {
  const handleOptionSelect = () => {
    console.log(`Selected option: `);
  };

  const handleCheckboxChange = () => {
    console.log(`Checkbox value:`);
  };
  return (
    <div>
      <Main>
        <InputText
          label="Username"
          name="username"
          placeholder="Enter Your Username"
        />
        <div className="py-5">
          <Checkbox label="Hotel" onChange={handleCheckboxChange} />
          <Checkbox label="City" onChange={handleCheckboxChange} />
          <Checkbox label="Motel" onChange={handleCheckboxChange} />
        </div>
        <div className="py-4">
          <Dropdown
            options={["Option 1", "Option 2", "Option 3"]}
            onSelect={handleOptionSelect}
          />
        </div>
        <div className="py-4">
          <SelectInput>
            <option>Option 1</option>
            <option>Option 2</option>
          </SelectInput>
        </div>
        <div className="py-4">
          <AmountInput placeholder="min." />
        </div>
        <div className="py-4">
          <SearchInput placeholder="Search" />
        </div>
      </Main>
    </div>
  );
}
