begin;

alter table public.tmi_catalogo
  add column unidade text not null default 'inspiracao',
  add constraint tmi_catalogo_unidade_check
    check (unidade in ('inspiracao', 'desenvolvimento'));
alter table public.tmi_catalogo drop constraint tmi_catalogo_pkey;
alter table public.tmi_catalogo
  add constraint tmi_catalogo_pkey primary key (unidade, aluno, cid);

alter table public.tmi_escolhas
  add column unidade text not null default 'inspiracao',
  add constraint tmi_escolhas_unidade_check
    check (unidade in ('inspiracao', 'desenvolvimento'));
alter table public.tmi_escolhas drop constraint tmi_escolhas_pkey;
alter table public.tmi_escolhas
  add constraint tmi_escolhas_pkey primary key (unidade, cid);

alter table public.tmi_entregas
  add column unidade text not null default 'inspiracao',
  add constraint tmi_entregas_unidade_check
    check (unidade in ('inspiracao', 'desenvolvimento'));
alter table public.tmi_entregas drop constraint tmi_entregas_pkey;
alter table public.tmi_entregas
  add constraint tmi_entregas_pkey primary key (unidade, aluno);

alter table public.tmi_uploads
  add column unidade text not null default 'inspiracao',
  add constraint tmi_uploads_unidade_check
    check (unidade in ('inspiracao', 'desenvolvimento'));

alter table public.tmi_eventos
  add column unidade text not null default 'inspiracao',
  add constraint tmi_eventos_unidade_check
    check (unidade in ('inspiracao', 'desenvolvimento'));

create index tmi_catalogo_unidade_aluno_idx
  on public.tmi_catalogo (unidade, aluno);
create index tmi_escolhas_unidade_aluno_idx
  on public.tmi_escolhas (unidade, aluno);
create index tmi_entregas_unidade_aluno_idx
  on public.tmi_entregas (unidade, aluno);
create index tmi_uploads_unidade_aluno_idx
  on public.tmi_uploads (unidade, aluno);
create index tmi_eventos_unidade_aluno_idx
  on public.tmi_eventos (unidade, aluno);

comment on column public.tmi_catalogo.unidade is
  'Unidade da atividade: inspiracao (Entrega 1) ou desenvolvimento (Entrega 2).';
comment on column public.tmi_escolhas.unidade is
  'Unidade da atividade; a exclusividade de uma ferramenta vale dentro de cada unidade.';
comment on column public.tmi_entregas.unidade is
  'Unidade da atividade, permitindo uma entrega completa por aluno em cada rodada.';
comment on column public.tmi_uploads.unidade is
  'Unidade da atividade à qual o upload pertence.';
comment on column public.tmi_eventos.unidade is
  'Unidade da atividade em que o evento de processo ocorreu.';

commit;
