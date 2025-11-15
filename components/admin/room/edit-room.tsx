import { getAmenities, getRoomsById } from "@/lib/data";
import EditForm from "@/components/admin/room/edit-form";
import { notFound } from "next/navigation";

const EditRoom = async ({roomid}: {roomid: string}) => {
  const [amenities,room] = await Promise.all([
    getAmenities(), getRoomsById(roomid)
  ]);
  if(!amenities || !room) return notFound();

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-4"> Edit a Room</h1>
      <EditForm amenities={amenities} room={room}/>
    </div>
  )
}

export default EditRoom;
