import AmountInput from "@/components/input/AmountInput";
import Checkbox from "@/components/input/checkbox";

import Dropdown from "@/components/input/dropdown";

import InputText from "@/components/input/inputText";
import SearchInput from "@/components/input/SearchInput";
import SelectInput from "@/components/input/SelectInput";

import Main from "@/layout/main/Main";

export default function InputTest() {
  const handleOptionSelect = (selectedOption: string) => {
    console.log(`Selected option: ${selectedOption}`);
  };

  const handleCheckboxChange = (value: string) => {
    console.log(`Checkbox value: ${value}`);
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
          <Checkbox
            label="Hotel"
            value="Hotel"
            onChange={handleCheckboxChange}
          />
          <Checkbox label="City" value="City" onChange={handleCheckboxChange} />
          <Checkbox
            label="Motel"
            value="Motel"
            onChange={handleCheckboxChange}
          />
        </div>
        <div className="py-4">
          <Dropdown
            options={["Option 1", "Option 2", "Option 3"]}
            onSelect={handleOptionSelect}
          />
        </div>
        <div className="py-4">
          <SelectInput
          // options={["Option 1", "Option 2", "Option 3"]}
          // onSelect={handleOptionSelect}
          >
            <option>Option 1</option>
            <option>Option 2</option>
          </SelectInput>
        </div>
        <div className="py-4">
          <AmountInput
            placeholder="min."
          // options={["Option 1", "Option 2", "Option 3"]}
          // onSelect={handleOptionSelect}
          />
        </div>
        <div className="py-4">
          <SearchInput
            placeholder="Search"
          // options={["Option 1", "Option 2", "Option 3"]}
          // onSelect={handleOptionSelect}
          />
        </div>
      </Main>
    </div>
  );
}