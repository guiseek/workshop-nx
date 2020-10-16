import * as mongoose from 'mongoose';

const mongoConfig = { useNewUrlParser: true, useUnifiedTopology: true };

export const databaseProviders = [
  {
    provide: 'DB_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect('mongodb://ubuntu.gui/workshop-nx', mongoConfig),
  },
];
