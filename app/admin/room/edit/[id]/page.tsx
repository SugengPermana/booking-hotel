import { notFound } from "next/navigation";
import EditRoom from "@/components/admin/room/edit-room";
import { Suspense } from "react";

const UpdateRoomPage = async ({
    params
}:{
    params: Promise<{ id: string }>
}) => {
  const roomid = (await params).id;
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
