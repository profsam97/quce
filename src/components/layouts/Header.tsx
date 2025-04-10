
import { Search, ChevronDown, Bell, Building2, User } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export function Header() {
  return (
    <header className="h-14 border-b flex items-center justify-between px-4 bg-white">
      <div className="flex items-center flex-1">
        <div className="relative w-[400px]">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
          <Input
            placeholder="Search Parameter & Params" 
            className="pl-8 bg-gray-50 border-0"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 text-sm">
          <span className="text-gray-600">Thur, Dec 11, 2024 15:32</span>
          <span className="text-gray-400">|</span>
          <span className="text-gray-600"><span className="font-bold">Business Date</span>: Thur, Dec 11, 2024 15:32</span>
        </div>

        <Button variant="ghost" size="icon" className="relative bg-gray-100 rounded-md">
          <Bell className="h-5 w-5 text-black" />
          {/* Notification dot */}
          <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-red-500" />
        </Button>

        <div className="flex items-center gap-2">
          <Button variant="ghost" className="text-sm font-normal bg-gray-100 rounded-md px-3 py-1.5 flex items-center gap-2">
            <Building2 className="h-4 w-4 text-black " />
            Ikoyi Branch
            <ChevronDown className="ml-1 h-4 w-4" />
          </Button>
          <Button variant="ghost" className="text-sm font-normal bg-gray-100 rounded-md px-3 py-1.5 flex items-center gap-2">
            <User className="h-4 w-4 text-black" />
            Eric Alewoya
            <ChevronDown className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}
