import DashboardCards from "@/components/dashboard-cards"
import { Metadata } from "next";
import { Suspense } from "react";

const metadata: Metadata = {
  title: "Dashboard",
}

const DashboardPage = () => {
  return (
    <div className='max-w-screen-xl px-4 py-16 mt-10 mx-auto'> Dashbaord Page
      <h1 className="text-4xl font-bold text-gray-800">Dashboard</h1>
      <Suspense>
      <DashboardCards />
      </Suspense>
    </div>
  );
};

export default DashboardPage
