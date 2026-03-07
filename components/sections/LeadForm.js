"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import SectionTag from "../ui/SectionTag";
import Button from "../ui/Button";
import { leadSchema, GOAL_OPTIONS } from "../../lib/validation/leads";

export default function LeadFormSection() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [serverError, setServerError] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      goal: "",
      message: ""
    }
  });

  async function onSubmit(values) {
    setServerError(null);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(values)
      });

      const data = await response.json().catch(() => null);

      if (!response.ok || !data?.success) {
        const message =
          (data && data.error) || "Something went wrong submitting the form.";
        throw new Error(message);
      }

      setIsSuccess(true);
    } catch (error) {
      setServerError(error.message || "Something went wrong. Please try again.");
    }
  }

  return (
    <section
      id="join"
      className="section-max-width py-16 sm:py-20 lg:py-24"
    >
      <div className="grid gap-12 lg:grid-cols-[1.1fr,1.1fr]">
        <div className="space-y-6">
          <SectionTag>Join IronForge</SectionTag>
          <h2 className="font-display text-3xl tracking-[0.18em] sm:text-4xl">
            CLAIM YOUR FREE TRIAL SESSION.
          </h2>
          <p className="text-sm text-white/70 sm:text-base">
            Drop your details and a coach will reach out within two hours to
            schedule your free session, walk you through the space, and map out
            a plan aligned to your goals.
          </p>
          <ul className="space-y-2 text-sm text-white/80">
            <li className="flex items-start gap-2">
              <span className="mt-1 text-iron-500" aria-hidden="true">
                ✓
              </span>
              <span>60-minute guided session with an IronForge coach.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 text-iron-500" aria-hidden="true">
                ✓
              </span>
              <span>Custom training recommendations based on your goals.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 text-iron-500" aria-hidden="true">
                ✓
              </span>
              <span>No pressure, no contracts—decide only if it feels right.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 text-iron-500" aria-hidden="true">
                ✓
              </span>
              <span>Response within 2 business hours.</span>
            </li>
          </ul>
        </div>

        <div className="glass-panel relative overflow-hidden rounded-3xl p-6 sm:p-8">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,75,54,0.25),_transparent_55%)]" />
          <div className="relative">
            {!isSuccess ? (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-4"
                noValidate
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field
                    label="First Name"
                    id="firstName"
                    required
                    error={errors.firstName?.message}
                  >
                    <input
                      id="firstName"
                      type="text"
                      autoComplete="given-name"
                      className={inputClassName(errors.firstName)}
                      {...register("firstName")}
                    />
                  </Field>
                  <Field
                    label="Last Name"
                    id="lastName"
                    required
                    error={errors.lastName?.message}
                  >
                    <input
                      id="lastName"
                      type="text"
                      autoComplete="family-name"
                      className={inputClassName(errors.lastName)}
                      {...register("lastName")}
                    />
                  </Field>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Field
                    label="Email"
                    id="email"
                    required
                    error={errors.email?.message}
                  >
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      className={inputClassName(errors.email)}
                      {...register("email")}
                    />
                  </Field>
                  <Field
                    label="Phone"
                    id="phone"
                    hint="Optional"
                    error={errors.phone?.message}
                  >
                    <input
                      id="phone"
                      type="tel"
                      autoComplete="tel"
                      className={inputClassName(errors.phone)}
                      {...register("phone")}
                    />
                  </Field>
                </div>

                <Field
                  label="Primary Goal"
                  id="goal"
                  required
                  error={errors.goal?.message}
                >
                  <select
                    id="goal"
                    className={inputClassName(errors.goal)}
                    {...register("goal")}
                  >
                    <option value="">Select your goal</option>
                    {GOAL_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field
                  label="Anything we should know?"
                  id="message"
                  hint="Optional (max 300 characters)"
                  error={errors.message?.message}
                >
                  <textarea
                    id="message"
                    rows={4}
                    className={inputClassName(errors.message) + " resize-none"}
                    {...register("message")}
                  />
                </Field>

                {serverError && (
                  <p className="text-sm text-red-400">{serverError}</p>
                )}

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <Button
                    type="submit"
                    className="w-full sm:w-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Request Free Trial"}
                  </Button>
                  <p className="text-xs text-white/60">
                    By submitting, you agree to be contacted by IronForge Gym
                    about membership options.
                  </p>
                </div>
              </form>
            ) : (
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">
                  You&apos;re in. We&apos;ll be in touch within 2 hours.
                </h3>
                <p className="text-sm text-white/70">
                  Keep an eye on your inbox and phone—one of our coaches will
                  reach out to confirm your session time and answer any
                  questions you have before you step into the Forge.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, id, required, hint, error, children }) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between text-xs">
        <label
          htmlFor={id}
          className="font-medium text-white/90"
        >
          {label}
          {required ? (
            <span className="ml-0.5 text-iron-500">*</span>
          ) : null}
        </label>
        {hint ? <span className="text-white/50">{hint}</span> : null}
      </div>
      {children}
      {error ? <p className="text-xs text-red-400">{error}</p> : null}
    </div>
  );
}

function inputClassName(hasError) {
  return (
    "w-full rounded-xl border bg-black/40 px-3 py-2.5 text-sm text-white outline-none transition focus:border-iron-500 focus:ring-1 focus:ring-iron-500 " +
    (hasError
      ? "border-red-500/70"
      : "border-white/15 hover:border-white/25")
  );
}


