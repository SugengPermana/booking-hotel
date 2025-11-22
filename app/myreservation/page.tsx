import MyReserveList from "@/components/my-reserve-list"

const MyReservationPage = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-screen-lg mx-auto mt-10 py-20 px-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl text-gray-800 mt-2">Hi,</h3>
            <p className="mt-1 font-medium mb-4">Here&apos;s Your Book History</p>
          </div>
        </div>
        <div className="rounded-sm">
          <MyReserveList />
        </div>
      </div>
    </div>
  )
}

export default MyReservationPage
