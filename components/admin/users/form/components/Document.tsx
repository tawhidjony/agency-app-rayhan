"use client";
import { Card, Checkbox } from "@/uikit/ui";
import FileUpload from "@/uikit/ui/basic/FileUpload";

const Document = () => {
  return (
    <div className="mt-4">
      <Card>
        <Card.Header title="Document" />
        <Card.Body>
          <div className="mt-4 mx-2">
            <h4 className="mb-2 font-semibold text-gray-600">
              Upload Photo and Document
            </h4>
            <div className="my-3">
              <FileUpload onUpload={() => {}} />
            </div>
            <div>
              <Checkbox
                label="1 copy of ALL academic certificate & transcripts"
                id="academic-certificates"
                onChange={(e) => console.log((e.target as HTMLInputElement)?.value)}
              />
            </div>

            <div className="my-3">
              <h4 className="mb-2 font-semibold text-gray-600">
                Document checklist for International applicants
              </h4>
              <div className="my-3">
                <Checkbox
                  label="3 copies of passport (all pages in colour) with validity of 24 months (all nationality) or 30 months for Indonesian"
                  id="3copies-passport"
                />
              </div>
              <div className="my-3">
                <Checkbox
                  label="4 passport size photos (white background)"
                  id="4-passport-size-photos"
                />
              </div>
              <div className="my-3">
                <Checkbox
                  label="3 copies of ALL acamedic certificates & transcripts (English Translation & Original Language)"
                  id="3copies-academic-certificates"
                />
              </div>
              <div className="my-3">
                <Checkbox
                  label="Health Declaration Form"
                  id="health-declaration-form"
                />
              </div>
              <div className="my-3">
                <Checkbox
                  label="Payment of EMGS fee and registration fee"
                  id="payment-emgs-fee"
                />
              </div>
              <div className="my-3">
                <Checkbox
                  label="No Objection Certificate (NOC) for Sudan, No Objection Letter (NOL) for Oman, or Letter of Eligibility (LOE) for Iranian (if applicable)"
                  id="noc-nol-loe"
                />
              </div>
              <div className="my-3">
                <Checkbox
                  label="Copy of yellow fever vaccination card (for students from a country with a risk of yellow fever transmission, or have stayed intransit within these countries for more that 12 hours.)"
                  id="yellow-fever-vaccination-card"
                />
              </div>
            </div>

            <div className="my-3">
              <h4 className="mb-2 font-semibold text-gray-600">
                Additional documents for transfer students (from other
                institutions)
              </h4>
              <div className="my-3">
                <Checkbox
                  label="3 copies of transcripts from previous institution"
                  id="previous-institution-transcripts"
                />
              </div>
              <div className="my-3">
                <Checkbox
                  label="2 copies of attendance report from previous institutions)"
                  id="attendance-report-previous-institution"
                />
              </div>
              <div className="my-3">
                <Checkbox
                  label="Original release letter"
                  id="original-release-letter"  
                />
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Document;
