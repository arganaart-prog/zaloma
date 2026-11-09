create table if not exists public.product_click_counts (
  product_slug text not null,
  click_date date not null,
  click_count bigint not null default 0 check (click_count >= 0),
  primary key (product_slug, click_date)
);

alter table public.product_click_counts enable row level security;
revoke all on table public.product_click_counts from public, anon, authenticated;

create or replace function public.record_product_click(p_product_slug text)
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  today_utc date := (now() at time zone 'utc')::date;
begin
  if p_product_slug is null or not exists (
    select 1
    from public.products
    where slug = p_product_slug
      and left(slug, 1) <> '_'
  ) then
    raise exception 'Product click payload is invalid' using errcode = '22023';
  end if;

  delete from public.product_click_counts
  where click_date < today_utc - 6;

  insert into public.product_click_counts (product_slug, click_date, click_count)
  values (p_product_slug, today_utc, 1)
  on conflict (product_slug, click_date)
  do update set click_count = public.product_click_counts.click_count + 1;
end;
$$;

create or replace function public.get_weekly_product_clicks()
returns table(product_slug text, click_count bigint)
language sql
stable
security definer
set search_path = public, pg_temp
as $$
  select counts.product_slug, sum(counts.click_count)::bigint
  from public.product_click_counts as counts
  where counts.click_date >= (now() at time zone 'utc')::date - 6
  group by counts.product_slug;
$$;

revoke all on function public.record_product_click(text) from public;
revoke all on function public.get_weekly_product_clicks() from public;
grant execute on function public.record_product_click(text) to anon, authenticated;
grant execute on function public.get_weekly_product_clicks() to anon, authenticated;
