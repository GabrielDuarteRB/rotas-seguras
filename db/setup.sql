CREATE TABLE "pessoa"(
    "id_pessoa" Serial NOT NULL,
    "nome" VARCHAR(255) NOT NULL,
    "cpf" VARCHAR(11) NOT NULL
);
ALTER TABLE
    "pessoa" ADD PRIMARY KEY("id_pessoa");
CREATE TABLE "policial"(
    "matricula" SERIAL NOT NULL,
    "id_pessoa" INTEGER NOT NULL,
    "posto" INTEGER NOT NULL,
    "ativo" BOOLEAN NOT NULL DEFAULT '1'
);
ALTER TABLE
    "policial" ADD PRIMARY KEY("matricula");
COMMENT
ON COLUMN
    "policial"."matricula" IS 'Auto increment';
CREATE TABLE "posto_policial"(
    "id" SERIAL NOT NULL,
    "posto" VARCHAR(100) NOT NULL
);
ALTER TABLE
    "posto_policial" ADD PRIMARY KEY("id");
CREATE TABLE "viatura"(
    "id_viatura" SERIAL NOT NULL,
    "placa" VARCHAR(7) NOT NULL,
    "modelo" VARCHAR(100) NOT NULL,
    "ano" VARCHAR(4) NOT NULL,
    "id_status_viatura" INTEGER NOT NULL
);
ALTER TABLE
    "viatura" ADD PRIMARY KEY("id_viatura");
ALTER TABLE
    "viatura" ADD CONSTRAINT "viatura_placa_unique" UNIQUE("placa");
CREATE TABLE "status_viatura"(
    "id" SERIAL NOT NULL,
    "descricao" VARCHAR(100) NOT NULL
);
ALTER TABLE
    "status_viatura" ADD PRIMARY KEY("id");
CREATE TABLE "policial_viatura"(
    "id_policial_viatura" SERIAL NOT NULL,
    "id_viatura" INTEGER NOT NULL,
    "matricula_policial" INTEGER NOT NULL,
    "ativado_em" TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL,
    "devolvido_em" TIMESTAMP(0) WITHOUT TIME ZONE NULL
);
ALTER TABLE
    "policial_viatura" ADD PRIMARY KEY("id_policial_viatura");
CREATE TABLE "rota"(
    "id_rota" SERIAL NOT NULL,
    "id_policial_viatura" INTEGER NOT NULL,
    "longitude" FLOAT(53) NOT NULL,
    "latitude" FLOAT(53) NOT NULL,
    "iniciada_em" TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL,
    "finalizada_em" TIMESTAMP(0) WITHOUT TIME ZONE NULL
);
ALTER TABLE
    "rota" ADD PRIMARY KEY("id_rota");
CREATE TABLE "ocorrencia"(
    "id_ocorrencia" SERIAL NOT NULL,
    "id_pessoa" INTEGER NOT NULL,
    "id_status_ocorrencia" INTEGER NULL,
    "id_tipo_ocorrencia" INTEGER NOT NULL,
    "latitude" FLOAT(53) NOT NULL,
    "longitude" FLOAT(53) NOT NULL,
    "descricao" VARCHAR(255) NULL,
    "criada_em" TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL,
    "finalizado_em" TIMESTAMP(0) WITHOUT TIME ZONE NULL
);
ALTER TABLE
    "ocorrencia" ADD PRIMARY KEY("id_ocorrencia");
CREATE TABLE "status_ocorrencia"(
    "id_status_ocorrencia" SERIAL NOT NULL,
    "descricao" VARCHAR(100) NOT NULL
);
ALTER TABLE
    "status_ocorrencia" ADD PRIMARY KEY("id_status_ocorrencia");
CREATE TABLE "tipo_ocorrencia"(
    "id_tipo_ocorrencia" SERIAL NOT NULL,
    "descricao" VARCHAR(100) NOT NULL
);
ALTER TABLE
    "tipo_ocorrencia" ADD PRIMARY KEY("id_tipo_ocorrencia");
CREATE TABLE "relatorio_ocorrencia"(
    "id_relatorio" SERIAL NOT NULL,
    "id_policial_viatura" INTEGER NOT NULL,
    "id_ocorrencia" INTEGER NOT NULL,
    "descricao" VARCHAR(255) NOT NULL,
    "iniciada_em" TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL,
    "finalizado_em" TIMESTAMP(0) WITHOUT TIME ZONE NULL
);
ALTER TABLE
    "relatorio_ocorrencia" ADD PRIMARY KEY("id_relatorio");
ALTER TABLE
    "policial_viatura" ADD CONSTRAINT "policial_viatura_matricula_policial_foreign" FOREIGN KEY("matricula_policial") REFERENCES "policial"("matricula");
ALTER TABLE
    "policial_viatura" ADD CONSTRAINT "policial_viatura_id_viatura_foreign" FOREIGN KEY("id_viatura") REFERENCES "viatura"("id_viatura");
ALTER TABLE
    "viatura" ADD CONSTRAINT "viatura_id_status_viatura_foreign" FOREIGN KEY("id_status_viatura") REFERENCES "status_viatura"("id");
ALTER TABLE
    "ocorrencia" ADD CONSTRAINT "ocorrencia_id_tipo_ocorrencia_foreign" FOREIGN KEY("id_tipo_ocorrencia") REFERENCES "tipo_ocorrencia"("id_tipo_ocorrencia");
ALTER TABLE
    "policial" ADD CONSTRAINT "policial_id_pessoa_foreign" FOREIGN KEY("id_pessoa") REFERENCES "pessoa"("id_pessoa");
ALTER TABLE
    "policial" ADD CONSTRAINT "policial_posto_foreign" FOREIGN KEY("posto") REFERENCES "posto_policial"("id");
ALTER TABLE
    "relatorio_ocorrencia" ADD CONSTRAINT "relatorio_ocorrencia_id_policial_viatura_foreign" FOREIGN KEY("id_policial_viatura") REFERENCES "policial_viatura"("id_policial_viatura");
ALTER TABLE
    "ocorrencia" ADD CONSTRAINT "ocorrencia_id_pessoa_foreign" FOREIGN KEY("id_pessoa") REFERENCES "pessoa"("id_pessoa");
ALTER TABLE
    "rota" ADD CONSTRAINT "rota_id_policial_viatura_foreign" FOREIGN KEY("id_policial_viatura") REFERENCES "policial_viatura"("id_policial_viatura");
ALTER TABLE
    "relatorio_ocorrencia" ADD CONSTRAINT "relatorio_ocorrencia_id_ocorrencia_foreign" FOREIGN KEY("id_ocorrencia") REFERENCES "ocorrencia"("id_ocorrencia");
ALTER TABLE
    "ocorrencia" ADD CONSTRAINT "ocorrencia_id_status_ocorrencia_foreign" FOREIGN KEY("id_status_ocorrencia") REFERENCES "status_ocorrencia"("id_status_ocorrencia");