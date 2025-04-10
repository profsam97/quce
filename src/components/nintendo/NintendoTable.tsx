import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Button } from "../ui/button";
import { ChevronUp, Filter } from "lucide-react";
import { customerData } from "../../lib/data/customerData";
export function NintendoTable() {
  return (
    <div className="w-full px-4">
      <Table>
        <TableHeader>
          <TableRow className="bg-white">
            <TableHead className="font-medium">Customer Name/ID</TableHead>
            <TableHead className="font-medium">
              <div className="flex items-center">
                Customer Category
                <Filter className="ml-1 h-4 w-4" />
              </div>
            </TableHead>
            <TableHead className="font-medium">Principal</TableHead>
            <TableHead className="font-medium">
              <div className="flex items-center">
                User Alias
                <Filter className="ml-1 h-4 w-4" />
              </div>
            </TableHead>
            <TableHead className="font-medium">
              <div className="flex items-center">
                Status
                <Filter className="ml-1 h-4 w-4" />
              </div>
            </TableHead>
            <TableHead className="font-medium">
              <div className="flex items-center">
                Last Updated
                <Filter className="ml-1 h-4 w-4" />
              </div>
            </TableHead>
            <TableHead className="font-medium">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {customerData.map((row) => (
            <TableRow key={row.id} className="border-b border-gray-200">
              <TableCell>
                <div className="font-medium">{row.name}</div>
                <div className="text-sm text-gray-500">{row.customerId}</div>
              </TableCell>
              <TableCell>{row.category}</TableCell>
              <TableCell>{row.principal}</TableCell>
              <TableCell>
                <div>{row.userAlias}</div>
                <div className="text-sm text-gray-500">{row.userAliasSecondary}</div>
              </TableCell>
              <TableCell>
                {row.status === "Active" ? (
                  <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border border-red-500 text-red-800">
                   <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.99992 1.33331C4.32659 1.33331 1.33325 4.32665 1.33325 7.99998C1.33325 11.6733 4.32659 14.6666 7.99992 14.6666C11.6733 14.6666 14.6666 11.6733 14.6666 7.99998C14.6666 4.32665 11.6733 1.33331 7.99992 1.33331ZM11.1866 6.46665L7.40659 10.2466C7.31325 10.34 7.18659 10.3933 7.05325 10.3933C6.91992 10.3933 6.79325 10.34 6.69992 10.2466L4.81325 8.35998C4.61992 8.16665 4.61992 7.84665 4.81325 7.65331C5.00659 7.45998 5.32659 7.45998 5.51992 7.65331L7.05325 9.18665L10.4799 5.75998C10.6733 5.56665 10.9933 5.56665 11.1866 5.75998C11.3799 5.95331 11.3799 6.26665 11.1866 6.46665Z" fill="#A93636"/>
</svg>
                    Active
                  </div>
                ) : (
                  <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border border-gray-400 text-gray-800">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.1 12.74V3.26C7.1 2.36 6.72 2 5.76 2H3.34C2.38 2 2 2.36 2 3.26V12.74C2 13.64 2.38 14 3.34 14H5.76C6.72 14 7.1 13.64 7.1 12.74Z" fill="#494949"/>
<path d="M13.9997 12.74V3.26C13.9997 2.36 13.6197 2 12.6597 2H10.2397C9.28632 2 8.89966 2.36 8.89966 3.26V12.74C8.89966 13.64 9.27966 14 10.2397 14H12.6597C13.6197 14 13.9997 13.64 13.9997 12.74Z" fill="#494949"/>
</svg>
<span className="px-0.8"></span>


                    Liquidated
                  </div>
                )}
              </TableCell>
              <TableCell>{row.lastUpdated}</TableCell>
              <TableCell>
                <Button variant="ghost" size="icon">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.25 5.25H15.75H2.25Z" fill="#1C1C1C"/>
            <path d="M2.25 5.25H15.75" stroke="#1C1C1C" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M2.25 9H15.75H2.25Z" fill="#1C1C1C"/>
            <path d="M2.25 9H15.75" stroke="#1C1C1C" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M2.25 12.75H15.75H2.25Z" fill="#1C1C1C"/>
            <path d="M2.25 12.75H15.75" stroke="#1C1C1C" stroke-width="1.5" stroke-linecap="round"/>
          </svg>

                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
      <div className="flex items-center p-4 border-t border-gray-200 gap-4">
        <div className="text-sm text-gray-500 flex items-center bg-[#fff] px-4 py-4 rounded-md">
          <span className="text-green-600">Role: </span>
          <span className="px-1">Super Admin</span>
          <ChevronUp className="ml-1 h-4 w-4" />
        </div>
        <div className="text-sm text-gray-500">
          Last login: Tue, 14 Nobvember 2023
        </div>
      </div>
    </div>
  );
}
