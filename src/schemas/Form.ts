import { z } from "zod";
import BODY from "../enum/bodyValues";

const FormSchema = z.object({
  size: z.number().min(BODY.SIZE_MIN).max(BODY.SIZE_MAX),
  weight: z.number().min(BODY.WEIGHT_MIN).max(BODY.WEIGHT_MAX),
});

type FormSchemaType = z.infer<typeof FormSchema>;

export { FormSchema };
export type { FormSchemaType };
