"use client";

import { ActionDropdown, Card, TextField } from "@/uikit/ui";
import PrimaryButton from "@/uikit/ui/basic/PrimaryButton";
import TextFieldDate from "@/uikit/ui/basic/TextFieldDate";
import LeadSource from "./LeadSource";
import Workflow from "./Workflow";

const nationalityOptions = [{id:1, label:"active"}, {id:2, label:"inactive"}];
const visibilityOptions = [{id:1, label:"visible"}, {id:2, label:"hidden"}];

const RightSide = () => {
  return (
    <div>
      {/* publish */}
      <Card>
        <Card.Header title="Publish">
            <PrimaryButton
              text="Publish"
              bgColor="bg-blue-500"
              onClick={() => {}}
              className="px-8 rounded-lg"
            />
        </Card.Header> 
        <Card.Body>
          <div className="my-4 mx-2">
            <div className="md: flex">
              <PrimaryButton
                className="mr-2"
                text="Save Draft"
                bgColor="bg-white"
                outlineWidth="outline-1"
                borderColor="border-blue-500"
                textColor="text-blue-500"
                onClick={() => {}}
              />
              <PrimaryButton
                text="Cancel"
                bgColor="bg-red-500"
                onClick={() => {}}
              />
            </div>
            {/* date */}
            <div className="my-2">
              {/* <h4 className="mb-2 font-semibold text-gray-600 text-sm">Date</h4> */}
              <TextFieldDate label="Select Date" onChange={() => {}} />
            </div>
            <div className="my-2">
              <TextField
                label="Publish By"
                placeholder="Shishir"
                onChange={() => {}}
                value={""}
              />
            </div>
            {/* status */}
            <div className="my-2">
              <h4 className="mb-2 font-semibold text-gray-600 text-sm">Status</h4>
              <ActionDropdown
                options={nationalityOptions}
              />
            </div>
            <div className="my-2">
              <h4 className="mb-2 font-semibold text-gray-600 text-sm">
                Visibility
              </h4>
              <ActionDropdown
                options={visibilityOptions}
              />
            </div>
          </div>
        </Card.Body>
      </Card>

      {/* assign */}
      <LeadSource />

      {/* workflow */}
      <Workflow />
    </div>
  );
};

export default RightSide;
