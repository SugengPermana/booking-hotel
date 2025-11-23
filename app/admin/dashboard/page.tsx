import DashboardCards from "@/components/dashboard-cards"
import { Metadata } from "next";
import { Suspense } from "react";
import ReservationList from "@/components/admin/reservation-list";
import CardSkeleton from "@/components/skeletons/card-skeleton";

const metadata: Metadata = {
  title: "Dashboard",
}

const DashboardPage = () => {
  return (
    <div className='max-w-screen-xl px-4 py-16 mt-10 mx-auto'> Dashbaord Page
      <h1 className="text-4xl font-bold text-gray-800">Dashboard</h1>
      <Suspense fallback={<CardSkeleton />}>
      <DashboardCards />
      </Suspense>
      <Suspense fallback={<CardSkeleton />}>
      <ReservationList />
      </Suspense>
    </div>
  );
};

export default DashboardPage
