import NintendoHeader from "../components/nintendo/NintendoHeader";
import { NintendoTable } from "../components/nintendo/NintendoTable";
import { TableFilter } from "../components/nintendo/TableFilter";


export function Nintendo() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <NintendoHeader  />
      <div className="flex-1">
        <TableFilter />
        <NintendoTable />
      </div>
    </div>
  );
}
