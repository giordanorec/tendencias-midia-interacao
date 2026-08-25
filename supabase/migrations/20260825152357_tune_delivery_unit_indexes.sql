drop index if exists public.tmi_catalogo_unidade_aluno_idx;
drop index if exists public.tmi_entregas_unidade_aluno_idx;

create index if not exists tmi_catalogo_cid_idx
  on public.tmi_catalogo (cid);
create index if not exists tmi_escolhas_cid_idx
  on public.tmi_escolhas (cid);
create index if not exists tmi_entregas_aluno_idx
  on public.tmi_entregas (aluno);
create index if not exists tmi_uploads_aluno_idx
  on public.tmi_uploads (aluno);
