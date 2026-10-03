import { z } from 'zod';

export const proportionSchema = z.enum(['60/40', '70/30']);
export type Proportion = z.infer<typeof proportionSchema>;

export const PROPORTIONS = proportionSchema.options;
