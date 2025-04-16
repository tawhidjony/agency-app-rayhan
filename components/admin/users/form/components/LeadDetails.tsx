"use client";


import { ActionDropdown, Card, TextField } from "@/uikit/ui";
import PrimaryButton from "@/uikit/ui/basic/PrimaryButton";
import RadioButton from "@/uikit/ui/basic/RadioButton";
import { useState } from "react";

const nationalityOptions = [
  { id: 1, label: "Bangladeshi" },
  { id: 2, label: "India" },
  { id: 3, label: "USA" },
  { id: 4, label: "UK" },
  { id: 5, label: "Australia" },
];

const countryOptions = [
  { id: 1, label: "Bangladesh" },
  { id: 2, label: "Pakistan" },
  { id: 3, label: "USA" },
  { id: 4, label: "UK" },
  { id: 5, label: "Australia" },
];

const destinationsOptions = [
  { id: 1, label: "Malaysia" },
  { id: 2, label: "USA" },
  { id: 3, label: "UK" },
  { id: 4, label: "Australia" },
];

const preferredLevelOptions = [
  { id: 1, label: "Post Graduation" },
  { id: 2, label: "Bachelor" },
  { id: 3, label: "BBA" },
];

const LeadDetails = () => {
  const [selectedOption, setSelectedOption] = useState("option1");
  const handleRadioChange = (value: string) => {
    setSelectedOption(value);
  };

  return (
    <div className="mt-2">
      <Card>
        <Card.Header title="Lead Details" />
        <Card.Body>
          {/* form fields*/}
          <div className="md:flex gap-4">
            <div className="md:w-1/3 mt-3">
              <TextField
                label="Lead ID"
                placeholder="Lead ID"
                onChange={() => {}}
                value=""
              />
            </div>
            <div className="md:w-1/3 mt-3">
              <TextField
                label="First name"
                placeholder="First name"
                onChange={() => {}}
                value=""
              />
            </div>
            <div className="md:w-1/3 mt-3">
              <TextField
                label="Last name"
                placeholder="Last name"
                onChange={() => {}}
                value=""
              />
            </div>
          </div>

          {/* passport / nationality / country */}
          <div className="md:flex items-center gap-4">
            <div className="md:w-1/3 mt-3">
              <TextField
                label="NRIC/Passport no."
                placeholder="Passport no."
                onChange={() => {}}
                value=""
              />
            </div>

           <div className="md:w-1/3 mt-3">
              <h4 className="mb-2 font-semibold text-gray-600 text-sm">
                Nationality
              </h4>
              <ActionDropdown
                options={nationalityOptions}
              />
            </div>

            <div className="md:w-1/3 mt-3">
              <h4 className="mb-2 font-semibold text-gray-600 text-sm">
                Country
              </h4>
              <ActionDropdown
                options={countryOptions}
              />
            </div> 
          </div>

          {/* contact number / email / contact preference */}
          <div className="md:flex items-center gap-4">
            <div className="md:w-1/3 mt-3">
              <TextField
                label="Contact number"
                placeholder="Contact number"
                onChange={() => {}}
                value=""
              />
            </div>

            <div className="md:w-1/3 mt-3">
              <TextField
                label="Email"
                placeholder="Email"
                onChange={() => {}}
                value=""
              />
            </div>

            <div className="md:w-1/3 mt-3">
              <h4 className="mb-2 font-semibold text-gray-600 text-sm">
                Contact preference
              </h4>
              {/* button group */}
              <div className="md:flex gap-2">
                <div className="md:w-1/2 mb-2 md:mb-0">
                  <PrimaryButton
                    borderColor="outline-gray-500"
                    outlineWidth="outline-1"
                    bgColor=""
                    textColor="text-gray-500"
                    text="Email"
                    onClick={() => {}}
                  />
                </div>
                <div className="md:w-1/2">
                  <PrimaryButton
                    bgColor="bg-gray-500"
                    text="Phone"
                    onClick={() => {}}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* date of birth / nationality / place of birth */}
          <div className="md:flex items-center gap-4">
            <div className="md:w-1/3 mt-3">
              <h4 className="mb-2 font-semibold text-gray-600 text-sm">
                Study destination
              </h4>
              <ActionDropdown
                options={destinationsOptions}
              />
            </div>

            <div className="md:w-1/3 mt-3">
              <h4 className="mb-2 font-semibold text-gray-600 text-sm">
                Preferred level
              </h4>
              <ActionDropdown
                options={preferredLevelOptions}
              />
            </div> 

            <div className="md:w-1/3 mt-3">
              <h4 className="mb-2 font-semibold text-gray-600 text-sm">
                Gender
              </h4>
              <RadioButton
                name="radio-group"
                options={[
                  { label: "Male", value: "male" },
                  { label: "Female", value: "female" },
                ]}
                selectedValue={selectedOption}
                onChange={handleRadioChange}
              />
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default LeadDetails;
