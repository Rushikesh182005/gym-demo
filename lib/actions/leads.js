"use server";

import { createSupabaseClient } from "../supabase";
import { leadSchema } from "../validation/leads";

export async function createLead(rawInput) {
  const parsed = leadSchema.parse(rawInput);
  const supabase = createSupabaseClient();

  const { data, error } = await supabase
    .from("leads")
    .insert({
      first_name: parsed.firstName,
      last_name: parsed.lastName,
      email: parsed.email,
      phone: parsed.phone || null,
      goal: parsed.goal,
      message: parsed.message || null
    })
    .select()
    .single();

  if (error) {
    console.error("Error inserting lead", error);
    throw new Error(error.message || "Failed to save lead");
  }

  return data;
}


