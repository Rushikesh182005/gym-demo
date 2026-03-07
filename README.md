# IronForge Gym – Next.js Landing Page

A modern, high-contrast landing page for a fictional gym, built with **Next.js 14 (App Router)**, **Tailwind CSS**, **Supabase**, **React Hook Form**, and **Zod** — all in JavaScript (no TypeScript).

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Database**: Supabase (Postgres)
- **Forms**: React Hook Form + Zod
- **Language**: JavaScript

## Getting Started

Install dependencies:

```bash
npm install
```

Create a `.env.local` file based on the required variables:

```bash
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

Run the development server:

```bash
npm run dev
```

Then open `http://localhost:3000` in your browser.

## Supabase

Create the `leads` table in your Supabase project by running the SQL from `supabase/schema.sql`.

The lead capture form on the home page submits to a server-side Supabase insert (via server action + API route) and will:

- Validate data with Zod (client + server)
- Insert a row into `leads`
- Show inline field errors
- Display a success message on completion without clearing the form on error


