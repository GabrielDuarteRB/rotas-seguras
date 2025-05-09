import { Sequelize } from 'sequelize-typescript';
import { Ocorrencia } from '../src/ocorrencias/entities/ocorrencia.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'db-policial',
        port: 5432,
        username: 'root',
        password: 'password',
        database: 'policial',
      });
      sequelize.addModels([Ocorrencia]);
      await sequelize.sync();
      return sequelize;
    },
  },
];

