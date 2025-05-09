import { Ocorrencia } from "./entities/ocorrencia.entity";

export const ocorrenciasProviders = [
    {
        provide: 'OCORRENCIA_REPOSITORY',
        useValue: Ocorrencia,
    },
    ];
