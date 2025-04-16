"use client";

import { ActionDropdown, Card, TextField } from "@/uikit/ui";

const leadTypeOptions = [{id:1, label:"active"}, {id:2, label:"inactive"}, {id:3, label:"Pending"}];
const nationalityOptions = [{id:1, label:"active"}, {id:2, label:"inactive"}];
const visibilityOptions = [{id:1, label:"visible"}, {id:2, label:"hidden"}];

const LeadSource = () => {

  return (
    <div className="mt-4">
      <Card>
        <Card.Header title="Lead Source" />
        <Card.Body>
          <div className="my-4 mx-2">
            {/* lead type */}
            <div className="my-2">
              <h4 className="mb-2 font-semibold text-gray-600 text-sm">
                Lead Type
              </h4>
             <ActionDropdown
                options={leadTypeOptions}
              /> 
            </div>
            {/* source */}
            <div className="my-2">
              <h4 className="mb-2 font-semibold text-gray-600 text-sm">Source</h4>
               <ActionDropdown
                options={nationalityOptions}
              /> 
            </div>
            {/* agent */}
            <div className="my-2">
              <h4 className="mb-2 font-semibold text-gray-600 text-sm">Agent</h4>
              <ActionDropdown
                options={visibilityOptions}
              /> 
            </div>

            {/* counselor */}
            <div className="my-2">
              <TextField
                label="Counselor"
                placeholder="Shojon Ahmed"
                onChange={() => {}}
                value={""}
              />
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default LeadSource;
