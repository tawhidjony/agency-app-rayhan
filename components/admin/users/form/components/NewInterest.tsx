"use client";
import { Card } from "@/uikit/ui";
import Textarea from "@/uikit/ui/basic/Textarea";

const NewInterest = () => {
  return (
    <div className="mt-4">
      <Card>
        <Card.Header title="New Interest" />
        <Card.Body>
        <div>
          <h4 className="mb-2 font-semibold text-gray-600">Interest</h4>
          <Textarea
            value=""
            onChange={() => {}}
            placeholder="interest for applicant"
          />
        </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default NewInterest;
