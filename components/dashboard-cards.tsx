import { LuChartArea, LuShoppingCart, LuUser, LuUsers } from "react-icons/lu";

const DashboardCards = () => {
  return (
    <div className="grid md:grid-cols-3 gap-5 pb-10">
      <div className="flex items-center bg-white border rounded-md overflow-hidden shadow-sm">
        <div className="p-4 bg-green-400">
          <LuChartArea className="text-white size-12" />
        </div>
        <div className="px-4 text-gray-700">
          <h3 className="text-sm tracking-wider"> Total Revenue</h3>
          <p className="text-3xl">9999</p>
        </div>
      </div>
      <div className="flex items-center bg-white border rounded-md overflow-hidden shadow-sm">
        <div className="p-4 bg-red-400">
          <LuShoppingCart className="text-white size-12" />
        </div>
        <div className="px-4 text-gray-700">
          <h3 className="text-sm tracking-wider"> Total Reservation</h3>
          <p className="text-3xl">9999</p>
        </div>
      </div>
      <div className="flex items-center bg-white border rounded-md overflow-hidden shadow-sm">
        <div className="p-4 bg-blue-400">
          <LuUsers className="text-white size-12" />
        </div>
        <div className="px-4 text-gray-700">
          <h3 className="text-sm tracking-wider"> Total Costumers</h3>
          <p className="text-3xl">9999</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardCards;
