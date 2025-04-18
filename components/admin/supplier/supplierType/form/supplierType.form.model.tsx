import { z } from "zod";

export const supplierTypeSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
});

export type SupllierTypeSchemaType = z.infer<typeof supplierTypeSchema>;

export const supplierTypeDefaultValues: SupllierTypeSchemaType = {
  name: "",
};
