import { z } from "zod";

export const orderSchema = z.object({
  name: z.string().min(2, "Будь ласка, вкажіть ваше ім'я"),
  email: z.string().email("Некоректний формат email"),
  phone: z.string().min(10, "Вкажіть коректний номер телефону"),
  projectType: z.enum([
    "Лендінг",
    "Візитка",
    "Корпоративний",
    "Магазин",
    "Комбінований",
    "Не можу визначити",
  ]),
  budget: z.enum(["unspecified", "small", "medium", "large"]),
  description: z.string().min(20, "Опишіть проєкт детальніше"),
});

export type OrderForm = z.infer<typeof orderSchema>;
