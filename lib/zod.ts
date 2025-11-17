import {object, string, coerce, array, number } from "zod";

export const RoomSchema = object({
  name:string().min(1),
  description: string().min(50),
  capacity: coerce.number().gt(0),
  price: coerce.number().gt(0),
  amenities: array(string()).nonempty(), 
})

export const ReserveSchema = object({
  name: string().min(1),
  phone: string().min(10)
})

export const ContactSchema = object({
  name: string().min(2, "Name must be at least 2 characters long"),
  email: string().min(6, "Email at least 6 characters"),
  subject: string().min(4, "Subject must be at least 4 characters long"),
  message: string().min(20, "Message must be at least 50 characters long").max(200, "Message must be at most 200 characters long"),
});
