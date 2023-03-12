import Hero from "@/components/home/hero/Hero";
import Button from "@/components/shared/button/Button";
import CheckboxList from "@/components/shared/checkbox/CheckboxList";
import Dropdown from "@/components/shared/dropdown/dropdown";
import InputText from "@/components/shared/input/TextInput";
import Meta from "@/components/shared/meta/Meta";
import Main from "@/layout/main/Main";
import { useState } from "react";
import { FaFacebookF } from "react-icons/fa";

export default function Home() {
  const handleDropdownSelect = () => {
    console.log("hell");
  };

  const [checkboxSelectedOptions, setCheckboxSelectedOptions] = useState<{
    [key: string]: boolean;
  }>({
    Hotel: false,
    City: false,
    Motel: false
  });
  const handleCheckboxListChange = (selectedOptions: {
    [key: string]: boolean;
  }) => {
    setCheckboxSelectedOptions(selectedOptions);
  };

  const options = [
    { label: "Hotel", value: "Hotel" },
    { label: "City", value: "City" },
    { label: "Motel", value: "Motel" }
  ];
  return (
    <>
      <Meta
        title="Welcome to City Hotels"
        description="Home page of City Hotels, Nigeria"
      />

      <Main>
        <div className="absolute top-1/2 left-1/2 w-max -translate-x-1/2 -translate-y-1/2">
          <Hero />
          <div className="my-4 flex gap-x-2.5">
            <Button size="lg" color="neutral">
              Explore
            </Button>

            <Button size="subscribe" color="primary">
              Explore
            </Button>

            <Button size="lg" color="danger">
              Explore
            </Button>

            <Button size="media" color="media">
              <FaFacebookF />
            </Button>
          </div>
          <InputText
            label="Username"
            name="username"
            placeholder="Enter Your Username"
          />
          <div className="py-5">
            <CheckboxList
              options={options}
              selectedOptions={checkboxSelectedOptions}
              onChange={handleCheckboxListChange}
            />
          </div>
          <div className="py-4">
            <Dropdown
              options={["Option 1", "Option 2", "Option 3"]}
              onSelect={handleDropdownSelect}
            />
          </div>
        </div>
      </Main>
    </>
  );
}
