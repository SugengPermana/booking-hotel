import { Prisma } from "@prisma/client";

export type RoomProps = Prisma.RoomGetPayload<{
  include: { ROomAmenities: { select: { amidenitiesid: true } } };
}>;

export type RoomDetailProps = Prisma.RoomGetPayload<{
  include: {
    ROomAmenities: {
      include: {
        amenities: {
          select: {
            name: true;
          };
        };
      };
    };
  };
}>;
