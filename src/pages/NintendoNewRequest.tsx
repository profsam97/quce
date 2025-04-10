import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Label } from "../components/ui/label";
import NintendoHeader from "../components/nintendo/NintendoHeader";
import { Progress } from "../lib/data/progress";

export function NintendoNewRequest() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <NintendoHeader newForm={false}  />
      <div className="flex-1 p-6">
        {/* Progress indicators */}
        <div className="mb-12 max-w-4xl mx-auto"> 
          <div className="flex items-center justify-center px-6"> 
            {Progress.map((time, index) => (
              <>            
              <div className="relative flex-shrink-0">
              <div className={`w-10 h-10 rounded-full ${index === 0  ?  'bg-[#A93636]  text-white'  : index === 1 ? 'bg-[#FAF1F1] border border-red-500 text-red-600'  : 'border border-gray-300  text-gray-400'}   flex items-center justify-center text-lg font-medium`}>
                {index + 1}
              </div>
              <div className={`absolute top-full mt-2 left-1/2 -translate-x-1/2 text-sm ${index > 1 ? 'text-gray-400' :  'text-red-400' } whitespace-nowrap text-center`}> {/* Increased mt, added text-center */}
               {time} ago
              </div>
            </div>
                     {index < Progress.length -1  &&   <div className="flex-grow h-[1px] bg-gray-300 mx-2"></div>}
                      </>
            ))}            
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-lg shadow p-8 max-w-6xl mx-auto">
          <div className="space-y-8">
            {/* Location Selection */}
            <div className="flex space-x-12">
            <RadioGroup defaultValue="tampa2" className="flex space-x-12">
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            value="tampa1"
            id="tampa1"
            className="border-red-500 text-rose-800 focus-visible:ring-red-500 data-[state=checked]:bg-rose-800 data-[state=checked]:border-rose-800"
          />
          <Label htmlFor="tampa1" className="text-base text-gray-500">Tampa (FL)</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            value="tampa2"
            id="tampa2"
            className="border-red-500 text-rose-800 focus-visible:ring-red-500 data-[state=checked]:bg-rose-800 data-[state=checked]:border-rose-800"
          />
          <Label htmlFor="tampa2" className="text-base text-gray-500">Tampa (FL)</Label>
        </div>
      </RadioGroup>
            </div>
            
            {/* Form Fields */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-6">
              <div className="col-span-2">
                <label className="block text-base text-gray-700 mb-2">
                  Web Designer <span className="text-red-500">*</span>
                </label>
                <Input placeholder="Enter asset name" className="h-12" />
              </div>
              
              <div className="col-span-2">
                <label className="block text-base mb-2 flex items-center">
                  Marketing Coordinator <span className="text-red-500">*</span>
                  <svg className="ml-1 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <circle cx="12" cy="12" r="10" strokeWidth="2" />
                    <path d="M12 16v-4M12 8h.01" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </label>
                <Textarea placeholder="Enter asset description" className="min-h-[120px]" />
              </div>
                            <div>
                <label className="block text-base mb-2">
                  Medical Assistant
                </label>
                <div className="relative">
                  <select className="w-full h-12 border border-gray-300 rounded-md px-4 py-2 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="">Select Option</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
                            <div>
                <label className="block text-base mb-2">
                  Web Designer
                </label>
                <div className="relative">
                  <select className="w-full h-12 border border-gray-300 rounded-md px-4 py-2 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="">Select Option</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
                            <div>
                <label className="block text-base mb-2">
                  Nursing Assistant
                </label>
                <Input placeholder="Enter value" className="h-12" />
              </div>
                            <div>
                <label className="block text-base mb-2">
                  President of Sales
                </label>
                <div className="relative">
                  <select className="w-full h-12 border border-gray-300 rounded-md px-4 py-2 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="">Select Option</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
                            <div className="col-span-2">
                <label className="block text-base mb-2">
                  Dog Trainer
                </label>
                <div className="relative">
                  <select className="w-full h-12 border border-gray-300 rounded-md px-4 py-2 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="">Select Option</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            {/* Action Buttons */}
            <div className="flex justify-end space-x-4 mt-10">
              <Button variant="outline" className="px-6 py-2 text-base">Cancel</Button>
              <Button className="bg-[#A93636] hover:bg-red-700 text-white px-6 py-2 text-base">Submit Request</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
