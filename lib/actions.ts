"use server";

import { prisma } from "@/lib/prisma";
import { ContactSchema, ReserveSchema, RoomSchema } from "@/lib/zod";
import { redirect } from "next/navigation";
import { del } from "@vercel/blob";
import { revalidatePath } from "next/cache";
import { auth } from "@/auth";
import { differenceInCalendarDays } from "date-fns";

// save Room
export const saveRoom = async (
  image: string,
  prevState: unknown,
  formData: FormData
) => {
  if (!image) return { message: "image is required." };

  const rawdata = {
    name: formData.get("name"),
    description: formData.get("description"),
    capacity: formData.get("capacity"),
    price: formData.get("price"),
    amenities: formData.getAll("amenities"),
  };

  const validatedFields = RoomSchema.safeParse(rawdata);
  if (!validatedFields.success) {
    return { error: validatedFields.error.flatten().fieldErrors };
  }

  const { name, description, price, capacity, amenities } =
    validatedFields.data;

  try {
    await prisma.room.create({
      data: {
        name,
        description,
        image,
        price,
        capacity,
        ROomAmenities: {
          createMany: {
            data: amenities.map((item) => ({
              amidenitiesid: item,
            })),
          },
        },
      },
    });
  } catch (error) {
    console.log(error);
  }
  redirect("/admin/room");
};

export type ContactActionState = {
  error?: {
    name?: string[];
    email?: string[];
    subject?: string[];
    message?: string[];
    general?: string;
  };
  message?: string;
} | null;

export const ContactMessage = async (
  prevState: unknown,
  formData: FormData
): Promise<ContactActionState> => {

  const validatedFields = ContactSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return { error: validatedFields.error.flatten().fieldErrors };
  }

  const { name, email, subject, message } = validatedFields.data;

  try {
    await prisma.contact.create({
      data: {
        name,
        email,
        subject,
        message,
      },
    });

    return { message: "Thanks for Contact Us" };
  } catch (error) {
    console.log(error);
    return { error: { general: "Something went wrong" } };
  }
};

// Delete Room
export const deleteRoom = async (id: string, image: string) => {
  try {
    await del(image);
    await prisma.room.delete({
      where: { id },
    });
  } catch (error) {
    console.log(error);
  }
  revalidatePath("/admin/room");
};

// update Room
export const UpdateRoom = async (
  image: string,
  roomId: string,
  prevState: unknown,
  formData: FormData
) => {
  if (!image) return { message: "image is required." };

  const rawdata = {
    name: formData.get("name"),
    description: formData.get("description"),
    capacity: formData.get("capacity"),
    price: formData.get("price"),
    amenities: formData.getAll("amenities"),
  };

  const validatedFields = RoomSchema.safeParse(rawdata);
  if (!validatedFields.success) {
    return { error: validatedFields.error.flatten().fieldErrors };
  }

  const { name, description, price, capacity, amenities } =
    validatedFields.data;

  try {
    await prisma.$transaction([
      prisma.room.update({
        where: { id: roomId },
        data: {
          name,
          description,
          image,
          price,
          capacity,
          ROomAmenities: {
            deleteMany: {},
          },
        },
      }),
      prisma.roomAmenities.createMany({
        data: amenities.map((item) => ({
          roomid: roomId,
          amidenitiesid: item,
        })),
      }),
    ]);
  } catch (error) {
    console.log(error);
  }
  revalidatePath("/admin/room");
  redirect("/admin/room");
};

export const createReverse = async (
  roomId: string,
  price: number,
  startDate: Date,
  endDate: Date,
  prevState: unknown,
  formData: FormData
) => {
  const session = await auth();
  if (!session || !session.user || !session.user.id)
    redirect(`/signin?redirect_url=room/${roomId}`);
  const rawdata = {
    name: formData.get("name"),
    phone: formData.get("phone"),
  };
  const validatedFields = ReserveSchema.safeParse(rawdata);
  if (!validatedFields.success) {
    return {
      error: validatedFields.error?.flatten().fieldErrors,
    };
  }

  const { name, phone } = validatedFields.data;
  const night = differenceInCalendarDays(endDate, startDate);
  if (night <= 0) return { messageDate: "Date Must be at least 1 night " };

  const total = night * price;

  let reservationId;
  try {
    await prisma.$transaction(async (tx) => {
      await tx.user.update({
        data: {
          name,
          phone,
        },
        where: { id: session.user.id },
      });
      const reservation = await tx.reservation.create({
        data: {
          starDate: startDate,
          endDate: endDate,
          price: price,
          roomId: roomId,
          userId: session.user.id as string,
          Payment: {
            create: {
              amount: total,
            },
          },
        },
      });
      reservationId = reservation.id;
    });
  } catch (error) {
    console.log(error);
  }
  redirect(`/checkout/${reservationId}`);
};
