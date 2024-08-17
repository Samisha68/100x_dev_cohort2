import { Appbar } from "../Components/Appbar";
import { Balance } from "../Components/Balance";
import { Users } from "../Components/Users";

export const Dashboard = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Appbar />
      <div className="flex-grow container mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Balance Component */}
          <div className="col-span-1 lg:col-span-2">
            <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg shadow p-6">
              <Balance value="10,000" />
            </div>
          </div>

          {/* Users Component */}
          <div className="col-span-1">
            <div className="bg-white rounded-lg shadow p-6">
              <Users />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
