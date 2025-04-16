"use client";
import { ActionDropdown, Card, Checkbox } from "@/uikit/ui";

const nationalityOptions = [{id:1, label:"active"}, {id:2, label:"inactive"} ];

const Workflow = () => {
  return (
    <div className="mt-4">
      <Card >
        <Card.Header title="Workflow" />
        <Card.Body>
        {/* source */}
        <div className="m-2">
          <h4 className="mb-2 font-semibold text-gray-600 text-sm">
            Workflow name
          </h4>
          <ActionDropdown
            options={nationalityOptions}
          />
        </div>
        {/* agent */}
        <div className="my-4 mx-2">
          <Checkbox
            label="Application Received"
            id="application-received"
            // onChange={(e) => console.log((e.target as HTMLInputElement)?.value)}
          />
        </div>
        <div className="my-4 mx-2">
          <Checkbox
            label="Application in process"
            id="application-in-process3"
          />
        </div>
        <div className="my-4 mx-2">
          <Checkbox
            label="Application in process"
            id="application-in-process"
          />
        </div>
        <div className="my-4 mx-2">
          <Checkbox
            label="Application in process"
            id="application-in-process2"
          />
        </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Workflow;
