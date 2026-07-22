import { z } from "zod";

export const requestSchema = z.object({
  name: z.string().trim().min(2, "Naam is te kort").max(100),
  phone: z.string().trim().min(6, "Telefoonnummer is te kort").max(30),
  email: z.string().trim().email("Ongeldig e-mailadres"),
  service: z.string().trim().min(2, "Kies een dienst").max(100),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
});

export type RequestInput = z.infer<typeof requestSchema>;
