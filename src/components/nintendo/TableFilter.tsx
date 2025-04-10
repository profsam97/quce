import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Search, RefreshCw, ChevronDown } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export function TableFilter() {
  const [activeTab, setActiveTab] = useState("allRecords");

  return (
    <div className="flex flex-col">
      {/* Filter tabs and counts */}
      <div className="flex justify-between py-4 px-6">
        <div className="flex items-center">
          <div className="flex mr-8">
            <div className="flex rounded-md overflow-hidden">
              <Button 
                variant="ghost" 
                className={`rounded-l-md px-6 py-2 h-auto ${
                  activeTab === "allRecords" 
                    ? "bg-white text-red-600 border-2 border-red-600" 
                    : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                }`}
                onClick={() => setActiveTab("allRecords")}
              >
                All Records
              </Button>
              <Button 
                variant="ghost" 
                className={`rounded-r-md px-6 py-2 h-auto ${
                  activeTab === "request" 
                    ? "bg-white text-red-600 border-2 border-red-600" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 border-0"
                }`}
                onClick={() => setActiveTab("request")}
              >
                Request
              </Button>
            </div>
          </div>
          
          <div className="flex">
          <div className="px-6 py-2 border-r border-gray-200">

            </div>
            <div className="px-6 py-2 border-r border-gray-200">
              <div className="text-xs text-gray-800">All</div>
              <div className="text-2xl font-bold">100</div>
            </div>
            <div className="px-6 py-2 border-r border-gray-200">
              <div className="text-xs text-[#A93636]">Active</div>
              <div className="text-2xl font-bold ">90</div>
            </div>
            <div className="px-6 py-2">
              <div className="text-xs text-gray-800">Liquidated</div>
              <div className="text-2xl font-bold">143</div>
            </div>
          </div>
        </div>
        
        {/* Right side - Dropdown */}
        <div>
          <Button variant="outline" className="border-[#A93636] text-red-600 hover:bg-[#A93636] hover:text-[#fff]">
            Created by System-wide
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
      
      {/* Search bar */}
      <div className="flex items-center justify-between py-4 px-6 border-t border-b border-gray-200">
        <div className="flex items-center gap-2">
          <Button variant="outline" className="bg-[#FAF8F7] border-gray-200 text-gray-500 hover:bg-gray-50 font-light">
            Table Search Query
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
          
          <div className="relative">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
            <Input 
              placeholder="Search Parameter" 
              className="pl-8 w-[300px] bg-white border-gray-200"
            />
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Button 
            variant="outline" 
            className="bg-[#FAF1F1] border-gray-200 text-[#B81C1D] hover:bg-gray-50"
            onClick={() => toast("Table Refreshed", { description: "The table data has been updated." })}
          >
            <RefreshCw className="mr-2 h-4 w-4" />
            Refresh Table
          </Button>
          <Button 
            variant="outline" 
            className="bg-[#FAF1F1] border-gray-200 text-[#B81C1D] hover:bg-gray-50 gap-1"
            onClick={() => toast("Download Started", { description: "Your table data download will begin shortly." })}
          >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.6667 6.79334H11.7401C10.1601 6.79334 8.87341 5.50668 8.87341 3.92668V2.00001C8.87341 1.63334 8.57341 1.33334 8.20675 1.33334H5.38008C3.32675 1.33334 1.66675 2.66668 1.66675 5.04668V10.9533C1.66675 13.3333 3.32675 14.6667 5.38008 14.6667H10.6201C12.6734 14.6667 14.3334 13.3333 14.3334 10.9533V7.46001C14.3334 7.09334 14.0334 6.79334 13.6667 6.79334ZM8.18675 10.52L6.85341 11.8533C6.80675 11.9 6.74675 11.94 6.68675 11.96C6.62675 11.9867 6.56675 12 6.50008 12C6.43341 12 6.37341 11.9867 6.31341 11.96C6.26008 11.94 6.20675 11.9 6.16675 11.86C6.16008 11.8533 6.15341 11.8533 6.15341 11.8467L4.82008 10.5133C4.62675 10.32 4.62675 10 4.82008 9.80668C5.01341 9.61334 5.33341 9.61334 5.52675 9.80668L6.00008 10.2933V7.50001C6.00008 7.22668 6.22675 7.00001 6.50008 7.00001C6.77341 7.00001 7.00008 7.22668 7.00008 7.50001V10.2933L7.48008 9.81334C7.67341 9.62001 7.99341 9.62001 8.18675 9.81334C8.38008 10.0067 8.38008 10.3267 8.18675 10.52Z" fill="#A93636"/>
<path d="M11.6197 5.87332C12.253 5.87999 13.133 5.87998 13.8864 5.87998C14.2664 5.87998 14.4664 5.43332 14.1997 5.16665C13.2397 4.19999 11.5197 2.45999 10.533 1.47332C10.2597 1.19999 9.78638 1.38665 9.78638 1.76665V4.09332C9.78638 5.06665 10.613 5.87332 11.6197 5.87332Z" fill="#A93636"/>
</svg>
            Download Table
          </Button>
        </div>
      </div>
    </div>
  );
}
