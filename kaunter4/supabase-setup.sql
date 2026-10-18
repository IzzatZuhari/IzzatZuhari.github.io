-- Kaunter 4 leaderboard: paste into Supabase > SQL Editor > Run
create table if not exists public.scores (
  id bigint generated always as identity primary key,
  name text not null check (name ~ '^[A-Za-z0-9_ ]{1,12}$'),
  mode text not null check (mode in ('biasa','rush','mar')),
  day int not null check (day between 1 and 500),
  total int not null check (total between 0 and 20000),
  score int not null check (score between 0 and 200000),
  created_at timestamptz not null default now(),
  check (score <= total * 25 + day * 200)   -- rough anti-cheat ceiling
);
create index if not exists scores_mode_score on public.scores (mode, score desc);
alter table public.scores enable row level security;
grant select, insert on public.scores to anon;
drop policy if exists "read scores" on public.scores;
drop policy if exists "add scores" on public.scores;
create policy "read scores" on public.scores for select to anon using (true);
create policy "add scores"  on public.scores for insert to anon with check (true);
-- No update/delete policy: players can only add and read scores.
