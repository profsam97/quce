import {  ChevronDown, ChevronRight, Plus } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

interface NintendoHeaderProps {
  newForm?: boolean
}
const NintendoHeader: React.FC<NintendoHeaderProps> = ({newForm = true}) => {
    const navigate = useNavigate();
  return (
    <div className="flex flex-col">
      {/* Header with title, breadcrumb and button */}
      <div className="p-4 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Nintendo</h1>
          <div className="flex items-center gap-2 mt-1">
            <Link to="/dashboard" className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.03341 1.66667H4.45008C2.62508 1.66667 1.66675 2.625 1.66675 4.44167V6.025C1.66675 7.84167 2.62508 8.80001 4.44175 8.80001H6.02508C7.84175 8.80001 8.80008 7.84167 8.80008 6.025V4.44167C8.80842 2.625 7.85008 1.66667 6.03341 1.66667Z" fill="#8E8E8E"/>
<path d="M15.5578 1.66667H13.9745C12.1578 1.66667 11.1995 2.625 11.1995 4.44167V6.025C11.1995 7.84167 12.1578 8.80001 13.9745 8.80001H15.5578C17.3745 8.80001 18.3328 7.84167 18.3328 6.025V4.44167C18.3328 2.625 17.3745 1.66667 15.5578 1.66667Z" fill="#8E8E8E"/>
<path d="M15.5578 11.1918H13.9745C12.1578 11.1918 11.1995 12.1502 11.1995 13.9668V15.5502C11.1995 17.3668 12.1578 18.3252 13.9745 18.3252H15.5578C17.3745 18.3252 18.3328 17.3668 18.3328 15.5502V13.9668C18.3328 12.1502 17.3745 11.1918 15.5578 11.1918Z" fill="#8E8E8E"/>
<path d="M6.03341 11.1917H4.45008C2.62508 11.1917 1.66675 12.15 1.66675 13.9667V15.55C1.66675 17.375 2.62508 18.3333 4.44175 18.3333H6.02508C7.84175 18.3333 8.80008 17.375 8.80008 15.5583V13.975C8.80842 12.15 7.85008 11.1917 6.03341 11.1917Z" fill="#8E8E8E"/>
</svg>

              <span>Dashboard</span>
            </Link>
            <span className="text-gray-500"> <ChevronRight/> </span>
            <div className="flex items-center gap-1 text-sm">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.50008 1.66667C5.31675 1.66667 3.54175 3.44167 3.54175 5.62501C3.54175 7.76667 5.21675 9.50001 7.40008 9.57501C7.46675 9.56667 7.53341 9.56667 7.58341 9.57501C7.60008 9.57501 7.60841 9.57501 7.62508 9.57501C7.63341 9.57501 7.63341 9.57501 7.64175 9.57501C9.77508 9.50001 11.4501 7.76667 11.4584 5.62501C11.4584 3.44167 9.68341 1.66667 7.50008 1.66667Z" fill="#1C1C1C"/>
<path d="M11.734 11.7916C9.40903 10.2416 5.61737 10.2416 3.2757 11.7916C2.21737 12.4999 1.63403 13.4582 1.63403 14.4832C1.63403 15.5082 2.21737 16.4582 3.26737 17.1582C4.43403 17.9416 5.96737 18.3332 7.5007 18.3332C9.03403 18.3332 10.5674 17.9416 11.734 17.1582C12.784 16.4499 13.3674 15.4999 13.3674 14.4666C13.359 13.4416 12.784 12.4916 11.734 11.7916Z" fill="#1C1C1C"/>
<path d="M16.6578 6.11675C16.7911 7.73342 15.6411 9.15009 14.0495 9.34175C14.0411 9.34175 14.0411 9.34175 14.0328 9.34175H14.0078C13.9578 9.34175 13.9078 9.34175 13.8661 9.35842C13.0578 9.40009 12.3161 9.14175 11.7578 8.66675C12.6161 7.90009 13.1078 6.75009 13.0078 5.50009C12.9495 4.82509 12.7161 4.20842 12.3661 3.68342C12.6828 3.52509 13.0495 3.42509 13.4245 3.39176C15.0578 3.25009 16.5161 4.46675 16.6578 6.11675Z" fill="#1C1C1C"/>
<path d="M18.3251 13.825C18.2584 14.6333 17.7418 15.3333 16.8751 15.8083C16.0418 16.2667 14.9918 16.4833 13.9501 16.4583C14.5501 15.9167 14.9001 15.2417 14.9668 14.525C15.0501 13.4917 14.5584 12.5 13.5751 11.7083C13.0168 11.2667 12.3668 10.9167 11.6584 10.6583C13.5001 10.125 15.8168 10.4833 17.2418 11.6333C18.0084 12.25 18.4001 13.025 18.3251 13.825Z" fill="#1C1C1C"/>
</svg>
           
              <span>Nintendo</span>
            </div>
          </div>
        </div>
        
      {newForm &&  <Button className="bg-[#A93636] hover:bg-red-700 text-white" onClick={() => navigate("/create-form")}>
          <Plus className="h-4 w-4 mr-2" />
          New Request
          <ChevronDown className="h-4 w-4 ml-2" />
        </Button>
        }
      </div>
      
      {/* Tabs */}
      {newForm && <div className="border-b border-gray-200">
        <div className="flex px-4">
          <button className="px-4 py-2 text-sm border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700 text-gray-500">
            Individual
          </button>
          <button className="px-4 py-2 text-sm border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700 text-gray-500">
            Corporate
          </button>
        </div>
      </div>
      }
    </div>
  );
}

export default NintendoHeader;