import { notFound } from "next/navigation";
import EditRoom from "@/components/admin/room/edit-room";
import { Suspense } from "react";

// tanda tulis ini adalah halaman update room

const UpdateRoomPage = async ({
    params
}:{
    params: Promise<{ roomId: string }>
}) => {
  const roomid = (await params).roomId;
  if(!roomid) return notFound();

  return (
    <div className="max-w-screen-xl px-4 py-16 mt-10 mx-auto" >
      <Suspense fallback={<p>Loading...</p>}>
      <EditRoom roomid={roomid} />
      </Suspense>
    </div>
  )
}

export default UpdateRoomPage
