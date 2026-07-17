-- Миграция для синхронизации всех трёх профилей прогресса (PVP / PVE / Сезон).
-- Выполнить один раз в Supabase Dashboard → SQL Editor.
--
-- Без этой колонки облако хранит только PVP-слот (легаси-поля done/mylevel);
-- приложение это определяет само и продолжает работать. После миграции
-- все три слота начнут синхронизироваться автоматически — правок кода не нужно.

alter table public.profiles
  add column if not exists profiles jsonb;

-- Realtime-синхронизация между открытыми устройствами (фича Realtime sync):
-- добавить таблицу в публикацию, если её там ещё нет.
-- (Или через Dashboard: Database → Replication → supabase_realtime → добавить profiles)

do $$
begin
  if not exists (
    select 1 from pg_publication_tables
    where pubname = 'supabase_realtime' and tablename = 'profiles'
  ) then
    alter publication supabase_realtime add table public.profiles;
  end if;
end $$;
