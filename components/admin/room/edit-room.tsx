import CreateForm from "@/components/admin/room/create-form";
import { getAmenities } from "@/lib/data";
import EditForm from "@/components/admin/room/edit-form";

const EditRoom = async ({roomid}: {roomid: string}) => {
  const amenities = await getAmenities();
  if(!amenities) return null;
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-4"> Edit a Room</h1>
      <EditForm amenities={amenities} />
    </div>
  )
}

export default EditRoom;
