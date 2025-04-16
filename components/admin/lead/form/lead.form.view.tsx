import Document from "./components/Document"
import LeadDetails from "./components/LeadDetails"
import NewInterest from "./components/NewInterest"
import RightSide from "./components/RightSide"



export default function LeadFormView( ) {
  return (
    <div className="min-h-screen md:flex flex-col md:flex-row">
        <div className="w-full md:w-3/4 bg-gray-100 md:pr-4">
            <h2 className="text-2xl font-semibold p-3 mb-2">Add New Lead</h2>
            {/* personal info */}
            <LeadDetails />
            {/* document */}
            <Document />
            {/* office note */}
            <NewInterest />
        </div>
        <div className="w-full md:w-1/4  p-2 mt-2 md:mt-14">
            <RightSide />
        </div>
    </div>
  )
}