import { Metadata } from "next"
import RoomDetail from "@/components/room-detail"
import { Suspense } from "react"

export const metadata:Metadata = {
  title: "Rom Detail"
}

const RoomDetailPage = async ({
  params
}:{
  params: Promise<{roomId: string}>
}) => {
  const roomId = (await params).roomId;
  return (
    <div className="mt-16">
      <Suspense fallback={<p>loading...</p>}>
      <RoomDetail roomid={roomId}/>
      </Suspense>
    </div>
  )
}

export default RoomDetailPage
