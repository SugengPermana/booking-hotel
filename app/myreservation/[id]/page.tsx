import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reservation Detail",
}

const MyReservationDetail = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  return <div className="min-h-screen bg-slate-50">
    <div className="max-w-screen-lg mx-auto mt-10 py-20 px-4">
      {/* reservation detail */}
    </div>
  </div>;
};

export default MyReservationDetail;
