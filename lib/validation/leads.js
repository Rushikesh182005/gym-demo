import { z } from "zod";

export const GOAL_OPTIONS = [
  "Lose Weight",
  "Build Muscle",
  "Improve Fitness",
  "Athletic Performance",
  "General Health"
];

export const leadSchema = z.object({
  firstName: z
    .string()
    .min(2, "First name must be at least 2 characters long."),
  lastName: z
    .string()
    .min(2, "Last name must be at least 2 characters long."),
  email: z.string().email("Please enter a valid email address."),
  phone: z
    .string()
    .trim()
    .optional()
    .refine(
      (value) => !value || /^\d+$/.test(value),
      "Phone must contain only numbers."
    ),
  goal: z
    .string()
    .min(1, "Please select your primary goal.")
    .refine(
      (value) => GOAL_OPTIONS.includes(value),
      "Please select a valid goal."
    ),
  message: z
    .string()
    .max(300, "Message must be 300 characters or less.")
    .optional()
});


