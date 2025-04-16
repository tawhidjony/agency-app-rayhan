"use client";
import { ActionDropdown, Card, TextField } from "@/uikit/ui";
import PrimaryButton from "@/uikit/ui/basic/PrimaryButton";
const countryOptions = [
 {id:1, label: "Bangladesh"},
 {id:2, label: "Pakistan"},
 {id:3, label: "USA"},
 {id:4, label: "UK"},
 {id:5, label: "Australia"}
];

const EmergencyContact = () => {

  return (
    <div className="mt-4">
      <Card>
        <Card.Header  title="Emergency contact" />
        <Card.Body>
        <div className="p-2 mt-2">
          {/* fullname / relationship / occupation */}
          <div className="md:flex gap-4">
            <div className="md:w-1/3 mt-3">
              <TextField
                label="Full name"
                placeholder="Full name"
                onChange={() => {}}
                value=""
              />
            </div>
            <div className="md:w-1/3 mt-3">
              <TextField
                label="Relationship"
                placeholder="Relationship"
                onChange={() => {}}
                value=""
              />
            </div>
            <div className="md:w-1/3 mt-3">
              <TextField
                label="Occupation"
                placeholder="Occupation"
                onChange={() => {}}
                value=""
              />
            </div>
          </div>

          {/* state / town / country */}
          <div className="md:flex items-center gap-4">
            <div className="md:w-1/3 mt-3">
              <TextField
                label="State"
                placeholder="State"
                onChange={() => {}}
                value=""
              />
            </div>

            <div className="md:w-1/3 mt-3">
              <TextField
                label="Town"
                placeholder="Town"
                onChange={() => {}}
                value=""
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

          {/* zip / address */}
          <div className="md:flex items-center gap-4">
            <div className="md:w-1/3 mt-3">
              <TextField
                label="Zip/Postcode"
                placeholder="Zip/Postcode"
                onChange={() => {}}
                value=""
              />
            </div>

            <div className="md:w-2/3 mt-3">
              <TextField
                label="Address"
                placeholder="Address"
                onChange={() => {}}
                value=""
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
        </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default EmergencyContact;
