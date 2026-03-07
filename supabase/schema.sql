create table if not exists leads (
  id uuid default gen_random_uuid() primary key,
  first_name text not null,
  last_name text not null,
  email text not null,
  phone text,
  goal text not null,
  message text,
  created_at timestamp with time zone default now()
);


