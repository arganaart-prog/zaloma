alter table public.products
  add column if not exists images text[] not null default array[]::text[],
  add column if not exists hover_preview_index smallint;

do $$
begin
  if not exists (
    select 1
    from pg_constraint
    where conname = 'products_images_max_two_extras'
      and conrelid = 'public.products'::regclass
  ) then
    alter table public.products
      add constraint products_images_max_two_extras
      check (cardinality(images) <= 2);
  end if;

  if not exists (
    select 1
    from pg_constraint
    where conname = 'products_hover_preview_index_valid'
      and conrelid = 'public.products'::regclass
  ) then
    alter table public.products
      add constraint products_hover_preview_index_valid
      check (hover_preview_index is null or hover_preview_index in (2, 3));
  end if;
end
$$;
