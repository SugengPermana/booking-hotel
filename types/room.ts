import { Prisma } from "@prisma/client";

export type RoomProps = Prisma.RoomGetPayload<{
  include: {ROomAmenities: {select: {amidenitiesid: true}}}
}>